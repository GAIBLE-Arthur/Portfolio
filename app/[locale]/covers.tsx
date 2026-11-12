import type { Entry } from "@/data/content";

// Small illustrated covers, one per project, drawn in SVG so they stay
// sharp, light and on-palette. Colors come from the CSS tokens.
const A = "var(--color-accent)";
const W = "var(--color-warm)";

function Thesis() {
  const nodes: [number, number][] = [
    [160, 80], [80, 45], [240, 45], [70, 120], [250, 120], [160, 25], [160, 140],
  ];
  return (
    <>
      {nodes.slice(1).map(([x, y]) => (
        <line key={`${x}-${y}`} x1={160} y1={80} x2={x} y2={y} stroke={A} strokeOpacity={0.45} strokeWidth={2} />
      ))}
      <line x1={80} y1={45} x2={70} y2={120} stroke={A} strokeOpacity={0.25} strokeWidth={2} />
      <line x1={240} y1={45} x2={250} y2={120} stroke={A} strokeOpacity={0.25} strokeWidth={2} />
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 14 : 8} fill={i === 0 ? W : A} />
      ))}
    </>
  );
}

function Pharma() {
  const layers = [
    { y: 28, w: [40, 40, 40, 40, 40] },
    { y: 70, w: [90, 90] },
    { y: 112, w: [60, 60, 60] },
  ];
  return (
    <>
      {layers.map((layer, li) => {
        const total = layer.w.reduce((a, b) => a + b, 0) + (layer.w.length - 1) * 10;
        let x = 160 - total / 2;
        return layer.w.map((w, i) => {
          const rect = <rect key={`${li}-${i}`} x={x} y={layer.y} width={w} height={22} rx={4} fill={li === 2 ? W : A} fillOpacity={li === 0 ? 0.35 : li === 1 ? 0.6 : 1} />;
          x += w + 10;
          return rect;
        });
      })}
    </>
  );
}

function Electricity() {
  return (
    <>
      <path d="M20 130 L70 110 L120 115 L170 85 L220 70 L270 45 L300 35 L300 150 L20 150 Z" fill={A} fillOpacity={0.18} />
      <path d="M20 130 L70 110 L120 115 L170 85 L220 70 L270 45 L300 35" fill="none" stroke={A} strokeWidth={3} />
      <path d="M20 60 L70 70 L120 66 L170 85 L220 95 L270 108 L300 112" fill="none" stroke={W} strokeWidth={3} strokeDasharray="6 5" />
    </>
  );
}

function Vertex() {
  const pts: [number, number][] = [
    [50, 40], [95, 115], [140, 55], [185, 120], [230, 40], [270, 100], [120, 135], [215, 80],
  ];
  const edges: [number, number][] = [[0, 2], [1, 2], [2, 7], [3, 7], [4, 7], [5, 7], [1, 6], [3, 5]];
  const hot = new Set([3, 5, 7]);
  return (
    <>
      {edges.map(([a, b]) => {
        const p = pts[a]!;
        const q = pts[b]!;
        const isHot = hot.has(a) && hot.has(b);
        return <line key={`${a}-${b}`} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={isHot ? W : A} strokeOpacity={isHot ? 1 : 0.4} strokeWidth={isHot ? 3 : 2} />;
      })}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={hot.has(i) ? 10 : 7} fill={hot.has(i) ? W : A} />
      ))}
    </>
  );
}

function Aura() {
  const months = [0.9, 0.85, 0.75, 0.6, 0.5, 0.45, 0.4, 0.42, 0.5, 0.65, 0.8, 0.95];
  return (
    <>
      {months.map((m, i) => {
        const x = 30 + i * 22;
        const total = 120;
        const hydro = 30 + 25 * Math.sin(((i - 2) / 12) * Math.PI * 2);
        return (
          <g key={i}>
            <rect x={x} y={140 - total * m} width={14} height={total * m - hydro * m} fill={A} />
            <rect x={x} y={140 - hydro * m} width={14} height={hydro * m} fill={W} />
          </g>
        );
      })}
    </>
  );
}

const covers = { thesis: Thesis, pharma: Pharma, electricity: Electricity, vertex: Vertex, aura: Aura };

export function Cover({ name }: { name: NonNullable<Entry["cover"]> }) {
  const Draw = covers[name];
  return (
    <svg viewBox="0 0 320 160" className="block h-auto w-full bg-accent-soft" aria-hidden="true">
      <Draw />
    </svg>
  );
}
