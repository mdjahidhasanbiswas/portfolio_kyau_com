export default function Contact({ data, email, socials }) {
  return (
    <section className="section contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="section__head">
        <p className="eyebrow reveal">03</p>
        <h2 className="reveal">
          <span className="section__title">{data.heading}</span>
        </h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <p className="contact__body reveal">{data.body}</p>

      <a className="contact__email" href={`mailto:${email}`}>
        <span className="contact__email-text">{email}</span>
      </a>

      <ul className="socials">
        {socials.map((social) => (
          <li className="socials__item" key={social.label}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
