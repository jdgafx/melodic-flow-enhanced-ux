"use client";

import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Mouse state
    let mouseX = -1000;
    let mouseY = -1000;

    // Configuration
    const particleCount = Math.min(Math.floor((width * height) / 10000), 120);
    const connectionDistance = 150;
    const mouseDistance = 250;
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
    }

    const particles: Particle[] = [];

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.2, 
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 0.5,
          color: `rgba(148, 163, 184, ${Math.random() * 0.3 + 0.1})` 
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
       mouseX = -1000;
       mouseY = -1000;
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect to Mouse
        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseDistance) {
            ctx.beginPath();
            // Dynamic color based on distance
            const alpha = 0.5 * (1 - distMouse / mouseDistance);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; 
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            
            // Magnetic effect
            if (distMouse > 50) { 
               p.x += dxMouse * 0.015;
               p.y += dyMouse * 0.015;
            }
        }

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(148, 163, 184, ${0.08 * (1 - dist / connectionDistance)})`; 
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    init();
    render();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#050508]">
        {/* Background Gradients for Depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_15%,_rgba(76,29,149,0.06),_rgba(5,5,8,0))]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_85%,_rgba(59,130,246,0.06),_rgba(5,5,8,0))]" />
        
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default AnimatedBackground;