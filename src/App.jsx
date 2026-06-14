import { motion } from 'framer-motion'
import {
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '8.25', label: 'CGPA' },
  { value: '6+', label: 'Projects' },
  { value: '10+', label: 'Certifications' },
  { value: '12+', label: 'Technologies' },
]

const contactEmail = 'mkalasgonda19@gmail.com'

const skills = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'C'],
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    items: ['Machine Learning', 'LLMs', 'Prompt Engineering', 'LangChain', 'ChromaDB'],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'Excel', 'Matplotlib', 'Plotly'],
  },
  {
    title: 'Web',
    icon: Terminal,
    items: ['Flask', 'Streamlit', 'GitHub Pages'],
  },
  {
    title: 'Tools',
    icon: BriefcaseBusiness,
    items: ['Git', 'GitHub', 'VS Code', 'Codex', 'Antigravity'],
  },
]

const projects = [
  {
    title: 'Face Recognition Attendance System',
    description: 'Real-time face detection, automated attendance, Excel reports, and Flask browser access.',
    tags: ['Python', 'Flask', 'OpenCV', 'Face Recognition'],
    href: 'https://github.com/shridhar07122004',
    accent: 'coral',
  },
  {
    title: 'Cold Email Outreach Tool',
    description: 'Streamlit app for personalized recruiter emails using Llama-3 and portfolio matching.',
    tags: ['Streamlit', 'Groq', 'ChromaDB', 'LangChain'],
    href: 'https://github.com/shridhar07122004',
    accent: 'yellow',
  },
  {
    title: 'InsightGPT',
    description: 'Financial news research with RAG, cited answers, and a privacy-first analysis flow.',
    tags: ['LangChain', 'RAG', 'Streamlit', 'NLP'],
    href: 'https://github.com/shridhar07122004',
    accent: 'blue',
  },
  {
    title: 'NIDS',
    description: 'Network intrusion detection system classifying normal and suspicious traffic.',
    tags: ['Python', 'Machine Learning', 'Cybersecurity', 'Scikit-learn'],
    href: 'https://github.com/shridhar07122004',
    accent: 'green',
  },
  {
    title: 'Crowd Anomaly Detection',
    description: 'Detects unusual crowd patterns and anomaly signals for safety-focused monitoring workflows.',
    tags: ['Python', 'Computer Vision', 'Anomaly Detection', 'ML'],
    href: 'https://github.com/shridhar07122004/crowd-anomaly-detection',
    accent: 'lavender',
  },
  {
    title: 'European Banking Churn Analytics',
    description: 'Customer churn analytics using Python-driven exploration, modeling, and business insight reporting.',
    tags: ['Python', 'Data Analytics', 'Churn Modeling', 'EDA'],
    href: 'https://github.com/shridhar07122004/european-banking-churn-analytics',
    accent: 'yellow',
  },
]

const journey = [
  {
    year: '2023',
    title: 'The Beginning',
    text: 'Started B.E. in AI & Data Science and built the base in Python, math, and intelligent systems.',
    icon: BrainCircuit,
    tone: 'yellow',
  },
  {
    year: '2024',
    title: 'First Builds',
    text: 'Moved from theory to working projects with Flask, OpenCV, automation, and data workflows.',
    icon: Terminal,
    tone: 'coral',
  },
  {
    year: '2025',
    title: 'Generative AI Era',
    text: 'Explored LLM apps, LangChain, RAG flows, ChromaDB, and recruiter-focused AI tools.',
    icon: Sparkles,
    tone: 'lavender',
  },
  {
    year: '2026',
    title: 'Scaling Up',
    text: 'Building cleaner full-stack AI products with analytics, deployment thinking, and practical UX.',
    icon: Database,
    tone: 'green',
  },
  {
    year: 'Future',
    title: 'AI Engineer / Data Scientist',
    text: 'Working toward AI and data products that solve useful problems for real people and teams.',
    icon: BriefcaseBusiness,
    tone: 'blue',
  },
]

