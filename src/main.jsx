
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Sparkles,
  Code2,
  BrainCircuit,
  Rocket,
  Layers3,
  Menu,
  X,
  GraduationCap,
  Award,
  MapPin,
  Users,
  Download,
  Heart,
  Star,
  Sun,
  Moon,
  Eye,
  Send,
  CheckCircle2,
} from 'lucide-react';
import './styles.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
  {
    number: '01',
    title: 'ResumeMatch AI Career Studio',
    type: 'AI PRODUCT · FULL STACK',
    description:
      'A full-stack resume-analysis platform that extracts technical skills, estimates ATS compatibility, suggests improvements, and recommends relevant entry-level roles.',
    tags: ['React', 'FastAPI', 'Python', 'Supabase', 'Vercel'],
    color: 'lavender',
    visual: 'resume',
    image: '/projects/resumematch_ai_career_studio.jpg',
  
    demo: 'https://resume-match-tau.vercel.app/',
  },
  {
    number: '02',
    title: 'AI-Based Crop Recommendation',
    type: 'MACHINE LEARNING',
    description:
      'A machine learning project that recommends suitable crops based on soil and environmental inputs.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    color: 'peach',
    visual: 'crop',
    image: '/projects/ai_crop_recommendation.jpg',
    github: 'https://github.com/taaha2627',
  },
  {
    number: '03',
    title: 'Plant Leaf Disease Detection',
    type: 'COMPUTER VISION',
    description:
      'A CNN-based plant leaf disease detection workflow with a Flask interface and fertilizer recommendation concept.',
    tags: ['CNN', 'OpenCV', 'Flask', 'TensorFlow'],
    color: 'mint',
    visual: 'leaf',
    image: '/projects/plant_leaf_disease_detection.jpg',
    github: 'https://github.com/taaha2627',
  },
  {
    number: '04',
    title: 'Slicktrace Oil Detection System',
    type: 'SATELLITE IMAGERY · AI',
    description:
      'An oil-spill detection concept combining Sentinel-1 SAR satellite imagery with AIS/GPS vessel data for maritime monitoring.',
    tags: ['Python', 'Sentinel-1 SAR', 'AIS/GPS', 'Computer Vision'],
    color: 'lavender',
    visual: 'oil',
    image: '/projects/slicktrace_oil_detection.jpg',
    github: 'https://github.com/taaha2627',
  },
];

const skills = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    text: 'Supervised and unsupervised learning, neural networks, NLP, computer vision, and model evaluation.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    text: 'React, JavaScript, Python, FastAPI, Flask, REST API design, and responsive interfaces.',
  },
  {
    icon: Layers3,
    title: 'Data & Tools',
    text: 'Pandas, NumPy, scikit-learn, SQL, MongoDB, Git, GitHub, and VS Code.',
  },
  {
    icon: Rocket,
    title: 'Cloud & Delivery',
    text: 'Docker, Google Cloud Platform, Supabase, Vercel, Render, and deployment fundamentals.',
  },
];

const certificationGroups = [
  {
    organization: 'Oracle University',
   
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUO9hV-cVSwUimLKyv4GHP9JTmHZiU3zvbWqASSE8rA&s=10',
    certificates: [
      'Agentic AI Certified Foundations Associate',
    ],
  },
  {
    organization: 'Cisco Networking Academy',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQla4pb4F646zIx_X8VPYWbIMWKXyjT4Ih1eRdwq6LDmQ&s=10',
    certificates: [
      'Introduction to Modern AI',
      'Data Analytics Essentials',
      'Prompt Like an Engineer',
      'Introduction to Cybersecurity',
    ],
  },
  {
    organization: 'IBM SkillsBuild',
    
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_ri0f6QuJOgywJ-KcqE7Y37ArPajFgncLdBek4K0fQ&s=10',
    certificates: [
      'Getting Started with AI',
      'AI Fundamentals',
    ],
  },
  {
  organization: 'Infosys Springboard',
  
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6eKY11-2ZXeJtnEiw8XSrNK-Ob5ErIwua9sekYgE_g&s',
  certificates: [
    'Fundamentals of Information Security',
    'Introduction to Cyber Security',
    'Foundamentals of Cryptography',
    'Cyber Security Foundation Certificate',
  ],
},
];




