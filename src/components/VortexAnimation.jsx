import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   VortexAnimation — built with pure CSS 3D transforms + SVG + keyframes
   No Three.js. No images. Everything is code.
───────────────────────────────────────────────────────────────────────────── */

const VortexAnimation = () => {
  return (
    <div className="relative w-[520px] h-[520px] select-none">

      {/* ── CSS Keyframe styles injected inline ── */}
      <style>{`
        @keyframes orbit-cw  { from { transform: rotateZ(0deg);   } to { transform: rotateZ(360deg);  } }
        @keyframes orbit-ccw { from { transform: rotateZ(0deg);   } to { transform: rotateZ(-360deg); } }
        @keyframes float-y   { 0%,100% { transform: translateY(0px);   } 50% { transform: translateY(-14px); } }
        @keyframes float-y2  { 0%,100% { transform: translateY(-8px);  } 50% { transform: translateY(8px);   } }
        @keyframes float-y3  { 0%,100% { transform: translateY(6px);   } 50% { transform: translateY(-10px); } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.18; } 50% { opacity: 0.38; } }
        @keyframes spin-slow  { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        @keyframes dot-orbit  { from { transform: rotateZ(0deg) translateX(160px) rotateZ(0deg);   }
                                 to   { transform: rotateZ(360deg) translateX(160px) rotateZ(-360deg); } }
        @keyframes dot-orbit2 { from { transform: rotateZ(0deg) translateX(126px) rotateZ(0deg);   }
                                 to   { transform: rotateZ(-360deg) translateX(126px) rotateZ(360deg); } }
        @keyframes dot-orbit3 { from { transform: rotateZ(90deg) translateX(98px) rotateZ(-90deg);   }
                                 to   { transform: rotateZ(450deg) translateX(98px) rotateZ(-450deg); } }
        @keyframes cube-spin  { from { transform: rotateX(0deg) rotateY(0deg);   }
                                 to   { transform: rotateX(360deg) rotateY(360deg); } }
      `}</style>

      {/* ── Soft radial glow behind everything ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{ width: 320, height: 320, background: 'radial-gradient(ellipse, rgba(211,47,47,0.12) 0%, rgba(0,229,255,0.06) 50%, transparent 75%)', borderRadius: '50%' }} />
      </div>

      {/* ── ORBIT RINGS — SVG ellipses with CSS 3D perspective tilt ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: 800 }}>

        {/* Ring 1 — Cyan, tilted ~68deg, slowest */}
        <div style={{
          position: 'absolute',
          width: 340, height: 340,
          transform: 'rotateX(68deg) rotateZ(0deg)',
          animation: 'orbit-cw 14s linear infinite',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid rgba(0,229,255,0.85)',
            boxShadow: '0 0 8px 2px rgba(0,229,255,0.35), inset 0 0 8px 2px rgba(0,229,255,0.15)',
            filter: 'blur(0.5px)',
          }} />
          {/* Traveling dot */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 10, height: 10, marginLeft: -5, marginTop: -5,
            animation: 'dot-orbit 14s linear infinite',
            borderRadius: '50%',
            background: '#00E5FF',
            boxShadow: '0 0 12px 4px #00E5FF',
          }} />
        </div>

        {/* Ring 2 — Red, tilted ~72deg with rotation offset, medium speed */}
        <div style={{
          position: 'absolute',
          width: 280, height: 280,
          transform: 'rotateX(72deg) rotateY(40deg)',
          animation: 'orbit-ccw 10s linear infinite',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2.5px solid rgba(211,47,47,0.85)',
            boxShadow: '0 0 10px 3px rgba(211,47,47,0.4), inset 0 0 10px 2px rgba(211,47,47,0.15)',
            filter: 'blur(0.5px)',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 8, height: 8, marginLeft: -4, marginTop: -4,
            animation: 'dot-orbit2 10s linear infinite',
            borderRadius: '50%',
            background: '#D32F2F',
            boxShadow: '0 0 12px 4px #D32F2F',
          }} />
        </div>

        {/* Ring 3 — Yellow, tilted ~60deg, fastest */}
        <div style={{
          position: 'absolute',
          width: 220, height: 220,
          transform: 'rotateX(60deg) rotateY(-30deg)',
          animation: 'orbit-cw 7s linear infinite',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '1.5px solid rgba(217,160,27,0.8)',
            boxShadow: '0 0 8px 2px rgba(217,160,27,0.35)',
            filter: 'blur(0.5px)',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 7, height: 7, marginLeft: -3.5, marginTop: -3.5,
            animation: 'dot-orbit3 7s linear infinite',
            borderRadius: '50%',
            background: '#D9A01B',
            boxShadow: '0 0 10px 3px #D9A01B',
          }} />
        </div>

        {/* Ring 4 — Outer faint cyan */}
        <div style={{
          position: 'absolute',
          width: 420, height: 420,
          transform: 'rotateX(74deg) rotateY(15deg)',
          animation: 'orbit-ccw 20s linear infinite',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '1.5px solid rgba(0,229,255,0.3)',
            boxShadow: '0 0 6px 1px rgba(0,229,255,0.15)',
            filter: 'blur(1px)',
          }} />
        </div>
      </div>

      {/* ── ISOMETRIC GLASS PANEL CLUSTER — CSS 3D ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: 900, perspectiveOrigin: '50% 45%' }}>
        <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(18deg) rotateY(-28deg)', position: 'relative', width: 220, height: 220 }}>

          {/* Panel 1 — Back left, tall vertical, CYAN border */}
          <div style={{
            position: 'absolute', left: -95, top: -70,
            width: 140, height: 180,
            background: 'linear-gradient(135deg, rgba(5,12,28,0.92) 0%, rgba(8,18,38,0.85) 100%)',
            border: '1px solid rgba(0,229,255,0.7)',
            boxShadow: '0 0 20px rgba(0,229,255,0.2), inset 0 0 20px rgba(0,229,255,0.04)',
            borderRadius: 8,
            transform: 'rotateY(20deg)',
            backdropFilter: 'blur(4px)',
            animation: 'float-y 4s ease-in-out infinite',
          }}>
            {/* Header bar */}
            <div style={{ height: 6, margin: '10px 10px 0', background: 'rgba(0,229,255,0.5)', borderRadius: 3 }} />
            {/* Content lines */}
            {[90, 65, 80, 55, 70, 45].map((w, i) => (
              <div key={i} style={{ height: 4, margin: `${i === 0 ? 10 : 8}px 10px 0`, width: `${w}%`, background: 'rgba(0,229,255,0.18)', borderRadius: 2 }} />
            ))}
            {/* Corner dots */}
            {[[8,8],[8,'auto'],[8,8],[8,'auto']].map(([t, b], i) => (
              <div key={i} style={{
                position: 'absolute', width: 5, height: 5, borderRadius: '50%',
                background: '#00E5FF', boxShadow: '0 0 8px #00E5FF',
                top: i < 2 ? 8 : 'auto', bottom: i >= 2 ? 8 : 'auto',
                left: i % 2 === 0 ? 8 : 'auto', right: i % 2 === 1 ? 8 : 'auto',
              }} />
            ))}
          </div>

          {/* Panel 2 — Back right, wide vertical, RED border */}
          <div style={{
            position: 'absolute', right: -90, top: -50,
            width: 150, height: 160,
            background: 'linear-gradient(135deg, rgba(28,5,5,0.92) 0%, rgba(20,8,8,0.88) 100%)',
            border: '1px solid rgba(211,47,47,0.7)',
            boxShadow: '0 0 20px rgba(211,47,47,0.2), inset 0 0 20px rgba(211,47,47,0.04)',
            borderRadius: 8,
            transform: 'rotateY(-20deg)',
            backdropFilter: 'blur(4px)',
            animation: 'float-y2 4.5s ease-in-out infinite',
          }}>
            <div style={{ height: 6, margin: '10px 10px 0', background: 'rgba(211,47,47,0.5)', borderRadius: 3 }} />
            {[85, 60, 75, 50, 68].map((w, i) => (
              <div key={i} style={{ height: 4, margin: `${i === 0 ? 10 : 8}px 10px 0`, width: `${w}%`, background: 'rgba(211,47,47,0.18)', borderRadius: 2 }} />
            ))}
            {[[8,8],[8,'auto'],[8,8],[8,'auto']].map(([t, b], i) => (
              <div key={i} style={{
                position: 'absolute', width: 5, height: 5, borderRadius: '50%',
                background: '#D32F2F', boxShadow: '0 0 8px #D32F2F',
                top: i < 2 ? 8 : 'auto', bottom: i >= 2 ? 8 : 'auto',
                left: i % 2 === 0 ? 8 : 'auto', right: i % 2 === 1 ? 8 : 'auto',
              }} />
            ))}
          </div>

          {/* Panel 3 — Front center, FLAT horizontal (like laptop base), CYAN */}
          <div style={{
            position: 'absolute', left: -80, bottom: -90,
            width: 220, height: 110,
            background: 'linear-gradient(135deg, rgba(5,12,28,0.9) 0%, rgba(5,18,38,0.82) 100%)',
            border: '1px solid rgba(0,229,255,0.55)',
            boxShadow: '0 0 25px rgba(0,229,255,0.15), inset 0 0 15px rgba(0,229,255,0.04)',
            borderRadius: 8,
            transform: 'rotateX(60deg)',
            backdropFilter: 'blur(4px)',
            animation: 'float-y3 5s ease-in-out infinite',
          }}>
            <div style={{ height: 5, margin: '8px 10px 0', background: 'rgba(0,229,255,0.4)', borderRadius: 3 }} />
            {[80, 55, 70].map((w, i) => (
              <div key={i} style={{ height: 3, margin: `${i === 0 ? 8 : 6}px 10px 0`, width: `${w}%`, background: 'rgba(0,229,255,0.15)', borderRadius: 2 }} />
            ))}
          </div>

          {/* Panel 4 — Small back-top, YELLOW */}
          <div style={{
            position: 'absolute', left: -10, top: -100,
            width: 100, height: 90,
            background: 'linear-gradient(135deg, rgba(20,15,5,0.92) 0%, rgba(25,18,5,0.85) 100%)',
            border: '1px solid rgba(217,160,27,0.65)',
            boxShadow: '0 0 16px rgba(217,160,27,0.18)',
            borderRadius: 8,
            transform: 'rotateY(-5deg) rotateX(-5deg)',
            backdropFilter: 'blur(4px)',
            animation: 'float-y 5.5s ease-in-out infinite 0.5s',
          }}>
            <div style={{ height: 4, margin: '8px 8px 0', background: 'rgba(217,160,27,0.5)', borderRadius: 2 }} />
            {[80, 55, 70].map((w, i) => (
              <div key={i} style={{ height: 3, margin: '6px 8px 0', width: `${w}%`, background: 'rgba(217,160,27,0.18)', borderRadius: 2 }} />
            ))}
          </div>

          {/* ── Center Logo (flat, in center of cluster) ── */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 70, height: 70,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Pulsing glow disc */}
            <div style={{
              position: 'absolute', width: 80, height: 80, borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(211,47,47,0.35) 0%, transparent 70%)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <img src="/WebsiteLogo.png" alt="JSHub" style={{ width: 56, height: 56, objectFit: 'contain', position: 'relative', zIndex: 1 }} />
          </div>

        </div>
      </div>

      {/* ── Floating decorative shapes in outer space ── */}

      {/* Top-right cube */}
      <div style={{
        position: 'absolute', top: 30, right: 30,
        width: 28, height: 28,
        border: '1.5px solid rgba(0,229,255,0.7)',
        boxShadow: '0 0 8px rgba(0,229,255,0.3)',
        borderRadius: 3,
        animation: 'float-y 3.5s ease-in-out infinite, cube-spin 8s linear infinite',
        transformStyle: 'preserve-3d',
        transform: 'perspective(200px)',
      }} />

      {/* Bottom-left cube */}
      <div style={{
        position: 'absolute', bottom: 60, left: 20,
        width: 22, height: 22,
        border: '1.5px solid rgba(211,47,47,0.7)',
        boxShadow: '0 0 8px rgba(211,47,47,0.3)',
        borderRadius: 2,
        animation: 'float-y2 4s ease-in-out infinite, cube-spin 10s linear infinite reverse',
        transformStyle: 'preserve-3d',
        transform: 'perspective(200px)',
      }} />

      {/* Right-side small cube */}
      <div style={{
        position: 'absolute', top: '55%', right: 15,
        width: 18, height: 18,
        border: '1.5px solid rgba(217,160,27,0.7)',
        boxShadow: '0 0 8px rgba(217,160,27,0.3)',
        borderRadius: 2,
        animation: 'float-y3 3s ease-in-out infinite, cube-spin 12s linear infinite',
        transformStyle: 'preserve-3d',
        transform: 'perspective(200px)',
      }} />

      {/* Top-left floating dot */}
      <div style={{
        position: 'absolute', top: 80, left: 40,
        width: 8, height: 8, borderRadius: '50%',
        background: '#00E5FF', boxShadow: '0 0 10px #00E5FF',
        animation: 'float-y 4s ease-in-out infinite 1s',
      }} />

      {/* Bottom-right floating dot */}
      <div style={{
        position: 'absolute', bottom: 80, right: 60,
        width: 6, height: 6, borderRadius: '50%',
        background: '#D32F2F', boxShadow: '0 0 8px #D32F2F',
        animation: 'float-y2 3.5s ease-in-out infinite 0.5s',
      }} />

    </div>
  );
};

export default VortexAnimation;
