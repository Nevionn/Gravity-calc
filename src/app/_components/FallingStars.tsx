"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      speedY: 0.1 + Math.random() * 0.15,
    }));

    const render = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#ffffff";
      for (let star of stars) {
        star.y += star.speedY;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        background: "black",
      }}
    />
  );
}
