type Locale = "es" | "en";

type Copy = {
  nav: string[];
  langLabel: string;
  heroHello: string;
  name: string;
  role: string;
  hero: string;
  buttons: { cv: string; linkedin: string; github: string; contact: string };
  aboutTitle: string;
  aboutText: string;
  experienceTitle: string;
  experienceIntro: string;
  projectsTitle: string;
  projectsIntro: string;
  skillsTitle: string;
  cvTitle: string;
  cvText: string;
  contactTitle: string;
  contactText: string;
  footer: string;
};

const copy: Record<Locale, Copy> = {
  es: {
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Habilidades", "CV", "Contacto"],
    langLabel: "EN",
    heroHello: "Hola, soy",
    name: "Gabriel Perdomo",
    role: "Desarrollador Web / Full Stack",
    hero: "Desarrollo sistemas internos, intranets y soluciones web administrativas con foco en claridad, mantenimiento y resolución de problemas reales.",
    buttons: { cv: "Ver CV", linkedin: "LinkedIn", github: "GitHub", contact: "Contáctame" },
    aboutTitle: "Sobre mí",
    aboutText: "Soy desarrollador web con experiencia en sistemas internos y plataformas de gestión. Trabajé con Laravel, PHP, JavaScript, HTML, MySQL y CakePHP, participando en desarrollo, mantenimiento, validaciones, tablas dinámicas, flujos de aprobación y mejoras de usabilidad para áreas administrativas.",
    experienceTitle: "Experiencia",
    experienceIntro: "Experiencia en sistemas en producción, intranets y soluciones administrativas.",
    projectsTitle: "Proyectos",
    projectsIntro: "Algunos trabajos fueron desarrollados en equipo junto al área de desarrollo. Los presento como proyectos colaborativos, destacando tecnologías y alcance funcional.",
    skillsTitle: "Habilidades",
    cvTitle: "Curriculum Vitae",
    cvText: "CV actualizado en PDF, orientado a roles de desarrollo web, Laravel/PHP y sistemas internos.",
    contactTitle: "Contacto",
    contactText: "Si querés hablar sobre una oportunidad laboral o proyecto, podés escribirme por email o revisar mi LinkedIn y GitHub.",
    footer: "Hecho con Next.js. © 2026."
  },
  en: {
    nav: ["About", "Experience", "Projects", "Skills", "Resume", "Contact"],
    langLabel: "ES",
    heroHello: "Hi, I'm",
    name: "Gabriel Perdomo",
    role: "Web / Full Stack Developer",
    hero: "I build internal systems, intranets and administrative web solutions focused on clarity, maintainability and solving real operational problems.",
    buttons: { cv: "View Resume", linkedin: "LinkedIn", github: "GitHub", contact: "Contact me" },
    aboutTitle: "About me",
    aboutText: "Web developer experienced in internal systems and management platforms. I have worked with Laravel, PHP, JavaScript, HTML, MySQL and CakePHP, contributing to development, maintenance, validations, dynamic tables, approval flows and usability improvements for administrative areas.",
    experienceTitle: "Experience",
    experienceIntro: "Experience in production systems, intranets and administrative solutions.",
    projectsTitle: "Projects",
    projectsIntro: "Some projects were developed collaboratively within the development team. They are presented as team projects, highlighting technologies and functional scope.",
    skillsTitle: "Skills",
    cvTitle: "Resume",
    cvText: "Updated PDF resume focused on web development, Laravel/PHP and internal systems roles.",
    contactTitle: "Contact",
    contactText: "If you want to discuss a job opportunity or a project, feel free to email me or check my LinkedIn and GitHub.",
    footer: "Built with Next.js. © 2026."
  }
};

const experiences = [
  {
    date: "03/2024 — 05/2026",
    title: "Desarrollador Web / Intranet",
    company: "Hospital Privado SADIV, San Pedro, Buenos Aires",
    bullets: [
      "Desarrollé y mantuve módulos internos para digitalizar procesos administrativos y mejorar la gestión interna.",
      "Implementé funcionalidades con Laravel, PHP, JavaScript, HTML y MySQL, incluyendo formularios, validaciones y tablas dinámicas.",
      "Construí flujos administrativos con roles, estados, aprobaciones, notificaciones e historial de seguimiento.",
      "Mantuve y mejoré módulos utilizados por distintas áreas, con foco en usabilidad y resolución de errores."
    ],
    tags: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"]
  },
  {
    date: "12/2020 — 03/2024",
    title: "Desarrollador Web",
    company: "Gesdatta, San Pedro, Buenos Aires",
    bullets: [
      "Trabajé en desarrollo y mantenimiento de sistemas web de gestión y soluciones a medida.",
      "Participé en la evolución de sistemas existentes con HTML, JavaScript, CakePHP y MySQL.",
      "Realicé tareas vinculadas a bases de datos, consultas, lógica de negocio, soporte y ajustes de interfaz."
    ],
    tags: ["CakePHP", "MySQL", "JavaScript", "HTML", "Soporte"]
  }
];

