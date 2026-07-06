import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ── Small icon set used inside project descriptions (no emojis) ──────────────
const Icon = {
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path strokeLinecap="round" d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5" />
      <path strokeLinecap="round" d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 12h6M9 16h6" />
    </svg>
  ),
  graph: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path strokeLinecap="round" d="M8.2 7.2L10.5 15.8M15.8 7.2L13.5 15.8M8.5 6h7" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l9 5 9-5M3 8l9 5 9-5" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      <circle cx="18" cy="9" r="2.3" />
      <path strokeLinecap="round" d="M15.5 14.2c2.6.4 4.5 2.5 4.5 5.8" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-2 6-6 2 2-6 6-2z" />
    </svg>
  ),
  cluster: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="17" r="2.2" />
      <circle cx="19" cy="17" r="2.2" />
      <path strokeLinecap="round" d="M12 7.2V12M12 12L6.5 15.3M12 12l5.5 3.3" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="4" r="2" />
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path strokeLinecap="round" d="M12 6v3M6.6 13.2L10.5 18M17.4 13.2L13.5 18M6.9 11L10.5 6M17.1 11L13.5 6" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path strokeLinecap="round" d="M8 20h8M12 16v4" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="3.5" y="4" width="17" height="6" rx="1.2" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.2" />
      <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  ),
};