const achievements = [
  {
    year: "2026",
    title: "VeloHack",
    event: "Hackathon Participant",
    venue: "Vel Tech University, Chennai",
    category: "SATELLITE IMAGERY · AI",
    description:
      "Developed Slicktrace, an oil-spill detection concept integrating Sentinel-1 SAR satellite imagery with AIS/GPS vessel tracking data to identify potential marine oil spills and support maritime monitoring."
  },
  {
    year: "2025",
    title: "Build Bharat Through AI",
    event: "Hackathon Participant",
    venue: "Andhra University, Visakhapatnam",
    category: "ARTIFICIAL INTELLIGENCE · CNN",
    description:
      "Worked on CNN-based plant identification to recognize plant species from images and provide information about their benefits, properties, and practical uses."
  },
  {
    year: "2024",
    title: "Smart India Hackathon",
    event: "Internal Hackathon Participant",
    venue: "Malla Reddy College of Engineering, Hyderabad",
    category: "AI · TRAFFIC MANAGEMENT",
    description:
      "Worked on an AI-based traffic management system designed to analyze traffic conditions, reduce congestion, optimize vehicle flow, and support smarter urban transportation."
  },
  {
    year: "2025",
    title: "Smart India Hackathon",
    event: "Internal Hackathon Participant",
    venue: "Malla Reddy College of Engineering, Hyderabad",
    category: "SMART INDIA HACKATHON",
    description:
      "Participated in the internal hackathon selection rounds."
  },
  {
    year: "2026",
    title: "Smart India Hackathon",
    event: "Internal Hackathon Participant",
    venue: "Malla Reddy College of Engineering, Hyderabad",
    category: "AI · HEALTHCARE",
    description:
      "Worked on an AI-Assisted Early Detection System for Osteoarthritis (OA) Risk Markers in the North Eastern Region (NER), focusing on AI-supported identification of potential risk markers."
  }
];



