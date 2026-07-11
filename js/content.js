// Portfolio bilingual content
// Edit this file to update all text in both languages.
window.portfolioContent = {
  tr: {
    lang: "tr",
    dir: "ltr",
    htmlLang: "tr",

    // --- META ---
    metaTitle: "İlker Coşkunsel | Havacılık ve Uzay Mühendisliği & Yazılım",
    metaDescription:
      "CubeSat sistemleri, yer istasyonu yazılımları, telemetri ve simülasyonlar üzerine çalışan Havacılık ve Uzay Mühendisliği öğrencisi ve yazılım geliştirici İlker Coşkunsel'in portföyü.",
    ogTitle: "İlker Coşkunsel | Havacılık & Yazılım",
    ogDescription:
      "CubeSat sistemleri, yer istasyonu yazılımları ve simülasyonlar üzerine çalışan mühendis.",

    // --- START SCREEN ---
    startScreen: {
      player: "OYUNCU:",
      name: "İLKER COŞKUNSEL",
      roles: [
        "Havacılık ve Uzay Mühendisliği Öğrencisi",
        "Yazılım Geliştirici",
        "CubeSat Proje Lideri",
      ],
      enterBtn: "[ PORTFÖYE GİR ]",
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
      title: "Havacılık ve Uzay Mühendisliği Öğrencisi & Yazılım Geliştirici",
      bio1: "CubeSat sistemleri, yer istasyonu yazılımları, telemetri mimarileri, simülasyonlar ve web uygulamaları üzerine çalışan bir Havacılık ve Uzay Mühendisliği öğrencisi ve yazılım geliştiriciyim.",
      bio2: "Karmaşık teknik fikirleri yinelemeli geliştirme süreçleriyle çalışan ve test edilebilir prototiplere dönüştürmeyi seviyorum. Güncel odağım OTUSAT CubeSat projesinin yer istasyonu yazılımını geliştirmek ve sistem mühendisliği faaliyetlerini yürütmektir.",
      viewProjects: "Projeleri Gör",
      contact: "İletişim",
    },

    // --- CURRENT FOCUS ---
    focus: {
      sectionTitle: "▸ GÜNCEL ODAK",
      cards: [
        {
          icon: "📡",
          title: "CubeSat Yer İstasyonu",
          body: "C# ve .NET tabanlı bir yer istasyonu yazılımı için telemetri üretimi, paket ayrıştırma, görselleştirme ve veri tabanı kayıt mimarisi üzerinde çalışıyorum.",
        },
        {
          icon: "🛰️",
          title: "OTUSAT CubeSat",
          body: "1U Dünya gözlem CubeSat projesinde proje lideri ve sistem mühendisi olarak alt sistemlerin koordinasyonu, görev gereksinimleri ve sistem mimarisi üzerinde çalışıyorum.",
        },
        {
          icon: "✈️",
          title: "Havacılık Yazılımı & Simülasyon",
          body: "Havacılık ve uzay uygulamalarında kullanılabilecek telemetri, simülasyon ve teknik yazılım araçları geliştiriyorum.",
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
          status: "Tamamlandı",
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
        aerospace: "Havacılık & Uzay",
        software: "Yazılım & Web",
        games: "Oyunlar & Prototipler",
      },
      items: [
        {
          id: "otusat",
          category: "aerospace",
          name: "OTUSAT CubeSat",
          description: "1U Dünya gözlem CubeSat projesi.",
          role: "Proje Lideri ve Sistem Mühendisi",
          responsibilities: [
            "Görev hedeflerinin ve sistem gereksinimlerinin oluşturulması",
            "Alt sistem ekiplerinin koordinasyonu",
            "Sistem mimarisi",
            "Telemetri ve yer istasyonu planlaması",
            "Yazılım ekibinin yönlendirilmesi",
            "Alt sistem entegrasyon planları",
          ],
          technologies: [],
          status: "Devam Ediyor",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "groundstation",
          category: "aerospace",
          name: "CubeSat Yer İstasyonu",
          description:
            "Uydu telemetrilerini üreten, ayrıştıran, görüntüleyen ve veri tabanına kaydeden modüler bir yer istasyonu yazılımı geliştirme çalışması.",
          role: "Geliştirici",
          responsibilities: [
            "Telemetri üretici",
            "Paket ayrıştırıcı",
            "Gerçek zamanlı veri görüntüleme",
            "Uydu konum haritası",
            "Arka planda veri tabanı kaydı",
            "Geçmiş telemetri sorgulama",
            "TUI/CLI prototipleri",
            "İlerleyen aşamada Blazor tabanlı kullanıcı arayüzü",
          ],
          technologies: ["C#", ".NET", "Blazor", "SQL"],
          status: "Devam Ediyor",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "budget",
          category: "software",
          name: "Budget",
          description:
            "Dört kişilik ekiple 24 saatte geliştirilen finansal yönetim uygulaması. GDG OSTIMTECH Hackathon '26.",
          role: "Geliştirici",
          responsibilities: [],
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
          id: "monad-task",
          category: "software",
          name: "Görev Yönetim Uygulaması",
          description:
            "Rol tabanlı görev ve stajyer yönetim uygulaması. Admin, Mentor ve Viewer rollerine göre farklı yetkiler sunan; görev, stajyer ve değerlendirme yönetimi sağlayan bir uygulama.",
          role: "Stajyer Geliştirici",
          responsibilities: [],
          technologies: [
            "Java",
            "Spring",
            "Vaadin",
            "Oracle Database",
          ],
          status: "Tamamlandı",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "gamejam",
          category: "games",
          name: "Game Jam Projeleri",
          description:
            "Unity ve C# kullanarak kısıtlı süre içinde oynanabilir mekanikler, temel oyun sistemleri ve çalışan prototipler geliştirdim.",
          role: "Oyun Geliştirici",
          responsibilities: [],
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
            "Bütçe takibi",
            "Gelir ve gider yönetimi",
            "Portföy yönetimi",
            "Harcama analizi",
            "Finansal metriklerin görüntülenmesi",
            "Google OAuth ile giriş",
            "Yahoo Finance API üzerinden piyasa verileri",
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
          id: "gamejam-comp",
          name: "48 Saatlik Game Jam Projeleri",
          type: "Game Jam",
          project: null,
          teamSize: null,
          description:
            "Unity ve C# kullanarak kısıtlı süre içinde oynanabilir mekanikler, temel oyun sistemleri ve çalışan prototipler geliştirdim.",
          features: [],
          technologies: ["Unity", "C#"],
          repoUrl: null,
          repoLabel: null,
        },
      ],
    },

    // --- SKILLS ---
    skills: {
      sectionTitle: "▸ TEKNİK YETENEKLER",
      categories: [
        {
          name: "PROGRAMLAMA DİLLERİ",
          items: ["C#", "Java", "SQL"],
        },
        {
          name: "BACKEND",
          items: [".NET", "ASP.NET Core", "Spring"],
        },
        {
          name: "FRONTEND",
          items: ["Blazor", "Vaadin", "HTML", "CSS"],
        },
        {
          name: "VERİ TABANLARI",
          items: [
            "Oracle Database",
            "PostgreSQL",
            "SQLite",
            "MySQL",
            "MSSQL",
          ],
        },
        {
          name: "OYUN & SİMÜLASYON",
          items: ["Unity", "C# Simülasyon Geliştirme"],
        },
        {
          name: "ARAÇLAR & SİSTEMLER",
          items: ["Git", "GitHub", "Linux", "Windows", "REST APIs"],
        },
      ],
    },

    // --- EDUCATION ---
    education: {
      sectionTitle: "▸ EĞİTİM & İLGİ ALANLARI",
      degree: "Havacılık ve Uzay Mühendisliği",
      university: "OSTİM Teknik Üniversitesi",
      interestsTitle: "İlgi Alanları",
      interests: [
        "Aerodinamik",
        "Akışkanlar mekaniği",
        "Isı transferi",
        "İtki sistemleri",
        "CubeSat sistem mühendisliği",
        "Yer istasyonu yazılımları",
        "Telemetri sistemleri",
        "Simülasyon",
      ],
    },

    // --- CONTACT ---
    contact: {
      sectionTitle: "▸ İLETİŞİM",
      title: "İletişime Geç",
      description:
        "CubeSat projeleri, yazılım geliştirme, teknik iş birlikleri ve proje çalışmaları için iletişime geçebilirsiniz.",
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
      features: "Uygulama Özellikleri",
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
      "İlker Coşkunsel | Aerospace Engineering & Software Development",
    metaDescription:
      "Portfolio of İlker Coşkunsel, an Aerospace Engineering student and software developer working on CubeSat systems, ground station software, telemetry and simulations.",
    ogTitle: "İlker Coşkunsel | Aerospace & Software",
    ogDescription:
      "Aerospace Engineering student working on CubeSat systems, ground station software and simulations.",

    // --- START SCREEN ---
    startScreen: {
      player: "PLAYER:",
      name: "İLKER COŞKUNSEL",
      roles: [
        "Aerospace Engineering Student",
        "Software Developer",
        "CubeSat Project Lead",
      ],
      enterBtn: "[ ENTER PORTFOLIO ]",
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
      title: "Aerospace Engineering Student & Software Developer",
      bio1: "I am an Aerospace Engineering student and software developer working on CubeSat systems, ground station software, telemetry architectures, simulations and web applications.",
      bio2: "I enjoy turning complex technical ideas into functional and testable prototypes through iterative development. My current focus is building ground station software and supporting the system engineering activities of the OTUSAT CubeSat project.",
      viewProjects: "View Projects",
      contact: "Contact",
    },

    // --- CURRENT FOCUS ---
    focus: {
      sectionTitle: "▸ CURRENT FOCUS",
      cards: [
        {
          icon: "📡",
          title: "CubeSat Ground Station",
          body: "Working on telemetry generation, packet parsing, visualization and database persistence for a C# and .NET-based CubeSat ground station.",
        },
        {
          icon: "🛰️",
          title: "OTUSAT CubeSat",
          body: "Working as project lead and system engineer on a 1U Earth observation CubeSat, coordinating subsystems, mission requirements and system architecture.",
        },
        {
          icon: "✈️",
          title: "Aerospace Software & Simulation",
          body: "Developing telemetry, simulation and technical software tools for aerospace applications.",
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
        aerospace: "Aerospace & Space",
        software: "Software & Web",
        games: "Games & Prototypes",
      },
      items: [
        {
          id: "otusat",
          category: "aerospace",
          name: "OTUSAT CubeSat",
          description: "A 1U Earth observation CubeSat project.",
          role: "Project Lead and System Engineer",
          responsibilities: [
            "Mission objectives and system requirements",
            "Subsystem team coordination",
            "System architecture",
            "Telemetry and ground station planning",
            "Software team coordination",
            "Subsystem integration planning",
          ],
          technologies: [],
          status: "Ongoing",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "groundstation",
          category: "aerospace",
          name: "CubeSat Ground Station",
          description:
            "A modular ground station software project for generating, parsing, displaying and storing satellite telemetry.",
          role: "Developer",
          responsibilities: [
            "Telemetry generator",
            "Packet parser",
            "Real-time telemetry visualization",
            "Satellite position map",
            "Background database persistence",
            "Historical telemetry queries",
            "TUI and CLI prototypes",
            "Blazor-based user interface in later stages",
          ],
          technologies: ["C#", ".NET", "Blazor", "SQL"],
          status: "Ongoing",
          repoUrl: null,
          demoUrl: null,
        },
        {
          id: "budget",
          category: "software",
          name: "Budget",
          description:
            "A financial management application developed with a four-person team within 24 hours. GDG OSTIMTECH Hackathon '26.",
          role: "Developer",
          responsibilities: [],
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
          id: "monad-task",
          category: "software",
          name: "Task Management Application",
          description:
            "A role-based task and intern management application. Provides task, intern and evaluation management with different permissions for Admin, Mentor and Viewer roles.",
          role: "Intern Developer",
          responsibilities: [],
          technologies: [
            "Java",
            "Spring",
            "Vaadin",
            "Oracle Database",
          ],
          status: "Completed",
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
          responsibilities: [],
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
            "Budget tracking",
            "Income and expense management",
            "Portfolio management",
            "Expense analysis",
            "Financial metrics",
            "Google OAuth authentication",
            "Market data integration through Yahoo Finance API",
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
          id: "gamejam-comp",
          name: "48-Hour Game Jam Projects",
          type: "Game Jam",
          project: null,
          teamSize: null,
          description:
            "Developed playable mechanics, core game systems and functional prototypes under strict time constraints using Unity and C#.",
          features: [],
          technologies: ["Unity", "C#"],
          repoUrl: null,
          repoLabel: null,
        },
      ],
    },

    // --- SKILLS ---
    skills: {
      sectionTitle: "▸ TECHNICAL SKILLS",
      categories: [
        {
          name: "PROGRAMMING LANGUAGES",
          items: ["C#", "Java", "SQL"],
        },
        {
          name: "BACKEND",
          items: [".NET", "ASP.NET Core", "Spring"],
        },
        {
          name: "FRONTEND",
          items: ["Blazor", "Vaadin", "HTML", "CSS"],
        },
        {
          name: "DATABASES",
          items: [
            "Oracle Database",
            "PostgreSQL",
            "SQLite",
            "MySQL",
            "MSSQL",
          ],
        },
        {
          name: "GAME DEVELOPMENT & SIMULATION",
          items: ["Unity", "C# Simulation Development"],
        },
        {
          name: "TOOLS & SYSTEMS",
          items: ["Git", "GitHub", "Linux", "Windows", "REST APIs"],
        },
      ],
    },

    // --- EDUCATION ---
    education: {
      sectionTitle: "▸ EDUCATION & INTERESTS",
      degree: "Aerospace Engineering",
      university: "OSTİM Technical University",
      interestsTitle: "Areas of Interest",
      interests: [
        "Aerodynamics",
        "Fluid mechanics",
        "Heat transfer",
        "Propulsion",
        "CubeSat systems engineering",
        "Ground station software",
        "Telemetry systems",
        "Simulation",
      ],
    },

    // --- CONTACT ---
    contact: {
      sectionTitle: "▸ CONTACT",
      title: "Get in Touch",
      description:
        "Feel free to contact me regarding CubeSat projects, software development, technical collaborations and project opportunities.",
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
