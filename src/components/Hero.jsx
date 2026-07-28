export default function Hero({ data }) {
  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <p className="hero__role reveal-hero">{data.role}</p>
      <h1 className="hero__name reveal-hero">
        <span className="hero__name-line">{data.name}</span>
      </h1>
      <p className="hero__tagline reveal-hero">{data.tagline}</p>

      <div className="hero__actions reveal-hero">
        <a className="btn btn--primary" href="#projects">
          See projects
        </a>
        <a className="btn btn--ghost" href={data.resumeUrl}>
          Resume
        </a>
      </div>

      <div className="hero__bottom reveal-hero">
        <p className="hero__meta">{data.location}</p>
        <a className="hero__scroll" href="#about" aria-label="Scroll to about">
          <span className="hero__scroll-dot" />
          Scroll
        </a>
      </div>
    </section>
  )
}
