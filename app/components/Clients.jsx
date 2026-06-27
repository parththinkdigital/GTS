"use client";

const Marquee = ({ symbols, direction = "left" }) => {
  const items = [...symbols, ...symbols, ...symbols, ...symbols];
  return (
    <div className="lolo-wrap">
      <div className={`lolo-track marquee-${direction}`}>
        {items.map((symbol, idx) => (
          <div className="lolo-item" key={idx}>
            <div className="lolo-symbol">{symbol}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Clients() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="clients-header">
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Partners
          </div>
          <h2>
            Trusted by Leading
            <br />
            Financial Institutions
          </h2>
          <p>
            Partnering with the world&apos;s most reputable financial institutions to drive
            digital transformation.
          </p>
        </div>

        <div className="clients-groups">
          <div className="clients-group">
            <span className="clients-group-label">Banking Institutions</span>
            <Marquee
              symbols={["B", "C", "H", "S", "J", "G", "B", "D", "M", "W"]}
              direction="left"
            />
          </div>
          <div className="clients-group">
            <span className="clients-group-label">NBFCs</span>
            <Marquee
              symbols={["Bf", "TC", "AB", "HD", "LF", "MF", "SF", "Ma"]}
              direction="right"
            />
          </div>
        </div>

        <p className="clients-note">
          Digital banking solutions designed to modernize operations, enhance customer
          experiences, and drive sustainable growth. AI-powered lending and engagement
          platforms built for the speed, flexibility, and scale of modern NBFCs.
        </p>
      </div>
    </section>
  );
}
