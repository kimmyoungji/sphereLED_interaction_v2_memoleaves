import * as THREE from 'three';

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
  const background = opts.background ?? 0xf0f2f5;
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

  // Sphere with grid texture (ported from legacy)
  const geometry = new THREE.SphereGeometry(1, 32, 32);

  const canvas = document.createElement('canvas');
  const size = 128;
  canvas.width = size * 2;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#2c3e50';
  ctx.fillRect(0, 0, size * 2, size);
  ctx.strokeStyle = '#3498db';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 10; i++) {
    const x = (i / 10) * size * 2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
  }
  for (let i = 0; i <= 5; i++) {
    const y = (i / 5) * size;
    ctx.beginPath();
    ctx.arc(size, size / 2, y / 2, 0, Math.PI * 2);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1
  });

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

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
    // Example mapping: stronger breath -> clearer sphere
    // opacity in [0.3 .. 1.0] where 1.0 is no dust
    const alpha = 0.3 + 0.7 * (1 - Math.max(0, Math.min(1, intensity)));
    material.opacity = alpha;
    material.needsUpdate = true;
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
    if (renderer.domElement.parentElement === container) {
      container.removeChild(renderer.domElement);
    }
  }

  return { setRotation, setOpacity, setCursor, destroy };
}