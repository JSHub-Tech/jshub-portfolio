import React from 'react';

// ── Small icon set used inside project descriptions ──────────────
export const Icon = {
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path strokeLinecap="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path strokeLinecap="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
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

// Full project details used for the ProjectDetail pages
export const projectDetails = {
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
  4: {
    title: 'HOME ESTATE',
    category: 'Real Estate Platform',
    accent: '#F59E0B',
    screenshots: [
      '/Projects/home_estate/home01.png',
      '/Projects/home_estate/home02.png',
      '/Projects/home_estate/home03.png',
      '/Projects/home_estate/home04.png',
      '/Projects/home_estate/home05.png'
    ],
    description: {
      tagline: 'A comprehensive real estate platform driven purely by custom Data Structures and Algorithms for property search, navigation, and procedural floor plan generation.',
      overview: "HomeEstate addresses the inefficiencies of traditional property search and architectural planning by relying entirely on custom Data Structures and Algorithms (DSA) without external APIs. It utilizes an AVL tree for O(log n) range-based property searching, Min/Max Heaps for O(1) retrieval of featured deals, and Dijkstra's algorithm over a geospatial graph for road navigation. Additionally, a Binary Space Partitioning (BSP) algorithm recursively generates structurally valid, randomized floor plans based on user constraints. The Django backend operates its DSA structures entirely in-memory for instant data access.",
      architectureTitle: 'System Architecture & Data Structures',
      architectureIcon: Icon.layers,
      architecture: [
        {
          name: 'AVL Tree',
          icon: Icon.database,
          role: 'Guarantees O(log n) search and insertion time for range-based filtering on property Price and Size without degrading performance.',
        },
        {
          name: 'Min/Max Heaps',
          icon: Icon.trend,
          role: 'Provides O(1) constant time access to the absolute cheapest and largest properties for the featured dashboard.',
        },
        {
          name: 'Location Graph',
          icon: Icon.network,
          role: 'Represents the physical road network, properties, and facilities. Uses an adjacency list to power shortest-path navigation.',
        },
        {
          name: 'BSP Tree',
          icon: Icon.cluster,
          role: 'Recursively divides plot space to procedurally generate unique, structurally valid room layouts based on dimensional constraints.',
        },
      ],
      engineTitle: 'Core Algorithmic Operations',
      engineIcon: Icon.compass,
      engine: [
        {
          title: 'Shortest Path Navigation',
          icon: Icon.target,
          strategy: 'Dijkstra\'s Algorithm with a Priority Queue.',
          points: [
            'Calculates edge weights between properties and road nodes using the real-world Haversine formula.',
            'Explores the graph to find the optimal route from a house to the nearest facility, returning the route with the smallest accumulated distance.',
          ],
        },
        {
          title: 'Range-Based Property Search',
          icon: Icon.shield,
          strategy: 'In-memory AVL Tree traversal.',
          points: [
            'Intelligently prunes the search space by moving only to the left or right child based on price bounds.',
            'Bypasses the database entirely to return filtered properties in guaranteed O(log n) time.',
          ],
        },
        {
          title: 'Procedural House Generation',
          icon: Icon.layers,
          strategy: 'Binary Space Partitioning with BFS validation.',
          points: [
            'Normalizes plot dimensions and uses a randomized BSP algorithm to recursively split space into functional rooms.',
            'Converts geometric nodes into a logical connectivity graph and uses Breadth-First Search to ensure all rooms are reachable from the main entrance.',
          ],
        },
        {
          title: 'In-Memory Data Management',
          icon: Icon.bolt,
          strategy: 'Real-time state synchronization via Django Signals.',
          points: [
            'Maintains all Trees, Heaps, and Graphs in active memory for instant querying.',
            'Automatically triggers data structure updates (heapify, AVL rotations, graph disconnection) whenever a property is added, edited, or deleted.',
          ],
        },
      ],
      stack: ['React', 'Vite', 'Django REST Framework', 'SQLite', 'Leaflet', 'Tailwind CSS'],
    },
  },
};

// Summary project list used for the Home and All Projects grids
export const projectsList = [
  {
    id: 1,
    title: 'SENTIX',
    category: 'AI / ML Platform',
    description: 'A sentiment-aware movie recommendation and social discovery platform built on a polyglot persistence architecture.',
    size: 'md:col-span-2 md:row-span-2', // Large square
    image: '/Projects/sentix/Sentix01.jpg',
    tags: ['FastAPI', 'Neo4j', 'Recommendation Engine']
  },
  {
    id: 2,
    title: 'AERO',
    category: 'Database Systems',
    description: 'A polyglot, self-healing airline backend combining ACID transactions, graph-based routing, and live telemetry.',
    size: 'md:col-span-1 md:row-span-1', // Small square
    image: '/Projects/aero/Aero01.jpeg',
    tags: ['FastAPI', 'Neo4j', 'Redis']
  },
  {
    id: 4,
    title: 'HOME ESTATE',
    category: 'Real Estate Platform',
    description: 'A comprehensive real estate platform driven purely by custom Data Structures and Algorithms for search, navigation, and floor plan generation.',
    size: 'md:col-span-1 md:row-span-1', 
    image: '/Projects/home_estate/home01.png',
    tags: ['Real Estate']
  },
  {
    id: 3,
    title: 'SAGE',
    category: 'AI / ML Platform',
    description: 'A multi-agent Retrieval-Augmented Generation assistant delivering grounded, domain-specific support for Samsung appliances.',
    size: 'md:col-span-1 md:row-span-1', // Small square
    image: '/Projects/sage/Sage01.jpeg',
    tags: ['LangGraph', 'RAG', 'Multi-Agent']
  }
];
