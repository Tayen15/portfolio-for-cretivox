# Product Requirements Document (PRD)
## Cretivox Internship Experience Season II Batch 6 (2026) - Front-End Developer Endurance Test

### 1. Product Overview
An interactive single-page personal showcase website introducing **Firtiansyah Okta Resama (Okta)** as a candidate for the **Front-End Developer Intern** role at Cretivox (Season II Batch 6, "Dream On"). The experience combines high-contrast editorial typography, GSAP + ScrollTrigger choreography, and interactive personal exploration components.

### 2. Candidate Profile Data (Verified Source)
- **Full Name**: Firtiansyah Okta Resama
- **Nickname**: Okta / OKTAA
- **Age**: 21 Tahun
- **University**: Sekolah Tinggi Teknologi Terpadu Nurul Fikri (STT Terpadu Nurul Fikri)
- **Major & Semester**: Teknik Informatika, Semester 5 (2024 - Sekarang)
- **Previous Education**: SMK Negeri 1 Depok, Rekayasa Perangkat Lunak / Software Engineering (2021 - 2024)
- **Target Role**: Front-End Developer Intern (Cretivox Season II Batch 6)
- **Zodiac**: Libra
- **Hobbies & Interests**:
  1. **Gym / Weight Training**: Menjaga disiplin fisik, konsistensi progres, dan ketahanan mental.
  2. **Gaming**: Melatih refleks, pemecahan masalah taktis, dan apresiasi terhadap desain antarmuka interaktif.
  3. **Music**: Teman fokus saat menulis kode dan merancang ritme animasi.
  4. **Movies / Cinema**: Inspirasi komposisi visual, penceritaan (storytelling), dan transisi sinematik.
- **Core Tech Stack & Tools**: Next.js, TypeScript, Tailwind CSS, GSAP (ScrollTrigger), Laravel, Docker, CI/CD, Python/FastAPI.
- **Prior Experience**: Full-Stack Developer Intern di Indi Technology (Jan - Apr 2024), membangun platform e-commerce marketplace dan undangan digital berbasis Laravel & JavaScript.
- **Verified External Links**:
  - Portfolio: https://hi.oktaa.my.id
  - Projects Archive: https://hi.oktaa.my.id/projects
  - GitHub: https://github.com/Tayen15
  - LinkedIn: https://www.linkedin.com/in/firtiansyahokta/
  - Email: mailto:hi@oktaa.my.id

### 3. Selected Featured Projects (Verified from hi.oktaa.my.id/projects)
1. **ASTRO 2026 Website (`DEV. 01` / 2026)**
   - **Stack**: Next.js, TypeScript, Tailwind CSS, PostgreSQL, Drizzle ORM
   - **Summary**: Platform manajemen kompetisi dan festival tahunan mahasiswa dengan sistem gelombang pendaftaran (batch), asisten panduan otomatis, pembuatan sertifikat digital, dan dasbor kuota real-time.
   - **Live URL**: https://astro.nurulfikri.ac.id/
2. **PEMIRA E-Voting 2025 (`DEV. 02` / 2026)**
   - **Stack**: Next.js, Tailwind CSS, Drizzle ORM, PostgreSQL
   - **Summary**: Portal pemungutan suara elektronik mahasiswa STT Terpadu Nurul Fikri yang transparan, aman, dan mudah diakses untuk melihat profil kandidat serta memberikan suara secara daring.
   - **Live URL**: https://pemira.nurulfikri.ac.id/
3. **ORMIK Explore 2025 Website (`DEV. 03` / 2025)**
   - **Stack**: Next.js, Tailwind CSS
   - **Summary**: Platform acara orientasi mahasiswa baru yang interaktif dengan hitung mundur waktu nyata (real-time countdown) dan kontrol pemeliharaan terpusat.
   - **Live URL**: https://ormikexplore-app.vercel.app/

### 4. Core Functional & Interactive Requirements
1. **Single-Page Interactive Narrative**:
   - **Section 01 (Hero & Manifesto)**: Kinetic typography reveal menggunakan GSAP, avatar profil interaktif milik Okta, badge status ketersediaan untuk Cretivox Batch 6, dan navigasi cepat.
   - **Section 02 (Interactive Identity, Zodiac & Hobby Explorer)**: Komponen interaktif tempat pengunjung dapat memilih tab/kartu (Academic Profile, Libra Balance Meter, Gym/Gaming/Music/Film Explorer) dengan umpan balik visual langsung dan state yang jelas.
   - **Section 03 (Pinned Horizontal Scroll Project Showcase)**: Menggunakan GSAP `ScrollTrigger` (`pin: true`) untuk menggeser 5 proyek nyata secara horizontal saat pengunjung melakukan scroll vertikal, dilengkapi filter kategori dan tautan langsung ke live demo.
   - **Section 04 (Tech Stack & Engineering Matrix)**: Eksplorasi keahlian Front-End, Full-Stack, dan DevOps (Next.js, Laravel, Docker, CI/CD) beserta riwayat magang di Indi Technology.
   - **Section 05 (Dream On Initiative & Contact CTA)**: Penutup yang menghubungkan etos kerja Okta dengan kultur "Dream On" Cretivox, dilengkapi fitur salin email interaktif (dengan status umpan balik) serta tautan GitHub dan LinkedIn.
2. **Responsive & Accessible**:
   - Mobile layout melakukan reflow secara proporsional (pada layar sempit, horizontal scroll berganti atau menyesuaikan menjadi vertikal/swipeable stack tanpa horizontal overflow).
   - Semua elemen interaktif dapat diakses dengan keyboard (`Tab`, `Enter`, `Space`, `Escape`) dan memenuhi rasio kontras WCAG AA.
