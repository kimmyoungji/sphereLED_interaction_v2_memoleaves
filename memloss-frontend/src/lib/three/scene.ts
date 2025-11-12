import * as THREE from 'three';
import gardenSphereTexture from '../../assets/PhaseGardenAndDust/gardenSphereTexture.png';

export type GardenDustScene = {
  setRotation: (r: { yaw: number; pitch: number; roll?: number }) => void;
  setOpacity: (intensity: number) => void;
  setCursor: (cursor: string) => void;
  destroy: () => void;
};

type Options = {
  background?: number;
  smoothing?: number; // 0..1 (closer to 1 = faster)
};

export function createGardenDustScene(
  container: HTMLElement,
  opts: Options = {}
): GardenDustScene {
  const background = opts.background ?? 0x000000;
  const smoothing = opts.smoothing ?? 0.1;

  // Scene/camera/renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(background);

  const camera = new THREE.PerspectiveCamera(
    75,
    Math.max(1, container.clientWidth) / Math.max(1, container.clientHeight),
    0.1,
    1000
  );
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Sphere with texture
  const geometry = new THREE.SphereGeometry(1.3, 32, 32);
  // Load sphere texture from assets
  const texture = new THREE.TextureLoader().load(gardenSphereTexture);
  texture.colorSpace = THREE.SRGBColorSpace;
  // Improve texture clarity
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.FrontSide,
    transparent: true,
    opacity: 1
  });

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Additive glow sprite around the sphere (outer halo)
  const glowCanvas = document.createElement('canvas');
  const glowSize = 256;
  glowCanvas.width = glowSize;
  glowCanvas.height = glowSize;
  const gctx = glowCanvas.getContext('2d')!;
  const grad = gctx.createRadialGradient(
    glowSize / 2,
    glowSize / 2,
    glowSize * 0.18,
    glowSize / 2,
    glowSize / 2,
    glowSize * 0.55
  );
  grad.addColorStop(0, 'rgba(255,255,255,0.8)');
  grad.addColorStop(0.6, 'rgba(255,255,255,0.25)');
  grad.addColorStop(1, 'rgba(255,255,255,0.0)');
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, glowSize, glowSize);

  const glowTex = new THREE.CanvasTexture(glowCanvas);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  const glowMat = new THREE.SpriteMaterial({
    map: glowTex,
    color: 0xffffff,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0.0
  });
  const glow = new THREE.Sprite(glowMat);
  glow.scale.set(3.2, 3.2, 1); // larger halo
  scene.add(glow);

  // Secondary core glow (tighter, brighter center)
  const coreCanvas = document.createElement('canvas');
  const coreSize = 128;
  coreCanvas.width = coreSize;
  coreCanvas.height = coreSize;
  const cctx = coreCanvas.getContext('2d')!;
  const cgrad = cctx.createRadialGradient(
    coreSize / 2,
    coreSize / 2,
    coreSize * 0.05,
    coreSize / 2,
    coreSize / 2,
    coreSize * 0.45
  );
  cgrad.addColorStop(0, 'rgba(255,255,255,0.95)');
  cgrad.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  cgrad.addColorStop(1, 'rgba(255,255,255,0)');
  cctx.fillStyle = cgrad;
  cctx.fillRect(0, 0, coreSize, coreSize);

  const coreTex = new THREE.CanvasTexture(coreCanvas);
  coreTex.colorSpace = THREE.SRGBColorSpace;
  const coreGlowMat = new THREE.SpriteMaterial({
    map: coreTex,
    color: 0xffffff,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0.0
  });
  const coreGlow = new THREE.Sprite(coreGlowMat);
  coreGlow.scale.set(1.8, 1.8, 1);
  scene.add(coreGlow);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(1, 1, 1);
  scene.add(dir);

  // Rotation smoothing state
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };

  // External controls
  function setRotation(r: { yaw: number; pitch: number; roll?: number }) {
    // Map: yaw -> y, pitch -> x. Clamp pitch to avoid flipping.
    const maxPitch = Math.PI / 2;
    target.y = r.yaw;
    target.x = Math.max(-maxPitch, Math.min(maxPitch, r.pitch));
  }

  function setOpacity(intensity: number) {
    // Example mapping: intensity in [0..1]
    // sphere alpha in [0.6 .. 1.0] (higher intensity -> clearer but keep visibility high)
    const clamped = Math.max(0, Math.min(1, intensity));
    const alpha = 0.6 + 0.4 * (1 - clamped);
    material.opacity = alpha;
    material.needsUpdate = true;

    // Brightness increases strongly with intensity
    const outer = Math.min(1, Math.pow(clamped, 0.7) * 1.2);
    const inner = Math.min(1, Math.pow(clamped, 1.3) * 1.0);
    glowMat.opacity = outer;
    coreGlowMat.opacity = inner;
  }

  function setCursor(cursor: string) {
    if (container) {
      (container as HTMLElement).style.cursor = cursor;
    }
  }

  // Animation loop
  let rafId = 0;
  const tick = () => {
    current.x += (target.x - current.x) * smoothing;
    current.y += (target.y - current.y) * smoothing;
    sphere.rotation.x = current.x;
    sphere.rotation.y = current.y;
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  };
  tick();

  // Resize handling (prefer container-based)
  let ro: ResizeObserver | null = null;
  let onWindowResize: (() => void) | null = null;
  const hasResizeObserver = typeof (window as any).ResizeObserver !== 'undefined';
  if (hasResizeObserver) {
    ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        const w = Math.max(1, cr.width);
        const h = Math.max(1, cr.height);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    ro.observe(container);
  } else {
    onWindowResize = () => {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onWindowResize);
  }

  function destroy() {
    cancelAnimationFrame(rafId);
    ro?.disconnect();
    if (onWindowResize) {
      window.removeEventListener('resize', onWindowResize);
      onWindowResize = null;
    }
    renderer.dispose();
    texture.dispose();
    geometry.dispose();
    material.dispose();
    glowTex.dispose();
    glowMat.dispose();
    coreTex.dispose();
    coreGlowMat.dispose();
    if (renderer.domElement.parentElement === container) {
      container.removeChild(renderer.domElement);
    }
  }

  return { setRotation, setOpacity, setCursor, destroy };
}