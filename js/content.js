// Portfolio bilingual content
// Edit this file to update all text in both languages.
window.portfolioContent = {
  tr: {
    lang: "tr",
    dir: "ltr",
    htmlLang: "tr",

    // --- META ---
    metaTitle: "İlker Coşkunsel | Bilgisayar Mühendisliği & Yazılım",
    metaDescription:
      "OSTİM Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisi ve yazılım geliştirici İlker Coşkunsel'in kişisel portföyü.",
    ogTitle: "İlker Coşkunsel | Bilgisayar Mühendisliği & Yazılım",
    ogDescription:
      "Bilgisayar Mühendisliği öğrencisi ve yazılım geliştirici.",

    // --- START SCREEN ---
    startScreen: {
      player: "OYUNCU:",
      name: "İLKER COŞKUNSEL",
      roles: [
        "Bilgisayar Mühendisliği Öğrencisi",
        "Yazılım Geliştirici",
        "Veri Tabanı & Veri Yönetimi Meraklısı",
      ],
      enterBtn: "[ SİSTEME GİRİŞ ]",
      skipBtn: "[ GİRİŞİ GEÇ ]",
      loadingText: "SİSTEM YÜKLENİYOR...",
    },

    // --- NAV ---
    nav: {
      about: "HAKKIMDA",
      experience: "DENEYİM",
      projects: "PROJELER",
      competitions: "YARIŞMALAR",
      skills: "YETENEKLER",
      contact: "İLETİŞİM",
      themeToggle: "TEMA",
      langToggle: "EN",
    },

    // --- HERO ---
    hero: {
      title: "Bilgisayar Mühendisliği Öğrencisi & Yazılım Geliştirici",
      bio1: "OSTİM Teknik Üniversitesi'nde 3. sınıf Bilgisayar Mühendisliği öğrencisiyim. C# ve SQL başta olmak üzere çeşitli programlama dillerinde ve teknolojilerinde deneyim sahibiyim.",
      bio2: "Farklı açılardan düşünerek yaratıcı çözümler üretmeyi seviyorum. Öğrenmeye hevesliyim ve özellikle veri tabanı ile veri yönetimi alanlarında bilgi ve becerilerimi geliştirmeye yüksek bir motivasyonum var. Bu doğrultuda erkenden projeler üreterek pratik tecrübemi artırmayı hedefliyorum.",
      viewProjects: "Projeleri Gör",
      contact: "İletişim",
    },

    // --- CURRENT FOCUS ---
    focus: {
      sectionTitle: "▸ GÜNCEL ODAK",
      cards: [
        {
          icon: "💻",
          title: "Nesne Yönelimli Programlama",
          body: "C#, ADO.NET ve Unity ortamlarında OOP standartlarına ve temiz kod prensiplerine uygun mimariler kurmak.",
        },
        {
          icon: "💾",
          title: "Veri Yönetimi & SQL",
          body: "İlişkisel veri tabanları tasarımı, sorgu optimizasyonu ve MS SQL Server / Oracle veritabanı yönetim sistemleri üzerinde çalışıyorum.",
        },
        {
          icon: "🛠️",
          title: "Staj ve Hackathon Projeleri",
          body: "Gerçek dünya tecrübesi kazanmak için bütçe yönetimi, görev ve stajyer takip araçları gibi pratik backend/frontend uygulamaları geliştiriyorum.",
        },
      ],
    },

    // --- EXPERIENCE ---
    experience: {
      sectionTitle: "▸ DENEYİM",
      items: [
        {
          position: "Yazılım Geliştirme Stajyeri",
          company: "Monad Yazılım",
          location: "Ankara, Türkiye",
          date: "1–19 Haziran 2026",
          status: "Completed",
          description:
            "Java, Spring ve Vaadin kullanarak rol tabanlı bir görev ve stajyer yönetim uygulaması geliştirdim.",
          responsibilities: [
            "Admin, Mentor ve Viewer rollerine göre yetkilendirme kuralları geliştirdim.",
            "Görev, stajyer ve değerlendirme yönetim ekranları hazırladım.",
            "Oracle Database üzerinde veri işlemleri gerçekleştirdim.",
            "CRUD işlemleri, tarih filtreleme ve kullanıcıya göre veri sınırlandırma özellikleri geliştirdim.",
            "Katmanlı uygulama mimarisi ve servis tabanlı yapı üzerinde çalıştım.",
          ],
          technologies: ["Java", "Spring", "Vaadin", "Oracle Database", "SQL"],
          hasRepo: false,
        },
      ],
    },

    // --- PROJECTS ---
    projects: {
      sectionTitle: "▸ PROJELER",
      categories: {
        aerospace: "Veri Tabanı & Sistem",
        software: "Yazılım & Web",
        games: "Oyunlar & Prototipler",
      },
      items: [
        {
          id: "cubesat-groundstation",
          category: "aerospace",
          name: "CubeSat Yer İstasyonu Yazılımı",
          description:
            "OTUSAT CubeSat projesi için telemetri verilerini dinleyen, görselleştiren ve uyduyu komuta eden yer istasyonu yazılımı.",
          role: "Yazılım Geliştirici",
          responsibilities: [
            "Seri port (UART) üzerinden gelen telemetri paketlerinin çözümlenmesi",
            "Sensör verilerinin (sıcaklık, basınç, ivme) gerçek zamanlı grafiklerle gösterilmesi",
            "Uyduya komut gönderim arayüzü ve veritabanı loglama sistemi"
          ],
          technologies: ["C#", "Windows Forms / WPF", "SQL", "Serial Communication"],
          status: "Devam Ediyor",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "monad-task",
          category: "aerospace",
          name: "Görev ve Stajyer Yönetim Sistemi",
          description:
            "Rol tabanlı yetkilendirmeye sahip görev ve stajyer yönetim uygulaması. Admin, Mentor ve Viewer rollerine göre farklı ekranlar ve yetkiler sunar.",
          role: "Stajyer Geliştirici",
          responsibilities: [
            "Spring Boot tabanlı katmanlı backend mimarisi tasarımı",
            "Vaadin ile dinamik, kullanıcı dostu arayüz geliştirme",
            "Oracle SQL veri modeli tasarımı ve entegrasyonu",
          ],
          technologies: ["Java", "Spring Boot", "Vaadin", "Oracle DB", "SQL"],
          status: "Tamamlandı",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "budget",
          category: "software",
          name: "Budget (Bütçe Yönetimi)",
          description:
            "Dört kişilik ekiple 24 saatte geliştirilen finansal yönetim uygulaması. GDG OSTIMTECH Hackathon '26.",
          role: "Geliştirici",
          responsibilities: [
            "ASP.NET Core ve Blazor WebAssembly entegrasyonu",
            "SQLite veritabanı yapısı ve veri yönetim modülleri",
            "Yahoo Finance API entegrasyonu ve portföy analiz ekranları",
          ],
          technologies: [
            "ASP.NET Core",
            "Blazor WebAssembly",
            "SQLite",
            "Google OAuth",
            "Yahoo Finance API",
          ],
          status: "Tamamlandı",
          repoUrl: "https://github.com/GoktugSaylam/Budget",
          demoUrl: null,
        },
        {
          id: "tank-coop",
          category: "games",
          name: "Co-op Tank Yönetim Oyunu",
          description:
            "Tankı doğrudan kontrol etmek yerine, tankı içeriden yöneten insan mürettebatı kontrol ettiğimiz co-op strateji oyunu prototipi.",
          role: "Oyun Geliştirici",
          responsibilities: [
            "Mürettebatın tank içi görevlere (sürüş, ateş, tamir) atanması mekanikleri",
            "Kooperatif çok oyunculu (Co-op) senkronizasyon altyapısı",
            "Oyun döngüsü ve görev yönetim sistemleri"
          ],
          technologies: ["Unity", "C#", "Multiplayer/Netcode"],
          status: "Devam Ediyor",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "gamejam",
          category: "games",
          name: "Game Jam Projeleri",
          description:
            "Unity ve C# kullanarak kısıtlı süreler içinde oynanabilir mekanikler, temel oyun sistemleri ve çalışan prototipler geliştirdim.",
          role: "Oyun Geliştirici",
          responsibilities: [
            "Hızlı prototipleme ve fizik tabanlı mekaniklerin kodlanması",
            "Karakter kontrolcüleri ve oyun döngüsü tasarımı"
          ],
          technologies: ["Unity", "C#"],
          status: "Çeşitli",
          repoUrl: null,
          demoUrl: null,
        },
      ],
    },

    // --- COMPETITIONS ---
    competitions: {
      sectionTitle: "▸ YARIŞMALAR & HACKATHONLAR",
      items: [
        {
          id: "gdg-hackathon",
          name: "GDG OSTIMTECH Hackathon '26",
          type: "24 Saatlik Hackathon",
          project: "Budget",
          teamSize: "4 kişilik ekip",
          description:
            "Dört kişilik bir ekiple 24 saat içinde finansal yönetim uygulaması geliştirdik.",
          features: [
            "Bütçe takibi ve analizleri",
            "Gelir ve gider yönetimi",
            "Portföy yönetimi ve harcama analizi",
            "Google OAuth ile güvenli giriş",
            "Yahoo Finance API üzerinden gerçek zamanlı borsa veri entegrasyonu",
          ],
          technologies: [
            "ASP.NET Core",
            "Blazor WebAssembly",
            "SQLite",
            "Google OAuth",
            "Yahoo Finance API",
          ],
          repoUrl: "https://github.com/GoktugSaylam/Budget",
          repoLabel: "Repository",
        },
        {
          id: "metu-gates",
          name: "METU GATES Jam 2026",
          type: "Game Jam",
          project: null,
          teamSize: null,
          description: "GATES öğrenci topluluğu tarafından düzenlenen ODTÜ game jam etkinliği.",
          features: [],
          technologies: ["Unity", "C#"],
          repoUrl: "https://itch.io/jam/gatesjam-2026/rate/4380174",
          repoLabel: "Oyun Sayfası",
        },
        {
          id: "global-game-jam",
          name: "Global Game Jam ATOM 2026",
          type: "Game Jam",
          project: null,
          teamSize: null,
          description: "Dünya çapında düzenlenen 48 saatlik oyun geliştirme maratonunun ATOM (ODTÜ Teknokent) ayağı.",
          features: [],
          technologies: ["Unity", "C#"],
          repoUrl: "https://globalgamejam.org/games/2026/little-mask-2",
          repoLabel: "Oyun Sayfası",
        }
      ],
      otherJamsTitle: "Diğer Katıldığım Game Jam'ler",
      otherJams: [
        "OSTIMTECH Jam 2026",
        "AyazJam 2025",
        "OSTIMTECH Jam 2025"
      ],
    },

    // --- SKILLS ---
    skills: {
      sectionTitle: "▸ TEKNİK YETENEKLER",
      categories: [
        {
          name: "PROGRAMLAMA DİLLERİ",
          items: ["C#", "Java", "SQL", "C"],
        },
        {
          name: "NESNE YÖNELİMLİ YAZILIM",
          items: [".NET", "ADO.NET", "Spring Boot", "Vaadin"],
        },
        {
          name: "VERI YÖNETİMİ & VERİ TABANLARI",
          items: [
            "SQL",
            "Microsoft SQL Server",
            "Oracle Database",
            "PostgreSQL",
            "SQLite",
          ],
        },
        {
          name: "OYUN GELİŞTİRME & ARAÇLAR",
          items: ["Unity", "Git", "GitHub", "REST APIs"],
        },
      ],
    },

    // --- EDUCATION ---
    education: {
      sectionTitle: "▸ EĞİTİM & İLGİ ALANLARI",
      degree: "Bilgisayar Mühendisliği (3. Sınıf - Not Ort: 3.01)",
      university: "OSTİM Teknik Üniversitesi (2024 - Devam Ediyor)",
      interestsTitle: "İlgi Alanları",
      interests: [
        "Veri Tabanı Sistemleri",
        "Nesne Yönelimli Programlama",
        "Oyun Geliştirme",
        "Veri Yönetimi",
        "Backend Uygulamaları",
        "Algoritmalar ve Veri Yapıları",
      ],
    },

    // --- CONTACT ---
    contact: {
      sectionTitle: "▸ İLETİŞİM",
      title: "İletişime Geç",
      description:
        "Yazılım geliştirme projeleri, staj ve iş birlikleri için bana aşağıdaki kanallardan ulaşabilirsiniz.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-posta",
    },

    // --- FOOTER ---
    footer: {
      system: "SİSTEM: AKTİF",
      version: "v2.0.0",
      location: "Ankara, Türkiye",
      madeWith: "Piksel sanatı ve ☕ ile yapıldı.",
    },

    // --- LABELS ---
    labels: {
      role: "Rol",
      technologies: "Teknolojiler",
      status: "Durum",
      location: "Konum",
      date: "Tarih",
      responsibilities: "Çalışmalar",
      features: "Özellikler",
      teamSize: "Takım Büyüklüğü",
      viewRepo: "Repository'yi Gör",
      viewDemo: "Canlı Demo",
      ongoing: "Devam Ediyor",
      completed: "Tamamlandı",
      various: "Çeşitli",
      planned: "Planlanıyor",
      noPublicRepo: "Kamuya açık repo yok",
      interests: "İlgi Alanları",
    },
  },

  en: {
    lang: "en",
    dir: "ltr",
    htmlLang: "en",

    // --- META ---
    metaTitle:
      "İlker Coşkunsel | Computer Engineering & Software Development",
    metaDescription:
      "Portfolio of İlker Coşkunsel, a Computer Engineering student and software developer working on database management, C#, Java and Unity.",
    ogTitle: "İlker Coşkunsel | Computer Engineering & Software",
    ogDescription:
      "Computer Engineering student and software developer.",

    // --- START SCREEN ---
    startScreen: {
      player: "PLAYER:",
      name: "İLKER COŞKUNSEL",
      roles: [
        "Computer Engineering Student",
        "Software Developer",
        "Database & Data Management Enthusiast",
      ],
      enterBtn: "[ ENTER SYSTEM ]",
      skipBtn: "[ SKIP INTRO ]",
      loadingText: "LOADING SYSTEMS...",
    },

    // --- NAV ---
    nav: {
      about: "ABOUT",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      competitions: "COMPETITIONS",
      skills: "SKILLS",
      contact: "CONTACT",
      themeToggle: "THEME",
      langToggle: "TR",
    },

    // --- HERO ---
    hero: {
      title: "Computer Engineering Student & Software Developer",
      bio1: "I am a 3rd year Computer Engineering student at OSTİM Technical University. I have experience in various programming languages and technologies, especially C# and SQL.",
      bio2: "I enjoy thinking outside the box to generate creative solutions. I am eager to learn and highly motivated to develop my skills in database administration and data management. I aim to build projects and gain early experience.",
      viewProjects: "View Projects",
      contact: "Contact",
    },

    // --- CURRENT FOCUS ---
    focus: {
      sectionTitle: "▸ CURRENT FOCUS",
      cards: [
        {
          icon: "💻",
          title: "Object Oriented Programming",
          body: "Designing systems utilizing C#, ADO.NET and Unity, ensuring clean code principles and OOP standards.",
        },
        {
          icon: "💾",
          title: "Data Management & SQL",
          body: "Working on relational database design, query optimization, and database engines such as MS SQL Server and Oracle DB.",
        },
        {
          icon: "🛠️",
          title: "Internship & Hackathon Projects",
          body: "Developing practical backend and frontend tools including budget trackers and evaluation systems to gain hands-on experience.",
        },
      ],
    },

    // --- EXPERIENCE ---
    experience: {
      sectionTitle: "▸ EXPERIENCE",
      items: [
        {
          position: "Software Development Intern",
          company: "Monad Yazılım",
          location: "Ankara, Turkey",
          date: "June 1–19, 2026",
          status: "Completed",
          description:
            "Developed a role-based task and intern management application using Java, Spring and Vaadin.",
          responsibilities: [
            "Implemented authorization rules for Admin, Mentor and Viewer roles.",
            "Developed interfaces for task, intern and evaluation management.",
            "Worked with Oracle Database and SQL-based data operations.",
            "Implemented CRUD operations, date filtering and user-based data restrictions.",
            "Worked with layered application architecture and service-based application design.",
          ],
          technologies: ["Java", "Spring", "Vaadin", "Oracle Database", "SQL"],
          hasRepo: false,
        },
      ],
    },

    // --- PROJECTS ---
    projects: {
      sectionTitle: "▸ PROJECTS",
      categories: {
        aerospace: "Database & Systems",
        software: "Software & Web",
        games: "Games & Prototypes",
      },
      items: [
        {
          id: "cubesat-groundstation",
          category: "aerospace",
          name: "CubeSat Ground Station Software",
          description:
            "Ground station software for the OTUSAT CubeSat project, responsible for listening, visualizing telemetry data and sending commands to the satellite.",
          role: "Software Developer",
          responsibilities: [
            "Parsing telemetry packets received via serial port (UART)",
            "Real-time visualization of sensor data (temperature, pressure, acceleration) via charts",
            "Satellite command transmission interface and database logging system"
          ],
          technologies: ["C#", "Windows Forms / WPF", "SQL", "Serial Communication"],
          status: "Ongoing",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "monad-task",
          category: "aerospace",
          name: "Task & Intern Management Application",
          description:
            "A role-based task and intern management application. Provides different dashboards for Admin, Mentor and Viewer roles.",
          role: "Intern Developer",
          responsibilities: [
            "Designed a layered backend architecture using Spring Boot",
            "Built a dynamic UI using Vaadin framework",
            "Designed schema and relational integrity in Oracle Database",
          ],
          technologies: ["Java", "Spring Boot", "Vaadin", "Oracle DB", "SQL"],
          status: "Completed",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "budget",
          category: "software",
          name: "Budget (Financial Tracker)",
          description:
            "A financial management application developed with a four-person team within 24 hours. GDG OSTIMTECH Hackathon '26.",
          role: "Developer",
          responsibilities: [
            "Integrated Blazor WebAssembly with ASP.NET Core API",
            "Designed local data modeling with SQLite database integration",
            "Implemented Yahoo Finance API to calculate and analyze stock portfolios",
          ],
          technologies: [
            "ASP.NET Core",
            "Blazor WebAssembly",
            "SQLite",
            "Google OAuth",
            "Yahoo Finance API",
          ],
          status: "Completed",
          repoUrl: "https://github.com/GoktugSaylam/Budget",
          demoUrl: null,
        },
        {
          id: "tank-coop",
          category: "games",
          name: "Co-op Tank Crew Management Game",
          description:
            "A co-op strategy game prototype where you control the human crew managing a tank from the inside, rather than controlling the tank directly.",
          role: "Game Developer",
          responsibilities: [
            "Crew assignment mechanics for interior tank duties (driving, shooting, repairing)",
            "Cooperative multiplayer (Co-op) synchronization architecture",
            "Core game loop and task management systems"
          ],
          technologies: ["Unity", "C#", "Multiplayer/Netcode"],
          status: "Ongoing",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "gamejam",
          category: "games",
          name: "Game Jam Projects",
          description:
            "Developed playable mechanics, core game systems and functional prototypes under strict time constraints using Unity and C#.",
          role: "Game Developer",
          responsibilities: [
            "Rapid prototyping and physics scripting",
            "Designed character controllers and overall game loop",
          ],
          technologies: ["Unity", "C#"],
          status: "Various",
          repoUrl: null,
          demoUrl: null,
        },
      ],
    },

    // --- COMPETITIONS ---
    competitions: {
      sectionTitle: "▸ COMPETITIONS & HACKATHONS",
      items: [
        {
          id: "gdg-hackathon",
          name: "GDG OSTIMTECH Hackathon '26",
          type: "24-Hour Hackathon",
          project: "Budget",
          teamSize: "4-person team",
          description:
            "Developed a financial management application with a four-person team within 24 hours.",
          features: [
            "Budget tracking and analytics dashboard",
            "Income and expense ledger",
            "Portfolio tracking and analysis",
            "Secure authorization with Google OAuth",
            "Market data integration via Yahoo Finance API",
          ],
          technologies: [
            "ASP.NET Core",
            "Blazor WebAssembly",
            "SQLite",
            "Google OAuth",
            "Yahoo Finance API",
          ],
          repoUrl: "https://github.com/GoktugSaylam/Budget",
          repoLabel: "View Repository",
        },
        {
          id: "metu-gates",
          name: "METU GATES Jam 2026",
          type: "Game Jam",
          project: null,
          teamSize: null,
          description: "METU game jam event organized by the GATES student community.",
          features: [],
          technologies: ["Unity", "C#"],
          repoUrl: "https://itch.io/jam/gatesjam-2026/rate/4380174",
          repoLabel: "Game Page",
        },
        {
          id: "global-game-jam",
          name: "Global Game Jam ATOM 2026",
          type: "Game Jam",
          project: null,
          teamSize: null,
          description: "The ATOM (METU Technopolis) leg of the 48-hour global game development marathon.",
          features: [],
          technologies: ["Unity", "C#"],
          repoUrl: "https://globalgamejam.org/games/2026/little-mask-2",
          repoLabel: "Game Page",
        }
      ],
      otherJamsTitle: "Other Game Jams Attended",
      otherJams: [
        "OSTIMTECH Jam 2026",
        "AyazJam 2025",
        "OSTIMTECH Jam 2025"
      ],
    },

    // --- SKILLS ---
    skills: {
      sectionTitle: "▸ TECHNICAL SKILLS",
      categories: [
        {
          name: "PROGRAMMING LANGUAGES",
          items: ["C#", "Java", "SQL", "C"],
        },
        {
          name: "OBJECT ORIENTED SOFTWARE",
          items: [".NET", "ADO.NET", "Spring Boot", "Vaadin"],
        },
        {
          name: "DATA MANAGEMENT & DATABASES",
          items: [
            "SQL",
            "Microsoft SQL Server",
            "Oracle Database",
            "PostgreSQL",
            "SQLite",
          ],
        },
        {
          name: "GAME DEVELOPMENT & TOOLS",
          items: ["Unity", "Git", "GitHub", "REST APIs"],
        },
      ],
    },

    // --- EDUCATION ---
    education: {
      sectionTitle: "▸ EDUCATION & INTERESTS",
      degree: "Computer Engineering (Junior - GPA: 3.01)",
      university: "OSTİM Technical University (2024 - Present)",
      interestsTitle: "Areas of Interest",
      interests: [
        "Database Systems",
        "Object Oriented Programming",
        "Game Development",
        "Data Management",
        "Backend Applications",
        "Algorithms & Data Structures",
      ],
    },

    // --- CONTACT ---
    contact: {
      sectionTitle: "▸ CONTACT",
      title: "Get in Touch",
      description:
        "Feel free to contact me regarding software development, internships, collaborations and project opportunities.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },

    // --- FOOTER ---
    footer: {
      system: "SYSTEM: ONLINE",
      version: "v2.0.0",
      location: "Ankara, Turkey",
      madeWith: "Made with pixel art & ☕",
    },

    // --- LABELS ---
    labels: {
      role: "Role",
      technologies: "Technologies",
      status: "Status",
      location: "Location",
      date: "Date",
      responsibilities: "Responsibilities",
      features: "Features",
      teamSize: "Team Size",
      viewRepo: "View Repository",
      viewDemo: "Live Demo",
      ongoing: "Ongoing",
      completed: "Completed",
      various: "Various",
      planned: "Planned",
      noPublicRepo: "No public repository",
      interests: "Areas of Interest",
    },
  },
};