const certifications = [
  {
    title: 'Data Fundamentals',
    issuer: 'IBM',
    type: 'Data',
    href: 'https://www.credly.com/badges/62a07d1c-2b0a-4997-b275-9465623e1039/linked_in_profile',
    tone: 'blue',
  },
  {
    title: 'Build a Computer Vision App with Azure Cognitive Services',
    issuer: 'Microsoft',
    type: 'Computer Vision',
    href: 'https://www.coursera.org/account/accomplishments/verify/K7JV4ZXWDU2C',
    tone: 'green',
  },
  {
    title: 'Introduction to Generative AI by Google Cloud',
    issuer: 'Simplilearn',
    type: 'Generative AI',
    href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAzMDgxNjlfMTA2MDc2NDJfMTc4MDU4Nzg4NDE1MS5wbmciLCJ1c2VybmFtZSI6IlNocmlkaGFyIE0gS2FsYXNnb25kYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6750%2FIntroduction-to-Generative-AI%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1478786024698270083&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL0x1MsxOSir2ME6yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAH4kI6dBAAAA',
    tone: 'yellow',
  },
]

const contacts = [
  {
    label: 'Email',
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: Mail,
    tone: 'coral',
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/shridhar-kalasgonda-86b03a295/',
    icon: LinkedInLogo,
    tone: 'yellow',
  },
  {
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/shridhar07122004',
    icon: GitHubLogo,
    tone: 'lavender',
  },
]

function GitHubLogo({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 0.3C5.4 0.3 0 5.7 0 12.4c0 5.3 3.4 9.8 8.2 11.4 0.6 0.1 0.8-0.3 0.8-0.6v-2.1c-3.3 0.7-4-1.4-4-1.4-0.5-1.4-1.3-1.8-1.3-1.8-1.1-0.7 0.1-0.7 0.1-0.7 1.2 0.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 0.1-0.8 0.4-1.3 0.8-1.6-2.7-0.3-5.5-1.3-5.5-5.9 0-1.3 0.5-2.4 1.2-3.2-0.1-0.3-0.5-1.6 0.1-3.2 0 0 1-0.3 3.3 1.2 1-0.3 2-0.4 3-0.4s2.1 0.1 3 0.4c2.3-1.5 3.3-1.2 3.3-1.2 0.7 1.6 0.2 2.9 0.1 3.2 0.8 0.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9 0.4 0.4 0.8 1.1 0.8 2.2v3.2c0 0.3 0.2 0.7 0.8 0.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6 0.3 12 0.3Z" />
    </svg>
  )
}

function LinkedInLogo({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h0.1c0.5-0.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3h-0.2ZM5.3 7.4c-1.1 0-2.1-0.9-2.1-2.1s0.9-2.1 2.1-2.1 2.1 0.9 2.1 2.1-0.9 2.1-2.1 2.1ZM7.1 20.5H3.6V9h3.6v11.5ZM22.2 0H1.8C0.8 0 0 0.8 0 1.7v20.5C0 23.2 0.8 24 1.8 24h20.5c1 0 1.8-0.8 1.8-1.8V1.7C24 0.8 23.2 0 22.2 0Z" />
    </svg>
  )
}

