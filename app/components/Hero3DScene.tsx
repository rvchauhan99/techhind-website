"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const width = window.innerWidth;
    const isMobile = width < 1024;
    const isSmallDesktop = width >= 1024 && width < 1360;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / Math.max(1, container.clientHeight),
      0.1,
      100
    );
    camera.position.set(0, 2.3, 8.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      setFallback(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const sunLight = new THREE.DirectionalLight(0xffd977, 1.15);
    sunLight.position.set(4, 6, 3);
    const fillLight = new THREE.DirectionalLight(0x4f7aad, 0.48);
    fillLight.position.set(-3, 1, 2);
    scene.add(ambientLight, sunLight, fillLight);

    const objects: THREE.Object3D[] = [];
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#234f86"),
      metalness: 0.45,
      roughness: 0.28,
      transparent: true,
      opacity: 0.9,
    });
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#3b4b61"),
      metalness: 0.35,
      roughness: 0.45,
      transparent: true,
      opacity: 0.75,
    });
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#ffd65c"),
      metalness: 0.1,
      roughness: 0.5,
      transparent: true,
      opacity: 0.32,
    });

    const sun = new THREE.Mesh(new THREE.SphereGeometry(0.76, 28, 28), glowMaterial);
    sun.position.set(2.25, 2.55, -2.4);
    scene.add(sun);
    objects.push(sun);

    const sunHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1.9, 28, 28),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#ffd65c"),
        transparent: true,
        opacity: 0.22,
      })
    );
    sunHalo.position.copy(sun.position);
    scene.add(sunHalo);
    objects.push(sunHalo);

    const rowCount = isMobile ? 3 : isSmallDesktop ? 4 : 5;
    const colCount = isMobile ? 4 : isSmallDesktop ? 5 : 6;
    for (let r = 0; r < rowCount; r += 1) {
      for (let c = 0; c < colCount; c += 1) {
        const panel = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.42), panelMaterial);
        panel.position.set(-2.2 + c * 0.84, -0.72 - r * 0.42, -0.4 - r * 0.28);
        panel.rotation.x = -1.02;
        panel.rotation.y = 0.08;
        scene.add(panel);
        objects.push(panel);

        const frame = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.46), frameMaterial);
        frame.position.copy(panel.position);
        frame.position.z -= 0.01;
        frame.rotation.copy(panel.rotation);
        scene.add(frame);
        objects.push(frame);
      }
    }

    const arcMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#1b365d"),
      transparent: true,
      opacity: 0.75,
    });
    const arcCount = isMobile ? 2 : isSmallDesktop ? 3 : 4;
    for (let i = 0; i < arcCount; i += 1) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.4 + i * 0.3, -0.6 - i * 0.12, 0.2),
        new THREE.Vector3(-0.7 + i * 0.22, 0.55 + i * 0.06, -0.5),
        new THREE.Vector3(1.85, 0.15 - i * 0.08, -1.55),
      ]);
      const points = curve.getPoints(36);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, arcMaterial);
      scene.add(line);
      objects.push(line);
    }

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const pageVisible = document.visibilityState === "visible";
      const elapsed = clock.getElapsedTime();
      if (pageVisible && !prefersReducedMotion) {
        sun.position.y = 2.55 + Math.sin(elapsed * 0.3) * 0.08;
        sun.rotation.y = elapsed * 0.18;
        sunHalo.scale.setScalar(1 + Math.sin(elapsed * 0.45) * 0.08);

        for (let i = 1; i < objects.length; i += 1) {
          const obj = objects[i];
          if (obj instanceof THREE.Line) {
            obj.position.x = Math.sin(elapsed * 0.45 + i) * 0.045;
          } else {
            obj.rotation.z += 0.0002;
          }
        }
      }

      if (pageVisible) {
        renderer.render(scene, camera);
      }
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / Math.max(1, container.clientHeight);
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 1024 ? 1.25 : 1.75));
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      objects.forEach((obj) => {
        if ((obj as THREE.Mesh).geometry) {
          (obj as THREE.Mesh).geometry.dispose();
        }
      });
      panelMaterial.dispose();
      frameMaterial.dispose();
      glowMaterial.dispose();
      arcMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (fallback) {
    return (
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_76%_20%,rgba(255,214,92,0.32),transparent_30%),radial-gradient(circle_at_62%_58%,rgba(0,130,59,0.18),transparent_38%),radial-gradient(circle_at_86%_38%,rgba(27,54,93,0.2),transparent_42%)]" />
    );
  }

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