const projects = [
  {
    title: "Hospital Privado SADIV — Intranet",
    meta: "Proyecto colaborativo / Interno",
    description: "Sistema interno para gestión de procesos administrativos, flujos de aprobación, notificaciones, roles y módulos operacionales para distintas áreas de la institución.",
    tags: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"],
    live: null,
    code: null
  },
  {
    title: "Módulos administrativos SADIV",
    meta: "Proyecto colaborativo / Interno",
    description: "Módulos para compras, facturación, supervisión, RRHH, vacaciones/licencias, sanciones, NCI y otros procesos internos con validaciones, estados e historial.",
    tags: ["Laravel", "MySQL", "DataTables", "Roles", "Validaciones"],
    live: null,
    code: null
  },
  {
    title: "Sistemas web de gestión — Gesdatta",
    meta: "Experiencia profesional",
    description: "Mantenimiento y evolución de sistemas web de gestión, adaptación de funcionalidades según necesidades del cliente, lógica de negocio y consultas a base de datos.",
    tags: ["CakePHP", "JavaScript", "MySQL", "HTML"],
    live: null,
    code: null
  },
  {
    title: "Portfolio personal",
    meta: "Proyecto propio",
    description: "Portfolio desarrollado con Next.js para presentar experiencia, proyectos colaborativos, habilidades técnicas y CV descargable.",
    tags: ["Next.js", "TypeScript", "CSS", "Vercel"],
    live: null,
    code: "https://github.com/Cobrazul"
  }
];

const skillGroups = [
  { title: "Frontend", items: ["HTML", "JavaScript", "jQuery", "Bootstrap", "Interfaces responsivas"] },
  { title: "Backend / Datos", items: ["Laravel", "PHP", "CakePHP", "MySQL", "Sistemas internos"] },
  { title: "Herramientas", items: ["Git", "GitHub", "Insomnia", "Laragon", "Resolución de problemas"] }
];

export default function Portfolio({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === "en" ? "en" : "es";
  const t = copy[locale];
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href={`/${locale}`}>{"<Gabriel"}<span>{" />"}</span></a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">{t.nav[0]}</a>
            <a href="#experience">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#skills">{t.nav[3]}</a>
            <a href="#cv">{t.nav[4]}</a>
            <a href="#contact">{t.nav[5]}</a>
            <a className="lang" href={`/${otherLocale}`}>{t.langLabel}</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{t.heroHello}</div>
            <h1>{t.name}</h1>
            <p className="subtitle">{t.role}</p>
            <p className="lead">{t.hero}</p>
            <div className="actions">
              <a className="btn primary" href="/cv-gabriel-perdomo.pdf" target="_blank" rel="noreferrer">{t.buttons.cv}</a>
              <a className="btn" href="https://www.linkedin.com/in/gabriel-perdomo-79118a198" target="_blank" rel="noreferrer">{t.buttons.linkedin}</a>
              <a className="btn" href="https://github.com/Cobrazul" target="_blank" rel="noreferrer">{t.buttons.github}</a>
              <a className="btn" href="mailto:perdomogabriel96@gmail.com">{t.buttons.contact}</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Resumen técnico">
            <div className="card-title">Stack principal</div>
            <div className="stack">
              {["Laravel", "PHP", "JavaScript", "MySQL", "CakePHP", "jQuery", "Bootstrap", "Git"].map((item) => <span className="pill" key={item}>{item}</span>)}
            </div>
            <div className="metric-grid">
              <div className="metric"><strong>5+ años</strong><span>experiencia web</span></div>
              <div className="metric"><strong>2 etapas</strong><span>Gesdatta + SADIV</span></div>
              <div className="metric"><strong>Full Stack</strong><span>frontend + backend</span></div>
              <div className="metric"><strong>Internos</strong><span>sistemas de gestión</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-head"><div><span className="kicker">01</span><h2>{t.aboutTitle}</h2></div></div>
          <div className="about-card"><p>{t.aboutText}</p></div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">02</span><h2>{t.experienceTitle}</h2></div>
            <p className="section-copy">{t.experienceIntro}</p>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article className="experience-item" key={exp.title}>
                <div className="date">{exp.date}</div>
                <div>
                  <h3>{exp.title}</h3>
                  <div className="company">{exp.company}</div>
                  <ul>{exp.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <div className="tags">{exp.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">03</span><h2>{t.projectsTitle}</h2></div>
            <p className="section-copy">{t.projectsIntro}</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta">{project.meta}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                {(project.live || project.code) && <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
                  {project.code && <a href={project.code} target="_blank" rel="noreferrer">Code</a>}
                </div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-head"><div><span className="kicker">04</span><h2>{t.skillsTitle}</h2></div></div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="stack">{group.items.map((item) => <span className="pill" key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cv">
        <div className="container">
          <div className="cv-card">
            <div><span className="kicker">05</span><h2>{t.cvTitle}</h2><p>{t.cvText}</p></div>
            <a className="btn primary" href="/cv-gabriel-perdomo.pdf" target="_blank" rel="noreferrer">{t.buttons.cv}</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contact-grid">
          <div className="section-head"><div><span className="kicker">06</span><h2>{t.contactTitle}</h2></div></div>
          <div className="contact-card">
            <p>{t.contactText}</p>
            <p><a href="mailto:perdomogabriel96@gmail.com">perdomogabriel96@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/gabriel-perdomo-79118a198" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/Cobrazul" target="_blank" rel="noreferrer">GitHub</a></p>
          </div>
        </div>
      </section>
      <footer className="footer"><div className="container">{t.footer}</div></footer>
    </main>
  );
}
