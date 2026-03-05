'use client';

import { useEffect, useRef } from 'react';

type ParticleCanvasProps = {
    className?: string;
};

export default function ParticleCanvas({ className = '' }: ParticleCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Constants for colors
        const CORE_COLOR = '#c084fc';
        const FRAG_COLORS = ['#3463ac', '#7e22ce', '#a855f7', '#60a5fa', '#ffffff'];

        let animationFrameId: number;

        // Define objects
        let core = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            radius: 6,
        };

        const fragments: Array<{
            x: number; y: number; vx: number; vy: number; radius: number; color: string; life: number; maxLife: number;
        }> = [];

        const spawnExplosion = (x: number, y: number) => {
            const count = Math.floor(Math.random() * 20) + 30; // 30-50 fragments
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 6 + 2;
                fragments.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    radius: Math.random() * 2 + 1,
                    color: FRAG_COLORS[Math.floor(Math.random() * FRAG_COLORS.length)],
                    maxLife: Math.random() * 40 + 20,
                    life: Math.random() * 40 + 20
                });
            }
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                core.x = canvas.width / 2;
                core.y = canvas.height / 2;
                // Give it a kick start
                core.vx = (Math.random() - 0.5) * 8;
                core.vy = (Math.random() - 0.5) * 8;
            }
        };

        window.addEventListener('resize', resize);
        // Initial setup
        const p = canvas.parentElement;
        if (p) {
            canvas.width = p.clientWidth;
            canvas.height = p.clientHeight;
            core.x = canvas.width / 2;
            core.y = canvas.height / 2;
        }

        const animate = () => {
            // Draw dark background with trail effect
            ctx.fillStyle = 'rgba(10, 22, 40, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update core
            core.x += core.vx;
            core.y += core.vy;

            // Core collision logic
            let hit = false;
            let explosionX = core.x;
            let explosionY = core.y;

            if (core.x - core.radius <= 0) {
                core.x = core.radius;
                core.vx *= -1;
                hit = true;
                explosionX = 0;
            } else if (core.x + core.radius >= canvas.width) {
                core.x = canvas.width - core.radius;
                core.vx *= -1;
                hit = true;
                explosionX = canvas.width;
            }

            if (core.y - core.radius <= 0) {
                core.y = core.radius;
                core.vy *= -1;
                hit = true;
                explosionY = 0;
            } else if (core.y + core.radius >= canvas.height) {
                core.y = canvas.height - core.radius;
                core.vy *= -1;
                hit = true;
                explosionY = canvas.height;
            }

            if (hit) {
                spawnExplosion(explosionX, explosionY);
                // slight scatter on bounce
                core.vx += (Math.random() - 0.5);
                core.vy += (Math.random() - 0.5);
            }

            // Draw core
            ctx.beginPath();
            ctx.arc(core.x, core.y, core.radius, 0, Math.PI * 2);
            ctx.fillStyle = CORE_COLOR;
            ctx.shadowBlur = 15;
            ctx.shadowColor = CORE_COLOR;
            ctx.fill();

            // Update and draw fragments
            for (let i = fragments.length - 1; i >= 0; i--) {
                const f = fragments[i];
                f.x += f.vx;
                f.y += f.vy;
                f.vx *= 0.92; // friction
                f.vy *= 0.92;
                f.life--;

                if (f.life <= 0) {
                    fragments.splice(i, 1);
                } else {
                    ctx.beginPath();
                    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
                    ctx.globalAlpha = f.life / f.maxLife;
                    ctx.fillStyle = f.color;
                    ctx.shadowBlur = 5;
                    ctx.shadowColor = f.color;
                    ctx.fill();
                }
            }

            // Reset context globals
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
        />
    );
}
