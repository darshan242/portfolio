import reactIcon from "../assets/stack/react.png";
import javascriptIcon from "../assets/stack/javascript.png";
import typescriptIcon from "../assets/stack/typescript.png";
import htmlIcon from "../assets/stack/html.png";
import cssIcon from "../assets/stack/css.png";
import pythonIcon from "../assets/stack/python.png";
import javaIcon from "../assets/stack/java.png";
import gitIcon from "../assets/stack/git.png";
import githubIcon from "../assets/stack/github.png";
import chefShot from "../assets/projects/claud-chef.png";
import assemblyShot from "../assets/projects/assembly-endgame.png";
import tenziesShot from "../assets/projects/tenzies.png";
import frameStart from "../assets/frames/ezgif-frame-001.png";
import frameMid from "../assets/frames/ezgif-frame-070.png";
import frameLate from "../assets/frames/ezgif-frame-110.png";
import AnimatedContent from "./bits/AnimatedContent";
import CountUp from "./bits/CountUp";
import FoldText from "./bits/FoldText";
import GradientText from "./bits/GradientText";
import GradientWaves from "./bits/GradientWaves";
import InfiniteSpiral from "./bits/InfiniteSpiral";
import LogoLoop from "./bits/LogoLoop";
import Magnet from "./bits/Magnet";
import WhenNear from "./WhenNear";
import {
  earlierWork,
  focus,
  profile,
  projects,
  socials,
  type Project,
  type Social,
} from "../content/site";

const logos = [
  { src: reactIcon, alt: "React" },
  { src: javascriptIcon, alt: "JavaScript" },
  { src: typescriptIcon, alt: "TypeScript" },
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: pythonIcon, alt: "Python" },
  { src: javaIcon, alt: "Java" },
  { src: gitIcon, alt: "Git" },
  { src: githubIcon, alt: "GitHub" },
];

const spiralItems = [
  {
    src: chefShot,
    alt: "RecipeGenie",
    href: projects[0].live,
    label: projects[0].name,
  },
  { src: frameStart, alt: "Portrait, opening frame", label: "Portrait" },
  {
    src: assemblyShot,
    alt: "Assembly Endgame",
    href: projects[1].live,
    label: projects[1].name,
  },
  { src: frameMid, alt: "Portrait, middle frame", label: "Portrait" },
  {
    src: tenziesShot,
    alt: "Tenzies",
    href: projects[2].live,
    label: projects[2].name,
  },
  { src: frameLate, alt: "Portrait, later frame", label: "Portrait" },
];

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
];

function SocialIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "social__icon",
  };

  if (name === "GitHub") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (name === "WhatsApp") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.95c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.25-4.76-4.15-4.9-4.35-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39h.37c.12 0 .28-.04.44.34.17.4.57 1.39.62 1.49.06.1.1.23.02.37-.08.14-.12.23-.24.35-.12.12-.25.27-.36.36-.12.1-.24.22-.1.43.14.21.62 1.02 1.33 1.66.92.82 1.69 1.08 1.93 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26Z"
        />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.55a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"
        />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M6.5 9H4V20h2.5V9ZM5.25 3.5A1.75 1.75 0 1 0 7 5.25 1.75 1.75 0 0 0 5.25 3.5ZM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.93-2.6a2.1 2.1 0 0 0-1.96 1.4 2.6 2.6 0 0 0-.13.94V20H11V9h2.4v1.51A3.1 3.1 0 0 1 16.2 9c2.26 0 3.8 1.48 3.8 4.66V20Z"
        />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M14.7 10.3 21.4 3h-1.6l-5.8 6.4L9.2 3H3.4l7 9.9L3.4 21h1.6l6.2-6.8L14.8 21h5.8l-5.9-10.7Zm-2.2 2.4-.7-1-5.7-8h2.4l4.6 6.4.7 1 6 8.4h-2.4l-4.9-6.8Z"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2.3 6.8 4.6 6.8-4.6a.7.7 0 0 0-.3-.1h-13a.7.7 0 0 0-.3.1Zm13.3 1.7-6.1 4.1a1.2 1.2 0 0 1-1.3 0L5.5 8.5V17.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V8.5Z"
      />
    </svg>
  );
}