// Mock data for projects — replace/extend screenshot URLs and descriptions as needed.
const projectData = {
  1: {
    title: 'SENTIX',
    category: 'AI / ML Platform',
    accent: '#A855F7',
    screenshots: [
      '/Projects/sentix/Sentix01.jpg',
      '/Projects/sentix/Sentix02.jpg',
      '/Projects/sentix/Sentix03.jpg',
      '/Projects/sentix/Sentix04.jpg',
      '/Projects/sentix/Sentix05.jpg',
      '/Projects/sentix/Sentix06.jpg',
      '/Projects/sentix/Sentix07.jpg',
      '/Projects/sentix/Sentix08.jpg',
      '/Projects/sentix/Sentix09.jpg'
    ],
    description: {
      tagline: 'A sentiment-aware movie recommendation and social discovery platform, engineered on a polyglot persistence architecture.',
      overview:
        "Sentix reimagines movie discovery as a social, data-driven experience. Rather than forcing every kind of data through a single database, the system routes each workload to the engine best suited for it — relational integrity for accounts, a flexible document store for reviews, a graph database for social taste-matching, and an in-memory layer for anything that needs to respond instantly. The result is a platform that recommends what to watch by understanding both what a user likes and who they trust.",
      architectureTitle: 'Polyglot Persistence Architecture',
      architectureIcon: Icon.layers,
      architecture: [
        {
          name: 'PostgreSQL',
          icon: Icon.database,
          role: 'User accounts, master movie records, and every relationship that demands strict, ACID-compliant integrity.',
        },
        {
          name: 'MongoDB',
          icon: Icon.document,
          role: 'A schema-flexible store for text-heavy reviews, keeping large, evolving payloads out of the relational layer.',
        },
        {
          name: 'Neo4j',
          icon: Icon.graph,
          role: 'Friend networks, ratings, and watch intents modeled as a graph, powering fast, multi-hop recommendation queries.',
        },
        {
          name: 'Redis',
          icon: Icon.bolt,
          role: 'An in-memory cache for session state and watchlist lookups, keeping frequent reads off the disk entirely.',
        },
      ],
      engineTitle: 'Recommendation Engine',
      engineIcon: Icon.compass,
      engine: [
        {
          title: '"For You" Feed',
          icon: Icon.target,
          strategy: 'User-based collaborative filtering with a global trending fallback.',
          points: [
            'Finds highly-rated titles in a user\'s history, then locates other users who rated the exact same films just as highly.',
            'Ranks those "look-alike" viewers by taste overlap and surfaces what they loved that this user hasn\'t seen yet.',
            'Falls back to platform-wide top performers whenever personal signal is too sparse to fill the feed.',
          ],
        },
        {
          title: 'Friends Are Watching',
          icon: Icon.users,
          strategy: 'Social discovery with a time-decayed trending fallback.',
          points: [
            'Checks a user\'s active friendships and surfaces titles their friends have flagged as want-to-watch.',
            'Blends in 30-day platform trends when a friend circle is small, so the feed never feels empty.',
          ],
        },
        {
          title: 'Because You Watched',
          icon: Icon.cluster,
          strategy: 'Content-based filtering using Jaccard similarity.',
          points: [
            'Extracts the genres, keywords, cast, and directors behind a user\'s favorite titles.',
            'Scores every other title by shared attributes over combined attributes, surfacing the closest structural matches.',
          ],
        },
        {
          title: 'Trending',
          icon: Icon.trend,
          strategy: 'Interaction density with time-decayed sentiment.',
          points: [
            'Weighs recent rating volume against average score to separate genuine buzz from noise.',
            'Applies a cold-start factor so new titles are never permanently buried beneath established blockbusters.',
          ],
        },
        {
          title: 'Friend Recommendations',
          icon: Icon.network,
          strategy: 'Social centrality and heuristic scoring.',
          points: [
            'Traverses the graph two hops out to surface mutual connections who aren\'t friends yet.',
            'Ranks candidates by a weighted score of mutual friends, network size, and review activity.',
          ],
        },
      ],
      stack: ['React', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Redis', 'SQLAlchemy (Async)'],
    },
  },
  2: {
    title: 'AERO',
    category: 'Database Systems',
    accent: '#00A896',
    screenshots: [
      '/Projects/aero/Aero01.jpeg',
      '/Projects/aero/Aero02.jpeg',
      '/Projects/aero/Aero03.jpeg',
      '/Projects/aero/Aero04.jpeg',
      '/Projects/aero/Aero05.jpeg',
      '/Projects/aero/Aero06.jpeg',
      '/Projects/aero/Aero07.jpeg',
      '/Projects/aero/Aero08.jpeg',
      '/Projects/aero/Aero09.jpeg',
      '/Projects/aero/Aero10.jpeg'
    ],
    description: {
      tagline: 'A polyglot, self-healing airline backend that balances strict transactional booking with real-time routing and telemetry.',
      overview:
        "AERO is a distributed airline database system built to resolve a common conflict in aviation platforms: the need for airtight, ACID-compliant bookings alongside fast, flexible route search and live tracking. Instead of forcing one database to handle every workload, the system splits responsibilities across four specialized engines, containerized with Docker and synchronized automatically at startup. The result is a backend that prevents double-booked seats, calculates multi-hop layovers in milliseconds, and streams live aircraft positions without ever slowing down the booking core.",
      architectureTitle: 'Polyglot Persistence Strategy',
      architectureIcon: Icon.layers,
      architecture: [
        {
          name: 'PostgreSQL — The Vault',
          icon: Icon.database,
          role: 'The geographically-sharded source of truth for bookings, payments, and passenger data, partitioned by region to keep query load localized.',
        },
        {
          name: 'Neo4j — The Navigator',
          icon: Icon.graph,
          role: 'Airports as nodes and flights as edges, enabling cheapest- and fastest-path routing across multi-hop connections without costly SQL joins.',
        },
        {
          name: 'MongoDB — The Tracker',
          icon: Icon.document,
          role: 'A schema-less store for high-throughput live aircraft telemetry, kept fully decoupled from the transactional core.',
        },
        {
          name: 'Redis — The Accelerator',
          icon: Icon.bolt,
          role: 'An in-memory layer that caches routing queries and holds distributed locks to prevent seat-booking race conditions.',
        },
      ],
      engineTitle: 'Core Backend Functionalities',
      engineIcon: Icon.compass,
      engine: [
        {
          title: 'Transactional Booking Engine',
          icon: Icon.shield,
          strategy: 'ACID-compliant reservations with automatic rollback.',
          points: [
            'Opens an atomic transaction per booking, resolving the correct regional shard before validating seats and calculating price.',
            'Rolls back automatically on any failure, such as a payment error, so no partial booking is ever persisted.',
          ],
        },
        {
          title: 'Distributed Seat Locking',
          icon: Icon.bolt,
          strategy: 'Redis-backed locks that eliminate double-booking races.',
          points: [
            'Writes a temporary lock the instant a seat is selected, rejecting a second buyer with a conflict response in under a millisecond.',
            'Keeps the lock check entirely in Redis, so contested seats never touch the relational database until checkout is confirmed.',
          ],
        },
        {
          title: 'Advanced Flight Routing',
          icon: Icon.network,
          strategy: 'Graph-native pathfinding across the flight network.',
          points: [
            'Resolves cheapest and fastest multi-hop routes directly in Neo4j, avoiding expensive relational joins entirely.',
            'Enforces chronological layover validity, so a connecting leg can never depart before the prior one lands.',
          ],
        },
        {
          title: 'Live Flight Tracker',
          icon: Icon.trend,
          strategy: 'Real-time telemetry streamed over WebSockets.',
          points: [
            'A background scheduler retires completed flights, prunes their routing edge, and injects live coordinates into MongoDB.',
            'The frontend receives continuous position updates over WebSockets without ever polling the core booking database.',
          ],
        },
        {
          title: 'Flight Search Caching',
          icon: Icon.target,
          strategy: 'Redis-cached routes for instant repeat searches.',
          points: [
            'Caches expensive graph pathfinding results for 60 seconds, serving repeat searches instantly on a cache hit.',
            'Falls back to a fresh Neo4j query on a miss, then writes the result back to the cache for the next request.',
          ],
        },
      ],
      stack: ['React', 'FastAPI', 'PostgreSQL (Sharded)', 'Neo4j', 'MongoDB', 'Redis', 'Docker'],
    },
  },
  3: {
    title: 'SAGE',
    category: 'AI / ML Platform',
    accent: '#8B5CF6',
    screenshots: [
      '/Projects/sage/Sage01.jpeg',
      '/Projects/sage/Sage02.jpeg',
      '/Projects/sage/Sage03.jpeg',
      '/Projects/sage/Sage04.jpeg',
      '/Projects/sage/Sage05.jpeg',
      '/Projects/sage/Sage06.jpeg',
      '/Projects/sage/Sage07.jpeg',
      '/Projects/sage/Sage08.jpeg'
    ],
    description: {
      tagline: 'A multi-agent Retrieval-Augmented Generation assistant delivering grounded, domain-specific support for Samsung appliances.',
      overview:
        "SAGE (Search Augmented Generation Engine) is a domain-specific conversational assistant built for Samsung appliance support. Instead of relying on a single retrieval method, it routes each query through a purpose-built agent — document retrieval, structured SQL, or analytical computation — coordinated by a supervisor and orchestrated with LangGraph. Guardrails, hybrid search, and continuous evaluation work together to keep answers grounded, relevant, and free of hallucination.",
      architectureTitle: 'Layered System Architecture',
      architectureIcon: Icon.layers,
      architecture: [
        {
          name: 'Presentation Layer',
          icon: Icon.monitor,
          role: 'A React interface for streaming chat responses, rendering charts, and displaying citations over WebSockets.',
        },
        {
          name: 'Application Layer',
          icon: Icon.server,
          role: 'A FastAPI service that handles routing, request handling, and orchestration between the interface and the agents.',
        },
        {
          name: 'Intelligence Layer',
          icon: Icon.graph,
          role: 'A LangGraph-orchestrated core responsible for query understanding, agent routing, and response validation.',
        },
        {
          name: 'Data Layer',
          icon: Icon.database,
          role: 'SQLite for structured product data, ChromaDB for vector search, and BM25 indexes for keyword retrieval.',
        },
      ],
      engineTitle: 'Multi-Agent Workflow',
      engineIcon: Icon.compass,
      engine: [
        {
          title: 'Supervisor Agent',
          icon: Icon.shield,
          strategy: 'Query classification and guardrail enforcement.',
          points: [
            'Filters out competitor and off-topic requests before they reach any downstream agent.',
            'Classifies each query into SQL, retrieval, Python, or conversational routes to decide what happens next.',
          ],
        },
        {
          title: 'Retrieval Agent',
          icon: Icon.target,
          strategy: 'Hybrid search across dense vectors and keyword indexes.',
          points: [
            'Blends semantic vector search with BM25 keyword matching, merged through reciprocal rank fusion.',
            'Uses parent-child chunking so retrieval stays precise without losing surrounding context.',
          ],
        },
        {
          title: 'SQL Agent',
          icon: Icon.database,
          strategy: 'Natural language to SQL for structured product data.',
          points: [
            'Performs dynamic schema discovery and handles variable, category-specific specifications.',
            'Recovers from failed queries through an error-driven retry and regeneration loop.',
          ],
        },
        {
          title: 'Python Agent',
          icon: Icon.trend,
          strategy: 'Analytical computation and visualization.',
          points: [
            'Calculates running costs, ownership costs, efficiency scores, and CO2 estimates from product data.',
            'Converts results into chart-ready payloads rendered directly on the frontend dashboard.',
          ],
        },
      ],
      stack: ['React', 'Vite', 'FastAPI', 'LangGraph', 'Gemini', 'Llama 3.1', 'ChromaDB', 'SQLite', 'BM25', 'RAGAS'],
    },
  },
};

const ImageCarousel = ({ images, title, accent = '#00E5FF' }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + images.length) % images.length);
  };

  const prev = () => goTo(index - 1, -1);
  const next = () => goTo(index + 1, 1);

  return (
    <div className="relative w-full bg-black">
      <div className="relative w-screen ml-[calc(50%-50vw)] h-[62vh] sm:h-[78vh] overflow-hidden bg-[#0a0b0d] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Left arrow */}
        {images.length > 1 && (
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-500/50 hover:bg-gray-400/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {images.length > 1 && (
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-500/50 hover:bg-gray-400/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '22px' : '7px',
                  backgroundColor: i === index ? accent : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ArchitectureCard = ({ item, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="p-6 rounded-2xl bg-[#1D2024]/70 border border-white/5 hover:border-white/15 transition-colors duration-300"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
      style={{ backgroundColor: `${accent}18`, color: accent }}
    >
      {item.icon}
    </div>
    <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{item.name}</h4>
    <p className="text-white/50 text-sm leading-relaxed">{item.role}</p>
  </motion.div>
);

const EngineCard = ({ item, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative p-7 rounded-2xl bg-[#1D2024]/50 border border-white/5"
  >
    <div className="flex items-start gap-4 mb-4">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${accent}18`, color: accent }}
      >
        {item.icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg tracking-wide leading-tight">{item.title}</h4>
        <p className="text-xs font-semibold tracking-wider uppercase mt-1" style={{ color: accent }}>
          {item.strategy}
        </p>
      </div>
    </div>
    <ul className="flex flex-col gap-2.5 pl-1">
      {item.points.map((point, i) => (
        <li key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
          <span
            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: accent }}
          />
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProjectDescription = ({ description, accent }) => (
  <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mb-10 tracking-wide"
    >
      {description.tagline}
    </motion.p>

    {/* Overview */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white/45 text-base leading-relaxed max-w-3xl mb-20"
    >
      {description.overview}
    </motion.p>

    {/* Architecture */}
    <div className="mb-24">
      <div className="flex items-center gap-3 mb-10">
        <span style={{ color: accent }}>{description.architectureIcon || Icon.layers}</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white/90">
          {description.architectureTitle || 'System Architecture'}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {description.architecture.map((item, i) => (
          <ArchitectureCard key={item.name} item={item} accent={accent} index={i} />
        ))}
      </div>
    </div>

    {/* Engine / Workflow */}
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <span style={{ color: accent }}>{description.engineIcon || Icon.compass}</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white/90">
          {description.engineTitle || 'Core Workflow'}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {description.engine.map((item, i) => (
          <EngineCard key={item.title} item={item} accent={accent} index={i} />
        ))}
      </div>
    </div>

    {/* Tech stack */}
    <div>
      <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-5">Technology Stack</h3>
      <div className="flex flex-wrap gap-3">
        {description.stack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-lg text-xs font-bold tracking-wider text-white/70 border border-white/10 bg-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1114] text-white">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent-cyan hover:underline">Return to Home</Link>
      </div>
    );
  }

  const accent = project.accent || '#00E5FF';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0f1114] text-white"
    >
      {/* Simple Header */}
      <header className="fixed top-0 w-full z-50 bg-[#12151a]/90 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link
          to="/#portfolio"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-wider"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
        <div className="text-right">
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ color: accent }}>{project.category}</p>
          <h1 className="text-lg font-bold tracking-wide">{project.title}</h1>
        </div>
      </header>

      {/* Full-width image carousel */}
      <main className="pt-[72px]">
        <ImageCarousel images={project.screenshots} title={project.title} accent={accent} />

        {/* Structured description, when available */}
        {project.description ? (
          <ProjectDescription description={project.description} accent={accent} />
        ) : (
          <div className="max-w-[1200px] mx-auto px-6 py-16 text-white/40 text-sm">
            More details for this project are coming soon.
          </div>
        )}

        <div className="flex justify-center pb-20">
          <Link
            to="/#portfolio"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold tracking-widest text-sm transition-colors border border-white/10"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;