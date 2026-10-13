# SIAKAD Cendekia · Portal Akademik & Pembelajaran Terpadu UNC
**Praktikum Keamanan Sistem Informasi (KSI) · Audit Laporan M5-M6**  
**Mahasiswa:** Rizqi Akbar (NIM: 24781086)  
**Program Studi:** D-III Manajemen Informatika · Kelas 5C  
**Institusi Kampus Asal:** Politeknik Negeri Lampung (Polinela)  
**Kampus Fiktif:** Universitas Nusantara Cendekia (UNC)

---

## 1. Identitas Website
- **Nama Website / Portal:** SIAKAD Cendekia (Sistem Informasi Akademik Terpadu)
- **Institusi Kampus Fiktif:** Universitas Nusantara Cendekia (UNC)
- **Target Pengguna:** Mahasiswa, Dosen Pengampu, dan Administrator Sistem
- **Tujuan Sistem:** Portal kampus fiktif untuk latihan praktikum keamanan: mengelola proses akademik (melihat nilai KHS, mengunggah berkas tugas perkuliahan, berdiskusi materi kuliah, dosen memberi nilai, serta admin mengelola akun pengguna).

---

## 2. Akun & Kredensial Sintetis (Seluruh Data Sintetis & Tidak Sama)
Seluruh akun dan data nilai di bawah ini adalah data sintetis (dummy) murni yang dibuat untuk kebutuhan latihan keamanan informasi:

| Peran | Nama Lengkap | Identitas (NIM/NIDN/NIP) | Kata Sandi | Deskripsi |
|---|---|---|---|---|
| **Mahasiswa** | Bimasena Wibowo | `24050101` | `mahasiswa123` | Mahasiswa D-III Manajemen Informatika |
| **Mahasiswa** | Citra Lestari | `24050102` | `mahasiswa123` | Mahasiswa D-III Manajemen Informatika |
| **Dosen** | Dr. Hendra Gunawan, S.Kom., M.T.I. | `0219088101` | `dosen123` | Dosen Pengampu Keamanan Sistem Informasi |
| **Admin** | Administrator Sistem (Budi Santoso) | `19850115` | `admin123` | Super Admin Akademik & Manajemen Akun |

*Catatan:* Portal juga dilengkapi tombol **"Quick Login Demo"** di bagian atas untuk memudahkan pengujian satu-klik tanpa harus mengetik kredensial secara manual.

---

## 3. Fitur Utama Berdasarkan Peran Pengguna

### A. Mahasiswa
1. **Autentikasi & Profil**: Masuk ke portal dengan hak akses mahasiswa.
2. **Melihat Nilai (KHS)**: Melihat Kartu Hasil Studi per semester, rincian SKS tiap mata kuliah, dosen pengampu, nilai angka, nilai huruf (A, B, C, D), status kelulusan, serta perhitungan otomatis Total SKS dan Indeks Prestasi Kumulatif (IPK).
3. **Mengunggah Tugas**: Memilih mata kuliah, mengisi judul tugas & catatan dosen, lalu mengunggah berkas tugas. Dilengkapi riwayat pengumpulan tugas beserta status penilaian.
4. **Forum Diskusi Akademik**: Berinteraksi dan bertanya mengenai materi kuliah di forum diskusi terbuka per mata kuliah.

### B. Dosen
1. **Autentikasi Dosen**: Masuk dengan hak akses dosen pengampu.
2. **Memberi & Mengubah Nilai**: Menampilkan daftar mahasiswa per mata kuliah, menginput dan memperbarui nilai Tugas (30%), UTS (30%), dan UAS (40%), yang langsung mengkalkulasi Nilai Akhir & Grade secara otomatis.
3. **Mengevaluasi Tugas Mahasiswa**: Memeriksa berkas dan catatan tugas yang telah diunggah oleh mahasiswa.
4. **Forum Diskusi Akademik**: Memberikan tanggapan, bimbingan, atau pengumuman kuliah kepada mahasiswa di forum diskusi.

### C. Administrator Sistem
1. **Autentikasi Admin**: Masuk dengan hak akses administrator penuh.
2. **Manajemen Akun Pengguna**: Melihat seluruh daftar akun sintetis terdaftar, menambah akun baru (Mahasiswa, Dosen, Admin), memvalidasi ID, serta menghapus akun.

---

## 4. Dua Kerentanan yang Dibuat Secara Sengaja