function SocialLink({ social }: { social: Social }) {
  const label = social.href ? social.name : `${social.name}, link coming soon`;

  if (!social.href) {
    return (
      <span className="social social--pending" aria-label={label} title={label}>
        <SocialIcon name={social.name} />
      </span>
    );
  }

  return (
    <a
      className="social"
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.name}
    >
      <SocialIcon name={social.name} />
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <p className="project__stack">{project.stack}</p>
      <h3>{project.name}</h3>
      <p className="project__summary">{project.summary}</p>
      <div className="project__links">
        <a href={project.repo} target="_blank" rel="noreferrer">
          Code
        </a>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Site() {
  const jobLine = [profile.roleTitle, profile.company]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="site">
      <div className="shell">
        <header className="nav">
          <a className="nav__name" href="#home">
            {profile.name}
          </a>
          <nav className="nav__links" aria-label="Page">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Magnet padding={70} magnetStrength={2.4}>
            <a className="button" href="#contact">
              Get in touch
            </a>
          </Magnet>
        </header>

        <section className="hero" id="home">
          <div className="hero__copy">
            <GradientText
              className="hero__eyebrow"
              colors={["#ffe7d6", "#ff5a1f", "#ffb088"]}
              animationSpeed={6}
            >
              {profile.eyebrow}
            </GradientText>
            <FoldText
              className="hero__title"
              text={profile.role}
              splitBy="word"
              hinge="top"
              fontSize="clamp(2.7rem, 7vw, 5.4rem)"
              fontWeight={800}
              color="#f7f3ee"
              stagger={0.035}
              duration={0.7}
            />
          </div>
          <p className="hero__summary">{profile.summary}</p>
        </section>

        <div className="sheet">
          <section className="focus" aria-label="Focus">
            {focus.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </section>

          <section className="stack" id="stack">
            <p className="kicker">Stack</p>
            <LogoLoop
              logos={logos}
              speed={70}
              gap={36}
              logoHeight={58}
              fadeOut
              fadeOutColor="rgba(18, 8, 6, 0.28)"
              pauseOnHover
              ariaLabel="Technology stack"
            />
          </section>

          <section className="about" id="about">
            <AnimatedContent distance={48} duration={0.7}>
              <div>
                <p className="kicker">About</p>
                <h2>Building React interfaces, in production.</h2>
              </div>
            </AnimatedContent>
            <AnimatedContent distance={48} duration={0.7} delay={0.08}>
              <div className="about__copy">
                <p>{profile.summary}</p>
                {jobLine ? <p className="about__job">{jobLine}</p> : null}
                <div className="about__stats">
                  <p>
                    <CountUp
                      to={profile.years}
                      duration={1.3}
                      className="about__number"
                    />
                    <span>years as an SDE</span>
                  </p>
                  <p>
                    <strong>{profile.degree}</strong>
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </section>

          <section className="projects" id="projects">
            <div className="section-head">
              <p className="kicker">Projects</p>
              <h2>Work from GitHub.</h2>
            </div>
            <div className="projects__grid">
              {projects.map((project) => (
                <ProjectCard key={project.repo} project={project} />
              ))}
            </div>
            <div className="earlier">
              <p className="kicker">Earlier work</p>
              <ul>
                {earlierWork.map((project) => (
                  <li key={project.repo}>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <strong>{project.name}</strong>
                      <span>{project.stack}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="spiral" aria-label="Portrait spiral">
            <div className="section-head">
              <p className="kicker">Frames</p>
              <h2>The portrait, in motion.</h2>
            </div>
            <WhenNear className="spiral__stage">
              <InfiniteSpiral
                items={spiralItems}
                speed={0.4}
                radius={190}
                cardWidth={150}
                cardHeight={210}
                verticalSpacing={78}
                cardsPerTurn={6}
                cardRadius={16}
                pauseOnHover
              />
            </WhenNear>
          </section>

          <section className="contact" id="contact">
            <WhenNear className="contact__waves">
              <GradientWaves
                horizonColor="#140704"
                waveColor="#ff5a1f"
                crestColor="#ffd3b4"
                speed={0.32}
                amplitude={2.1}
                detail="low"
                brightness={0.9}
                mouseInteraction={false}
                grain
              />
            </WhenNear>
            <div className="contact__copy">
              <p className="kicker">Contact</p>
              <h2>Get in touch.</h2>
              <p>
                GitHub, LinkedIn, Instagram, and X are linked. WhatsApp and
                email can be added later.
              </p>
              <Magnet padding={80} magnetStrength={2.6}>
                <a
                  className="button"
                  href="https://github.com/darshan242"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Magnet>
            </div>
          </section>

          <footer className="footer">
            <div>
              <strong>{profile.fullName}</strong>
              <p>{profile.role}</p>
            </div>
            <div className="footer__socials">
              {socials.map((social) => (
                <SocialLink key={social.name} social={social} />
              ))}
            </div>
            <p className="footer__credit">
              <a href="https://icons8.com" target="_blank" rel="noreferrer">
                Icons by Icons8
              </a>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Site;
