(() => {
  "use strict";

  const YEAR = new Date().getFullYear();

  const LABELS = {
    en: { problem: "Problem", approach: "Approach", result: "Result" },
    fr: { problem: "Problème", approach: "Approche", result: "Résultat" }
  };

  // Simple Icons (cdn.simpleicons.org) slugs, keyed by the exact skill label used below.
  // Labels with no real brand mark (e.g. "REST APIs", "TLS") are simply omitted.
  const ICONS = {
    Java: "openjdk",
    TypeScript: "typescript",
    JavaScript: "javascript",
    Python: "python",
    Kotlin: "kotlin",
    "C++": "cplusplus",
    PHP: "php",
    "Spring Boot": "springboot",
    "Spring AOP": "spring",
    NestJS: "nestjs",
    "Express.js": "express",
    "JPA / Hibernate": "hibernate",
    Angular: "angular",
    React: "react",
    "Jetpack Compose": "jetpackcompose",
    "HTML / CSS": "html5",
    Docker: "docker",
    Kubernetes: "kubernetes",
    Terraform: "terraform",
    "GitHub Actions": "githubactions",
    "GitLab CI/CD": "gitlab",
    Jenkins: "jenkins",
    Ansible: "ansible",
    Proxmox: "proxmox",
    "Linux / systemd": "linux",
    PostgreSQL: "postgresql",
    MongoDB: "mongodb",
    Supabase: "supabase",
    RabbitMQ: "rabbitmq",
    Kafka: "apachekafka",
    Prometheus: "prometheus",
    Grafana: "grafana",
    "HashiCorp Vault": "vault",
    ROS2: "ros"
  };
  const ICON_COLOR = "93a1b3";

  // Proof media per project, keyed by project slug. Empty array = no carousel rendered for that card.
  // Drop new files into assets/proofs/<slug>/ and add an entry here to wire them in.
  const MEDIA = {
    "fleet-tooling": [
      { src: "assets/proofs/fleet-tooling/1-installer.png", type: "image", caption: { en: "Robot installer & peripheral diagnostics", fr: "Installeur robot & diagnostics périphériques" } },
      { src: "assets/proofs/fleet-tooling/2-config-generator.png", type: "image", caption: { en: "Web-based hardware config generator", fr: "Générateur de configuration matérielle" } },
      { src: "assets/proofs/fleet-tooling/3-sensor-calibration.png", type: "image", caption: { en: "Multi-robot sensor calibration UI", fr: "Interface de calibrage capteurs multi-robots" } },
      { src: "assets/proofs/fleet-tooling/4-monitoring.png", type: "image", caption: { en: "Real-time systemd / CAN monitoring dashboard", fr: "Tableau de bord temps réel (systemd / CAN)" } }
    ],
    "vault-security": [],
    "erp-microservices": [
      { src: "assets/proofs/erp-microservices/1-idurar-dashboard.png", type: "image", caption: { en: "Idurar ERP/CRM — the monolith analyzed", fr: "Idurar ERP/CRM — le monolithe analysé" } },
      { src: "assets/proofs/erp-microservices/2-architecture.png", type: "image", caption: { en: "Target microservices architecture", fr: "Architecture microservices cible" } },
      { src: "assets/proofs/erp-microservices/3-repo-before.png", type: "image", caption: { en: "Before: the original monolith repo", fr: "Avant : le dépôt monolithique d'origine" } },
      { src: "assets/proofs/erp-microservices/4-repo-after.png", type: "image", caption: { en: "After: my microservices repo", fr: "Après : mon dépôt microservices" } },
      { src: "assets/proofs/erp-microservices/5-k8s-diagram.png", type: "image", caption: { en: "Kubernetes deployment topology", fr: "Topologie de déploiement Kubernetes" } },
      { src: "assets/proofs/erp-microservices/6-kubectl.png", type: "image", caption: { en: "Services running on the cluster", fr: "Services actifs sur le cluster" } }
    ],
    "kafka-news": [
      { src: "assets/proofs/kafka-news/1-app-output.png", type: "image", caption: { en: "Categorized news output", fr: "Résultat : actualités catégorisées" } },
      { src: "assets/proofs/kafka-news/2-pipeline-architecture.png", type: "image", caption: { en: "Streaming pipeline architecture", fr: "Architecture du pipeline de streaming" } }
    ],
    "predictoenergy-access": [
      { src: "assets/proofs/predictoenergy-access/1-dashboard.png", type: "image", caption: { en: "PredictoEnergy control room dashboard", fr: "Tableau de bord Salle de Contrôle PredictoEnergy" } }
    ],
    "android-features": [],
    "junior-entreprise": [
      { src: "assets/proofs/junior-entreprise/1-podcast.png", type: "image", caption: { en: "Speaking on a podcast about Junior Entreprise work", fr: "Intervention dans un podcast sur les missions de la Junior Entreprise" } }
    ],
    theatre: [
      { src: "assets/proofs/theatre/1-stage.png", type: "image", caption: { en: "\"Lost in History\" — Théâtro INSAT, JTI 7th Edition", fr: "« Lost in History » — Théâtro INSAT, JTI 7e édition" } },
      { src: "assets/proofs/theatre/2-stage.png", type: "image", caption: { en: "On stage with the cast", fr: "Sur scène avec la troupe" } }
    ],
    running: []
  };

  const CONTENT = {
    en: {
      nav: { about: "About", projects: "Projects", experience: "Experience", skills: "Skills", education: "Education", contact: "Contact" },
      hero: {
        roles: ["Full-Stack Developer", "DevOps Engineer", "Robotics Tooling"],
        pitch: "2026 Software Engineering graduate who has worked across many architectures and environments — from Android and web to robotics — solving real production problems wherever they show up.",
        actions: [
          { label: "Get in touch", href: "#contact", primary: true },
          { label: "GitHub", href: "https://github.com/Ayadi-Nassim", external: true },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nassim-ayadi-78aa2225a/", external: true }
        ],
        meta: ["INSAT — Software Engineering, 2026", "Toulouse, France", "Arabic · French · English"],
        photoTag: "// currently @ TwinswHeel / SOBEN"
      },
      about: {
        eyebrow: "01 — About",
        text: "I'm Nassim, a final-year Software Engineering student at <strong>INSAT</strong>, currently interning at <strong>TwinswHeel / SOBEN</strong> in Toulouse on ROS2 tooling and release automation for a fleet of mobile robots. Before that I split my time between full-stack product work and DevOps at <strong>PredictoEnergy</strong>, and mobile development at <strong>TechWave</strong>. I like the parts of engineering that don't show up in a demo: the pipeline that ships the feature, the dashboard that tells you it's still alive at 3am, the migration that quietly halves your API latency."
      },
      projects: {
        eyebrow: "02 — Selected Work",
        title: "Things I've built and shipped",
        items: [
          {
            slug: "fleet-tooling",
            tag: "TwinswHeel / SOBEN — Robotics",
            title: "Fleet configuration & monitoring tooling",
            problem: "Robots were configured file-by-file by hand — slow, error-prone, and invisible when a service crashed in the field.",
            approach: "Built a JSON-driven dynamic ROS2 launch architecture, a web dashboard to generate and export sensor/driver configs, a one-click installer that auto-detects peripherals, and a real-time systemd/network/CAN monitoring dashboard.",
            result: "Hardware reconfiguration across a <b>10+ robot fleet</b> went from manual file edits to zero-code changes, with <b>12 services per robot</b> now monitored live.",
            stack: ["ROS2", "Python", "systemd", "JavaScript", "JSON"]
          },
          {
            slug: "vault-security",
            tag: "TwinswHeel / SOBEN — Security",
            title: "Zero-trust secrets for a robot fleet",
            problem: "Robot filesystems stored plaintext credentials — a real liability for machines operating unattended in the field.",
            approach: "Deployed HashiCorp Vault in production mode (Raft consensus, TLS, systemd) so each robot pulls its own isolated secrets at boot, with automatic offline fallback.",
            result: "Plaintext secrets eliminated fleet-wide, with robots staying operational even without network access.",
            stack: ["HashiCorp Vault", "Raft", "TLS", "systemd"]
          },
          {
            slug: "erp-microservices",
            tag: "Academic — Architecture",
            title: "ERP/CRM: monolith to microservices",
            problem: "An open-source ERP/CRM was hitting scalability and maintainability limits as a monolith.",
            approach: "With a 2-person team, decomposed it into 7 independent services behind an API Gateway, containerized with Docker and deployed to Kubernetes.",
            result: "Average API latency cut by <b>30ms</b>, with each service independently deployable and scalable.",
            stack: ["Spring Boot", "Docker", "Kubernetes", "API Gateway", "MongoDB"]
          },
          {
            slug: "kafka-news",
            tag: "Academic — Data",
            title: "Real-time news pipeline",
            problem: "Turning a firehose of Telegram channel messages into categorized, digestible summaries in real time.",
            approach: "Built a streaming pipeline: Telethon + AIOKafka for ingestion, Kafka for decoupled messaging, Spark Streaming for real-time classification, Spark batch + MongoDB for historical summaries.",
            result: "A fully automated end-to-end workflow delivering categorized news updates with zero manual curation.",
            stack: ["Kafka", "Spark Streaming", "Hadoop", "MongoDB", "Python"]
          },
          {
            slug: "predictoenergy-access",
            tag: "PredictoEnergy — Backend",
            title: "Access control & CI/CD for an energy platform",
            problem: "A growing energy-monitoring platform needed consistent permission enforcement across modules and a reliable path to production.",
            approach: "Implemented a Spring Boot AOP layer enforcing permissions across 12 modules, and built GitHub Actions pipelines automating build, test and deploy.",
            result: "Unauthorized access blocked across all <b>12 modules</b>; deployments went from manual to repeatable.",
            stack: ["Spring Boot", "Spring AOP", "GitHub Actions", "PostgreSQL"]
          },
          {
            slug: "android-features",
            tag: "TechWave — Mobile",
            title: "Secure, real-time features for Android",
            problem: "The Android app needed secure file transfer, live video and location features without regressing reliability.",
            approach: "Integrated FTPS for encrypted transfers, RTMP for real-time streaming and Map APIs for geolocation; migrated the UI from XML to Jetpack Compose.",
            result: "Transfer errors down <b>30%</b>, streaming validated at <b>500+ concurrent users</b>, positioning accurate to <b>~5m</b>, and <b>90%</b> test coverage via JUnit/Espresso.",
            stack: ["Kotlin", "Jetpack Compose", "FTPS", "RTMP", "JUnit"]
          }
        ]
      },
      experience: {
        eyebrow: "03 — Experience",
        title: "Where I've worked",
        items: [
          {
            date: "Feb 2026 — Present",
            company: "TwinswHeel / SOBEN — Toulouse, France",
            role: "Software Engineering Intern — Infrastructure, Automation & Reliability",
            bullets: [
              "Replaced static, per-device hardware declarations with a <b>centralized, config-driven architecture</b> — enabling zero-code hardware changes across the entire fleet.",
              "Built a self-service web tool so operators can generate, visualize and export full device configurations without manual file editing.",
              "Automated the multi-repository release process end-to-end, cutting release preparation from <b>days to minutes</b>.",
              "Designed and deployed a <b>production-grade secrets management system</b>, removing plaintext credentials from every device in the fleet.",
              "Built a real-time observability dashboard tracking service health, crash history and live logs across the fleet — <b>12 services per device</b>.",
              "Validated hardware and network connectivity across real devices, documenting integration guidelines for the engineering team."
            ]
          },
          {
            date: "May 2025 — Nov 2025",
            company: "PredictoEnergy — Tunis, Tunisia",
            role: "Full-Stack & DevOps Engineer Intern",
            bullets: [
              "Designed a <b>centralized access-control layer</b> enforcing permissions across 12 modules, improving security compliance by <b>99%</b>.",
              "Simplified the frontend's state-management architecture, cutting boilerplate code by <b>40%</b> and easing onboarding for new contributors.",
              "Designed a request-interception layer that automatically enriched <b>90%</b> of API calls with contextual metadata, removing a recurring source of manual error.",
              "Architected an automated build-test-deploy pipeline enabling <b>zero-downtime</b> releases.",
              "Deployed and managed <b>8+ production servers</b>, covering streaming, database and file-transfer workloads.",
              "Built observability into the platform to proactively catch performance bottlenecks before they became incidents."
            ]
          },
          {
            date: "Jun 2023 — Sep 2024",
            company: "TechWave — Tunis, Tunisia",
            role: "Mobile & Platform Developer",
            bullets: [
              "Modernized the app's UI layer, moving from an imperative to a declarative rendering model.",
              "Redesigned the file-transfer flow around an encrypted protocol, cutting transfer errors by <b>30%</b>.",
              "Built real-time video streaming into the app, load-tested at <b>500+ concurrent users</b>.",
              "Added geolocation features accurate to roughly <b>5 meters</b>, improving location-dependent workflows.",
              "Automated and optimized the build pipeline, cutting build time by <b>25%</b>.",
              "Built an automated test suite covering <b>90%</b> of critical functionality, catching regressions before release.",
              "Managed production server infrastructure and led a <b>zero-downtime</b> database migration to a new self-hosted backend."
            ]
          }
        ]
      },
      skills: {
        eyebrow: "04 — Toolbox",
        title: "What I work with",
        groups: [
          { name: "Languages", items: ["Java", "TypeScript", "JavaScript", "Python", "Kotlin", "C++", "SQL", "PHP"] },
          { name: "Backend", items: ["Spring Boot", "Spring AOP", "NestJS", "Express.js", "REST APIs", "Microservices", "JPA / Hibernate"] },
          { name: "Frontend & Mobile", items: ["Angular", "React", "Jetpack Compose", "HTML / CSS"] },
          { name: "DevOps & Infra", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Ansible", "Proxmox", "Linux / systemd"] },
          { name: "Data & Messaging", items: ["PostgreSQL", "SQL Server", "MongoDB", "Supabase", "RabbitMQ", "Kafka"] },
          { name: "Observability & Security", items: ["Prometheus", "Grafana", "Loki", "HashiCorp Vault", "TLS"] },
          { name: "Robotics", items: ["ROS2", "Launch files", "Lifecycle nodes", "URDF / Xacro"] }
        ]
      },
      education: {
        eyebrow: "05 — Education",
        title: "Background",
        items: [
          { date: "Oct 2026 — Oct 2027", school: "EFREI Paris", detail: "Admitted — Mastère Spécialisé® Manager Cybersécurité & Gouvernance." },
          { date: "2021 — 2026", school: "INSAT — National Institute of Applied Science and Technology", detail: "Software Engineering degree. Ranked 45th of 344 in the preparatory cycle, first choice into the Software Engineering track." },
          { date: "2021", school: "Jendouba Pioneer Prep School", detail: "Mathematics Baccalaureate, High Honors — 18.45/20." }
        ],
        certs: [
          { label: "CKAD — KodeKloud", href: "https://learn.kodekloud.com/user/certificate/d90bb426-95b6-4f2b-aa84-73170f4ef093" },
          { label: "Jenkins — KodeKloud", href: "https://learn.kodekloud.com/user/certificate/03569077-e28d-4fd5-a4ca-4b814679636e" }
        ]
      },
      beyond: {
        eyebrow: "06 — Beyond the Code",
        title: "Outside of work",
        items: [
          { slug: "junior-entreprise", icon: "Leadership", title: "Vice President, Junior Entreprise INSAT", text: "Led web, mobile and AI consulting missions inside a 100-member student engineering association (2024–2025)." },
          { slug: "theatre", icon: "Stage", title: "Theatre — Théâtro INSAT", text: "Performed in 6 university plays between 2022 and 2025, in front of roughly 600 spectators total." },
          { slug: "running", icon: "Discipline", title: "Running", text: "A regular personal practice for several years — the same discipline that shows up in long release cycles." }
        ]
      },
      contact: {
        eyebrow: "07 — Contact",
        title: "Let's talk",
        sub: "Open to full-time Software Engineering roles and work-study (alternance) positions — full-stack, DevOps, or robotics tooling. Reach out — I reply fast.",
        actions: [
          { label: "nassim.ayadi.main@gmail.com", href: "mailto:nassim.ayadi.main@gmail.com", primary: true },
          { label: "+33 7 51 20 99 23", href: "tel:+33751209923" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nassim-ayadi-78aa2225a/", external: true },
          { label: "GitHub", href: "https://github.com/Ayadi-Nassim", external: true }
        ]
      },
      footer: `Designed & built by Nassim Ayadi · ${YEAR}`
    },

    fr: {
      nav: { about: "À propos", projects: "Projets", experience: "Expérience", skills: "Compétences", education: "Formation", contact: "Contact" },
      hero: {
        roles: ["Développeur Full-Stack", "Ingénieur DevOps", "Outils pour la Robotique"],
        pitch: "Diplômé en Génie Logiciel (promotion 2026), j'ai travaillé sur de nombreuses architectures et environnements différents — du mobile Android et du web jusqu'à la robotique — pour résoudre de vrais problèmes de production, quel que soit le terrain.",
        actions: [
          { label: "Me contacter", href: "#contact", primary: true },
          { label: "GitHub", href: "https://github.com/Ayadi-Nassim", external: true },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nassim-ayadi-78aa2225a/", external: true }
        ],
        meta: ["INSAT — Génie Logiciel, 2026", "Toulouse, France", "Arabe · Français · Anglais"],
        photoTag: "// actuellement chez TwinswHeel / SOBEN"
      },
      about: {
        eyebrow: "01 — À propos",
        text: "Je m'appelle Nassim, étudiant en dernière année de Génie Logiciel à <strong>l'INSAT</strong>, actuellement en stage chez <strong>TwinswHeel / SOBEN</strong> à Toulouse sur des outils ROS2 et l'automatisation des releases pour une flotte de robots mobiles. Avant ça, j'ai partagé mon temps entre développement full-stack et DevOps chez <strong>PredictoEnergy</strong>, puis développement mobile chez <strong>TechWave</strong>. Ce qui m'intéresse, ce sont les aspects du métier qu'on ne voit pas dans une démo : le pipeline qui livre la fonctionnalité, le tableau de bord qui vous dit à 3h du matin que tout tourne encore, la migration qui divise discrètement la latence par deux."
      },
      projects: {
        eyebrow: "02 — Réalisations",
        title: "Ce que j'ai construit et livré",
        items: [
          {
            slug: "fleet-tooling",
            tag: "TwinswHeel / SOBEN — Robotique",
            title: "Outils de configuration et de supervision de flotte",
            problem: "Les robots étaient configurés fichier par fichier, à la main — lent, source d'erreurs, et invisible dès qu'un service plantait sur le terrain.",
            approach: "Conception d'une architecture de lancement ROS2 dynamique pilotée par JSON, d'un tableau de bord web pour générer et exporter les configurations capteurs/drivers, d'un installeur one-click détectant automatiquement les périphériques, et d'un tableau de bord de supervision temps réel (systemd/réseau/CAN).",
            result: "La reconfiguration matérielle sur une <b>flotte de 10+ robots</b> est passée de l'édition manuelle de fichiers à zéro ligne de code, avec <b>12 services par robot</b> désormais supervisés en direct.",
            stack: ["ROS2", "Python", "systemd", "JavaScript", "JSON"]
          },
          {
            slug: "vault-security",
            tag: "TwinswHeel / SOBEN — Sécurité",
            title: "Secrets zero-trust pour une flotte de robots",
            problem: "Les systèmes de fichiers des robots stockaient des identifiants en clair — un vrai risque pour des machines qui opèrent sans surveillance sur le terrain.",
            approach: "Déploiement de HashiCorp Vault en mode production (consensus Raft, TLS, systemd) : chaque robot récupère ses propres secrets isolés au démarrage, avec repli automatique hors ligne.",
            result: "Plus aucun secret en clair sur toute la flotte, avec des robots qui restent opérationnels même sans accès réseau.",
            stack: ["HashiCorp Vault", "Raft", "TLS", "systemd"]
          },
          {
            slug: "erp-microservices",
            tag: "Projet académique — Architecture",
            title: "ERP/CRM : du monolithe aux microservices",
            problem: "Un ERP/CRM open-source atteignait ses limites de scalabilité et de maintenabilité en architecture monolithique.",
            approach: "En équipe de 2, décomposition en 7 services indépendants derrière une API Gateway, conteneurisés avec Docker et déployés sur Kubernetes.",
            result: "Latence moyenne des API réduite de <b>30ms</b>, avec des services déployables et scalables indépendamment.",
            stack: ["Spring Boot", "Docker", "Kubernetes", "API Gateway", "MongoDB"]
          },
          {
            slug: "kafka-news",
            tag: "Projet académique — Data",
            title: "Pipeline d'actualités en temps réel",
            problem: "Transformer un flux continu de messages de chaînes Telegram en résumés catégorisés et digestes, en temps réel.",
            approach: "Pipeline de streaming : Telethon + AIOKafka pour l'ingestion, Kafka pour un messaging découplé, Spark Streaming pour la classification en temps réel, Spark batch + MongoDB pour les résumés historiques.",
            result: "Un workflow de bout en bout entièrement automatisé, livrant des actualités catégorisées sans curation manuelle.",
            stack: ["Kafka", "Spark Streaming", "Hadoop", "MongoDB", "Python"]
          },
          {
            slug: "predictoenergy-access",
            tag: "PredictoEnergy — Backend",
            title: "Contrôle d'accès et CI/CD pour une plateforme énergétique",
            problem: "Une plateforme de monitoring énergétique en croissance avait besoin d'une gestion des permissions cohérente entre modules, et d'un chemin fiable vers la production.",
            approach: "Implémentation d'une couche Spring Boot AOP appliquant les permissions sur 12 modules, et mise en place de pipelines GitHub Actions automatisant build, tests et déploiement.",
            result: "Accès non autorisés bloqués sur les <b>12 modules</b> ; déploiements passés de manuels à reproductibles.",
            stack: ["Spring Boot", "Spring AOP", "GitHub Actions", "PostgreSQL"]
          },
          {
            slug: "android-features",
            tag: "TechWave — Mobile",
            title: "Fonctionnalités sécurisées et temps réel pour Android",
            problem: "L'application Android avait besoin de transfert de fichiers sécurisé, de vidéo en direct et de géolocalisation, sans sacrifier la fiabilité.",
            approach: "Intégration de FTPS pour des transferts chiffrés, RTMP pour le streaming temps réel et d'API de cartographie pour la géolocalisation ; migration de l'interface XML vers Jetpack Compose.",
            result: "Erreurs de transfert réduites de <b>30%</b>, streaming validé jusqu'à <b>500+ utilisateurs simultanés</b>, précision de localisation d'environ <b>5m</b>, et <b>90%</b> de couverture de tests via JUnit/Espresso.",
            stack: ["Kotlin", "Jetpack Compose", "FTPS", "RTMP", "JUnit"]
          }
        ]
      },
      experience: {
        eyebrow: "03 — Expérience",
        title: "Où j'ai travaillé",
        items: [
          {
            date: "Fév 2026 — Présent",
            company: "TwinswHeel / SOBEN — Toulouse, France",
            role: "Stagiaire Ingénieur Logiciel — Infrastructure, Automatisation & Fiabilité",
            bullets: [
              "Remplacement des déclarations matérielles statiques, appareil par appareil, par une <b>architecture pilotée par configuration centralisée</b> — permettant des changements de matériel sans écrire une ligne de code sur toute la flotte.",
              "Développement d'un outil web en libre-service permettant aux opérateurs de générer, visualiser et exporter les configurations complètes des appareils sans édition manuelle de fichiers.",
              "Automatisation de bout en bout du processus de release multi-dépôts, réduisant la préparation des releases de <b>plusieurs jours à quelques minutes</b>.",
              "Conception et déploiement d'un <b>système de gestion des secrets de niveau production</b>, supprimant les identifiants en clair de chaque appareil de la flotte.",
              "Développement d'un tableau de bord d'observabilité temps réel suivant l'état des services, l'historique des crashs et les logs en direct sur toute la flotte — <b>12 services par appareil</b>.",
              "Validation de la connectivité matérielle et réseau sur des appareils réels, documentation des lignes directrices d'intégration pour l'équipe d'ingénierie."
            ]
          },
          {
            date: "Mai 2025 — Nov 2025",
            company: "PredictoEnergy — Tunis, Tunisie",
            role: "Stagiaire Ingénieur Full-Stack & DevOps",
            bullets: [
              "Conception d'une <b>couche de contrôle d'accès centralisée</b> appliquant les permissions sur 12 modules, améliorant la conformité sécurité de <b>99%</b>.",
              "Simplification de l'architecture de gestion d'état du frontend, réduisant le code répétitif de <b>40%</b> et facilitant l'intégration de nouveaux contributeurs.",
              "Conception d'une couche d'interception des requêtes enrichissant automatiquement <b>90%</b> des appels API avec des métadonnées contextuelles, supprimant une source récurrente d'erreurs manuelles.",
              "Conception d'un pipeline automatisé de build, tests et déploiement permettant des mises en production <b>sans interruption de service</b>.",
              "Déploiement et gestion de <b>8+ serveurs de production</b>, couvrant des charges de streaming, de base de données et de transfert de fichiers.",
              "Mise en place d'observabilité sur la plateforme pour détecter les goulots d'étranglement avant qu'ils ne deviennent des incidents."
            ]
          },
          {
            date: "Juin 2023 — Sep 2024",
            company: "TechWave — Tunis, Tunisie",
            role: "Développeur Mobile & Plateforme",
            bullets: [
              "Modernisation de la couche d'interface de l'application, passage d'un modèle de rendu impératif à un modèle déclaratif.",
              "Refonte du flux de transfert de fichiers autour d'un protocole chiffré, réduisant les erreurs de transfert de <b>30%</b>.",
              "Développement du streaming vidéo temps réel dans l'application, testé en charge jusqu'à <b>500+ utilisateurs simultanés</b>.",
              "Ajout de fonctionnalités de géolocalisation précises à environ <b>5 mètres</b>, améliorant les workflows dépendants de la localisation.",
              "Automatisation et optimisation du pipeline de build, réduisant le temps de build de <b>25%</b>.",
              "Mise en place d'une suite de tests automatisés couvrant <b>90%</b> des fonctionnalités critiques, détectant les régressions avant mise en production.",
              "Gestion de l'infrastructure des serveurs de production et pilotage d'une migration de base de données <b>sans interruption</b> vers un nouveau backend auto-hébergé."
            ]
          }
        ]
      },
      skills: {
        eyebrow: "04 — Boîte à outils",
        title: "Avec quoi je travaille",
        groups: [
          { name: "Langages", items: ["Java", "TypeScript", "JavaScript", "Python", "Kotlin", "C++", "SQL", "PHP"] },
          { name: "Backend", items: ["Spring Boot", "Spring AOP", "NestJS", "Express.js", "API REST", "Microservices", "JPA / Hibernate"] },
          { name: "Frontend & Mobile", items: ["Angular", "React", "Jetpack Compose", "HTML / CSS"] },
          { name: "DevOps & Infra", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Ansible", "Proxmox", "Linux / systemd"] },
          { name: "Données & Messagerie", items: ["PostgreSQL", "SQL Server", "MongoDB", "Supabase", "RabbitMQ", "Kafka"] },
          { name: "Observabilité & Sécurité", items: ["Prometheus", "Grafana", "Loki", "HashiCorp Vault", "TLS"] },
          { name: "Robotique", items: ["ROS2", "Fichiers de lancement", "Lifecycle nodes", "URDF / Xacro"] }
        ]
      },
      education: {
        eyebrow: "05 — Formation",
        title: "Parcours",
        items: [
          { date: "Oct 2026 — Oct 2027", school: "EFREI Paris", detail: "Admis — Mastère Spécialisé® Manager Cybersécurité & Gouvernance." },
          { date: "2021 — 2026", school: "INSAT — Institut National des Sciences Appliquées et de Technologie", detail: "Diplôme d'ingénieur en Génie Logiciel. Classé 45e sur 344 à l'issue du cycle préparatoire, premier choix pour la spécialité Génie Logiciel." },
          { date: "2021", school: "Lycée Pilote de Jendouba", detail: "Baccalauréat Mathématiques, mention Très Bien — 18,45/20." }
        ],
        certs: [
          { label: "CKAD — KodeKloud", href: "https://learn.kodekloud.com/user/certificate/d90bb426-95b6-4f2b-aa84-73170f4ef093" },
          { label: "Jenkins — KodeKloud", href: "https://learn.kodekloud.com/user/certificate/03569077-e28d-4fd5-a4ca-4b814679636e" }
        ]
      },
      beyond: {
        eyebrow: "06 — En dehors du code",
        title: "À côté du travail",
        items: [
          { slug: "junior-entreprise", icon: "Leadership", title: "Vice-Président, Junior Entreprise INSAT", text: "Direction de missions de conseil web, mobile et IA au sein d'une association étudiante de 100 membres (2024–2025)." },
          { slug: "theatre", icon: "Scène", title: "Théâtre — Théâtro INSAT", text: "6 pièces jouées entre 2022 et 2025, devant environ 600 spectateurs au total." },
          { slug: "running", icon: "Discipline", title: "Course à pied", text: "Une pratique personnelle régulière depuis plusieurs années — la même discipline qui se retrouve dans les cycles de release les plus longs." }
        ]
      },
      contact: {
        eyebrow: "07 — Contact",
        title: "Discutons",
        sub: "Ouvert aux postes d'ingénieur logiciel à temps plein et à l'alternance — full-stack, DevOps ou outils pour la robotique. N'hésitez pas à me contacter — je réponds vite.",
        actions: [
          { label: "nassim.ayadi.main@gmail.com", href: "mailto:nassim.ayadi.main@gmail.com", primary: true },
          { label: "+33 7 51 20 99 23", href: "tel:+33751209923" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nassim-ayadi-78aa2225a/", external: true },
          { label: "GitHub", href: "https://github.com/Ayadi-Nassim", external: true }
        ]
      },
      footer: `Conçu et développé par Nassim Ayadi · ${YEAR}`
    }
  };

  const $ = (id) => document.getElementById(id);
  let state = { lang: "en" };
  let typewriterTimer = null;

  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderButton(action) {
    const isLink = action.href.startsWith("#");
    const a = el("a", `btn ${action.primary ? "btn-primary" : "btn-ghost"}`, action.label);
    a.href = action.href;
    if (action.external) { a.target = "_blank"; a.rel = "noopener"; }
    if (!isLink) a.setAttribute("data-nav", "");
    return a;
  }

  function renderNav(c) {
    const nav = $("navLinks");
    nav.innerHTML = "";
    const order = ["about", "projects", "experience", "skills", "education", "contact"];
    order.forEach((key) => {
      const a = el("a", null, c.nav[key]);
      a.href = `#${key}`;
      a.addEventListener("click", () => closeMobileNav());
      nav.appendChild(a);
    });
  }

  function renderHero(c) {
    $("heroPitch").textContent = c.hero.pitch;
    $("heroPhotoTag").textContent = c.hero.photoTag;

    const actions = $("heroActions");
    actions.innerHTML = "";
    c.hero.actions.forEach((a) => actions.appendChild(renderButton(a)));

    const meta = $("heroMeta");
    meta.innerHTML = "";
    c.hero.meta.forEach((m) => meta.appendChild(el("span", null, m)));

    startTypewriter(c.hero.roles);
  }

  function startTypewriter(roles) {
    clearTimeout(typewriterTimer);
    const node = $("typewriter");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      node.textContent = roles[0];
      return;
    }

    let roleIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        node.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          typewriterTimer = setTimeout(tick, 1600);
          return;
        }
        typewriterTimer = setTimeout(tick, 55);
      } else {
        charIndex--;
        node.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          typewriterTimer = setTimeout(tick, 300);
          return;
        }
        typewriterTimer = setTimeout(tick, 28);
      }
    }
    tick();
  }

  function renderAbout(c) {
    $("aboutEyebrow").textContent = c.about.eyebrow;
    $("aboutText").innerHTML = c.about.text;
  }

  // ===== Proof carousel + lightbox =====
  let lightboxMedia = [];
  let lightboxIndex = 0;
  let lightboxLang = "en";

  function buildProofCarousel(media, lang, title) {
    let index = 0;
    const wrap = el("div", "proof-carousel");
    const viewport = el("div", "proof-viewport");
    wrap.appendChild(viewport);

    const slides = media.map((m, i) => {
      const slide = el("div", "proof-slide" + (i === 0 ? " active" : ""));
      const node =
        m.type === "video"
          ? Object.assign(document.createElement("video"), { src: m.src, controls: true, preload: "metadata" })
          : Object.assign(document.createElement("img"), { src: m.src, alt: (m.caption && m.caption[lang]) || title, loading: "lazy" });
      slide.appendChild(node);
      slide.addEventListener("click", () => openLightbox(media, i, lang));
      viewport.appendChild(slide);
      return slide;
    });

    const caption = el("div", "proof-caption", (media[0].caption && media[0].caption[lang]) || "");

    let dots = null;
    if (media.length > 1) {
      const prevBtn = el("button", "proof-nav proof-prev", "&lsaquo;");
      const nextBtn = el("button", "proof-nav proof-next", "&rsaquo;");
      prevBtn.type = "button";
      nextBtn.type = "button";
      prevBtn.addEventListener("click", (e) => { e.stopPropagation(); go(index - 1); });
      nextBtn.addEventListener("click", (e) => { e.stopPropagation(); go(index + 1); });
      wrap.appendChild(prevBtn);
      wrap.appendChild(nextBtn);

      dots = el("div", "proof-dots");
      media.forEach((_, i) => {
        const dot = el("button", "proof-dot" + (i === 0 ? " active" : ""));
        dot.type = "button";
        dot.addEventListener("click", (e) => { e.stopPropagation(); go(i); });
        dots.appendChild(dot);
      });
      wrap.appendChild(dots);
    }
    wrap.appendChild(caption);

    function go(newIndex) {
      index = (newIndex + media.length) % media.length;
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      if (dots) Array.from(dots.children).forEach((d, i) => d.classList.toggle("active", i === index));
      caption.textContent = (media[index].caption && media[index].caption[lang]) || "";
    }

    return wrap;
  }

  function renderLightboxStage() {
    const stage = $("lightboxStage");
    stage.innerHTML = "";
    const m = lightboxMedia[lightboxIndex];
    const node =
      m.type === "video"
        ? Object.assign(document.createElement("video"), { src: m.src, controls: true, autoplay: true })
        : Object.assign(document.createElement("img"), { src: m.src, alt: (m.caption && m.caption[lightboxLang]) || "" });
    stage.appendChild(node);
    $("lightboxCounter").textContent = `${lightboxIndex + 1} / ${lightboxMedia.length}`;
    const multi = lightboxMedia.length > 1;
    $("lightboxPrev").style.display = multi ? "flex" : "none";
    $("lightboxNext").style.display = multi ? "flex" : "none";
  }

  function openLightbox(media, index, lang) {
    lightboxMedia = media;
    lightboxIndex = index;
    lightboxLang = lang;
    renderLightboxStage();
    $("lightbox").classList.add("open");
    $("lightbox").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    $("lightbox").classList.remove("open");
    $("lightbox").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    $("lightboxStage").innerHTML = "";
  }

  function lightboxGo(delta) {
    lightboxIndex = (lightboxIndex + delta + lightboxMedia.length) % lightboxMedia.length;
    renderLightboxStage();
  }

  function initLightbox() {
    $("lightboxClose").addEventListener("click", closeLightbox);
    $("lightboxPrev").addEventListener("click", () => lightboxGo(-1));
    $("lightboxNext").addEventListener("click", () => lightboxGo(1));
    $("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!$("lightbox").classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxGo(-1);
      if (e.key === "ArrowRight") lightboxGo(1);
    });
  }

  function renderProjects(c, lang) {
    $("projectsEyebrow").textContent = c.projects.eyebrow;
    $("projectsTitle").textContent = c.projects.title;
    const grid = $("projectGrid");
    grid.innerHTML = "";
    const labels = LABELS[lang];

    c.projects.items.forEach((p) => {
      const card = el("div", "project-card");
      card.appendChild(el("span", "project-tag", p.tag));
      card.appendChild(el("h3", null, p.title));

      const media = MEDIA[p.slug];
      if (media && media.length) {
        card.appendChild(buildProofCarousel(media, lang, p.title));
      }

      card.appendChild(el("p", "project-row", `<b>${labels.problem}.</b> ${p.problem}`));
      card.appendChild(el("p", "project-row", `<b>${labels.approach}.</b> ${p.approach}`));
      card.appendChild(el("p", "project-row", `<b>${labels.result}.</b> ${p.result}`));
      const stack = el("div", "project-stack");
      p.stack.forEach((s) => stack.appendChild(el("span", null, s)));
      card.appendChild(stack);

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });

      grid.appendChild(card);
    });
  }

  function renderExperience(c) {
    $("experienceEyebrow").textContent = c.experience.eyebrow;
    $("experienceTitle").textContent = c.experience.title;
    const tl = $("timeline");
    tl.innerHTML = "";
    c.experience.items.forEach((item) => {
      const node = el("div", "timeline-item");
      node.appendChild(el("span", "timeline-date", item.date));
      node.appendChild(el("h3", null, item.company));
      node.appendChild(el("div", "role", item.role));
      const ul = el("ul");
      item.bullets.forEach((b) => ul.appendChild(el("li", null, b)));
      node.appendChild(ul);
      tl.appendChild(node);
    });
  }

  function renderSkills(c) {
    $("skillsEyebrow").textContent = c.skills.eyebrow;
    $("skillsTitle").textContent = c.skills.title;
    const grid = $("skillsGrid");
    grid.innerHTML = "";
    c.skills.groups.forEach((g) => {
      const card = el("div", "skill-card");
      card.appendChild(el("h3", null, g.name));
      const tags = el("div", "skill-tags");
      g.items.forEach((i) => {
        const tag = el("span");
        const slug = ICONS[i];
        if (slug) {
          const img = el("img", "skill-icon");
          img.src = `https://cdn.simpleicons.org/${slug}/${ICON_COLOR}`;
          img.alt = "";
          img.loading = "lazy";
          img.onerror = () => img.remove();
          tag.appendChild(img);
        }
        tag.appendChild(document.createTextNode(i));
        tags.appendChild(tag);
      });
      card.appendChild(tags);
      grid.appendChild(card);
    });
  }

  function renderEducation(c) {
    $("educationEyebrow").textContent = c.education.eyebrow;
    $("educationTitle").textContent = c.education.title;
    const list = $("eduList");
    list.innerHTML = "";
    c.education.items.forEach((it) => {
      const node = el("div", "edu-item");
      node.appendChild(el("span", "edu-date", it.date));
      node.appendChild(el("h3", null, it.school));
      node.appendChild(el("p", null, it.detail));
      list.appendChild(node);
    });
    const certs = $("certRow");
    certs.innerHTML = "";
    c.education.certs.forEach((cert) => {
      const a = el("a", null, cert.label);
      a.href = cert.href;
      a.target = "_blank";
      a.rel = "noopener";
      certs.appendChild(a);
    });
  }

  function renderBeyond(c, lang) {
    $("beyondEyebrow").textContent = c.beyond.eyebrow;
    $("beyondTitle").textContent = c.beyond.title;
    const grid = $("beyondGrid");
    grid.innerHTML = "";
    c.beyond.items.forEach((b) => {
      const card = el("div", "beyond-card");
      const media = MEDIA[b.slug];
      if (media && media.length) {
        card.appendChild(buildProofCarousel(media, lang, b.title));
      }
      card.appendChild(el("span", "beyond-icon", b.icon));
      card.appendChild(el("h3", null, b.title));
      card.appendChild(el("p", null, b.text));
      grid.appendChild(card);
    });
  }

  function renderContact(c) {
    $("contactEyebrow").textContent = c.contact.eyebrow;
    $("contactTitle").textContent = c.contact.title;
    $("contactSub").textContent = c.contact.sub;
    const actions = $("contactActions");
    actions.innerHTML = "";
    c.contact.actions.forEach((a) => actions.appendChild(renderButton(a)));
  }

  function render(lang) {
    const c = CONTENT[lang];
    document.documentElement.lang = lang;
    $("langToggle").setAttribute("data-active", lang);
    renderNav(c);
    renderHero(c);
    renderAbout(c);
    renderProjects(c, lang);
    renderExperience(c);
    renderSkills(c);
    renderEducation(c);
    renderBeyond(c, lang);
    renderContact(c);
    $("footerText").textContent = c.footer;
    initReveal();
  }

  function initLangToggle() {
    $("langToggle").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "fr" : "en";
      render(state.lang);
    });
  }

  function closeMobileNav() {
    $("navLinks").classList.remove("open");
    $("navBurger").setAttribute("aria-expanded", "false");
  }

  function initMobileNav() {
    const burger = $("navBurger");
    burger.addEventListener("click", () => {
      const open = $("navLinks").classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initScrollProgress() {
    const bar = $("scrollProgress");
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      bar.style.width = height > 0 ? `${(scrolled / height) * 100}%` : "0%";
    };
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  function initReveal() {
    const targets = document.querySelectorAll(".reveal:not(.in-view)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLangToggle();
    initMobileNav();
    initScrollProgress();
    initLightbox();
    render(state.lang);
  });
})();