const navItems = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Journey', '#journey'],
  ['Education', '#education'],
  ['Achievements', '#achievements'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formNotice, setFormNotice] = useState('');
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', move);

    return () => window.removeEventListener('pointermove', move);
  }, []);

  const submitContact = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${contact.name}`
    );

    const body = encodeURIComponent(
      `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`
    );

    window.location.href =
      `mailto:taaha2627@gmail.com?subject=${subject}&body=${body}`;

    setFormNotice(
      'Your email app should open with your message ready to send.'
    );
  };

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={`site-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <motion.div
        className="custom-cursor"
        aria-hidden="true"
        animate={{
          x: cursor.x - 10,
          y: cursor.y - 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
        }}
      />

      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      {/* Navigation */}
      <header className="nav wrap">
        <a
          className="brand"
          href="#home"
          aria-label="Mohammed Taaha Tahseem home"
        >
          <span className="brand-copy">
            <strong className="brand-full-name">
              Mohammed Taaha Tahseem
            </strong>
            <small>AI · SOFTWARE · IDEAS</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a className="nav-cta" href="#contact">
            Let’s connect <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* Home / Hero */}
        <section className="hero wrap" id="home">
          {/* Portrait on the left */}
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="art-sun" />
            <div className="art-grid" />

            <motion.div
              className="portrait-frame"
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="./profile.png"
                alt="Professional portrait of Mohammed Taaha Tahseem"
              />

              <span className="portrait-label">
                AI/ML ENGINEER · FULL-STACK DEVELOPER
              </span>
            </motion.div>

            <motion.div
              className="float-card float-ai"
              animate={{ y: [0, -10, 0], rotate: [3, 0, 3] }}
              transition={{ duration: 4.4, repeat: Infinity }}
            >
              <BrainCircuit size={19} />

              <span>
                <b>AI / ML</b>
                <small>Learning by building</small>
              </span>
            </motion.div>

            <motion.div
              className="float-card float-code"
              animate={{ y: [0, 8, 0], rotate: [-3, 0, -3] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Code2 size={19} />

              <span>
                <b>FULL-STACK</b>
                <small>From idea to interface</small>
              </span>
            </motion.div>

            <motion.div
              className="mini-note"
              animate={{ rotate: [8, 14, 8], y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ✳
            </motion.div>

            <div className="art-sticker">
              MAKE IT
              <br />
              <b>MEANINGFUL.</b>
            </div>
          </motion.div>

          {/* Name and introduction on the right */}
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              <span className="status-dot" />
              AVAILABLE FOR INTERNSHIPS
              <Sparkles size={14} />
            </motion.div>

            <motion.p
              className="hero-pretitle"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              HELLO, I'M MOHAMMED 👋
            </motion.p>

            <motion.h1
              className="hero-name"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Mohammed
              <br />
              Taaha
              <br />
              <span className="gradient-text">Tahseem.</span>
            </motion.h1>

            <motion.p
              className="hero-intro"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.12 }}
            >
              <strong>AI/ML Engineer | Full-Stack Developer</strong>
              <br />
              A final-year CSE (AI & ML) student who enjoys turning complex
              problems into thoughtful products, useful tools, and clean
              digital experiences.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.22 }}
            >
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a
                className="button button-quiet"
                href="./Taaha_Tahseem_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Eye size={16} /> Preview résumé
              </a>

              <a
                className="button button-quiet"
                href="./Taaha_Tahseem_Resume.pdf"
                download
              >
                <Download size={16} /> Download résumé
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <span>FIND ME AROUND THE WEB</span>

              <a
                href="https://github.com/taaha2627"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-taaha-tahseem-589235354/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/taaha_tahseem_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a href="mailto:taaha2627@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </motion.div>

            <a className="scroll-hint" href="#about">
              <span />
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown size={14} />
            </a>
          </div>
        </section>

        {/* Areas of focus ticker */}
        <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="ticker-row" key={i}>
                <span>ARTIFICIAL INTELLIGENCE</span>
                <b>✳</b>
                <span>SOFTWARE ENGINEERING</span>
                <b>✳</b>
                <span>CREATIVE DEVELOPMENT</span>
                <b>✳</b>
                <span>ALWAYS LEARNING</span>
                <b>✳</b>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="section wrap" id="about">
          <motion.div
            className="section-kicker"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            01 / A LITTLE ABOUT ME
          </motion.div>

          <div className="about-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2>
                From intelligent models to {' '}
                <span className="gradient-text">
                  impactful products.
                </span>
              </h2>

              <div className="about-stamp">
                <Sparkles size={18} /> CURIOUS BY DEFAULT
              </div>
            </motion.div>

            <motion.div
              className="about-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p>
                I’m pursuing a B.Tech in Computer Science and Engineering
                (Artificial Intelligence and Machine Learning) at{' '}
                <strong>
                  Malla Reddy College of Engineering, Hyderabad
                </strong>
                . I’m drawn to the space where intelligent systems meet
                useful, accessible software.
              </p>

              <p>
                My recent work includes a full-stack resume analysis
                platform using React, FastAPI, and Supabase. Outside coding,
                I enjoy coordinating innovation initiatives, organizing
                industry-academia activities, and helping student teams
                move ideas toward prototypes.
              </p>

              <div className="about-facts">
                <div>
                  <GraduationCap />
                  <strong>2023–2027</strong>
                  <span>B.Tech · CSE (AI & ML)</span>
                </div>

                <div>
                  <Users />
                  <strong>25+ events</strong>
                  <span>Industry-academia activities</span>
                </div>

                <div>
                  <Rocket />
                  <strong>Builder</strong>
                  <span>Learn · Build · Improve</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
