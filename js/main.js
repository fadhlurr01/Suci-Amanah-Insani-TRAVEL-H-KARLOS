/* ==========================================================================
   Suci Amanah Insani | TRAVEL H KARLOS (SAI TOUR)
   Location: Parepare, Sulawesi Selatan
   Official Licenses:
   - IZIN PPIU NO. U.299/2020
   - IZIN PIHK NO. 0220001452156/2024
   - KBIHU KARLOS HARAMAIN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Official Contact WhatsApp Numbers (SAI TOUR Parepare)
  const primaryWhatsapp = '6285348788299';
  const admin2Whatsapp = '6282195125942';
  const linktreeUrl = 'https://tr.ee/pXjhQS_EFg';
  const defaultAutoMsg = encodeURIComponent("Halo! Admin SAI Saya ingin diskusi tentang Umroh");

  /* ==========================================================================
     1. Official Package Data Repository (Extracted 100% from Official Flyers)
     ========================================================================== */
  const packagesData = [
    {
      id: 'umrah-nov-olayan',
      title: 'Umrah Musim Dingin November (Al Olayan Ajyad)',
      category: 'reguler',
      duration: '9 Hari / 12 Hari',
      price: 'Rp 38.700.000',
      priceSub: 'Harga ALL IN (Free Kereta Cepat HHR)',
      promoBadge: '✨ BEST SELLER HOTEL HARAM',
      departureDate: '15 November 2026',
      airline: 'Garuda Indonesia (Start - End: UPG Makassar)',
      hotelMakkah: 'Al Olayan Ajyad (4★ Dekat Pelataran)',
      hotelMadinah: 'Grand Plaza Pintu 338 (4★)',
      seatsStatus: 'limited',
      seatsText: 'Terbatas (Sisa 8 Seat / Total 40 Seat)',
      image: 'assets/packages/flyer_al_olayan.png',
      inclusions: [
        'Tiket Pesawat PP Garuda Indonesia (Start-End UPG Makassar)',
        'Visa Umrah & Asuransi Kesehatan/Perjalanan',
        'Handling Bandara & Hotel (Parepare & Saudi)',
        'Manasik Umrah Berkala di Parepare',
        'Transportasi Parepare – Bandara PP',
        'Bus Full AC Executive',
        'FREE Kereta Cepat Haramain Express (Makkah – Madinah)',
        'Mutawwif Berbahasa Indonesia & Tour Leader Berpengalaman',
        'City Tour Makkah & Madinah (Masjid Quba, Kebun Kurma, Jabal Uhud)',
        'Tasreh Raudhah (by Nusuk)',
        'Akomodasi Hotel Setaraf Bintang 4 (Al Olayan Ajyad & Grand Plaza 338)',
        'Makan 3x Sehari Gourmet Menu Nusantara',
        'Snack selama Ziarah Kota',
        'Air Zamzam 5 Liter (Sesuai Ketentuan Flight)',
        'Perlengkapan Umrah Eksklusif Complete (Koper, Mukena/Ihram, Batik, Tas Paspor)',
        'Sertifikat Perjalanan oleh Dokter'
      ],
      exclusions: [
        'Keperluan Pribadi',
        'Vaksinasi Meningitis & Paspor',
        'Data Seluler / Roaming Internet',
        'Biaya Laundry',
        'Kelebihan Bagasi',
        'Tambahan Trip di Luar Paket Program'
      ],
      terms: [
        'FC KTP & Kartu Keluarga (KK)',
        'FC Buku Nikah / Akta Kelahiran',
        'Pas Foto 3x4 (Latar Putih Wajah 80%)',
        'BPJS / Asuransi Kesehatan Aktif',
        'Mengisi Form Pendaftaran Resmi SAI TOUR'
      ],
      bankInfo: 'Pembayaran HANYA melalui: Bank BSI Rek. a.n. PT. Suci Amanah Insani',
      contacts: 'Admin Aulia: +62 859-5963-6222 | Hj. Suci Karlos: +62 821-9512-5942',
      itinerary: [
        { day: 'Hari 1', title: 'Makassar (UPG) → Madinah Al-Munawwarah', desc: 'Berkumpul di Bandara Sultan Hasanuddin UPG. Handling bagasi, pelepasan resmi, penerbangan direct Garuda Indonesia ke Madinah. Check-in hotel Grand Plaza Pintu 338.' },
        { day: 'Hari 2', title: 'Ziarah Masjid Nabawi & Raudhah', desc: 'Ziarah ke Makam Rasulullah SAW, Abu Bakar Siddiq, Umar bin Khattab, serta berdoa di Raudhah (Taman Surga) dengan izin Nusuk.' },
        { day: 'Hari 3', title: 'Ziarah Kota Madinah', desc: 'Mengunjungi Masjid Quba (sholat 2 rakaat pahala umroh), Kebun Kurma, Jabal Uhud, & Masjid Qiblatain.' },
        { day: 'Hari 4', title: 'Madinah → Makkah via FREE KERETA CEPAT (HHR)', desc: 'Persiapan ihram di Bir Ali. Perjalanan modern & cepat dengan Kereta Cepat Haramain Express (HHR) menuju Makkah. Check-in Hotel Al Olayan Ajyad & Pelaksanaan Umrah Wajib (Tawaf, Sa\'i, Tahallul).' },
        { day: 'Hari 5', title: 'Ibadah Khusyuk di Masjidil Haram', desc: 'Fokus memperbanyak ibadah mandiri, tawaf sunnah, dan iktikaf di depan Ka\'bah suci (Jalan kaki dekat dari Al Olayan Ajyad).' },
        { day: 'Hari 6', title: 'Ziarah Kota Makkah & Umrah Kedua', desc: 'Ziarah ke Jabal Thawr, Padang Arafah (Jabal Rahmah), Muzdalifah, Mina, & Miqat Ji\'ranah untuk Umrah kedua.' },
        { day: 'Hari 7-8', title: 'Tawaf Wada\' & Kepulangan ke Makassar', desc: 'Pelaksanaan Tawaf Wada\' (perpisahan). Perjalanan ke Bandara Jeddah, penerbangan kembali ke Makassar (UPG).' },
        { day: 'Hari 9', title: 'Tiba di Parepare dengan Selamat', desc: 'Penjemputan rombongan kembali ke Parepare membawa kenangan ibadah yang mabrur.' }
      ]
    },
    {
      id: 'umrah-nov-snood',
      title: 'Promo Umrah Musim Dingin November (Snood Ajyad)',
      category: 'reguler',
      duration: '9 Hari / 12 Hari',
      price: 'Rp 36.500.000',
      priceSub: 'Harga ALL IN (Free Kereta Cepat HHR)',
      promoBadge: '🔥 PROMO 10 GRATIS 1',
      departureDate: '15 November 2026',
      airline: 'Garuda Indonesia (Start - End: UPG Makassar)',
      hotelMakkah: 'Snood Ajyad (4★)',
      hotelMadinah: 'Sanabel Al Madinah (4★)',
      seatsStatus: 'available',
      seatsText: 'Tersedia (Total 40 Seat)',
      image: 'assets/packages/flyer_snood.png',
      inclusions: [
        '🎁 PROMO SPECIAL: Setia Pendaftaran 10 Jamaah, GRATIS 1 Jamaah!',
        'GRATIS Kereta Cepat Haramain Express Makkah – Madinah',
        'Tiket Pesawat PP Garuda Indonesia (Start-End UPG Makassar)',
        'Visa Umrah & Asuransi Kesehatan/Perjalanan',
        'Handling Bandara & Hotel (Parepare & Saudi)',
        'Manasik Umrah Berkala di Parepare',
        'Transportasi Parepare – Bandara PP & Bus Full AC Executive',
        'Mutawwif Berbahasa Indonesia & Tour Leader Berpengalaman',
        'City Tour Makkah & Madinah (Masjid Quba, Kebun Kurma, Jabal Uhud)',
        'Tasreh Raudhah (by Nusuk)',
        'Akomodasi Hotel: Snood Ajyad Makkah (4★) & Sanabel Al Madinah (4★)',
        'Makan 3x Sehari Gourmet Menu Nusantara',
        'Snack selama Ziarah Kota & Air Zamzam 5 Liter',
        'Perlengkapan Umrah Eksklusif Complete & Sertifikat Dokter'
      ],
      exclusions: [
        'Keperluan Pribadi',
        'Vaksinasi Meningitis & Paspor',
        'Data Seluler / Roaming Internet',
        'Biaya Laundry',
        'Kelebihan Bagasi',
        'Tambahan Trip di Luar Paket Program'
      ],
      terms: [
        'FC KTP & Kartu Keluarga (KK)',
        'FC Buku Nikah / Akta Kelahiran',
        'Pas Foto 3x4 (Latar Putih Wajah 80%)',
        'BPJS / Asuransi Kesehatan Aktif'
      ],
      bankInfo: 'Pembayaran HANYA melalui: Bank BSI Rek. a.n. PT. Suci Amanah Insani',
      contacts: 'Admin Aulia: +62 859-5963-6222 | Hj. Suci Karlos: +62 821-9512-5942',
      itinerary: [
        { day: 'Hari 1', title: 'Makassar (UPG) → Madinah', desc: 'Penerbangan langsung Garuda Indonesia Makassar menuju Madinah Al-Munawwarah. Arrival & check-in hotel.' },
        { day: 'Hari 2-3', title: 'Ziarah Nabawi, Raudhah & Kota Madinah', desc: 'Ziarah Raudhah, Makam Rasulullah SAW, Masjid Quba, Kebun Kurma, & Jabal Uhud.' },
        { day: 'Hari 4', title: 'Madinah → Makkah via KERETA CEPAT (HHR)', desc: 'Miqat di Bir Ali, perjalanan Kereta Cepat HHR ke Makkah. Pelaksanaan Umrah Wajib.' },
        { day: 'Hari 5-8', title: 'Ibadah Makkah, Ziarah & Tawaf Wada\'', desc: 'Fokus ibadah di Masjidil Haram, Ziarah Makkah, dan Tawaf Wada\'.' },
        { day: 'Hari 9', title: 'Kepulangan ke Parepare', desc: 'Penerbangan Jeddah ke Makassar UPG. Penjemputan ke Parepare.' }
      ]
    },
    {
      id: 'haji-plus-resmi',
      title: 'HAJI PLUS Kuota Resmi Kemenag RI',
      category: 'haji',
      duration: 'Masa Tunggu 5 - 7 Tahun',
      price: 'Setoran Awal $4.500 USD',
      priceSub: 'Estimasi Paket Total $16.500 USD (Langsung Nomor Porsi Resmi)',
      promoBadge: '🕋 PIHK NO. 0220001452156/2024',
      departureDate: 'Sesuai Antrean Resmi Kemenag RI (Direct UPG-JED PP)',
      airline: 'Garuda Indonesia / Saudia Airlines Direct Jeddah',
      hotelMakkah: 'Hotel Bintang 5 Pelataran Depan Haram',
      hotelMadinah: 'Hotel Bintang 5 Pelataran Nabawi',
      seatsStatus: 'available',
      seatsText: 'Pendaftaran Terbuka (Langsung Nomor Porsi)',
      image: 'assets/packages/flyer_haji_plus.png',
      inclusions: [
        'Langsung Mendapatkan Nomor Porsi Haji Resmi Kemenag RI',
        'VISA HAJI Resmi Kuota Pemerintah RI (Izin PIHK 0220001452156/2024)',
        'Maktab Khusus Haji Plus Arafah & Mina dengan Tenda Ber-AC VIP',
        'Bimbingan Manasik HAJI Intensif di Parepare (KBIHU Karlos Haramain Amanah)',
        'Akomodasi Hotel Bintang 5 Makkah & Madinah Pelataran Depan',
        'Perlengkapan Ibadah Haji Plus Complete Super Premium',
        'Bus AC Full Perjalanan Makassar - Jeddah PP',
        'Konsumsi Gourmet Fullboard 3x Sehari Menu Indonesia',
        'Pendampingan Tim Medis & Pembimbing Ibadah Berpengalaman'
      ],
      exclusions: [
        'Keperluan Pribadi, Vaksin, Paspor, & Data Seluler',
        'Biaya Laundry & Kelebihan Bagasi',
        'DAM / Qurban Haji (Diatur saat manasik di Parepare)'
      ],
      terms: [
        'FC KTP & Kartu Keluarga (KK)',
        'FC Buku Nikah / Akta Kelahiran',
        'Pas Foto 3x4 (Latar Putih 80% Wajah)',
        'BPJS / Asuransi Kesehatan Aktif',
        'Mengisi Form Pendaftaran Resmi Haji Plus SAI TOUR'
      ],
      paymentNotes: 'Pelunasan dikurangi Setoran Awal ($4.500 USD). Pembatalan atau pindah travel dikenakan biaya $500 USD.',
      bankInfo: 'Pembayaran HANYA melalui: Bank BSI Rek. a.n. PT. Suci Amanah Insani',
      contacts: 'Hj. Suci Karlos: +62 821-9512-5942 | Admin Aulia: +62 859-5963-6222 / 0853-4878-8299',
      itinerary: [
        { day: 'Tahap 1', title: 'Pendaftaran & Penerbitan Nomor Porsi Resmi', desc: 'Setoran awal $4.500 USD via Rekening Bank BSI PT. Suci Amanah Insani untuk pendaftaran SPH Kemenag RI & penerbitan Nomor Porsi Haji Plus resmi.' },
        { day: 'Tahap 2', title: 'Pembekalan & Manasik Haji Intensif di Parepare', desc: 'Pelaksanaan bimbingan manasik haji syari berkala di Parepare oleh KBIHU Karlos Haramain Amanah.' },
        { day: 'Tahap 3', title: 'Keberangkatan & Pelaksanaan Rukun Haji Plus', desc: 'Penerbangan Makassar - Jeddah PP. Pelaksanaan Ibadah Haji di Makkah, Wukuf Arafah, Mabit Muzdalifah & Mina (Maktab VIP AC), Tawaf Ifadhah, Sa\'i, Tahallul, & Ziarah Madinah.' }
      ]
    }
  ];

  /* ==========================================================================
     2. Fix Menu & Navigation Engine (Smooth, Modern, & Bug-Free UX)
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .page-switch-link');
  const pageViews = document.querySelectorAll('.page-view');

  // Sticky Blur Header Effect on Scroll
  function handleScrollHeader() {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScrollHeader);
  handleScrollHeader();

  // Open & Close Mobile Drawer
  function openMobileDrawer() {
    mobileDrawer?.classList.add('active');
    drawerOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileDrawer?.classList.remove('active');
    drawerOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openMobileDrawer);
  mobileClose?.addEventListener('click', closeMobileDrawer);
  drawerOverlay?.addEventListener('click', closeMobileDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
      closeModal();
      closeLightbox();
    }
  });

  // Unified Smooth Section Scroll Logic
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        closeMobileDrawer();
      }
    });
  });

  // Intersection Observer ScrollSpy for Active Navbar Links
  const trackedSections = document.querySelectorAll('section[id], main[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  trackedSections.forEach(section => observer.observe(section));

  // Modern Smooth Scroll Reveal Observer
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  };

  initScrollReveal();

  /* ==========================================================================
     3. Package Card Rendering Engine
     ========================================================================== */
  const packageContainer = document.getElementById('package-cards-container');
  const fullPackageContainer = document.getElementById('full-package-cards-container');

  function renderPackageCard(pkg) {
    const imageBannerHTML = pkg.image ? `
      <div class="package-image-wrapper">
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
      </div>
    ` : `
      <div class="package-noimage-wrapper" style="background: linear-gradient(135deg, #051f17 0%, #0a3829 100%); padding: 1.5rem 1.25rem 1.25rem 1.25rem; border-bottom: 2px solid var(--gold); border-radius: var(--radius-md) var(--radius-md) 0 0; position: relative;">
        <div class="package-duration-overlay-noimg" style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(212, 175, 55, 0.2); border:1px solid var(--gold); color:var(--gold-light); font-size:0.82rem; font-weight:700; padding:0.35rem 0.85rem; border-radius:var(--radius-pill);">
          <i class="far fa-calendar-alt"></i> ${pkg.departureDate}
        </div>
      </div>
    `;

    return `
      <div class="package-card reveal-on-scroll reveal-zoom" data-category="${pkg.category}">
        <div class="package-badge-tag">${pkg.promoBadge}</div>
        ${imageBannerHTML}
        <div class="package-content">
          <div class="package-header">
            <h3 class="package-title">${pkg.title}</h3>
            <div class="package-price-box">
              <div class="price-label">${pkg.priceSub}</div>
              <div class="price-value">${pkg.price}</div>
            </div>
          </div>
          <div class="package-specs">
            <div class="spec-item"><i class="fas fa-plane"></i> <span>${pkg.airline}</span></div>
            <div class="spec-item"><i class="fas fa-hotel"></i> <span>Makkah: ${pkg.hotelMakkah}</span></div>
            <div class="spec-item"><i class="fas fa-hotel"></i> <span>Madinah: ${pkg.hotelMadinah}</span></div>
            <div class="spec-item"><i class="fas fa-train"></i> <strong style="color:var(--gold-hover);">Bonus Free Kereta Cepat HHR</strong></div>
            <div class="spec-item"><i class="fas fa-id-card"></i> <span>Izin PPIU U.299/2020 | PIHK 0220001452156/2024</span></div>
          </div>
          <div class="package-footer" style="display:flex; flex-direction:column; gap:0.6rem;">
            <button class="btn btn-emerald btn-view-detail" style="width:100%" data-id="${pkg.id}">
              <i class="fas fa-eye"></i> Lihat Detail Lengkap Flyer
            </button>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
              <a href="https://wa.me/6285959636222?text=Assalamu'alaikum%20Admin%201%20(Aulia)%20SAI%20TOUR,%20saya%20ingin%20tanya/konsultasi%20mengenai%20${encodeURIComponent(pkg.title)}" target="_blank" class="btn btn-gold" style="font-size:0.76rem; padding:0.5rem 0.2rem;">
                <i class="fab fa-whatsapp"></i> Admin 1 (Aulia)
              </a>
              <a href="https://wa.me/6282195125942?text=Assalamu'alaikum%20Admin%202%20(Hj.%20Suci%20Karlos)%20SAI%20TOUR,%20saya%20ingin%20tanya/konsultasi%20mengenai%20${encodeURIComponent(pkg.title)}" target="_blank" class="btn btn-gold" style="font-size:0.76rem; padding:0.5rem 0.2rem; background:linear-gradient(135deg, #07221a 0%, #0a3829 100%); color:var(--gold-light) !important; border:1px solid var(--gold);">
                <i class="fab fa-whatsapp"></i> Admin 2 (Hj. Suci)
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function initPackages() {
    if (packageContainer) {
      packageContainer.innerHTML = packagesData.map(pkg => renderPackageCard(pkg)).join('');
    }
    if (fullPackageContainer) {
      fullPackageContainer.innerHTML = packagesData.map(pkg => renderPackageCard(pkg)).join('');
    }

    // Attach click triggers to Detail buttons
    document.querySelectorAll('.btn-view-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        const pkgId = btn.getAttribute('data-id');
        openPackageModal(pkgId);
      });
    });

    initScrollReveal();
  }

  initPackages();

  // Package Filter Buttons
  const filterBtns = document.querySelectorAll('.package-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const val = btn.getAttribute('data-filter');
      document.querySelectorAll('.package-card').forEach(card => {
        if (val === 'all' || card.getAttribute('data-category') === val) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     4. High Detail Package Modal Engine (Matches Official Flyers 100%)
     ========================================================================== */
  const packageModal = document.getElementById('package-detail-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  function openPackageModal(pkgId) {
    const pkg = packagesData.find(p => p.id === pkgId);
    if (!pkg) return;

    document.getElementById('modal-pkg-title').textContent = pkg.title;
    document.getElementById('modal-pkg-price').textContent = pkg.price;
    document.getElementById('modal-pkg-duration').textContent = pkg.duration;
    document.getElementById('modal-pkg-date').textContent = pkg.departureDate;
    document.getElementById('modal-pkg-airline').textContent = pkg.airline;
    document.getElementById('modal-pkg-hotel-makkah').textContent = pkg.hotelMakkah;
    document.getElementById('modal-pkg-hotel-madinah').textContent = pkg.hotelMadinah;

    // Render Inclusions
    const inclusionsList = document.getElementById('modal-pkg-inclusions');
    inclusionsList.innerHTML = pkg.inclusions.map(inc => `
      <li><i class="fas fa-check-circle" style="color:var(--gold-hover);"></i> <span>${inc}</span></li>
    `).join('');

    // Render Exclusions, Terms, & Official Bank BSI Info
    const exclusionBox = document.getElementById('modal-pkg-bank-info');
    if (exclusionBox) {
      let termsHtml = '';
      if (pkg.terms && pkg.terms.length > 0) {
        termsHtml = `
          <div style="margin-top:1.25rem;">
            <div style="font-weight:700; color:var(--primary-dark); font-size:0.95rem; margin-bottom:0.5rem;"><i class="fas fa-file-alt" style="color:var(--gold-hover);"></i> Syarat Pendaftaran:</div>
            <ul style="list-style:none; padding-left:0; font-size:0.88rem; color:var(--text-main); display:grid; grid-template-columns:repeat(2, 1fr); gap:0.4rem;">
              ${pkg.terms.map(t => `<li><i class="fas fa-caret-right" style="color:var(--gold);"></i> ${t}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      let paymentNotesHtml = '';
      if (pkg.paymentNotes) {
        paymentNotesHtml = `
          <div style="font-size:0.85rem; color:#b78103; background:#fff8e8; border:1px solid #fce3a6; padding:0.6rem 0.8rem; border-radius:6px; margin-top:0.75rem;">
            <i class="fas fa-info-circle"></i> ${pkg.paymentNotes}
          </div>
        `;
      }

      exclusionBox.innerHTML = `
        <div style="margin-top:1rem;">
          <div style="font-weight:700; color:var(--primary-dark); font-size:0.95rem; margin-bottom:0.4rem;"><i class="fas fa-times-circle" style="color:#c0392b;"></i> Diluar Paket:</div>
          <ul style="list-style:none; padding-left:0; font-size:0.88rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.3rem;">
            ${pkg.exclusions.map(ex => `<li><i class="fas fa-minus" style="color:#c0392b;"></i> ${ex}</li>`).join('')}
          </ul>
        </div>

        ${termsHtml}
        ${paymentNotesHtml}

        <div style="background:var(--gold-soft); border:1px solid var(--border-gold); padding:1rem 1.25rem; border-radius:var(--radius-sm); margin-top:1.25rem;">
          <div style="font-weight:700; color:var(--primary-dark); font-size:0.95rem; margin-bottom:0.3rem;"><i class="fas fa-university" style="color:var(--gold-hover);"></i> Rekening Pembayaran Resmi:</div>
          <div style="font-size:1rem; color:var(--primary-dark); font-weight:800;">Bank BSI Rek. a.n. PT. Suci Amanah Insani</div>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:0.3rem;"><i class="fas fa-shield-alt" style="color:var(--gold);"></i> IZIN PPIU NO. U.299/2020 | IZIN PIHK NO. 0220001452156/2024</div>
          <div style="font-size:0.82rem; color:var(--primary-dark); font-weight:700; margin-top:0.4rem;">📞 Admin 1: Aulia (+62 859-5963-6222) | Admin 2: Hj. Suci Karlos (+62 821-9512-5942)</div>
        </div>
      `;
    }

    // Prefilled Dual WhatsApp Admin Links
    const waAdmin1 = document.getElementById('modal-wa-admin1');
    const waAdmin2 = document.getElementById('modal-wa-admin2');
    const waMessage1 = encodeURIComponent(
      `Assalamu'alaikum Admin 1 (Aulia) SAI TOUR Parepare,\n\nSaya ingin berkonsultasi / mendaftar paket *${pkg.title}* (${pkg.price}). Mohon info ketersediaan seat & petunjuknya. Terima kasih.`
    );
    const waMessage2 = encodeURIComponent(
      `Assalamu'alaikum Admin 2 (Hj. Suci Karlos) SAI TOUR Parepare,\n\nSaya ingin berkonsultasi / mendaftar paket *${pkg.title}* (${pkg.price}). Mohon info ketersediaan seat & petunjuknya. Terima kasih.`
    );

    if (waAdmin1) waAdmin1.href = `https://wa.me/6285959636222?text=${waMessage1}`;
    if (waAdmin2) waAdmin2.href = `https://wa.me/6282195125942?text=${waMessage2}`;

    packageModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    packageModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  /* ==========================================================================
     5. Remade Departure Schedule Controls (Dual View & Live Month Filters)
     ========================================================================== */
  const scheduleSearch = document.getElementById('schedule-search');
  const viewCardsBtn = document.getElementById('view-cards-btn');
  const viewTableBtn = document.getElementById('view-table-btn');
  const cardsView = document.getElementById('schedule-cards-view');
  const tableView = document.getElementById('schedule-table-view');
  const monthPills = document.querySelectorAll('.month-pill');

  // View Switcher (Card Grid vs Modern Table)
  viewCardsBtn?.addEventListener('click', () => {
    viewCardsBtn.classList.add('active');
    viewTableBtn?.classList.remove('active');
    if (cardsView) cardsView.style.display = 'grid';
    if (tableView) tableView.style.display = 'none';
  });

  viewTableBtn?.addEventListener('click', () => {
    viewTableBtn.classList.add('active');
    viewCardsBtn?.classList.remove('active');
    if (tableView) tableView.style.display = 'block';
    if (cardsView) cardsView.style.display = 'none';
  });

  // Month Pills Filtering
  monthPills.forEach(pill => {
    pill.addEventListener('click', () => {
      monthPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const monthVal = pill.getAttribute('data-month');
      filterScheduleItems();
    });
  });

  // Search & Month Filter Engine
  function filterScheduleItems() {
    const searchVal = scheduleSearch ? scheduleSearch.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.month-pill.active');
    const selectedMonth = activePill ? activePill.getAttribute('data-month') : 'all';

    // Filter Cards
    document.querySelectorAll('.schedule-item-card').forEach(card => {
      const cardText = card.getAttribute('data-text') || '';
      const cardMonth = card.getAttribute('data-month') || 'all';

      const matchesSearch = !searchVal || cardText.includes(searchVal);
      const matchesMonth = selectedMonth === 'all' || cardMonth === selectedMonth || cardMonth === 'all';

      if (matchesSearch && matchesMonth) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Filter Table Rows
    document.querySelectorAll('#schedule-table-body tr').forEach(row => {
      const rowText = (row.getAttribute('data-text') || row.textContent).toLowerCase();
      const rowMonth = row.getAttribute('data-month') || 'all';

      const matchesSearch = !searchVal || rowText.includes(searchVal);
      const matchesMonth = selectedMonth === 'all' || rowMonth === selectedMonth || rowMonth === 'all';

      if (matchesSearch && matchesMonth) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  scheduleSearch?.addEventListener('input', filterScheduleItems);

  /* ==========================================================================
     6. Gallery Filter & Lightbox Engine
     ========================================================================== */
  const galleryFilterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || '';
      const category = item.querySelector('.gallery-item-category')?.textContent || '';

      if (img && lightboxImg && lightboxModal) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = `${title} - ${category}`;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightboxModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  /* ==========================================================================
     7. FAQ Accordion Logic
     ========================================================================== */
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const isActive = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isActive) parent.classList.add('active');
    });
  });

  /* ==========================================================================
     8. Direct WhatsApp Link Auto Generator & Floating Widget
     ========================================================================== */
  document.querySelectorAll('.btn-whatsapp-general').forEach(btn => {
    btn.href = `https://wa.me/${admin2Whatsapp}?text=${defaultAutoMsg}`;
  });

  const waToggleBtn = document.getElementById('wa-toggle-btn');
  const waPopover = document.getElementById('wa-popover');

  waToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    waPopover?.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (waPopover && !waPopover.contains(e.target) && e.target !== waToggleBtn) {
      waPopover.classList.remove('active');
    }
  });
});
