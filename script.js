/**
 * PORTFOLIO NURUL LAYLI - JAVASCRIPT LOGIC
 * Dynamic typing, i18n dual language, dark/light theme, scroll animations,
 * skill progress observer, project filters, certificate lightbox, and contact dispatch.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ===================================================================
  // 1. DUAL LANGUAGE DICTIONARY (ID & EN)
  // ===================================================================
  const translations = {
    id: {
      "nav.home": "Beranda",
      "nav.about": "Tentang",
      "nav.skills": "Keahlian",
      "nav.projects": "Proyek",
      "nav.experience": "Pengalaman",
      "nav.education": "Pendidikan",
      "nav.awards": "Prestasi",
      "nav.contact": "Kontak",
      "nav.cta": "Hubungi Saya",

      "hero.badge": "Portofolio 2026 • Bisnis Digital & UI/UX",
      "hero.greeting": "HALO, SAYA",
      "hero.tagline": "Mahasiswa Bisnis Digital di Universitas Teknologi Digital Indonesia (UTDI) yang menggabungkan desain intuitif, kode modern, dan komunikasi strategis.",
      "hero.btnProjects": "Lihat Proyek",
      "hero.btnCv": "Download CV ↗",
      "hero.photoBadge": "FOTO PROFIL",
      "hero.uploadPrompt": "Upload Foto Saya",
      "hero.uploadHint": "Klik atau seret foto kamu ke sini (JPG/PNG)",
      "hero.btnUpload": "Pilih Foto",
      "hero.changePhoto": "Ganti Foto",
      "hero.removePhoto": "Hapus",
      "toast.photoSuccess": "Foto profil berhasil dipasang!",
      "toast.photoRemoved": "Foto profil telah dihapus.",
      "toast.photoTooLarge": "Ukuran foto terlalu besar. Maksimal 10MB.",
      "toast.photoInvalid": "Format file harus gambar (JPG, PNG, WebP).",
      "hero.card1Desc": "Desain Antarmuka Intuitif, Riset Pengguna & Prototyping Figma",
      "hero.card2Desc": "Aplikasi Web Responsif, Integrasi Supabase & Frontend Modern",
      "hero.card3Title": "4+ Penghargaan",
      "hero.card3Desc": "Finalis IEEE YESIST12 & Peraih Perak iPEC Internasional",
      "hero.card4Desc": "Public Relations HIMA, Mentor BDC & Master of Ceremonies",

      "about.tag": "PROFIL PRIBADI",
      "about.title": "Tentang Saya",
      "about.subtitle": "Mengenal lebih dekat dedikasi dan perjalanan saya di dunia bisnis digital & teknologi",
      "about.role": "Mahasiswa Bisnis Digital | UI/UX Enthusiast",
      "about.domicileLabel": "Domisili",
      "about.statusLabel": "Status Saat Ini",
      "about.statusVal": "Mahasiswa Aktif",
      "about.campusLabel": "Kampus",
      "about.p1": "Mahasiswa Bisnis Digital di Universitas Teknologi Digital Indonesia yang berfokus pada UI/UX. Saat ini saya aktif sebagai Public Relations di Himpunan Mahasiswa Bisnis Digital, mentor di Business Development Club, dan anggota tim media sosial Hackathon UTDI. Saya juga membangun personal branding melalui peran sebagai MC.",
      "about.p2": "Saya selalu ingin terus belajar, berusaha, dan mencoba hal-hal baru.",
      "about.p3": "Saat ini saya sedang mendalami keterampilan editing dan web development.",
      "about.hobbiesTitle": "Minat & Hobi:",
      "about.hobby1": "Mendesain",
      "about.hobby2": "Bernyanyi",
      "about.hobby3": "Berkuda",
      "about.statProjects": "Proyek Digital",
      "about.statExp": "Tahun Pengalaman",
      "about.statAwards": "Penghargaan Bergengsi",

      "skills.tag": "KOMPETENSI",
      "skills.title": "Keahlian & Penguasaan Tools",
      "skills.subtitle": "Kombinasi kemampuan teknis, instrumen desain modern, serta keahlian interpersonal",
      "skills.hardTitle": "Hard Skills",
      "skills.toolsTitle": "Tools & Software",
      "skills.softTitle": "Soft Skills",
      "skills.soft1": "Komunikasi",
      "skills.soft2": "Kerja Tim",
      "skills.soft3": "Manajemen Waktu",
      "skills.soft4": "Ketelitian",

      "projects.tag": "PORTFOLIO SHOWCASE",
      "projects.title": "Proyek Pilihan",
      "projects.subtitle": "Inisiatif produk digital, platform web, dan proposal kompetisi inovatif",
      "projects.filterAll": "Semua Proyek",
      "projects.filterWeb": "Web & App",
      "projects.filterInno": "Inovasi & Kompetisi",
      "projects.problemLabel": "Masalah:",
      "projects.roleLabel": "Peran:",
      "projects.impactLabel": "Dampak:",
      "projects.awardLabel": "Pencapaian:",
      "projects.liveDemo": "Lihat Demo ↗",
      "projects.competitionProject": "Proyek Riset & Kompetisi",
      "projects.p1Desc": "Aplikasi web untuk mencatat transaksi pembayaran jimpitan warga secara digital melalui QRIS, mengeliminasi risiko selisih kas dan pencatatan manual.",
      "projects.p1Problem": "Pencatatan manual & transaksi masuk tidak sesuai dengan kas.",
      "projects.p1Impact": "Meminimalkan risiko uang hilang & menghasilkan rekap laporan otomatis.",
      "projects.p2Award": "Juara 2 Hackathon",
      "projects.p2Desc": "Landing page untuk brand hijab & modest activewear dengan tampilan hangat dan elegan yang menonjolkan produk buatan perajin lokal.",
      "projects.p2Impact": "Pesanan masuk otomatis & tersimpan rapi di database Supabase.",
      "projects.p3Desc": "Platform penyaluran makanan strategis untuk mencegah stunting dan kekurangan gizi pada balita dan keluarga rentan.",
      "projects.p3Role": "Menyusun proposal, perancangan presentasi, dan koordinasi tim.",
      "projects.p3Award": "Finalis IEEE YESIST12 2026 Grand Finale & Anugerah Perak iPEC'26.",
      "projects.p4Desc": "Sistem pelaporan kekerasan berbasis web yang menjamin anonimitas penuh pelapor guna memberikan ruang perlindungan yang aman dan terpercaya.",
      "projects.p4Role": "Menyusun proposal, editing video presentasi, & pembuatan slide deck.",
      "projects.p4Award": "Anugerah Perak di iPEC'26 (Malaysia).",
      "projects.p5Desc": "Platform e-commerce terdedikasi untuk ekosistem sekolah menengah atas (SMA), memfasilitasi transaksi aman bagi karya siswa dan kebutuhan belajar.",
      "projects.p5Role": "Menyusun proposal, materi presentasi, dan mengoordinasikan tim.",
      "projects.p5Award": "Silver Medal di METARISE 2025.",

      "exp.tag": "REKAM JEJAK",
      "exp.title": "Pengalaman Organisasi",
      "exp.subtitle": "Kiprah kepemimpinan, komunikasi publik, dan kontribusi aktif di komunitas akademik",
      "exp.p1Period": "Sep 2026 – Sekarang",
      "exp.p1Task1": "Merencanakan dan menjalankan kampanye komunikasi strategis yang berhasil menjangkau 90+ orang mahasiswa dan audiens.",
      "exp.p1Task2": "Menjadi penghubung utama antara organisasi, media rekanan, dan pembicara eksternal dalam perhelatan seminar nasional.",
      "exp.p1Task3": "Mengoordinasikan rangkaian acara dan kesepakatan kolaborasi dengan 2 mitra eksternal resmi.",
      "exp.p2Period": "Okt 2026 – Sekarang",
      "exp.p2Task1": "Membimbing anggota klub dalam mengeksplorasi dan memvalidasi ide bisnis, riset pasar komprehensif hingga business plan.",
      "exp.p2Task2": "Membagikan materi dan memfasilitasi sesi interaktif strategi pengembangan usaha kepada 50+ peserta aktif.",
      "exp.p2Task3": "Memberikan feedback kritis pada presentasi pitch deck anggota untuk program P2MW, kompetisi esai, dan business case.",
      "exp.p3Period": "Okt 2026 – Sekarang",
      "exp.p3Role": "Tim Media Sosial",
      "exp.p3Task1": "Merancang konsep, copywriting, serta penjadwalan konten promosi visual dan dokumentasi real-time di kanal media sosial.",
      "exp.p3Task2": "Mempublikasikan info registrasi, guideline kompetisi, dan pengumuman pemenang sehingga meningkatkan partisipasi peserta.",

      "edu.tag": "LATAR BELAKANG",
      "edu.title": "Pendidikan Formal",
      "edu.subtitle": "Fondasi akademis dan keahlian terstruktur yang saya tempuh",
      "edu.c1Desc": "Fokus pada transformasi bisnis berbasis digital, UI/UX design, perancangan platform e-commerce, serta analitik data. Aktif berkegiatan sebagai Mentor di Business Development Club (BDC) dan tim publikasi Hackathon UTDI.",
      "edu.c2Desc": "Menempuh pendidikan vokasi yang melatih kedisiplinan, dasar-dasar komputasi, kepemimpinan, dan kerja tim secara intensif sebelum melanjutkan studi di Universitas Teknologi Digital Indonesia Yogyakarta.",

      "certs.tag": "PENGAKUAN & PRESTASI",
      "certs.title": "Sertifikat & Penghargaan",
      "certs.subtitle": "Apresiasi kompetisi tingkat nasional & internasional. Klik pada kartu sertifikat untuk melihat detail dokumen lengkap.",
      "certs.view": "Perbesar",

      "contact.tag": "HUBUNGI SAYA",
      "contact.title": "Mari Berkolaborasi",
      "contact.subtitle": "Tertarik bekerja sama untuk proyek UI/UX, web development, atau kegiatan organisasi? Kirim pesan Anda di bawah ini.",
      "contact.avail": "Terbuka untuk Freelance & Magang",
      "contact.formName": "Nama Lengkap",
      "contact.formEmail": "Alamat Email",
      "contact.formSubject": "Subjek / Perihal",
      "contact.formMsg": "Pesan Anda",
      "contact.btnSendEmail": "Kirim via Email",
      "contact.btnSendWA": "Kirim via WhatsApp",

      "cv.modalTitle": "Curriculum Vitae — Nurul Layli",
      "cv.modalNote": "Ringkasan profil profesional, keahlian desain UI/UX, pengalaman organisasi HM Bisnis Digital & Mentor BDC, serta penghargaan METARISE, iPEC, dan IEEE YESIST12 siap diunduh atau dicetak.",
      "cv.btnPrint": "Cetak / Simpan PDF",
      "cv.btnReq": "Download CV (PDF)"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.awards": "Honors",
      "nav.contact": "Contact",
      "nav.cta": "Get in Touch",

      "hero.badge": "Portfolio 2026 • Digital Business & UI/UX",
      "hero.greeting": "HELLO, I AM",
      "hero.tagline": "Digital Business student at Universitas Teknologi Digital Indonesia (UTDI) bridging intuitive design, modern code, and strategic communication.",
      "hero.btnProjects": "View Projects",
      "hero.btnCv": "Download CV ↗",
      "hero.photoBadge": "PROFILE PHOTO",
      "hero.uploadPrompt": "Upload My Photo",
      "hero.uploadHint": "Click or drag your photo here (JPG/PNG)",
      "hero.btnUpload": "Choose Photo",
      "hero.changePhoto": "Change Photo",
      "hero.removePhoto": "Remove",
      "toast.photoSuccess": "Profile photo updated successfully!",
      "toast.photoRemoved": "Profile photo removed.",
      "toast.photoTooLarge": "Image too large. Maximum 10MB.",
      "toast.photoInvalid": "File format must be an image (JPG, PNG, WebP).",
      "hero.card1Desc": "Intuitive User Interfaces, User Research & High-Fidelity Prototyping",
      "hero.card2Desc": "Responsive Web Apps, Supabase Integration & Modern Frontend",
      "hero.card3Title": "4+ Honors & Awards",
      "hero.card3Desc": "IEEE YESIST12 Finalist & International iPEC Silver Medalist",
      "hero.card4Desc": "Public Relations HIMA, BDC Mentor & Master of Ceremonies",

      "about.tag": "PERSONAL PROFILE",
      "about.title": "About Me",
      "about.subtitle": "Discover my journey, dedication, and impact across digital business and technology",
      "about.role": "Digital Business Student | UI/UX Enthusiast",
      "about.domicileLabel": "Location",
      "about.statusLabel": "Current Status",
      "about.statusVal": "Active Undergraduate",
      "about.campusLabel": "Institution",
      "about.p1": "Digital Business student at Universitas Teknologi Digital Indonesia focused on UI/UX. Currently active as Public Relations at the Digital Business Student Association, Mentor at the Business Development Club, and social media team member for UTDI Hackathon. I also build my personal brand through Master of Ceremonies (MC) engagements.",
      "about.p2": "I continuously strive to learn, explore new horizons, and take on creative challenges.",
      "about.p3": "Currently diving deeper into creative editing and full-stack web development.",
      "about.hobbiesTitle": "Interests & Hobbies:",
      "about.hobby1": "Designing",
      "about.hobby2": "Singing",
      "about.hobby3": "Horse Riding",
      "about.statProjects": "Digital Projects",
      "about.statExp": "Years Experience",
      "about.statAwards": "Prestige Awards",

      "skills.tag": "COMPETENCIES",
      "skills.title": "Skills & Tool Mastery",
      "skills.subtitle": "A blend of technical prowess, modern design stacks, and strong interpersonal execution",
      "skills.hardTitle": "Hard Skills",
      "skills.toolsTitle": "Tools & Software",
      "skills.softTitle": "Soft Skills",
      "skills.soft1": "Communication",
      "skills.soft2": "Teamwork",
      "skills.soft3": "Time Management",
      "skills.soft4": "Attention to Detail",

      "projects.tag": "PORTFOLIO SHOWCASE",
      "projects.title": "Featured Projects",
      "projects.subtitle": "Digital product initiatives, web platforms, and award-winning competition proposals",
      "projects.filterAll": "All Projects",
      "projects.filterWeb": "Web & App",
      "projects.filterInno": "Innovation & Pitch",
      "projects.problemLabel": "Problem:",
      "projects.roleLabel": "My Role:",
      "projects.impactLabel": "Impact:",
      "projects.awardLabel": "Achievement:",
      "projects.liveDemo": "Live Demo ↗",
      "projects.competitionProject": "Research & Competition Project",
      "projects.p1Desc": "Web application for recording neighborhood community micro-contributions digitally via QRIS, eliminating discrepancies and manual records.",
      "projects.p1Problem": "Manual pen-and-paper tracking causing financial mismatches in cash ledger.",
      "projects.p1Impact": "Minimized lost fund risks with automated real-time financial reporting.",
      "projects.p2Award": "2nd Winner Hackathon",
      "projects.p2Desc": "Landing page for hijab_fit modest activewear with warm, elegant aesthetics spotlighting local artisanal craftsmanship.",
      "projects.p2Impact": "Automated order intake directly synced into a secure Supabase cloud database.",
      "projects.p3Desc": "Strategic food surplus distribution platform to combat child stunting and severe malnutrition in vulnerable families.",
      "projects.p3Role": "Proposal authoring, pitch deck design, and team coordination.",
      "projects.p3Award": "IEEE YESIST12 2026 Grand Finale Finalist & iPEC'26 Silver Medalist.",
      "projects.p4Desc": "Web-based anonymous violence reporting system ensuring utmost reporter privacy to provide a safe, protected sanctuary.",
      "projects.p4Role": "Proposal drafting, presentation video editing, and slide deck structuring.",
      "projects.p4Award": "Silver Award at iPEC'26 (Malaysia).",
      "projects.p5Desc": "Dedicated e-commerce marketplace for high school ecosystems, facilitating safe commerce for student works and supplies.",
      "projects.p5Role": "Proposal formulation, deck design, and overall team management.",
      "projects.p5Award": "Silver Medal at METARISE 2025.",

      "exp.tag": "TRACK RECORD",
      "exp.title": "Organizational Leadership",
      "exp.subtitle": "Public communications, community mentorship, and academic event execution",
      "exp.p1Period": "Sep 2026 – Present",
      "exp.p1Task1": "Planned and spearheaded strategic communication campaigns reaching 90+ students and stakeholders.",
      "exp.p1Task2": "Served as the main liaison connecting the student association, media partners, and keynote speakers for national seminars.",
      "exp.p1Task3": "Coordinated event workflows and sealed collaboration agreements with 2 official external partners.",
      "exp.p2Period": "Oct 2026 – Present",
      "exp.p2Task1": "Mentored club peers through market research, ideation validation, and end-to-end business plan formulation.",
      "exp.p2Task2": "Delivered interactive workshops on growth strategies to 50+ active student entrepreneurs.",
      "exp.p2Task3": "Provided critique on pitch decks for P2MW funding, essay challenges, and national business case competitions.",
      "exp.p3Period": "Oct 2026 – Present",
      "exp.p3Role": "Social Media Team",
      "exp.p3Task1": "Crafted content concepts, copywriting, and visual calendars for real-time coverage across social platforms.",
      "exp.p3Task2": "Published registration announcements and guidelines, maximizing participant turnouts.",

      "edu.tag": "BACKGROUND",
      "edu.title": "Formal Education",
      "edu.subtitle": "Structured academic foundations and digital business training",
      "edu.c1Desc": "Focused on digital business transformation, UI/UX design, e-commerce architectures, and data analysis. Actively mentoring in BDC and contributing to UTDI Hackathon publication team.",
      "edu.c2Desc": "Completed intensive vocational secondary education building strong discipline, computational basics, leadership, and teamwork.",

      "certs.tag": "HONORS & RECOGNITION",
      "certs.title": "Certificates & Awards",
      "certs.subtitle": "Accreditations from recognized national and international competitions. Click any card to inspect full certificate.",
      "certs.view": "Inspect",

      "contact.tag": "CONTACT ME",
      "contact.title": "Let's Collaborate",
      "contact.subtitle": "Interested in partnering for UI/UX design, web development, or organizational initiatives? Drop a message below.",
      "contact.avail": "Available for Freelance & Internships",
      "contact.formName": "Full Name",
      "contact.formEmail": "Email Address",
      "contact.formSubject": "Subject",
      "contact.formMsg": "Your Message",
      "contact.btnSendEmail": "Send via Email",
      "contact.btnSendWA": "Send via WhatsApp",

      "cv.modalTitle": "Curriculum Vitae — Nurul Layli",
      "cv.modalNote": "Executive summary of professional competencies, UI/UX design works, leadership track records, and METARISE/iPEC/IEEE awards ready for inspection or printing.",
      "cv.btnPrint": "Print / Save as PDF",
      "cv.btnReq": "Download CV (PDF)"
    }
  };

  let currentLang = localStorage.getItem('portfolio_lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    const langBtnText = document.getElementById('langText');
    if (langBtnText) {
      langBtnText.textContent = lang === 'id' ? 'ID' : 'EN';
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjInput = document.getElementById('senderSubject');
    const msgInput = document.getElementById('senderMsg');

    if (lang === 'en') {
      if (nameInput) nameInput.placeholder = "Enter your full name...";
      if (emailInput) emailInput.placeholder = "name@email.com";
      if (subjInput) subjInput.placeholder = "Project discussion / collaboration...";
      if (msgInput) msgInput.placeholder = "Write your message or inquiry here...";
    } else {
      if (nameInput) nameInput.placeholder = "Masukkan nama Anda...";
      if (emailInput) emailInput.placeholder = "nama@email.com";
      if (subjInput) subjInput.placeholder = "Diskusi proyek / tawaran kolaborasi...";
      if (msgInput) msgInput.placeholder = "Tuliskan pesan atau penawaran Anda secara lengkap...";
    }
  }

  const langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(nextLang);
    });
  }

  // ===================================================================
  // 2. THEME SWITCHER (Dark & Light Mode)
  // ===================================================================
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  let currentTheme = localStorage.getItem('portfolio_theme') || 'light';

  const SVG_MOON = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const SVG_SUN = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' ? SVG_SUN : SVG_MOON;
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // ===================================================================
  // 3. DYNAMIC TYPING EFFECT (Hero Subtitle)
  // ===================================================================
  const typedPhrases = [
    "Web Developer",
    "UI/UX Designer",
    "Business Analyst"
  ];
  const typedOutput = document.getElementById('typedOutput');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 110;

  function typeStep() {
    if (!typedOutput) return;
    const currentPhrase = typedPhrases[phraseIndex];

    if (isDeleting) {
      typedOutput.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedOutput.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typedPhrases.length;
      typingSpeed = 450;
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();

  // ===================================================================
  // 4. SCROLL REVEAL & SKILL PROGRESS FILL OBSERVER
  // ===================================================================
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Skill progress bars observer
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const target = bar.getAttribute('data-progress');
          bar.style.width = target + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25
  });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }

  // ===================================================================
  // 5. NAVIGATION SCROLLSPY & MOBILE MENU
  // ===================================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ===================================================================
  // 6. PROJECT CATEGORY FILTERING
  // ===================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ===================================================================
  // 7. CERTIFICATE LIGHTBOX MODAL
  // ===================================================================
  const certModal = document.getElementById('certModal');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalCertImg = document.getElementById('modalCertImg');
  const modalCertDesc = document.getElementById('modalCertDesc');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const certCards = document.querySelectorAll('.cert-card');

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-cert-img');
      const title = card.getAttribute('data-cert-title');
      const desc = card.getAttribute('data-cert-desc');

      if (modalCertImg) modalCertImg.src = imgSrc;
      if (modalCertTitle) modalCertTitle.textContent = title;
      if (modalCertDesc) modalCertDesc.textContent = desc;

      if (certModal) {
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeCertModal() {
    if (certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // ===================================================================
  // 8. CV MODAL
  // ===================================================================
  const cvModal = document.getElementById('cvModal');
  const cvModalClose = document.getElementById('cvModalClose');

  function closeCvModal() {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCvModal);
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCertModal();
      closeCvModal();
    }
  });

  // ===================================================================
  // 9. INTERACTIVE CONTACT FORM & WHATSAPP INTEGRATION
  // ===================================================================
  const contactForm = document.getElementById('contactForm');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('senderSubject').value.trim();
      const message = document.getElementById('senderMsg').value.trim();

      const mailtoLink = `mailto:nurul.layli25@students.utdi.ac.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
      window.location.href = mailtoLink;
    });
  }

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('senderSubject').value.trim();
      const message = document.getElementById('senderMsg').value.trim();

      if (!name || !message) {
        alert(currentLang === 'id' ? 'Mohon lengkapi Nama dan Pesan terlebih dahulu.' : 'Please enter your Name and Message first.');
        return;
      }

      const waText = `Halo Nurul Layli,\n\nNama saya: ${name}\nEmail: ${email || '-'}\nPerihal: ${subject || 'Kolaborasi'}\n\nPesan:\n${message}`;
      const waUrl = `https://wa.me/6285385384615?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    });
  }

  // ===================================================================
  // ===================================================================
  // 10. PROFILE PHOTO INITIALIZER (Static Official Portfolio Photo)
  // ===================================================================
  const DEFAULT_AVATAR = 'foto ayli/foto 1/Elegant Hijab Fashion Portrait.png';
  const heroPhotoImg = document.getElementById('heroPhotoImg');
  const aboutAvatarImg = document.getElementById('aboutAvatarImg');
  const aboutAvatarInitials = document.getElementById('aboutAvatarInitials');

  function initProfilePhoto() {
    if (heroPhotoImg) heroPhotoImg.src = DEFAULT_AVATAR;
    if (aboutAvatarImg) {
      aboutAvatarImg.src = DEFAULT_AVATAR;
      aboutAvatarImg.style.display = 'block';
    }
    if (aboutAvatarInitials) {
      aboutAvatarInitials.style.display = 'none';
    }
  }

  initProfilePhoto();

  // Initialize theme & language from saved state
  applyTheme(currentTheme);
  applyLanguage(currentLang);
});
