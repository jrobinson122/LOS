import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundWrapper = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: 1, // Adjust if you want it above/below other content
  pointerEvents: 'none',
});

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, color: string) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
}

const CanvasStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let bounds: DOMRect | undefined;


    const updateStars = () => {
      const imageZone = document.getElementById("image-zone");
      if (!imageZone) return;

      bounds = imageZone.getBoundingClientRect();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;


      // Fallback if bounds are invalid
      if (!bounds || bounds.left === 0 || bounds.right === 0) {
        starsRef.current = Array.from({ length: 12 }).map(() => {
          return {
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: 10 + Math.random() * 15,
            color: "#ffd700",
            zone: { xMin: 0, xMax: canvasWidth, yMin: 0, yMax: canvasHeight },
          };
        });
        return;
      }
      const zoneMargin = 40; // how close they hover near the edge
      const safeZones = [
        {
          xMin: bounds.left - 120,
          xMax: bounds.left - zoneMargin,
          yMin: bounds.top,
          yMax: bounds.bottom,
        },
        {
          xMin: bounds.right + zoneMargin,
          xMax: bounds.right + 120,
          yMin: bounds.top,
          yMax: bounds.bottom,
        },
      ];

      starsRef.current = Array.from({ length: 14 }).map(() => {
        const zone = safeZones[Math.floor(Math.random() * safeZones.length)];
        return {
          x: zone.xMin + Math.random() * (zone.xMax - zone.xMin),
          y: zone.yMin + Math.random() * (zone.yMax - zone.yMin),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 10 + Math.random() * 15,
          color: "#ffd700",
          zone,
          twinklePhase: Math.random() * Math.PI * 2,
        };
      });
    };

    //setTimeout(updateStars, 100); // give layout time to happen
    updateStars(); // force run immediately

    // Also regenerate stars on resize
    window.addEventListener("resize", updateStars);
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        // Restrict to assigned zone
        if (star.x < star.zone.xMin || star.x > star.zone.xMax) star.vx *= -1;
        if (star.y < star.zone.yMin || star.y > star.zone.yMax) star.vy *= -1;


        const twinkle = 1.10 + 0.3 * Math.sin(Date.now() * 0.005 + star.twinklePhase);
        ctx.globalAlpha = twinkle;

        drawStar(ctx, star.x, star.y, 5, star.size, star.size / 2, star.color);

        ctx.globalAlpha = 1.0; // reset alpha
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("resize", updateStars);
    };
  }, []);

  return (
    <BackgroundWrapper>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </BackgroundWrapper>
  );
}

export default CanvasStars;
