import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiBell,
  FiChevronRight,
  FiEye,
  FiGlobe,
  FiMonitor,
  FiShoppingBag,
  FiSun,
  FiX,
  FiBookOpen,
  FiFigma,
  FiCheckCircle,
  FiExternalLink
} from 'react-icons/fi';
import SignIn, { AcornLogo } from './Auth/SignIn';
import SignUp from './Auth/SignUp';

const AcornShowcase = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('figma'); // 'view' | 'figma' | 'docs' | 'purchase'
  const [activeModal, setActiveModal] = useState(null); // 'login' | 'signup' | 'docs' | 'figma' | 'purchase' | null
  const [purchasePlan, setPurchasePlan] = useState(null);

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    if (sectionId === 'docs') {
      setActiveModal('docs');
    } else if (sectionId === 'figma') {
      setActiveModal('figma');
    } else if (sectionId === 'purchase') {
      const element = document.getElementById('pricing');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setActiveModal('purchase');
      }
    } else if (sectionId === 'view') {
      const element = document.getElementById('showcase-hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePurchase = (planName, price) => {
    setPurchasePlan({ name: planName, price });
    setActiveModal('purchase');
  };

  return (
    <div className="relative min-h-screen bg-[#151d27] text-[#eef3f9] font-sans overflow-x-hidden">
      {/* Drawer Sidebar Overlay (Image 1) */}
      {drawerOpen && (
        <aside className="fixed top-0 left-0 bottom-0 w-64 bg-[#1a1d24] z-50 border-r border-white/10 p-6 flex flex-col shadow-2xl transition-all">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <AcornLogo size={26} />
              <span className="bg-[#1a3854] text-[#38bdf8] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#38bdf8]/30">
                VITE
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-[#9ca3af] hover:text-white p-1 cursor-pointer transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-left text-sm font-semibold">
            <button
              onClick={() => handleNavClick('view')}
              className={`text-left transition-colors cursor-pointer ${
                activeNav === 'view' ? 'text-[#38bdf8]' : 'text-white hover:text-[#38bdf8]'
              }`}
            >
              View
            </button>
            <button
              onClick={() => handleNavClick('figma')}
              className={`text-left transition-colors cursor-pointer ${
                activeNav === 'figma' ? 'text-[#38bdf8]' : 'text-white hover:text-[#38bdf8]'
              }`}
            >
              Figma
            </button>
            <button
              onClick={() => handleNavClick('docs')}
              className={`text-left transition-colors cursor-pointer ${
                activeNav === 'docs' ? 'text-[#38bdf8]' : 'text-white hover:text-[#38bdf8]'
              }`}
            >
              Docs
            </button>
            <button
              onClick={() => handleNavClick('purchase')}
              className={`text-left transition-colors cursor-pointer ${
                activeNav === 'purchase' ? 'text-[#38bdf8]' : 'text-white hover:text-[#38bdf8]'
              }`}
            >
              Purchase
            </button>
            <button
              onClick={() => navigate('/auth/sign-in')}
              className="text-[#38bdf8] hover:text-cyan-300 font-semibold text-left transition-colors cursor-pointer pt-2 border-t border-white/10"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/auth/sign-up')}
              className="text-[#38bdf8] hover:text-cyan-300 font-semibold text-left transition-colors cursor-pointer"
            >
              Signup
            </button>
          </nav>
        </aside>
      )}

      {/* Main Page Shell */}
      <div className={`transition-all ${drawerOpen ? 'pl-0 sm:pl-64' : 'pl-0'}`}>
        <div className="page-shell">
          {/* Topbar Navigation */}
          <header className="topbar">
            <div className="brand-wrap">
              {!drawerOpen && (
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="mr-2 text-white/70 hover:text-white cursor-pointer"
                  title="Open menu"
                >
                  ☰
                </button>
              )}
              <div className="brand-mark">
                <span className="brand-dot" />
              </div>
              <span className="brand-name">Acorn</span>
            </div>

            <nav className="main-nav" aria-label="Main navigation">
              <button
                onClick={() => handleNavClick('view')}
                className={activeNav === 'view' ? 'text-[#38bdf8] font-bold' : ''}
              >
                View
              </button>
              <button
                onClick={() => handleNavClick('figma')}
                className={activeNav === 'figma' ? 'text-[#38bdf8] font-bold' : ''}
              >
                Figma
              </button>
              <button
                onClick={() => handleNavClick('docs')}
                className={activeNav === 'docs' ? 'text-[#38bdf8] font-bold' : ''}
              >
                Docs
              </button>
              <button
                onClick={() => handleNavClick('purchase')}
                className={activeNav === 'purchase' ? 'text-[#38bdf8] font-bold' : ''}
              >
                Purchase
              </button>
            </nav>

            <div className="nav-actions">
              <button onClick={() => navigate('/auth/sign-in')} className="text-button">
                Login
              </button>
              <button onClick={() => navigate('/auth/sign-up')} className="primary-button">
                Signup
              </button>
            </div>
          </header>

          {/* Hero Showcase Section */}
          <main id="showcase-hero" className="showcase">
            <section className="hero-copy">
              <h1>
                Elegant
                <br />
                Progressive
                <br />
                UI Kit
              </h1>

              <p>
                Components, plugins, blocks, and layouts built with
                <br />
                MUI styled with Tailwind, and packaged with Vite in
                <br />
                a beautiful harmony.
              </p>

              <div className="cta-row">
                <button onClick={() => navigate('/auth/sign-in')} className="primary-button large-button">
                  <span className="icon-wrap">
                    <FiEye />
                  </span>
                  View Live
                </button>
                <button onClick={() => handleNavClick('purchase')} className="secondary-button large-button">
                  <span className="icon-wrap">
                    <FiShoppingBag />
                  </span>
                  Purchase
                </button>
              </div>
            </section>

            {/* Dashboard Showcase Preview */}
            <aside className="dashboard-panel" aria-label="Dashboard preview">
              <div className="mini-card earnings-card">
                <div className="card-row">
                  <span className="label">Earnings - Thu</span>
                  <span className="trend-pill">$340</span>
                  <span className="trend-up">▲ 183.3%</span>
                </div>
                <svg viewBox="0 0 220 80" className="sparkline" aria-label="Earnings chart">
                  <path d="M0 68 C25 62, 42 58, 62 60 S96 30, 125 43 S170 25, 220 18" />
                </svg>
              </div>

              <div className="mini-card cat-card">
                <div className="cat-art" aria-label="Cat illustration">
                  <svg viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="catBg" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#f5d8b3" />
                        <stop offset="100%" stopColor="#d7ad7a" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="220" height="150" rx="18" fill="#1a1f2a" />
                    <path d="M32 58 L62 10 L86 52 Z" fill="#e6c29b" />
                    <path d="M188 58 L158 10 L134 52 Z" fill="#e6c29b" />
                    <path d="M58 50 Q110 0 162 50" fill="url(#catBg)" />
                    <path d="M60 94 Q110 120 160 94" fill="#f5d8b3" />
                    <path d="M92 60 L70 97 Q82 115 104 104 L112 76 Z" fill="#f5d8b3" />
                    <path d="M128 60 L150 97 Q138 115 116 104 L108 76 Z" fill="#f5d8b3" />
                    <circle cx="86" cy="78" r="6" fill="#231f20" />
                    <circle cx="134" cy="78" r="6" fill="#231f20" />
                    <path d="M100 90 Q110 98 120 90" stroke="#231f20" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M110 82 L110 95" stroke="#231f20" strokeWidth="4" strokeLinecap="round" />
                    <path d="M90 100 C102 108, 118 108, 130 100" stroke="#e59a82" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="settings-card">
                <div className="setting-row">
                  <span className="setting-label">
                    <FiMonitor />
                    <span>Mode</span>
                  </span>
                  <span className="setting-value">System</span>
                  <FiChevronRight />
                </div>
                <div className="setting-row">
                  <span className="setting-label">
                    <FiSun />
                    <span>Theme</span>
                  </span>
                  <span className="setting-value">Blue</span>
                  <FiChevronRight />
                </div>
                <div className="setting-row">
                  <span className="setting-label">
                    <FiGlobe />
                    <span>Language</span>
                  </span>
                  <span className="setting-value">English</span>
                  <FiChevronRight />
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-row">
                  <div className="avatar" aria-label="Profile avatar" />
                  <div className="profile-meta">
                    <div className="profile-name">Laura Ellis</div>
                    <div className="profile-role">Frontend Developer</div>
                  </div>
                  <span className="status-status">Following</span>
                </div>

                <div className="location-row">
                  <span className="location-item">
                    <span className="dot" />
                    Cologne, Germany
                  </span>
                </div>
                <div className="location-row muted-row">
                  <span className="location-item">
                    <span className="dot" />
                    Not Specified
                  </span>
                </div>
              </div>

              <div className="bottom-row">
                <div className="mini-card metrics-card">
                  <div className="card-title-wrap">
                    <span className="metric-icon">
                      <FiBell />
                    </span>
                    <span className="card-title">Track Metrics</span>
                  </div>
                  <div className="card-subtitle">Analytics tool for products</div>
                  <div className="donut-wrap">
                    <div className="donut-graph">
                      <span>43%</span>
                    </div>
                  </div>
                </div>

                <div className="mini-card orders-card">
                  <div className="card-row compact-row">
                    <span className="label">Orders - Wed</span>
                    <span className="trend-pill">163</span>
                    <span className="trend-up">▲ 132.9%</span>
                  </div>

                  <div className="digit-bars" aria-label="Orders bar chart">
                    <span style={{ height: '38%' }} />
                    <span style={{ height: '58%' }} />
                    <span style={{ height: '45%' }} />
                    <span style={{ height: '80%' }} />
                    <span style={{ height: '66%' }} />
                    <span style={{ height: '92%' }} />
                    <span style={{ height: '72%' }} />
                    <span style={{ height: '56%' }} />
                  </div>
                </div>
              </div>
            </aside>
          </main>

          {/* Acorn at a Glance Section */}
          <section id="figma" className="glance-section">
            <h2>Acorn at a Glance</h2>
            <p>
              Acorn has industry-standard tools, beautiful design, and modular technology to deliver a quick starting point for your next project.
            </p>

            <div className="glance-grid">
              <div className="glance-left">
                <div className="feature-item cursor-pointer" onClick={() => setActiveModal('figma')}>
                  <div className="feature-icon harmony">
                    <span>✦</span>
                  </div>
                  <div className="feature-copy">
                    <h3>Harmony</h3>
                    <p>The styling is consistent through the app to allow easy branding and customization.</p>
                  </div>
                </div>

                <div className="feature-item cursor-pointer" onClick={() => setActiveModal('figma')}>
                  <div className="feature-icon design">
                    <span>◌</span>
                  </div>
                  <div className="feature-copy">
                    <h3>Figma Design Kit</h3>
                    <p>Over 150 pages packed with reusable components, variables and styles in Figma.</p>
                  </div>
                </div>

                <div className="feature-item cursor-pointer" onClick={() => setActiveModal('docs')}>
                  <div className="feature-icon code">
                    <span>{'<'}/{'>'}</span>
                  </div>
                  <div className="feature-copy">
                    <h3>Code Documentation</h3>
                    <p>It is built on top of React, Typescript and MUI. Quick to start, easy to extend.</p>
                  </div>
                </div>
              </div>

              <div className="glance-card">
                <div className="panel-header">
                  <div className="up-arrow">↑</div>
                  <div className="panel-label">Ask Me: I'm a Space Engineer</div>
                  <div className="down-arrow">↓</div>
                </div>

                <div className="stats-row">
                  <div className="metric-box">
                    <span className="metric-label">280</span>
                  </div>
                  <div className="mini-projects">
                    <div className="mini-projects-head">
                      <span>Tours</span>
                      <span className="mini-badge">452</span>
                      <span className="mini-trend">2.4%</span>
                    </div>
                  </div>
                </div>

                <div className="cats-row">
                  <div className="cat-figure a">
                    <div className="cat-shape"></div>
                  </div>
                  <div className="cat-figure b">
                    <div className="cat-shape"></div>
                  </div>
                </div>

                <div className="quote-box">
                  <div className="pill-row">
                    <span>Drinks</span>
                    <span>Food</span>
                  </div>
                  <p>
                    everyone! I am a space engineer for designing systems for Mars exploration. My work involves creating technologies that can withstand extreme conditions, like the atmosphere and freezing temperatures on Mars.
                  </p>
                </div>

                <div className="author-row">
                  <div className="author-avatar" />
                  <span>Daniel Fontaine</span>
                  <div className="social-row">
                    <span>♡</span>
                    <span>◌</span>
                    <span>◍</span>
                    <span>◔</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Backbone of Acorn Section */}
          <section id="docs" className="technology-section">
            <h2>The Backbone of Acorn</h2>
            <p>
              Our application is powered by a carefully selected set of modern technologies that ensure stability, scalability, and performance.
            </p>

            <div className="technology-grid">
              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon react">◌</div>
                <div className="tech-head">
                  <h3>React</h3>
                  <span>19.2.6</span>
                </div>
                <p>React is a JavaScript library for building web applications and native user interfaces.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon ts">TS</div>
                <div className="tech-head">
                  <h3>Typescript</h3>
                  <span>5.8.3</span>
                </div>
                <p>TypeScript is a superset of JavaScript that compiles to clean JavaScript output.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon mui">M</div>
                <div className="tech-head">
                  <h3>MUI</h3>
                  <span>9.0.1</span>
                </div>
                <p>Comprehensive React component library that implements Google&apos;s Material Design.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon tailwind">≈</div>
                <div className="tech-head">
                  <h3>Tailwind</h3>
                  <span>4.2.2</span>
                </div>
                <p>A utility-first CSS framework for building modern websites without ever leaving your HTML.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon formik">◈</div>
                <div className="tech-head">
                  <h3>Formik</h3>
                  <span>2.4.6</span>
                </div>
                <p>Formik is the world&apos;s most popular open source form library for React and React Native.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon vite">V</div>
                <div className="tech-head">
                  <h3>Vite</h3>
                  <span>8.0.9</span>
                </div>
                <p>Vite is a blazing fast frontend build tool powering the next generation of web applications.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon eslint">◐</div>
                <div className="tech-head">
                  <h3>ESLint</h3>
                  <span>9.29.0</span>
                </div>
                <p>ESLint is an open source project that helps you find and fix problems with your JavaScript code.</p>
              </article>

              <article className="tech-card cursor-pointer" onClick={() => setActiveModal('docs')}>
                <div className="tech-icon prettier">◫</div>
                <div className="tech-head">
                  <h3>Prettier</h3>
                  <span>3.5.3</span>
                </div>
                <p>Enforces a consistent style by parsing your code and re-printing it with its own rules.</p>
              </article>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="pricing-section">
            <h2>Pricing</h2>
            <p>The Regular License fits most needs. The Extended License is only required for SaaS applications.</p>

            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-icon standard">⊙</div>
                <h3>Standard License</h3>
                <div className="price">$24</div>
                <p className="price-desc">The Regular License fits most needs and comes with all the design and code files.</p>
                <button onClick={() => handlePurchase('Standard License', '$24')} className="purchase-btn">Purchase</button>

                <ul className="features-list">
                  <li><span className="check-icon">✓</span> Future updates</li>
                  <li><span className="check-icon">✓</span> 6 months support from the author</li>
                  <li><span className="check-icon">✓</span> Main project and starter project</li>
                  <li><span className="check-icon">✓</span> Landing page</li>
                  <li><span className="check-icon">✓</span> Lifetime license</li>
                  <li><span className="check-icon">✓</span> Design files (Figma)</li>
                  <li><span className="check-icon">✓</span> Usable in a single end product</li>
                </ul>
              </div>

              <div className="pricing-card extended">
                <div className="pricing-icon extended-icon">⊙</div>
                <h3>Extended License</h3>
                <div className="price">$800</div>
                <p className="price-desc">The license for SaaS usage. It has all the features of the Standard License.</p>
                <button onClick={() => handlePurchase('Extended License', '$800')} className="purchase-btn extended-btn">Purchase</button>

                <ul className="features-list">
                  <li><span className="check-icon">✓</span> Future updates</li>
                  <li><span className="check-icon">✓</span> 6 months support from the author</li>
                  <li><span className="check-icon">✓</span> Main project and starter project</li>
                  <li><span className="check-icon">✓</span> Landing page</li>
                  <li><span className="check-icon">✓</span> Lifetime license</li>
                  <li><span className="check-icon">✓</span> Design files (Figma)</li>
                  <li><span className="check-icon">✓</span> Usable in a single end product</li>
                  <li><span className="check-icon">✓</span> Commercial and SaaS applications</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Modal Overlays for Login, Signup, Docs, Figma, Purchase */}
      {activeModal === 'login' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-[440px]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#38bdf8] text-sm font-bold cursor-pointer"
            >
              ✕ Close
            </button>
            <SignIn />
          </div>
        </div>
      )}

      {activeModal === 'signup' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-[440px]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#38bdf8] text-sm font-bold cursor-pointer"
            >
              ✕ Close
            </button>
            <SignUp />
          </div>
        </div>
      )}

      {/* Docs Modal */}
      {activeModal === 'docs' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#18191e] border border-[#272932] rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#38bdf8]/10 text-[#38bdf8] rounded-2xl">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Acorn Documentation</h2>
                <p className="text-xs text-gray-400">Complete setup & architecture guide</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 border-t border-white/10 pt-4">
              <div>
                <h3 className="font-bold text-white text-sm mb-1">🚀 Quickstart</h3>
                <p className="bg-[#121317] p-3 rounded-xl font-mono text-cyan-400 border border-white/5">
                  npm install && npm start
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm mb-1">📦 Stack Architecture</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>React 19 + React Router v7</strong>: Modern component structure and layout routing.</li>
                  <li><strong>Tailwind CSS 3.4</strong>: Custom Acorn theme variables and responsive utilities.</li>
                  <li><strong>Authentication System</strong>: Sign In & Sign Up pages matching exact design specs.</li>
                  <li><strong>Context Providers</strong>: Sidebar, Notification, and Theme Contexts.</li>
                </ul>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-5 py-2.5 bg-[#38bdf8] hover:bg-[#0284c7] text-white font-semibold rounded-xl text-xs transition-all cursor-pointer"
                >
                  Explore Admin Dashboard &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Figma Modal */}
      {activeModal === 'figma' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#18191e] border border-[#272932] rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-4">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl">
                <FiFigma className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Acorn Figma UI Kit</h2>
                <p className="text-xs text-gray-400">150+ components, styles & dark mode tokens</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-400" />
                <span>Over 150+ responsive pages & dashboard templates</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-400" />
                <span>Complete Dark & Light mode color variable systems</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-400" />
                <span>Auto-layout ready components and icon vectors</span>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <a
                  href="https://figma.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-xs transition-all cursor-pointer flex items-center gap-2"
                >
                  Open in Figma <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Purchase Modal */}
      {activeModal === 'purchase' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#18191e] border border-[#272932] rounded-3xl p-6 sm:p-8 text-center shadow-2xl space-y-4">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="w-12 h-12 bg-[#38bdf8]/10 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>

            <h2 className="text-xl font-bold text-white">
              Purchase {purchasePlan?.name || 'Acorn License'}
            </h2>

            <div className="text-3xl font-extrabold text-[#38bdf8]">
              {purchasePlan?.price || '$24'}
            </div>

            <p className="text-xs text-gray-400">
              Instant access to all source code, Figma design files, lifetime updates, and author support.
            </p>

            <div className="pt-3">
              <button
                onClick={() => {
                  alert(`Thank you for selecting ${purchasePlan?.name || 'Acorn'}! Redirecting to checkout...`);
                  setActiveModal(null);
                }}
                className="w-full py-3 bg-[#38bdf8] hover:bg-[#0284c7] text-white font-bold rounded-full text-sm transition-all shadow-lg shadow-[#38bdf8]/20 cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcornShowcase;
