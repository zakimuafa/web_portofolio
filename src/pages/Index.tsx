import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Server,
  Instagram,
  Send,
} from "lucide-react";

// Import assets
import profilePhoto from "@/assets/profile-photo.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskApp from "@/assets/project-taskapp.jpg";
import projectWeather from "@/assets/project-weather.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  // language state: 'en' (english) | 'id' (indonesia)
  const [lang, setLang] = useState<"en" | "id">("en");

  // Minimal translations for the UI strings we change
  const t = {
    en: {
      hi: "Hi,I'm Zaki",
      role: "Web Developer & front end",
      description:
        "Passionate about creating cutting-edge web experiences with modern technologies. I transform ideas into beautiful, functional applications that make a difference.",
      hireMe: "Hire Me",
      downloadCV: "Download CV",
      sendMessage: "Send Message",
      contactTitle: "Let's Connect",
      contactDesc: "Ready to bring your ideas to life? Let's work together!",
      aboutTitle: "About Me",
      aboutDesc:
        "I'm a passionate web developer with 2+ years of experience building modern, scalable applications. I love learning new technologies and solving complex problems through code.",
      featuredProjects: "Featured Projects",
      featuredDesc: "Some of my recent work that showcase my skills and passion for development",
      journeyTitle: "My Journey",
  skillsTitle: "Skills & Technologies",
      journeyPara1:
        "Started my journey in web development during school, quickly falling in love with the endless possibilities of creating digital experiences. Over the years,always focusing on delivering high-quality, user-centric solutions.",
      journeyPara2:
        "When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or sharing knowledge with the developer community.",
      experienceTitle: "Experience & Journey",
      experienceDesc: "My professional journey and growth in the tech industry",
      contactFormTitle: "Send a Message",
      contactFormDesc: "Fill out the form and I'll get back to you as soon as possible.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      getInTouch: "Get in Touch",
      followMe: "Follow Me",
      footer: "© 2025 Zaki.",
    },
    id: {
      hi: "Halo, saya Zaki",
      role: "Web Developer & Front End",
      description:
        "Bersemangat membuat pengalaman web mutakhir dengan teknologi modern. Saya mengubah ide menjadi aplikasi yang indah dan fungsional yang berdampak.",
      hireMe: "Hubungi Saya",
      downloadCV: "Unduh CV",
      sendMessage: "Kirim Pesan",
      contactTitle: "Mari Terhubung",
      contactDesc: "Siap mewujudkan ide Anda? Mari bekerja sama!",
      aboutTitle: "Tentang Saya",
      aboutDesc:
        "Saya adalah pengembang web yang bersemangat dengan pengalaman 2+ tahun membangun aplikasi modern dan skalabel. Saya senang mempelajari teknologi baru dan menyelesaikan masalah kompleks melalui kode.",
      featuredProjects: "Proyek Unggulan",
      featuredDesc: "Beberapa pekerjaan terbaru saya yang menunjukkan keterampilan dan passion dalam pengembangan",
      journeyTitle: "Perjalanan Saya",
  skillsTitle: "Keterampilan & Teknologi",
      journeyPara1:
        "Memulai perjalanan saya di pengembangan web saat sekolah, cepat jatuh cinta dengan kemungkinan tak terbatas untuk membuat pengalaman digital. Selama bertahun-tahun, saya bekerja dengan startup dan perusahaan, selalu fokus menghadirkan solusi berkualitas dan berorientasi pengguna.",
      journeyPara2:
        "Saat tidak coding, saya biasanya menjelajahi tren teknologi terbaru, berkontribusi pada proyek open-source, atau berbagi pengetahuan dengan komunitas developer.",
      experienceTitle: "Pengalaman & Perjalanan",
      experienceDesc: "Perjalanan profesional dan perkembangan saya di industri teknologi",
      contactFormTitle: "Kirim Pesan",
      contactFormDesc: "Isi formulir dan saya akan menghubungi Anda secepatnya.",
      nameLabel: "Nama",
      emailLabel: "Email",
      messageLabel: "Pesan",
      getInTouch: "Hubungi",
      followMe: "Ikuti Saya",
      footer: "© 2025 Zaki.",
    },
  } as const;
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle send: compose message, copy to clipboard, open WhatsApp
  const handleSend = async () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in name, email and message before sending.");
      return;
    }

    const composed = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${encodeURIComponent(
      message
    )}`;

    try {
      // Copy plain text (not URL-encoded) to clipboard
      const plain = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(plain);
      } else {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = plain;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      // Open WhatsApp Web with prefilled message to a specific number
      // Provided number: 0895701071431 -> convert to international format for wa.me: 62895701071431
      const phone = "62895701071431";
      const whatsappUrl = `https://wa.me/${phone}?text=${composed}`;
      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error(err);
      alert(
        "Unable to open WhatsApp or copy message. Please copy and paste manually."
      );
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight state for contact card after scroll
  const [highlightContact, setHighlightContact] = useState(false);

  const scrollToContactAndHighlight = () => {
    scrollToContact();
    setHighlightContact(true);
    // remove highlight after 2s
    setTimeout(() => setHighlightContact(false), 2000);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React", icon: Code, color: "neon-blue" },
    { name: "TypeScript", icon: Code, color: "neon-purple" },
    { name: "Tailwind ", icon: Palette, color: "neon-cyan" },
    { name: "codeigniter", icon: Server, color: "neon-blue" },
    { name: "php", icon: Globe, color: "neon-purple" },
    { name: "html", icon: Database, color: "neon-cyan" },
    { name: "css", icon: Smartphone, color: "neon-blue" },
    { name: "laravel", icon: Database, color: "neon-purple" },
  ];

  const projects = [
    {
      title_en: "Property Platform",
      title_id: "Platform Properti",
      desc_en:
        "Find your dream home, land, and property easily with Mujahid Properti. A trusted property search platform that helps you find the best home for your desired type, location, and price.",
      desc_id:
        "Temukan rumah, tanah, dan properti impian Anda dengan Mujahid Properti. Platform pencarian properti terpercaya untuk menemukan rumah terbaik sesuai tipe, lokasi, dan harga.",
      image: projectEcommerce,
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      demo: "https://mujahid-property.vercel.app/",
      github: "https://github.com/zakimuafa/rumah-impian-hub.git",
    },
    {
      title_en: "Gaming Platform",
      title_id: "Platform Gaming",
      desc_en:
        "ArenaGame is a trusted rank booster and top-up service for all your favorite games. We offer fast processing, affordable prices, and 100% account security. With 24/7 support.",
      desc_id:
        "ArenaGame adalah layanan top-up dan rank booster terpercaya untuk game favorit Anda. Proses cepat, harga terjangkau, dan keamanan akun terjamin.",
      image: projectTaskApp,
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      demo: "https://arenagame-rosy.vercel.app/",
      github: "https://github.com/jekyyy30/pulse-game-lane.git",
    },
    {
      title_en: "Trade Platform",
      title_id: "Platform Perdagangan",
      desc_en:
        "Chartify is a modern trading dashboard platform that makes it easy for traders to monitor market movements in real time, keep a trading journal, and analyze portfolio performance.",
      desc_id:
        "Chartify adalah dashboard trading modern yang memudahkan trader memantau pergerakan pasar secara real-time dan menganalisis portofolio.",
      image: projectWeather,
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      demo: "https://weather.example.com",
      github: "https://github.com/zakimuafa/quant-log-bot",
    },
  ];

  const experiences = [
    {
      title_en: "Web Developer",
      title_id: "Pengembang Web",
      company: "Mujahid property",
      period: "2025",
      location: "Bandung, Indonesia",
      description_en:
        "Developed and maintained the company’s property management website. Focused on building responsive pages, admin dashboards, and property listing features using modern web technologies.",
      description_id:
        "Mengembangkan dan memelihara website manajemen properti perusahaan. Fokus pada pembuatan halaman responsif, dashboard admin, dan fitur listing properti menggunakan teknologi web modern.",
    },
    {
      title_en: "Front End Developer",
      title_id: "Front End Developer",
      company: "pt.pandawa yogaswara abadi",
      period: "2024",
      location: "Bandung, Indonesia",
      description_en:
        "Assisted in developing hospital information systems and retail websites using CodeIgniter 3. Built features like login, register, cart, and invoice printing.",
      description_id:
        "Membantu pengembangan sistem informasi rumah sakit dan website ritel menggunakan CodeIgniter 3. Membangun fitur seperti login, register, keranjang, dan pencetakan invoice.",
    },
    {
      title_en: "Automation Developer (EA Trader)",
      title_id: "Automation Developer (EA Trader)",
      company: "freelance",
      period: "2023",
      location: "Bandung, Indonesia",
      description_en:
        "Built automated trading algorithms for MetaTrader 4 & 5 platforms (Expert Advisors). Developed dynamic entry logic that adapts to trend conditions for more accurate trades.",
      description_id:
        "Membangun algoritma trading otomatis untuk MetaTrader 4 & 5 (Expert Advisors). Mengembangkan logika entry dinamis yang menyesuaikan kondisi tren untuk trade yang lebih akurat.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        {/* language toggle (top-right of hero) - moved here so it's positioned relative to the full-width section */}
  <div className="fixed right-4 top-6 md:right-6 md:top-8 lg:right-8 z-50">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-opacity ${
                lang === "en" ? "opacity-100 ring-2 ring-neon-blue" : "opacity-60"
              }`}
              aria-pressed={lang === "en"}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-opacity ${
                lang === "id" ? "opacity-100 ring-2 ring-neon-purple" : "opacity-60"
              }`}
              aria-pressed={lang === "id"}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
          </div>
        </div>

        <div
          className={`max-w-4xl mx-auto text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative mb-8">
            <img
              src={profilePhoto}
              alt="Zaki Profile Photo"
              className="w-40 h-40 mx-auto rounded-full border-4 border-neon-blue glow-blue floating object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4">
            <span className="gradient-text">{t[lang].hi}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-outfit">
            {t[lang].role}
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t[lang].description}
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => scrollToContactAndHighlight()}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t[lang].hireMe}
            </Button>
            <Button asChild variant="neon-outline" size="lg">
              {/* Place your PDF in the public/ folder as `portofolio-muhamad-zaki-muafa.pdf` */}
              {/* Use different filenames for each language in public/ */}
              <a href={lang === "en" ? "/cv-en.pdf" : "/cv-id.pdf"} download>
                <Download className="mr-2 h-5 w-5" />
                {t[lang].downloadCV}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text">
                {t[lang].aboutTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t[lang].aboutDesc}
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-orbitron font-semibold mb-6 text-neon-blue">
                {t[lang].journeyTitle}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t[lang].journeyPara1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t[lang].journeyPara2}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-orbitron font-semibold mb-6 text-neon-purple">
                {t[lang].skillsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="glass neon-border group hover:glow-blue transition-all duration-300"
                  >
                    <CardContent className="p-4 flex items-center space-x-3">
                      <skill.icon
                        className={`h-6 w-6 text-${skill.color} group-hover:scale-110 transition-transform`}
                      />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text">
                {t[lang].featuredProjects}
              </h2>
              <p className="text-lg text-muted-foreground">{t[lang].featuredDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title_en + index}
                className="group hover:glow-purple transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={lang === "en" ? project.title_en : project.title_id}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-orbitron text-neon-blue">
                    {lang === "en" ? project.title_en : project.title_id}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {lang === "en" ? project.desc_en : project.desc_id}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.demo ? (
                      <Button
                        asChild
                        variant="neon"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="neon"
                        size="sm"
                        className="flex-1 opacity-60 cursor-not-allowed"
                        disabled
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}

                    {project.github ? (
                      <Button
                        asChild
                        variant="neon-outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="neon-outline"
                        size="sm"
                        className="flex-1 opacity-60 cursor-not-allowed"
                        disabled
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text">
              {t[lang].experienceTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t[lang].experienceDesc}</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber opacity-60"></div>

            {experiences.map((exp, index) => (
              <div
                key={(exp.title_en || exp.title_id) + index}
                className="relative flex items-start mb-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-neon-blue rounded-full border-4 border-background group-hover:glow-blue transition-all duration-300 z-10"></div>

                {/* Content */}
                <div className="ml-16 w-full">
                  <Card className="glass neon-border group-hover:glow-cyan transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-xl font-orbitron text-neon-cyan">
                            {lang === "en" ? exp.title_en : exp.title_id}
                          </CardTitle>
                          <p className="text-neon-purple font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{lang === "en" ? exp.description_en : exp.description_id}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text">
                {t[lang].contactTitle}
              </h2>
              <p className="text-lg text-muted-foreground">{t[lang].contactDesc}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              className={
                "glass neon-border " +
                (highlightContact
                  ? "ring-4 ring-neon-blue/60 shadow-[0_0_30px_hsl(var(--neon-blue)/0.25)]"
                  : "")
              }
            >
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-neon-blue">
                  {t[lang].contactFormTitle}
                </CardTitle>
                <CardDescription>{t[lang].contactFormDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Controlled form fields */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t[lang].nameLabel}</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="bg-background/50 border-muted"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t[lang].emailLabel}</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-muted"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t[lang].messageLabel}</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-background/50 border-muted resize-none"
                    />
                  </div>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => handleSend()}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t[lang].sendMessage}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <Card className="glass neon-border">
                  <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-neon-purple">{t[lang].getInTouch}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-neon-blue" />
                    <span>zakimuafa2@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-neon-cyan" />
                    <span>Bandung, Indonesia</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass neon-border">
                  <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-neon-cyan">{t[lang].followMe}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/zaki-muafa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="neon-outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zaki-muafa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="neon-purple" className="w-full">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </a>
                    <a
                      href="https://www.instagram.com/mufakii3/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="neon-cyan" className="w-full">
                        <Instagram className="mr-2 h-4 w-4" />
                        Instagram
                      </Button>
                    </a>
                    <a
                      href="https://www.tiktok.com/@mufakii_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="neon" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        TikTok
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="py-8 text-center border-t border-border/30">
        <p className="text-muted-foreground">{t[lang].footer}</p>
      </footer>
    </div>
  );
};

export default Index;
