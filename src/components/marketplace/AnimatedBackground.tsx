const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Base gradient */}
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    
    {/* Speed lines */}
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute h-[1px] animate-speed-line"
        style={{
          top: `${8 + i * 9}%`,
          left: "-10%",
          width: `${60 + i * 15}px`,
          background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${0.08 + i * 0.03}), transparent)`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${3 + i * 0.4}s`,
        }}
      />
    ))}

    {/* Glow orb */}
    <div
      className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
      style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)" }}
    />
  </div>
);

export default AnimatedBackground;