function Section({ eyebrow, title, children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Shridhar M Kalasgonda home">
        <span>SK</span>
        <strong>Shridhar</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="hire-link" href="#contact">
        <Mail size={18} aria-hidden="true" />
        Contact
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      <motion.nav
        className="mobile-nav"
        aria-label="Mobile navigation"
        initial={false}
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: 'auto' },
          closed: { opacity: 0, y: -12, pointerEvents: 'none' },
        }}
        transition={{ duration: 0.2 }}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </motion.nav>
    </header>
  )
}

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
      aria-label="AI profile visual"
    >
      <div className="portrait-core">
        <motion.div
          className="profile-frame"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: [0, -8, 0], rotate: [-1.2, 0.8, -1.2], scale: 1 }}
          transition={{
            opacity: { duration: 0.4, delay: 0.35 },
            scale: { duration: 0.5, delay: 0.35 },
            y: { duration: 5.4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5.4, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ y: -10, rotate: 0, scale: 1.025 }}
        >
          <div className="profile-image-wrap">
            <img src="/shridhar-profile.png" alt="Shridhar M Kalasgonda" />
          </div>
          <div className="hero-skill-tags" aria-label="Focus areas">
            <span>AI</span>
            <span>ML</span>
            <span>DATA</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="terminal-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { duration: 0.42, delay: 0.65 },
          y: { duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.25 },
        }}
        whileHover={{ y: -4, scale: 1.01 }}
      >
        <span>$ build practical_ai</span>
        <strong>internship_ready = true</strong>
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <motion.p
          className="status-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <MapPin size={16} aria-hidden="true" />
          Thane, Maharashtra
        </motion.p>

        <motion.h1 className="hero-name" aria-label="Shridhar M Kalasgonda">
          {['Shridhar', 'M', 'Kalasgonda'].map((word, index) => (
            <motion.span
              className="hero-name-word"
              data-text={word}
              key={word}
              initial={{ opacity: 0, y: 28, rotate: index === 1 ? 0 : index === 0 ? -1.8 : 1.8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 190, damping: 19, delay: 0.08 + index * 0.08 }}
              whileHover={{ y: -8, rotate: index === 0 ? -1.1 : index === 2 ? 1.1 : 0, scale: 1.025 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          AI & Data Science Student Building Practical AI Tools
        </motion.p>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          I build AI, analytics, and full-stack projects that turn data into useful products.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <a className="button primary" href="#projects">
            <Sparkles size={18} aria-hidden="true" />
            View Projects
          </a>
          <a className="button secondary" href="#contact">
            <Mail size={18} aria-hidden="true" />
            Contact Me
          </a>
          <a className="button ghost" href="/Shridhar_M_Kalasgonda_Resume.pdf" download>
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
        </motion.div>
      </div>

      <HeroVisual />
    </section>
  )
}

function About() {
  const techInterests = [
    'AI Engineering',
    'Machine Learning',
    'Generative AI',
    'Computer Vision',
    'AI Product Development',
  ]

  return (
    <motion.section
      id="about"
      className="section-shell about-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <p>Profile</p>
        <h2>About Me</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 26, rotate: -0.4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52, ease: 'easeOut' }}
        >
          <div className="profile-label">
            <Code2 size={20} aria-hidden="true" />
            <span>Profile</span>
          </div>
          <p className="about-lead">
            I am pursuing a <mark>B.E. in Artificial Intelligence and Data Science</mark> at
            A.C. Patil College of Engineering, Mumbai University, with a strong focus on
            machine learning engineering, generative AI, and scalable software systems.
          </p>
          <p>
            I enjoy building intelligent systems that solve real-world problems. My work spans
            <mark> machine learning</mark>, <mark>generative AI</mark>, data analytics,
            computer vision, automation, and full-stack AI applications.
          </p>
          <div className="about-interests">
            <p>Tech Interests</p>
            <div className="interest-strip" aria-label="Tech interests">
              {techInterests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.86, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.24, delay: index * 0.04 }}
                  whileHover={{ y: -4, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="about-side">
          <div className="stat-grid">
            {stats.map((stat, index) => (
              <motion.div
                className="stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.06 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="about-status"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.18 }}
          >
            <span>Status -&gt;</span>
            <strong>Open to Internship Opportunities</strong>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell skills-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="skills-hero">
        <div>
          <p className="skills-kicker">Toolkit</p>
          <h2 className="tech-title" aria-label="My Tech Stack">
            <span>My</span>
            <strong data-text="Tech Stack">Tech Stack</strong>
          </h2>
        </div>
        <div className="stack-console" aria-label="Tech stack summary">
          <span>stack.ready()</span>
          <strong>AI + Data + Web</strong>
          <em>12+ practical tools</em>
        </div>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.article
              className="skill-card"
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="card-icon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{skill.title}</h3>
              <div className="tag-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}

function Projects() {
  return (
    <Section
      id="projects"
      className="projects-section"
      eyebrow="Selected work"
      title={
        <span className="project-title-interactive" aria-label="Featured Builds">
          <motion.span
            className="project-title-word"
            initial={{ opacity: 0, y: 24, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 210, damping: 18 }}
            whileHover={{ y: -7, rotate: -1.2, scale: 1.03 }}
          >
            Featured
          </motion.span>{' '}
          <motion.span
            className="project-title-word"
            initial={{ opacity: 0, y: 24, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 210, damping: 18, delay: 0.08 }}
            whileHover={{ y: -7, rotate: 1.2, scale: 1.03 }}
          >
            Builds
          </motion.span>
        </span>
      }
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.accent}`}
            key={project.title}
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ type: 'spring', stiffness: 170, damping: 20, delay: index * 0.05 }}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
          >
            <div className="project-topline">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                <GitHubLogo size={20} />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
        <motion.a
          className="project-more-card"
          href="https://github.com/shridhar07122004?tab=repositories"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 210, damping: 18, delay: 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <span>View More Projects</span>
          <strong>More on GitHub</strong>
          <GitHubLogo size={24} />
        </motion.a>
      </div>
    </Section>
  )
}

function Journey() {
  return (
    <Section
      id="journey"
      className="journey-section"
      eyebrow="Journey"
      title={
        <motion.span
          className="journey-title-route"
          aria-label="My Journey"
          initial={{ opacity: 0, y: 12, scaleX: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 190, damping: 20 }}
          whileHover="hover"
        >
          <motion.span className="journey-title-copy" variants={{ hover: { x: 8 } }}>
            My
          </motion.span>
          <motion.span className="journey-title-copy accent" variants={{ hover: { x: 14 } }}>
            Journey
          </motion.span>
          <span className="journey-route-line" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
        </motion.span>
      }
    >
      <div className="journey-panel">
        <div className="journey-rail" aria-hidden="true" />
        {journey.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.article
              className={`journey-card ${step.tone}`}
              key={step.title}
              initial={{ opacity: 0, scale: 0.92, rotate: index % 2 === 0 ? -1.4 : 1.4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.03, rotate: index % 2 === 0 ? 0.7 : -0.7 }}
            >
              <div className="journey-marker">
                <Icon size={20} aria-hidden="true" />
              </div>
              <span>{step.year}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          )
        })}
      </div>
      <div className="college-strip">
        <span>A.C. Patil College of Engineering</span>
        <strong>B.E. Artificial Intelligence & Data Science</strong>
        <span>Aug 2023 - May 2027 / CGPA 8.25</span>
      </div>
    </Section>
  )
}

function Certifications() {
  return (
    <Section
      id="certifications"
      className="certifications-section"
      eyebrow="Verified learning"
      title={
        <motion.span
          className="certification-title"
          aria-label="Certifications"
          initial={{ opacity: 0, y: 18, rotate: -0.6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 210, damping: 18 }}
          whileHover="hover"
        >
          <motion.span className="certification-title-badge" variants={{ hover: { rotate: 8, scale: 1.08 } }}>
            <BadgeCheck size={28} aria-hidden="true" />
          </motion.span>
          <motion.span className="certification-title-text" variants={{ hover: { x: 8 } }}>
            Certifications
          </motion.span>
        </motion.span>
      }
    >
      <div className="certification-grid">
        {certifications.map((certificate, index) => (
          <motion.article
            className={`certification-card ${certificate.tone}`}
            key={certificate.href}
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 190, damping: 18, delay: index * 0.07 }}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
          >
            <div className="certificate-topline">
              <span>{certificate.type}</span>
              <BadgeCheck size={22} aria-hidden="true" />
            </div>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
            <a className="credential-toggle" href={certificate.href} target="_blank" rel="noreferrer">
              <span aria-hidden="true" />
              Verify Credential
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>

      <motion.a
        className="certification-more-toggle"
        href="https://www.linkedin.com/in/shridhar-kalasgonda-86b03a295/details/certifications/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 18, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 210, damping: 18, delay: 0.12 }}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <span aria-hidden="true" />
        View More Certifications
        <LinkedInLogo size={20} />
      </motion.a>
    </Section>
  )
}

function Contact() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') || 'Portfolio visitor'
    const email = formData.get('email') || ''
    const message = formData.get('message') || ''
    const subject = `Portfolio message from ${name}`

    setIsSending(true)
    setFormStatus({ type: '', message: '' })

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok || result.success === 'false') {
        throw new Error(result.message || 'Message could not be sent right now.')
      }

      form.reset()
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again or email me directly.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="contact-heading">
        <h2 aria-label="Let's Connect">
          <span className="contact-title-interactive">
            <motion.span
              className="contact-title-word"
              initial={{ opacity: 0, y: 24, rotate: -1.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 210, damping: 18 }}
              whileHover={{ y: -7, rotate: -1.1, scale: 1.03 }}
            >
              Let&apos;s
            </motion.span>{' '}
            <motion.span
              className="contact-title-word"
              initial={{ opacity: 0, y: 24, rotate: 1.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 210, damping: 18, delay: 0.08 }}
              whileHover={{ y: -7, rotate: 1.1, scale: 1.03 }}
            >
              Connect
            </motion.span>
          </span>
        </h2>
        <p>
          Have an internship, AI project, data problem, or collaboration idea? Send it my way.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-stack">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <motion.a
                className={`contact-card ${contact.tone}`}
                key={contact.href}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                whileHover={{ x: 8, rotate: 0 }}
              >
                <span className="contact-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="contact-meta">
                  <small>{contact.label}</small>
                  <strong>{contact.value}</strong>
                </span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </motion.a>
            )
          })}

          <div className="contact-info-card">
            <p>
              <MapPin size={18} aria-hidden="true" />
              <span>
                <small>Location</small>
                <strong>Thane, Maharashtra</strong>
              </span>
            </p>
            <p>
              <BriefcaseBusiness size={18} aria-hidden="true" />
              <span>
                <small>Status</small>
                <strong>Seeking internship opportunities</strong>
              </span>
            </p>
            <p>
              <Mail size={18} aria-hidden="true" />
              <span>
                <small>Email</small>
                <strong>{contactEmail}</strong>
              </span>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <Send size={22} aria-hidden="true" />
            <h3>Send a Message</h3>
          </div>
          <label>
            Your Name
            <input name="name" type="text" placeholder="e.g. Tony Stark" required />
          </label>
          <label>
            Your Email
            <input name="email" type="email" placeholder="e.g. tony@starkindustries.com" required />
          </label>
          <label>
            Your Message
            <textarea
              name="message"
              placeholder="Let's build something awesome together..."
              rows="6"
              required
            />
          </label>
          <button className="form-submit" type="submit" disabled={isSending}>
            <Send size={18} aria-hidden="true" />
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {formStatus.message && (
            <p className={`form-status ${formStatus.type}`} role="status" aria-live="polite">
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  )
}

function Footer() {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/shridhar07122004', icon: GitHubLogo },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shridhar-kalasgonda-86b03a295/', icon: LinkedInLogo },
    { label: 'Email', href: `mailto:${contactEmail}`, icon: Mail },
  ]

  return (
    <footer className="site-footer">
      <motion.div
        className="footer-watermark"
        aria-hidden="true"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Shridhar
      </motion.div>
      <div className="footer-main">
        <motion.div
          className="footer-profile"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <a className="footer-name-tag" href="#top">
            Shridhar M Kalasgonda
          </a>
          <p>
            AI & Data Science student building practical AI, analytics, and full-stack tools for
            useful real-world workflows.
          </p>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={link.label}
                >
                  <Icon size={22} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="footer-quote"
          initial={{ opacity: 0, y: 26, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0.8 }}
          transition={{ duration: 0.58, ease: 'easeOut', delay: 0.08 }}
          viewport={{ once: true, margin: '-80px' }}
          whileHover={{ y: -6, rotate: 0 }}
        >
          <strong>Prototype with curiosity. Ship with evidence.</strong>
          <span>- Shridhar Kalasgonda</span>
        </motion.div>

        <motion.nav
          className="footer-links"
          aria-label="Footer navigation"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span>Quick Links</span>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </motion.nav>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span>© 2026 Shridhar Kalasgonda. Built with focus and curiosity.</span>
        <a className="footer-top" href="#top">
          <ArrowUp size={18} aria-hidden="true" />
          Top
        </a>
      </motion.div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