Sesuai instruksi audit tugas, sistem portal akademik ini sengaja ditanamkan minimal 2 kerentanan keamanan terukur untuk tujuan pengujian penetrasi dan audit:

### Kerentanan 1: Validasi Berkas Lemah (Unrestricted / Weak File Upload Validation)
- **Lokasi Fitur:** Portal Mahasiswa > Tab *"Unggah Tugas Perkuliahan"*.
- **Penyebab Kerentanan:**  
  Pemeriksaan berkas tugas di antarmuka web tidak memvalidasi tipe MIME riil maupun daftar ekstensi berkas berbahaya (seperti `.html`, `.js`, `.php`, `.svg`, `.sh`). Input file menerima berkas secara longgar tanpa filter sanitasi nama berkas atau konten biner.
- **Dampak Keamanan:**  
  Penyerang dapat mengunggah berkas HTML atau JavaScript (`payload_exploit.html` atau skrip eksekusi). Ketika berkas tersebut dibuka oleh dosen atau pengguna lain, kode di dalamnya akan dieksekusi oleh peramban pengguna dalam konteks asal aplikasi (*Stored Cross-Site Scripting via File Upload*).
- **Langkah Demonstrasi / POC:**
  1. Login sebagai Mahasiswa (`24050101`).
  2. Buka tab **Unggah Tugas Perkuliahan**.
  3. Unggah file berekstensi `.html` atau `.js` (misalnya: `tugas_shell.html` berisi `<script>alert('Weak File Validation Exploted!')</script>`).
  4. Sistem tetap menerima berkas tersebut dan memunculkan indikator peringatan: `⚠️ Berkas Berbahaya Diterima`.
- **Rekomendasi Mitigasi:**  
  - Terapkan *allowlist* ekstensi yang ketat (hanya izinkan `.pdf`, `.docx`, `.zip`).
  - Lakukan validasi MIME-type dan *magic bytes* di sisi server/backend.
  - Simpan berkas yang diunggah di luar direktori *web root* atau gunakan *Content-Disposition: attachment*.

---

### Kerentanan 2: Stored Cross-Site Scripting (Stored XSS)
- **Lokasi Fitur:** Tab *"Forum Diskusi Kampus"*.
- **Penyebab Kerentanan:**  
  Masukan pesan atau komentar diskusi dari pengguna disimpan langsung ke basis data lokal dan dirender kembali ke antarmuka menggunakan properti `element.innerHTML` tanpa proses *HTML entity encoding* (tidak menyaring tag `<script>`, `<img>`, `<iframe>`, atau atribut *event handlers* seperti `onerror=`).
- **Dampak Keamanan:**  
  Penyerang dapat menyuntikkan muatan skrip berbahaya secara permanen di basis data forum. Setiap pengguna lain (termasuk Dosen dan Administrator) yang membuka forum diskusi tersebut akan secara otomatis mengeksekusi skrip penyerang (misalnya: pencurian *session token*, pengalihan halaman, atau aksi manipulasi atas nama pengguna lain).
- **Langkah Demonstrasi / POC:**
  1. Buka tab **Forum Diskusi Kampus**.
  2. Klik tombol bantu **"Uji Payload XSS Demo"** atau masukkan pesan:  
     `<b style="color:red">[UJI XSS]</b> Mengapa input ini dirender?<img src="x" onerror="alert('Stored XSS Berhasil! Sesi Pengguna: ' + localStorage.getItem('siakad_active_user'))">`
  3. Klik **Kirim ke Forum Diskusi**.
  4. Skrip JavaScript pada atribut `onerror` akan langsung tereksekusi pada browser ketika postingan forum dirender.
- **Rekomendasi Mitigasi:**  
  - Gunakan `element.textContent` atau `element.innerText` saat merender teks masukan pengguna.
  - Jika memerlukan formatting HTML, gunakan pustaka sanitasi tepercaya seperti DOMPurify.
  - Terapkan *Content Security Policy (CSP)* yang ketat untuk mencegah eksekusi skrip *inline*.

---

## 5. Panduan Menjalankan & Menguji Aplikasi
1. Buka file `index.html` langsung di browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox) melalui protokol `file://` atau server web statis lokal.
2. Gunakan tombol **Quick Login Demo** di pojok kanan atas untuk berpindah peran antara Mahasiswa, Dosen, dan Admin secara instan.
3. Klik tombol merah **"🔍 Panduan Audit & 2 Kerentanan"** di banner atas untuk melihat rangkuman teknis audit keamanan.
