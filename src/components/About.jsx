export default function About({ data, skills }) {
  return (
    <section className="section about" id="about">
      <div className="section__head">
        <p className="eyebrow reveal">01</p>
        <h2 className="reveal">
          <span className="section__title">{data.heading}</span>
        </h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <p className="about__body reveal">{data.body}</p>

      <ul className="skills" aria-label="Skills">
        {skills.map((skill) => (
          <li className="skills__item" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
