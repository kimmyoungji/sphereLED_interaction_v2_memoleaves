// Global BGM manager using the Web Audio API.
// - Creates a single AudioContext and GainNode for master volume control
// - Loads the BGM file once into an AudioBuffer
// - Starts a looping AudioBufferSourceNode on first user interaction (autoplay policies)
// - Supports master volume via setVolume() and ducking (temporary attenuation) via setDuck()
// - Ducking is used when a phase video plays so video audio is prominent while BGM stays in the background
import bgmUrl from '../assets/bgm/Udio_Infinite Reverb Tail ext v2.2.mp3';

// Web Audio primitives (lazily created)
let ctx: AudioContext | null = null;                // singleton AudioContext
let gain: GainNode | null = null;                   // master output gain (volume * duck)
let source: AudioBufferSourceNode | null = null;    // looping source node for the BGM
let buffer: AudioBuffer | null = null;              // decoded BGM audio data (cached)

// Runtime state
let volume = 1;   // master volume [0..1]
let duck = 1;     // ducking factor [0..1], multiplied with volume
let started = false; // whether playback graph has been started at least once

/**
 * Ensure the AudioContext and master GainNode exist and are wired.
 * Does not start playback; used by other functions as a prerequisite.
 */
function ensureContext() {
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (!gain && ctx) {
    gain = ctx.createGain();
    gain.gain.value = volume * duck; // initialize gain to current combined level
    gain.connect(ctx.destination);   // route to output
  }
}

/**
 * Fetch and decode the BGM file once, cache as an AudioBuffer.
 */
async function loadBuffer(url: string) {
  if (!ctx) ensureContext();
  if (buffer) return buffer; // already decoded
  const res = await fetch(url);
  const arr = await res.arrayBuffer();
  buffer = await ctx!.decodeAudioData(arr);
  return buffer;
}

/**
 * Stop and disconnect the current buffer source if any.
 */
function stopSource() {
  try { source?.stop(); } catch {}
  source?.disconnect();
  source = null;
}

/**
 * Recompute and apply the effective gain (volume * duck).
 */
function updateGain() {
  if (gain) gain.gain.value = volume * duck;
}

/**
 * Create and start the looping BGM source if not already started.
 * Also resumes the AudioContext (required on first user gesture on many platforms).
 */
export async function ensureStarted() {
  ensureContext();
  if (!ctx) return;
  // Resume context if it is suspended (common before first user interaction)
  if (ctx.state === 'suspended') await ctx.resume();
  // if (!started) {
    await loadBuffer(bgmUrl);
    stopSource();
    source = ctx.createBufferSource();
    source.buffer = buffer!;
    source.loop = true;
    source.connect(gain!);
    source.start(0);
    started = true;
  // }
}

/**
 * Set master BGM volume [0..1]. Multiplied with ducking.
 */
export function setVolume(v: number) {
  volume = Math.max(0, Math.min(1, v));
  updateGain();
}

/**
 * Set ducking factor [0..1]. 1 = no duck, 0.25 = 25% of master volume, etc.
 * Useful to reduce BGM while foreground media (e.g., videos) are playing.
 */
export function setDuck(d: number) {
  duck = Math.max(0, Math.min(1, d));
  updateGain();
}

/**
 * Introspection helper for debugging/diagnostics.
 */
export function getState() {
  return { started, volume, duck, ctxState: ctx?.state ?? 'none' };
}

