"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface Node {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  tag: string;
}

const TAGS = ["API", "REST", "DB", "UI", "TS", "SQL", "CI", "Auth", "Edge", "Node"];

function createNodes(count: number): Node[] {
  // deterministic-ish layout in a 0..100 box
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    const x = (i * 37.7 + 13) % 100;
    const y = (i * 61.3 + 29) % 100;
    nodes.push({
      x,
      y,
      r: 0.9 + ((i * 7) % 5) * 0.35,
      vx: (i % 2 === 0 ? 1 : -1) * (0.06 + (i % 3) * 0.03),
      vy: (i % 3 === 0 ? 1 : -1) * (0.05 + (i % 4) * 0.02),
      tag: TAGS[i % TAGS.length],
    });
  }
  return nodes;
}

export function HeroNodeField({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [nodes, setNodes] = useState<Node[]>(() => createNodes(14));
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(40, now - last) / 16.7;
      last = now;
      setNodes((prev) =>
        prev.map((n) => {
          let x = n.x + n.vx * dt;
          let y = n.y + n.vy * dt;
          let vx = n.vx;
          let vy = n.vy;
          if (x < 4 || x > 96) vx = -vx;
          if (y < 4 || y > 96) vy = -vy;
          x = Math.max(4, Math.min(96, x));
          y = Math.max(4, Math.min(96, y));
          return { ...n, x, y, vx, vy };
        })
      );
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setMouse({ x, y });
  }

  // connections: link each node to its 2 nearest
  const lines: Array<[Node, Node, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => ({ j, d: Math.hypot(nodes[i].x - n.x, nodes[i].y - n.y) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    dists.forEach(({ j, d }) => {
      if (i < j) lines.push([nodes[i], nodes[j], d]);
    });
  }

  // parallax offset toward mouse
  const px = (mouse.x - 50) / 50;
  const py = (mouse.y - 50) / 50;

  return (
    <div
      onMouseMove={onMove}
      className={`relative h-full w-full ${className ?? ""}`}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={{ x: px * 8, y: py * 8 }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <defs>
          <linearGradient id="hf-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2b5bff" />
            <stop offset="1" stopColor="#7b5bff" />
          </linearGradient>
        </defs>

        {lines.map(([a, b, d], i) => {
          const opacity = Math.max(0.04, 0.32 - d / 200);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#hf-line)"
              strokeWidth={0.25}
              strokeOpacity={opacity}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 1.6}
              fill="#2b5bff"
              fillOpacity={0.08}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={i % 4 === 0 ? "#22d3ee" : i % 3 === 0 ? "#7b5bff" : "#4f7bff"}
              fillOpacity={0.9}
            />
          </g>
        ))}
      </motion.svg>

      {/* floating labelled chip on the cursor */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute left-0 top-0 hidden md:block"
          animate={{ x: mouse.x + "%", y: mouse.y + "%" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          style={{ translateX: "-50%", translateY: "-50%" }}
        >
          <span className="rounded-full border border-electric/40 bg-base/60 px-2.5 py-1 font-mono text-[0.6rem] tracking-widest text-cyan backdrop-blur">
            SYS·LINK
          </span>
        </motion.div>
      )}
    </div>
  );
}
