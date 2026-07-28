import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from './data/portfolio.json'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  const root = useRef(null)
  useSmoothScroll()

  useEffect(() => {
    document.title = `${data.name} — Portfolio`
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isMotion: '(prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions

          if (reduceMotion) {
            gsap.set(
              '.reveal-hero, .reveal, .skills__item, .project, .contact__email, .socials__item, .section__rule',
              { clearProps: 'all' },
            )
            return
          }

          // —— Hero entrance (spring feel) ——
          const heroTl = gsap.timeline({
            defaults: { ease: 'back.out(1.5)', duration: 0.95 },
          })

          heroTl
            .from('.reveal-hero', {
              autoAlpha: 0,
              y: 52,
              stagger: 0.1,
            })
            .from(
              '.hero__glow--a',
              { scale: 0.55, autoAlpha: 0, duration: 1.4, ease: 'power2.out' },
              0,
            )
            .from(
              '.hero__glow--b',
              { scale: 0.4, autoAlpha: 0, duration: 1.5, ease: 'power2.out' },
              0.15,
            )

          gsap.to('.hero__scroll-dot', {
            y: 10,
            autoAlpha: 0.35,
            duration: 1.1,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
          })

          // —— Hero scrub / fade on leave ——
          gsap.to('.hero__glow--a', {
            yPercent: 28,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })

          gsap.to('.hero__glow--b', {
            yPercent: -18,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          })

          // —— Section headers + rule draw ——
          gsap.utils.toArray('.section').forEach((section) => {
            const head = section.querySelector('.section__head')
            const rule = section.querySelector('.section__rule')
            const reveals = section.querySelectorAll('.reveal')

            if (reveals.length) {
              gsap.from(reveals, {
                autoAlpha: 0,
                y: 36,
                duration: 0.85,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: head || section,
                  start: 'top 82%',
                  toggleActions: 'play none none reverse',
                },
              })
            }

            if (rule) {
              gsap.fromTo(
                rule,
                { scaleX: 0 },
                {
                  scaleX: 1,
                  duration: 1,
                  ease: 'power3.inOut',
                  scrollTrigger: {
                    trigger: head || section,
                    start: 'top 82%',
                    toggleActions: 'play none none reverse',
                  },
                },
              )
            }
          })

          // —— Skills stagger ——
          gsap.from('.skills__item', {
            autoAlpha: 0,
            y: 24,
            scale: 0.92,
            duration: 0.55,
            stagger: { each: 0.07, from: 'start' },
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '.skills',
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          })

          // —— Projects: slide + rail scrub ——
          gsap.utils.toArray('.project').forEach((project) => {
            const rail = project.querySelector('.project__rail')

            gsap.from(project, {
              autoAlpha: 0,
              x: -28,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: project,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            })

            if (rail) {
              gsap.fromTo(
                rail,
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: project,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: true,
                  },
                },
              )
            }
          })

          // —— Contact ——
          gsap.from('.contact__email', {
            autoAlpha: 0,
            y: 48,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.contact__email',
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          })

          gsap.from('.socials__item', {
            autoAlpha: 0,
            y: 20,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.socials',
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          })

          gsap.to('.contact__glow', {
            scale: 1.1,
            autoAlpha: 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: '.contact',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        },
      )

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <div ref={root}>
      <Nav name={data.name} links={navLinks} />
      <div className="page">
        <main>
          <Hero data={data} />
          <About data={data.about} skills={data.skills} />
          <Projects projects={data.projects} />
          <Contact
            data={data.contact}
            email={data.email}
            socials={data.socials}
          />
        </main>
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {data.name}
          </p>
        </footer>
      </div>
    </div>
  )
}