<section className="section projects-section" id="projects">
  <div className="wrap">
    <div className="section-heading">
      <div>
        <div className="section-kicker">02 / SELECTED PROJECTS</div>
        <h2>
          Small ideas.{' '}
          <span className="gradient-text">Real potential.</span>
        </h2>
      </div>

      <p>
        Projects that bring together engineering, experimentation,
        and practical problem-solving.
      </p>
    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <motion.article
          className={`project-card ${project.color}`}
          key={project.number}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={fadeUp}
          transition={{ delay: index * 0.12 }}
          whileHover={{ y: -8 }}
        >
          <div className="project-top">
            <span>{project.number} / FEATURED PROJECT</span>

            <a
              href={project.github || 'https://github.com/taaha2627'}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ArrowUpRight size={19} />
            </a>
          </div>

          {/* Project image or existing CSS illustration */}
          <div className={`project-visual ${project.visual}`}>
            {project.image ? (
              <img
                className="project-image"
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
              />
            ) : (
              <>
                {project.visual === 'resume' && (
                  <>
                    <div className="resume-paper">
                      <div className="paper-head">
                        <i />
                        <span />
                        <span />
                      </div>

                      <div className="paper-lines">
                        <i />
                        <i />
                        <i />
                        <i className="short" />
                      </div>

                      <div className="match-score">
                        87<small>%</small>
                      </div>

                      <b>SKILL MATCH</b>
                    </div>

                    <span className="visual-spark">✳</span>
                    <span className="visual-orbit" />
                  </>
                )}

                {project.visual === 'crop' && (
                  <>
                    <div className="sun" />
                    <div className="hill hill-back" />
                    <div className="hill hill-front" />

                    {[0, 1, 2, 3].map((n) => (
                      <i
                        className={`crop-stalk stalk-${n}`}
                        key={n}
                      />
                    ))}
                  </>
                )}

                {project.visual === 'leaf' && (
                  <>
                    <div className="leaf leaf-one" />
                    <div className="leaf leaf-two" />
                    <div className="leaf leaf-three" />
                    <div className="scan-ring" />

                    <span className="vision-label">
                      VISION
                      <br />
                      DETECTED
                    </span>
                  </>
                )}

                {project.visual === 'oil' && (
                  <>
                    <div className="sun" />
                    <div className="hill hill-back" />
                    <div className="hill hill-front" />
                    <div className="scan-ring" />

                    <span className="vision-label">
                      SAR
                      <br />
                      OIL SPILL
                    </span>
                  </>
                )}
              </>
            )}
          </div>

          <div className="project-type">{project.type}</div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-actions">
            <a
              className="project-link"
              href={project.github || 'https://github.com/taaha2627'}
              target="_blank"
              rel="noreferrer"
            >
              Explore on GitHub <ArrowUpRight size={15} />
            </a>

            {project.demo && (
              <a
                className="project-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                View live project <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>

  </div>
</section>

        
{/* Skills */}
<section className="section wrap skills-section" id="skills">
  <div className="section-kicker">03 / MY TOOLKIT</div>

  <div className="section-heading">
    <h2>
       Driven by innovation.
      <br />
      <span className="gradient-text">Built for Impact.</span>
    </h2>

    <p>
      Combining software fundamentals with an AI-first approach to
      problem-solving.
    </p>
  </div>

  {/* Main Skill Cards */}
  <div className="skills-grid">
    {skills.map((skill, index) => {
      const Icon = skill.icon;

      return (
        <motion.article
          className="skill-card"
          key={skill.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: index * 0.08 }}
          whileHover={{ y: -5 }}
        >
          <div className={`skill-icon skill-${index}`}>
            <Icon size={23} />
          </div>

          <h3>{skill.title}</h3>
          <p>{skill.text}</p>
          <ArrowUpRight className="skill-arrow" size={18} />
        </motion.article>
      );
    })}
  </div>

  {/* Technology Stack */}
  <div className="tech-stack">
    <span>TECH I WORK WITH</span>

    <div>
      {[
        'Python',
        'Java',
        'C',
        'React',
        'FastAPI',
        'Flask',
        'TensorFlow',
        'PyTorch',
        'scikit-learn',
        'Pandas',
        'NumPy',
        'SQL',
        'MongoDB',
        'Git',
        'Docker',
        'GCP',
      ].map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  </div>

  {/* Skill Categories - Replaces Percentage Bars */}
  <div className="skill-categories">
    <div className="skill-category-heading">
      <div className="section-kicker">CORE SKILL AREAS</div>
      <h3>Skills & Technologies</h3>
      <p>
        A collection of technologies and tools I use to build,
        experiment, and develop practical solutions.
      </p>
    </div>

    <div className="skill-category-grid">

      {/* AI & Machine Learning */}
      <motion.div
        className="skill-category-card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
      >
        <span className="category-number">01</span>
        <h4>AI & Machine Learning</h4>
        <p>
          Building intelligent solutions using machine learning
          algorithms, deep learning, and data processing.
        </p>

        <div className="skill-items">
          {[
            'Python',
            'TensorFlow',
            'PyTorch',
            'Scikit-learn',
            'Pandas',
            'NumPy',
            'Computer Vision',
            'NLP',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>

      {/* Full Stack Development */}
      <motion.div
        className="skill-category-card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
      >
        <span className="category-number">02</span>
        <h4>Full-Stack Development</h4>
        <p>
          Developing responsive web applications, backend services,
          and API-driven platforms.
        </p>

        <div className="skill-items">
          {[
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'FastAPI',
            'Flask',
            'REST APIs',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>

      {/* Databases & Tools */}
      <motion.div
        className="skill-category-card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
      >
        <span className="category-number">03</span>
        <h4>Databases & Tools</h4>
        <p>
          Working with databases, version control, and development
          tools for efficient application development.
        </p>

        <div className="skill-items">
          {[
            'SQL',
            'MongoDB',
            'Git',
            'GitHub',
            'VS Code',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>

      {/* Cloud & DevOps */}
      <motion.div
        className="skill-category-card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
      >
        <span className="category-number">04</span>
        <h4>Cloud & DevOps</h4>
        <p>
          Exploring cloud infrastructure, containerization,
          deployment, and development workflows.
        </p>

        <div className="skill-items">
          {[
            'Docker',
            'Google Cloud',
            'Supabase',
            'Vercel',
            'Render',
            'Deployment',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>


        
{/* Experience & Leadership */}
<section className="section wrap experience-section" id="experience">

  <div className="section-kicker">
    04 / EXPERIENCE & LEADERSHIP
  </div>

  <div className="experience-split">

    {/* Left introduction */}
    <div className="experience-left">
      <h2>
        Beyond code.
        <br />
        <span className="gradient-text">Into leadership.</span>
      </h2>

      <p>
        Creating opportunities, connecting people, and
        leading initiatives that bring innovation to life.
      </p>

      <div className="experience-total">
        <strong>03</strong>
        <span>LEADERSHIP ROLES</span>
      </div>

      <div className="experience-keywords">
        <span>INDUSTRY</span>
        <span>INNOVATION</span>
        <span>COMMUNITY</span>
      </div>
    </div>

    {/* Right experience list */}
    <div className="experience-right">

      <motion.article
        className="experience-row"
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="experience-row-top">
          <span>01</span>
          <small>2024 — PRESENT</small>
        </div>

        <h3>Lead Coordinator</h3>
        <h4>Industry Institute Interaction Cell (IIIC)</h4>

        <p>
          Organized 8+ industry-academia events,
          connecting 100+ students with company
          representatives and placement opportunities.
        </p>

        <div className="experience-result">
          <strong>8+</strong> Events organized
          <span>·</span>
          <strong>100+</strong> Students connected
        </div>
      </motion.article>

      <motion.article
        className="experience-row"
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="experience-row-top">
          <span>02</span>
          <small>2024 — PRESENT</small>
        </div>

        <h3>Lead Coordinator</h3>
        <h4>Institution's Innovation Council (IIC)</h4>

        <p>
          Led innovation workshops and startup ideation
          sessions, mentored 15+ student teams on
          prototype development, and supported two
          international conferences.
        </p>

        <div className="experience-result">
          <strong>15+</strong> Teams mentored
          <span>·</span>
          <strong>2</strong> Conferences
        </div>
      </motion.article>

      <motion.article
        className="experience-row"
        initial={{ opacity: 0, x: 25 }}
        whileInView= {{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="experience-row-top">
          <span>03</span>
          <small>2024 — 2026</small>
        </div>

        <h3>Associate Secretary</h3>
        <h4>PLEXUS CLUB</h4>

        <p>
          Managed club operations and communications,
          contributing to student engagement and activities
          for a community of 600+ students.
        </p>

        <div className="experience-result">
          <strong>600+</strong> Student community
        </div>
      </motion.article>

    </div>
  </div>
</section>


        {/* Education */}
<section className="section wrap education-section" id="education">
  <div className="section-kicker">05 / EDUCATION</div>

  <div className="education-list">
    {/* B.Tech Education */}
    <div className="education-card">
      <div className="education-icon">
        <GraduationCap size={28} />
      </div>

      <div className="education-copy">
        <span className="timeline-date">
          2023 — 2027 · IN PROGRESS
        </span>

        <h3>Bachelor of Technology</h3>

        <p>
          Computer Science & Engineering — Artificial Intelligence
          and Machine Learning
        </p>

        <strong>
          Malla Reddy College of Engineering · Hyderabad
        </strong>
      </div>

      <div className="education-badge">
        CGPA
        <b>
          7.0<span>/10</span>
        </b>
        <small>ONGOING</small>
      </div>
    </div>

    {/* Intermediate Education */}
    <div className="education-card">
      <div className="education-icon">
        <GraduationCap size={28} />
      </div>

      <div className="education-copy">
        <span className="timeline-date">
          Intermediate
        </span>

        <h3>Intermediate (MPC)</h3>

        <p>Physics, Chemistry, Mathematics</p>

        <strong>
          Sachdeva College of Excellence · Ramagundam
        </strong>
      </div>

      <div className="education-badge">
        Percentage
        <b>80%</b>
        <small>COMPLETED</small>
      </div>
      
    </div>
    {/* SSC */}
    <div className="education-card">
      <div className="education-icon">
        <GraduationCap size={28} />
      </div>

      <div className="education-copy">
        <span className="timeline-date">
          2020-2021
        </span>

        <h3>Secondary School Certificate</h3>

        <p>
          Completed SSC with a focus on Science and Mathematics
        </p>

        <strong>
          Sachdeva School of Excellence · Ramagundam
        </strong>
      </div>

      <div className="education-badge">
        CGPA
        <b>
          10.0<span>/10</span>
        </b>
        <small>COMPLETED</small>
      </div>
    </div>
  </div>
</section>

        {/* Achievements */}
        <section className="section awards-section" id="achievements">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  06 / ACHIEVEMENTS & HACKATHONS
                </div>

                <h2>
                  Show up.{' '}
                  <span className="gradient-text">Try things.</span>
                </h2>
              </div>

              <p>
                Learning through challenges, collaboration, and building
                under constraints.
              </p>
            </div>

            
<div className="achievements-grid">
  {achievements.map((item, index) => (
    <motion.article
      className="achievement-card"
      key={`${item.year}-${item.title}-${index}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <div className="achievement-top">
        <span className="achievement-icon">
          <Award size={21} />
        </span>
        <span className="achievement-year">{item.year}</span>
      </div>

      <span className="achievement-category">
        {item.category}
      </span>

      <h3>{item.title}</h3>

      <div className="achievement-event">
        {item.event}
      </div>

      <div className="achievement-venue">
        <MapPin size={14} />
        <span>{item.venue}</span>
      </div>

      <p className="achievement-description">
        {item.description}
      </p>
    </motion.article>
  ))}
</div>

          </div>
        </section>

        {/* Certifications */}
<section
  className="section wrap cert-section"
  id="certifications"
>
  <div className="section-heading">
    <div>
      <div className="section-kicker">
        07 / CERTIFICATIONS
      </div>

      <h2>
        Always in{' '}
        <span className="gradient-text">
          learning mode.
        </span>
      </h2>
    </div>

    <p>
      Professional certifications organized by issuing
      organization, highlighting my continuous learning
      in AI, machine learning, cybersecurity, and data analytics.
    </p>
  </div>

  <div className="certification-groups">
    {certificationGroups.map((group, groupIndex) => (
      <motion.div
        className="certification-group"
        key={group.organization}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        transition={{ delay: groupIndex * 0.1 }}
      >
        {/* Organization heading and logo */}
        <div className="certification-group-heading">
          <div className="certification-org">
            <img
              className="certification-org-logo"
              src={group.logo}
              alt={`${group.organization} logo`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <div className="certification-org-info">
              <span className="certification-category">
                {group.category}
              </span>

              <h3>{group.organization}</h3>
            </div>
          </div>

          <span className="certification-count">
            {group.certificates.length}{' '}
            {group.certificates.length === 1
              ? 'CERTIFICATE'
              : 'CERTIFICATES'}
          </span>
        </div>

        {/* Certificates issued by this organization */}
        <div className="cert-grid">
          {group.certificates.map((certificate) => (
            <article
              className="cert-card"
              key={certificate}
            >
              <div
                className={`cert-icon cert-${groupIndex % 3}`}
              >
                <Award size={20} />
              </div>

              <div className="cert-card-copy">
                <span>{group.organization}</span>
                <h4>{certificate}</h4>
              </div>

              <Star
                size={16}
                className="cert-star"
              />
            </article>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>

        {/* Contact */}
        <section className="contact-section wrap" id="contact">
          <div className="contact-card">
            <div className="contact-deco deco-one">✳</div>
            <div className="contact-deco deco-two">✦</div>

            <div className="section-kicker">08 / YOUR TURN</div>

            <h2>
              Have a good idea?
              <br />
              <span>Let’s build it together.</span>
            </h2>

            <p>
              Open to software engineering and AI/ML internships,
              collaborations, and interesting problems worth solving.
            </p>

            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    required
                    value={contact.name}
                    onChange={(event) =>
                      setContact({
                        ...contact,
                        name: event.target.value,
                      })
                    }
                    placeholder="Your name"
                  />
                </label>

                <label>
                  Your email
                  <input
                    required
                    type="email"
                    value={contact.email}
                    onChange={(event) =>
                      setContact({
                        ...contact,
                        email: event.target.value,
                      })
                    }
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label>
                Your message
                <textarea
                  required
                  rows="4"
                  value={contact.message}
                  onChange={(event) =>
                    setContact({
                      ...contact,
                      message: event.target.value,
                    })
                  }
                  placeholder="Tell me about your idea or opportunity…"
                />
              </label>

              <button className="button button-dark" type="submit">
                Send message <Send size={16} />
              </button>

              {formNotice && (
                <p className="form-notice">
                  <CheckCircle2 size={15} />
                  {formNotice}
                </p>
              )}
            </form>

            <div className="contact-links">
              <a href="mailto:taaha2627@gmail.com">
                <Mail size={16} /> taaha2627@gmail.com
              </a>

              <a
                href="https://github.com/taaha2627"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-taaha-tahseem-589235354/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>

              <a
                href="https://www.instagram.com/taaha_tahseem_/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer wrap">
        <a className="brand" href="#home">
          <span className="brand-copy">
            <strong className="brand-full-name">
              Mohammed Taaha Tahseem
            </strong>
            <small>AI · SOFTWARE · IDEAS</small>
          </span>
        </a>

        <span>
          Designed with curiosity <Heart size={13} /> and a little
          creativity.
        </span>

        <div className="footer-socials">
          <a
            href="https://github.com/taaha2627"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-taaha-tahseem-589235354/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>

          <a
            href="https://www.instagram.com/taaha_tahseem_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={17} />
          </a>

          <a href="mailto:taaha2627@gmail.com" aria-label="Email">
            <Mail size={17} />
          </a>
        </div>

        <span>© {new Date().getFullYear()} Mohammed Taaha Tahseem</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
