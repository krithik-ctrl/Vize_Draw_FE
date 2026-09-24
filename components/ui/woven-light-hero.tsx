"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * WovenCanvas — an interactive "woven light" particle field.
 *
 * Adapted from the woven-light-hero community component for VizeDraw:
 *  - particles are tinted to the brand teal range (not rainbow)
 *  - the canvas is bound to its parent container (not the full window),
 *    so it can sit inside the hero frame and stay responsive
 *  - the per-frame loop is allocation-free (no new THREE.Vector3 per particle),
 *    which keeps 36k points smooth
 *  - honours prefers-reduced-motion (drops the pointer forces + spin)
 */
export const WovenCanvas = ({
  className = "",
  alignX = 0,
}: {
  className?: string;
  /** Horizontal offset of the weave in world units (positive = right). */
  alignX?: number;
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getSize = () => ({
      w: mount.clientWidth || 1,
      h: mount.clientHeight || 1,
    });
    let { w, h } = getSize();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, w / h, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    // --- Woven silk geometry (torus knot sampled into a particle field) ---
    const particleCount = 36000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    const knot = new THREE.TorusKnotGeometry(1.5, 0.5, 220, 32);
    const knotPos = knot.attributes.position;
    const c = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const v = i % knotPos.count;
      const x = knotPos.getX(v);
      const y = knotPos.getY(v);
      const z = knotPos.getZ(v);
      const i3 = i * 3;
      positions[i3] = originalPositions[i3] = x;
      positions[i3 + 1] = originalPositions[i3 + 1] = y;
      positions[i3 + 2] = originalPositions[i3 + 2] = z;

      // Brand teal → cyan range with a few brighter strands.
      const hue = 0.49 + Math.random() * 0.06; // ~176°–198°
      const sat = 0.45 + Math.random() * 0.28;
      const lit = 0.42 + Math.random() * 0.32;
      c.setHSL(hue, sat, lit);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }
    knot.dispose();

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const points = new THREE.Points(geometry, material);
    points.position.x = alignX;
    scene.add(points);

    // --- Pointer (relative to the canvas, not the window) ---
    const mouse = new THREE.Vector2(0, 0);
    let pointerActive = false;
    const onPointerMove = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      pointerActive = true;
    };
    const onPointerLeave = () => {
      pointerActive = false;
    };
    if (!reduceMotion) {
      mount.addEventListener("pointermove", onPointerMove);
      mount.addEventListener("pointerleave", onPointerLeave);
    }

    const clock = new THREE.Clock();
    const RADIUS = 1.25;
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!reduceMotion) {
        const mwx = mouse.x * 3 - alignX;
        const mwy = mouse.y * 3;
        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3;
          const iy = ix + 1;
          const iz = ix + 2;
          const px = positions[ix];
          const py = positions[iy];
          const pz = positions[iz];

          let vx = velocities[ix];
          let vy = velocities[iy];
          let vz = velocities[iz];

          if (pointerActive) {
            const dx = px - mwx;
            const dy = py - mwy;
            const dz = pz;
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < RADIUS * RADIUS && d2 > 1e-6) {
              const d = Math.sqrt(d2);
              const force = ((RADIUS - d) * 0.012) / d;
              vx += dx * force;
              vy += dy * force;
              vz += dz * force;
            }
          }

          // ease back to the woven shape
          vx += (originalPositions[ix] - px) * 0.0025;
          vy += (originalPositions[iy] - py) * 0.0025;
          vz += (originalPositions[iz] - pz) * 0.0025;

          // damping
          vx *= 0.95;
          vy *= 0.95;
          vz *= 0.95;

          positions[ix] = px + vx;
          positions[iy] = py + vy;
          positions[iz] = pz + vz;
          velocities[ix] = vx;
          velocities[iy] = vy;
          velocities[iz] = vz;
        }
        geometry.attributes.position.needsUpdate = true;
      }

      points.rotation.y = t * (reduceMotion ? 0.015 : 0.05);
      points.rotation.x = Math.sin(t * 0.12) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    // --- Responsive to container size ---
    const resize = () => {
      const s = getSize();
      w = s.w;
      h = s.h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerleave", onPointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} aria-hidden />;
};

/**
 * WovenLightHero — full-bleed standalone showcase of the effect.
 * (Brand-neutral; the live site embeds <WovenCanvas /> inside the hero frame.)
 */
export const WovenLightHero = () => (
  <div className="relative h-screen w-full overflow-hidden bg-ink">
    <WovenCanvas />
  </div>
);

export default WovenCanvas;
