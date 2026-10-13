/**
 * SIAKAD Cendekia - Sistem Informasi Akademik & Portal Pembelajaran
 * Universitas Nusantara Cendekia (UNC) - Data Sintetis & Lab Keamanan
 * Author: Rizqi Akbar (24781086) - Politeknik Negeri Lampung
 */

// ============================================================================
// DATA SINTETIS AWAL (SEED DATA DI LOCALSTORAGE)
// ============================================================================

const SEED_USERS = [
  {
    id: "24050101",
    name: "Bimasena Wibowo",
    role: "mahasiswa",
    dept: "D-III Manajemen Informatika",
    pass: "mahasiswa123",
    status: "Aktif"
  },
  {
    id: "24050102",
    name: "Citra Lestari",
    role: "mahasiswa",
    dept: "D-III Manajemen Informatika",
    pass: "mahasiswa123",
    status: "Aktif"
  },
  {
    id: "0219088101",
    name: "Dr. Hendra Gunawan, S.Kom., M.T.I.",
    role: "dosen",
    dept: "Dosen Pengampu KSI & Basis Data",
    pass: "dosen123",
    status: "Aktif"
  },
  {
    id: "19850115",
    name: "Administrator Sistem (Budi Santoso)",
    role: "admin",
    dept: "Pusat Teknologi Informasi & Pangkalan Data",
    pass: "admin123",
    status: "Aktif"
  }
];

const SEED_GRADES = [
  {
    id: "gr-1",
    nim: "24050101",
    nama: "Bimasena Wibowo",
    kelas: "MI 5C",
    kodeMk: "PMI 1522",
    mk: "Keamanan Sistem Informasi",
    sks: 3,
    dosen: "Dr. Hendra Gunawan, S.Kom., M.T.I.",
    tugas: 88,
    uts: 85,
    uas: 90
  },
  {
    id: "gr-2",
    nim: "24050101",
    nama: "Bimasena Wibowo",
    kelas: "MI 5C",
    kodeMk: "PMI 1520",
    mk: "Pemrograman Web Lanjut",
    sks: 3,
    dosen: "M. Firdaus, M.Kom.",
    tugas: 92,
    uts: 88,
    uas: 85
  },
  {
    id: "gr-3",
    nim: "24050101",
    nama: "Bimasena Wibowo",
    kelas: "MI 5C",
    kodeMk: "PMI 1525",
    mk: "Manajemen Basis Data",
    sks: 3,
    dosen: "Dr. Hendra Gunawan, S.Kom., M.T.I.",
    tugas: 80,
    uts: 84,
    uas: 86
  },
  {
    id: "gr-4",
    nim: "24050102",
    nama: "Citra Lestari",
    kelas: "MI 5C",
    kodeMk: "PMI 1522",
    mk: "Keamanan Sistem Informasi",
    sks: 3,
    dosen: "Dr. Hendra Gunawan, S.Kom., M.T.I.",
    tugas: 90,
    uts: 92,
    uas: 95
  }
];

const SEED_SUBMISSIONS = [
  {
    id: "sub-1",
    nim: "24050101",
    mhsName: "Bimasena Wibowo",
    mk: "PMI 1522 Keamanan Sistem Informasi",
    judul: "Tugas 01 - Analisis Threat Modeling SIAKAD",
    fileName: "24050101_Tugas1_ThreatModel.pdf",
    fileSize: "245 KB",
    isVulnerableFile: false,
    date: "10 Okt 2026, 14:20 WIB",
    status: "Sudah Dinilai (88)"
  },
  {
    id: "sub-2",
    nim: "24050102",
    mhsName: "Citra Lestari",
    mk: "PMI 1522 Keamanan Sistem Informasi",
    judul: "Tugas 01 - Audit OWASP Web App",
    fileName: "24050102_Audit_OWASP.pdf",
    fileSize: "410 KB",
    isVulnerableFile: false,
    date: "11 Okt 2026, 09:15 WIB",
    status: "Sudah Dinilai (90)"
  }
];

const SEED_DISCUSSIONS = [
  {
    id: "dsc-1",
    authorId: "0219088101",
    authorName: "Dr. Hendra Gunawan, S.Kom., M.T.I.",
    role: "dosen",
    mk: "Keamanan Sistem Informasi",
    date: "12 Okt 2026, 08:30 WIB",
    content: "Selamat pagi rekan-rekan mahasiswa. Mohon persiapkan materi pengujian kerentanan web (SQLi, XSS, dan Weak File Upload) untuk praktikum minggu ini."
  },
  {
    id: "dsc-2",
    authorId: "24050101",
    authorName: "Bimasena Wibowo",
    role: "mahasiswa",
    mk: "Keamanan Sistem Informasi",
    date: "12 Okt 2026, 10:15 WIB",
    content: "Pak, izin bertanya mengenai validasi berkas tugas: apakah format berkas yang diterima hanya PDF atau boleh format arsip ZIP?"
  }
];

// Inisialisasi Storage jika belum ada
function initStorage() {
  if (!localStorage.getItem("siakad_users")) {
    localStorage.setItem("siakad_users", JSON.stringify(SEED_USERS));
  }
  if (!localStorage.getItem("siakad_grades")) {
    localStorage.setItem("siakad_grades", JSON.stringify(SEED_GRADES));
  }
  if (!localStorage.getItem("siakad_submissions")) {
    localStorage.setItem("siakad_submissions", JSON.stringify(SEED_SUBMISSIONS));
  }
  if (!localStorage.getItem("siakad_discussions")) {
    localStorage.setItem("siakad_discussions", JSON.stringify(SEED_DISCUSSIONS));
  }
}

initStorage();

function getUsers() {
  return JSON.parse(localStorage.getItem("siakad_users") || "[]");
}
function saveUsers(users) {
  localStorage.setItem("siakad_users", JSON.stringify(users));
}

function getGrades() {
  return JSON.parse(localStorage.getItem("siakad_grades") || "[]");
}
function saveGrades(grades) {
  localStorage.setItem("siakad_grades", JSON.stringify(grades));
}

function getSubmissions() {
  return JSON.parse(localStorage.getItem("siakad_submissions") || "[]");
}
function saveSubmissions(subs) {
  localStorage.setItem("siakad_submissions", JSON.stringify(subs));
}

function getDiscussions() {
  return JSON.parse(localStorage.getItem("siakad_discussions") || "[]");
}
function saveDiscussions(discs) {
  localStorage.setItem("siakad_discussions", JSON.stringify(discs));
}

// Current User State
let currentUser = null;
let activeTab = "";

// Cek sesi yang tersimpan
const savedUser = localStorage.getItem("siakad_active_user");
if (savedUser) {
  try {
    currentUser = JSON.parse(savedUser);
  } catch (e) {
    currentUser = null;
  }
}

// ============================================================================
// LOGIKA AUTENTIKASI (LOGIN & LOGOUT)
// ============================================================================

function handleLoginSubmit(event) {
  event.preventDefault();
  const idInput = document.getElementById("login-username").value.trim();
  const passInput = document.getElementById("login-password").value.trim();
  const roleInput = document.getElementById("login-role").value;

  const users = getUsers();
  const user = users.find(u => (u.id === idInput || u.name.toLowerCase().includes(idInput.toLowerCase())) && u.role === roleInput);

  if (!user) {
    showToast("Kombinasi Pengguna atau Peran tidak ditemukan!", "danger");
    return;
  }

  if (user.pass !== passInput) {
    showToast("Kata sandi salah. Silakan periksa kembali.", "danger");
    return;
  }

  setCurrentUser(user);
}

function quickLogin(role) {
  const users = getUsers();
  let user = null;
  if (role === "mahasiswa") {
    user = users.find(u => u.id === "24050101");
  } else if (role === "dosen") {
    user = users.find(u => u.id === "0219088101");
  } else if (role === "admin") {
    user = users.find(u => u.id === "19850115");
  }

  if (user) {
    setCurrentUser(user);
  }
}

function setCurrentUser(user) {
  currentUser = user;
  localStorage.setItem("siakad_active_user", JSON.stringify(user));
  showToast(`Selamat datang, ${user.name} (${user.role.toUpperCase()})`, "success");
  renderUI();
}

function logout() {
  const name = currentUser ? currentUser.name : "Pengguna";
  currentUser = null;
  localStorage.removeItem("siakad_active_user");
  showToast(`Sesi ${name} telah diakhiri.`, "info");
  renderUI();
}

// ============================================================================
// RENDER UI & NAVIGASI TABS SESUAI PERAN
// ============================================================================

function renderUI() {
  const viewLogin = document.getElementById("view-login");
  const viewPortal = document.getElementById("view-portal");
  const guestActions = document.getElementById("guest-actions");
  const loggedUserArea = document.getElementById("logged-user-area");

  if (!currentUser) {
    viewLogin.style.display = "block";
    viewPortal.style.display = "none";
    guestActions.style.display = "flex";
    loggedUserArea.style.display = "none";
    return;
  }

  viewLogin.style.display = "none";
  viewPortal.style.display = "block";
  guestActions.style.display = "none";
  loggedUserArea.style.display = "flex";

  // Setup Header Profile
  document.getElementById("nav-user-avatar").textContent = currentUser.name.charAt(0);
  document.getElementById("nav-user-name").textContent = currentUser.name;
  document.getElementById("nav-user-role").textContent = currentUser.role;

  // Setup Tab Bar
  setupTabsForRole(currentUser.role);
}

function setupTabsForRole(role) {
  const tabsList = document.getElementById("portal-tabs");
  tabsList.innerHTML = "";

  let tabs = [];
  if (role === "mahasiswa") {
    tabs = [
      { id: "panel-mhs-nilai", label: "📊 Nilai Akademik (KHS)", default: true },
      { id: "panel-mhs-tugas", label: "📤 Unggah Tugas Perkuliahan" },
      { id: "panel-diskusi", label: "💬 Forum Diskusi Kampus" }
    ];
  } else if (role === "dosen") {
    tabs = [
      { id: "panel-dsn-nilai", label: "📝 Input & Evaluasi Nilai", default: true },
      { id: "panel-diskusi", label: "💬 Forum Diskusi Akademik" }
    ];
  } else if (role === "admin") {
    tabs = [
      { id: "panel-adm-akun", label: "👥 Manajemen Akun & Hak Akses", default: true },
      { id: "panel-diskusi", label: "💬 Forum Diskusi Kampus" }
    ];
  }

  tabs.forEach(tab => {
    const li = document.createElement("li");
    li.className = "nav-item";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "btn-" + tab.id;
    btn.innerHTML = tab.label;
    btn.onclick = () => switchTab(tab.id);
    li.appendChild(btn);
    tabsList.appendChild(li);
  });

  const defaultTab = tabs.find(t => t.default) || tabs[0];
  switchTab(defaultTab.id);
}

function switchTab(tabId) {
  activeTab = tabId;
  const allPanels = document.querySelectorAll(".tab-content");
  allPanels.forEach(panel => {
    panel.style.display = panel.id === tabId ? "block" : "none";
  });

  const tabButtons = document.querySelectorAll(".nav-item button");
  tabButtons.forEach(btn => {
    btn.classList.toggle("active", btn.id === "btn-" + tabId);
  });

  // Render specific panel content
  if (tabId === "panel-mhs-nilai") renderMahasiswaNilai();
  if (tabId === "panel-mhs-tugas") renderMahasiswaTugas();
  if (tabId === "panel-diskusi") renderForumThreads();
  if (tabId === "panel-dsn-nilai") renderDosenGrade();
  if (tabId === "panel-adm-akun") renderAdminUsers();
}

// ============================================================================
// FITUR MAHASISWA: MELIHAT NILAI (KHS)
// ============================================================================

function calculateFinalGrade(tugas, uts, uas) {
  const num = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
  let letter = "E";
  let point = 0;
  if (num >= 85) { letter = "A"; point = 4.0; }
  else if (num >= 80) { letter = "A-"; point = 3.7; }
  else if (num >= 75) { letter = "B+"; point = 3.3; }
  else if (num >= 70) { letter = "B"; point = 3.0; }
  else if (num >= 65) { letter = "B-"; point = 2.7; }
  else if (num >= 60) { letter = "C+"; point = 2.3; }
  else if (num >= 55) { letter = "C"; point = 2.0; }
  else if (num >= 45) { letter = "D"; point = 1.0; }
  return { num: num.toFixed(1), letter, point };
}

function renderMahasiswaNilai() {
  const grades = getGrades().filter(g => g.nim === currentUser.id);
  const tbody = document.getElementById("table-nilai-body");
  tbody.innerHTML = "";

  let totalSks = 0;
  let totalPoints = 0;

  if (grades.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 20px;">Belum ada data nilai semester ini untuk NIM ${currentUser.id}.</td></tr>`;
    document.getElementById("mhs-total-sks").textContent = "0 SKS";
    document.getElementById("mhs-ipk").textContent = "0.00";
    return;
  }

  grades.forEach(g => {
    const calc = calculateFinalGrade(g.tugas, g.uts, g.uas);
    totalSks += g.sks;
    totalPoints += (calc.point * g.sks);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><code>${g.kodeMk}</code></td>
      <td><strong>${g.mk}</strong></td>
      <td>${g.sks} SKS</td>
      <td>${g.dosen}</td>
      <td><strong>${calc.num}</strong></td>
      <td><span class="grade-badge grade-${calc.letter.charAt(0)}">${calc.letter}</span></td>
      <td><span class="badge-tag success">Lulus</span></td>
    `;
    tbody.appendChild(tr);
  });

  const ipk = totalSks > 0 ? (totalPoints / totalSks).toFixed(2) : "0.00";
  document.getElementById("mhs-total-sks").textContent = totalSks + " SKS";
  document.getElementById("mhs-ipk").textContent = ipk;
}

// ============================================================================
// FITUR MAHASISWA: UNGGAH TUGAS (KERENTANAN 1: WEAK FILE UPLOAD VALIDATION)
// ============================================================================

let selectedFile = null;

function handleFileSelect(e) {
  if (e.target.files && e.target.files[0]) {
    selectedFile = e.target.files[0];
    document.getElementById("file-chosen-name").textContent = selectedFile.name + " (" + Math.round(selectedFile.size / 1024) + " KB)";
  }
}

function handleUploadTugas(event) {
  event.preventDefault();
  const mk = document.getElementById("tugas-mk").value;
  const judul = document.getElementById("tugas-judul").value.trim();
  const catatan = document.getElementById("tugas-catatan").value.trim();

  if (!selectedFile) {
    showToast("Silakan pilih berkas tugas terlebih dahulu!", "warning");
    return;
  }

  // AUDIT KEAMANAN: KERENTANAN 1 - VALIDASI BERKAS LEMAH (WEAK FILE VALIDATION)
  // Sistem tidak memvalidasi ekstensi berbahaya (.html, .php, .js, .svg, .sh)
  const ext = selectedFile.name.split('.').pop().toLowerCase();
  const isDangerousExt = ["html", "htm", "js", "php", "svg", "exe", "sh"].includes(ext);

  const newSub = {
    id: "sub-" + Date.now(),
    nim: currentUser.id,
    mhsName: currentUser.name,
    mk: mk,
    judul: judul,
    fileName: selectedFile.name,
    fileSize: Math.round(selectedFile.size / 1024) + " KB",
    isVulnerableFile: isDangerousExt,
    catatan: catatan,
    date: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }) + " WIB",
    status: "Menunggu Penilaian"
  };

  const subs = getSubmissions();
  subs.unshift(newSub);
  saveSubmissions(subs);

  if (isDangerousExt) {
    showToast(`⚠️ KERENTANAN TERDETEKSI: Berkas '${selectedFile.name}' (${ext.toUpperCase()}) diterima tanpa validasi tipe aman!`, "danger");
  } else {
    showToast("Tugas berhasil dikumpulkan dan tersimpan di sistem.", "success");
  }

  // Reset Form
  document.getElementById("form-upload-tugas").reset();
  document.getElementById("file-chosen-name").textContent = "Pilih berkas dari komputer";
  selectedFile = null;

  renderMahasiswaTugas();
}

function renderMahasiswaTugas() {
  const subs = getSubmissions().filter(s => s.nim === currentUser.id);
  const container = document.getElementById("tugas-history-list");
  container.innerHTML = "";

  if (subs.length === 0) {
    container.innerHTML = `<p class="text-muted" style="text-align:center; padding: 20px;">Belum ada riwayat pengumpulan tugas.</p>`;
    return;
  }

  subs.forEach(s => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div class="history-header">
        <strong>${s.judul}</strong>
        <span class="history-date">${s.date}</span>
      </div>
      <div style="font-size: 13px; color: #475569;">${s.mk}</div>
      <div style="display:flex; align-items:center; gap:8px; margin-top:4px;">
        <span class="history-file">📎 ${s.fileName} (${s.fileSize})</span>
        ${s.isVulnerableFile ? '<span class="badge-tag danger" title="File executable/skrip diterima akibat validasi berkas lemah">⚠️ Berkas Berbahaya Diterima</span>' : ''}
      </div>
      <div style="margin-top: 6px; font-size: 12px; color: #1e40af;">Status: <strong>${s.status}</strong></div>
    `;
    container.appendChild(item);
  });
}

// ============================================================================
// FITUR FORUM DISKUSI (KERENTANAN 2: STORED CROSS-SITE SCRIPTING / XSS)
// ============================================================================

function handlePostDiskusi(event) {
  event.preventDefault();
  const mk = document.getElementById("diskusi-mk").value;
  const pesan = document.getElementById("diskusi-pesan").value;

  const newDsc = {
    id: "dsc-" + Date.now(),
    authorId: currentUser.id,
    authorName: currentUser.name,
    role: currentUser.role,
    mk: mk,
    date: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }) + " WIB",
    // KERENTANAN: Teks disimpan mentah apa adanya
    content: pesan
  };

  const discs = getDiscussions();
  discs.unshift(newDsc);
  saveDiscussions(discs);

  document.getElementById("diskusi-pesan").value = "";
  showToast("Pesan Anda telah dikirim ke forum diskusi.", "success");
  renderForumThreads();
}

function injectXSSDemo() {
  const payload = `<b style="color: #ef4444;">[UJI AUDIT XSS]</b> Mengapa format input ini dirender langsung?<img src="x" onerror="alert('VULNERABILITY POC EXECUTED:\\nStored XSS aktif! User session: ' + localStorage.getItem('siakad_active_user'))">`;
  document.getElementById("diskusi-pesan").value = payload;
  showToast("Payload demonstrasi Stored XSS telah disisipkan ke kolom input.", "warning");
}

function renderForumThreads() {
  const discs = getDiscussions();
  const container = document.getElementById("forum-threads");
  container.innerHTML = "";

  if (discs.length === 0) {
    container.innerHTML = `<p class="text-muted" style="text-align:center; padding: 20px;">Belum ada topik diskusi di forum.</p>`;
    return;
  }

  discs.forEach(d => {
    const card = document.createElement("div");
    card.className = "forum-thread-card";

    // Header Meta
    const header = document.createElement("div");
    header.className = "forum-thread-header";
    header.innerHTML = `
      <div class="thread-avatar">${d.authorName.charAt(0)}</div>
      <div class="thread-meta">
        <strong>${d.authorName}</strong> <span class="badge-tag ${d.role === 'dosen' ? 'info' : 'success'}">${d.role.toUpperCase()}</span>
        <span>${d.date}</span>
      </div>
      <span class="thread-category">${d.mk}</span>
    `;

    // Content: KERENTANAN 2 (STORED XSS)
    // Dirender langsung menggunakan innerHTML tanpa escaping HTML tags!
    const contentDiv = document.createElement("div");
    contentDiv.className = "thread-content";
    contentDiv.innerHTML = d.content; // <-- VULNERABILITY SINK: innerHTML

    card.appendChild(header);
    card.appendChild(contentDiv);
    container.appendChild(card);
  });
}

// ============================================================================
// FITUR DOSEN: MEMBERI & MEMPERBARUI NILAI
// ============================================================================

let editingGradeId = null;

function renderDosenGrade() {
  const grades = getGrades();
  const tbody = document.getElementById("table-dosen-grade-body");
  tbody.innerHTML = "";

  grades.forEach(g => {
    const calc = calculateFinalGrade(g.tugas, g.uts, g.uas);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><code>${g.nim}</code></td>
      <td><strong>${g.nama}</strong></td>
      <td>${g.kelas}</td>
      <td>${g.tugas}</td>
      <td>${g.uts}</td>
      <td>${g.uas}</td>
      <td><strong>${calc.num}</strong></td>
      <td><span class="grade-badge grade-${calc.letter.charAt(0)}">${calc.letter}</span></td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="openGradeModal('${g.id}')">Ubah Nilai</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Render Submissions table for Dosen review
  const subs = getSubmissions();
  const subTbody = document.getElementById("table-dosen-submissions");
  subTbody.innerHTML = "";

  if (subs.length === 0) {
    subTbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94a3b8;">Belum ada berkas tugas yang diunggah oleh mahasiswa.</td></tr>`;
    return;
  }

  subs.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.date}</td>
      <td><strong>${s.mhsName}</strong> (<code>${s.nim}</code>)</td>
      <td>${s.mk}</td>
      <td>${s.judul}</td>
      <td>
        <code>${s.fileName}</code> (${s.fileSize})
        ${s.isVulnerableFile ? '<br><span class="badge-tag danger">⚠️ Potensi Eksekusi Berbahaya</span>' : ''}
      </td>
      <td><span class="badge-tag info">${s.status}</span></td>
    `;
    subTbody.appendChild(tr);
  });
}

function openGradeModal(gradeId) {
  editingGradeId = gradeId;
  const grade = getGrades().find(g => g.id === gradeId);
  if (!grade) return;

  document.getElementById("grade-mhs-info").textContent = `Mahasiswa: ${grade.nama} (${grade.nim}) - ${grade.mk}`;
  document.getElementById("edit-nilai-tugas").value = grade.tugas;
  document.getElementById("edit-nilai-uts").value = grade.uts;
  document.getElementById("edit-nilai-uas").value = grade.uas;
  document.getElementById("modal-edit-grade").style.display = "flex";
}

function closeGradeModal() {
  document.getElementById("modal-edit-grade").style.display = "none";
  editingGradeId = null;
}

function saveGradeChanges() {
  const tugasVal = parseFloat(document.getElementById("edit-nilai-tugas").value) || 0;
  const utsVal = parseFloat(document.getElementById("edit-nilai-uts").value) || 0;
  const uasVal = parseFloat(document.getElementById("edit-nilai-uas").value) || 0;

  const grades = getGrades();
  const idx = grades.findIndex(g => g.id === editingGradeId);
  if (idx !== -1) {
    grades[idx].tugas = Math.min(100, Math.max(0, tugasVal));
    grades[idx].uts = Math.min(100, Math.max(0, utsVal));
    grades[idx].uas = Math.min(100, Math.max(0, uasVal));
    saveGrades(grades);
    showToast(`Nilai berhasil diperbarui untuk ${grades[idx].nama}!`, "success");
    closeGradeModal();
    renderDosenGrade();
  }
}

// ============================================================================
// FITUR ADMIN: MANAJEMEN AKUN PENGGUNA
// ============================================================================

function renderAdminUsers() {
  const users = getUsers();
  const tbody = document.getElementById("table-admin-users");
  tbody.innerHTML = "";

  users.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><code>${u.id}</code></td>
      <td><strong>${u.name}</strong></td>
      <td><span class="badge-tag ${u.role === 'admin' ? 'danger' : u.role === 'dosen' ? 'info' : 'success'}">${u.role.toUpperCase()}</span></td>
      <td>${u.dept}</td>
      <td><span class="badge-tag success">${u.status}</span></td>
      <td>
        ${u.id !== currentUser.id ? `<button class="btn btn-sm btn-danger-outline" onclick="deleteUser('${u.id}')">Hapus</button>` : '<span class="text-muted" style="font-size:12px;">Akun Anda</span>'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAddUserModal() {
  document.getElementById("modal-add-user").style.display = "flex";
}

function closeAddUserModal() {
  document.getElementById("modal-add-user").style.display = "none";
}

function handleAddUserSubmit(event) {
  event.preventDefault();
  const id = document.getElementById("new-user-id").value.trim();
  const name = document.getElementById("new-user-name").value.trim();
  const role = document.getElementById("new-user-role").value;
  const dept = document.getElementById("new-user-dept").value.trim();
  const pass = document.getElementById("new-user-pass").value.trim();

  const users = getUsers();
  if (users.some(u => u.id === id)) {
    showToast("Nomor identitas (ID/NIM/NIDN) sudah digunakan!", "danger");
    return;
  }

  const newUser = { id, name, role, dept, pass, status: "Aktif" };
  users.push(newUser);
  saveUsers(users);

  showToast(`Akun baru ${name} (${role.toUpperCase()}) berhasil dibuat!`, "success");
  closeAddUserModal();
  renderAdminUsers();
}

function deleteUser(id) {
  if (confirm(`Yakin ingin menghapus akun ID: ${id}?`)) {
    let users = getUsers();
    users = users.filter(u => u.id !== id);
    saveUsers(users);
    showToast("Akun telah berhasil dihapus dari sistem.", "info");
    renderAdminUsers();
  }
}

// ============================================================================
// MODAL PANDUAN AUDIT KEAMANAN (VULNERABILITY DETAILS)
// ============================================================================

function openVulnModal() {
  document.getElementById("modal-vuln").style.display = "flex";
}

function closeVulnModal() {
  document.getElementById("modal-vuln").style.display = "none";
}

// ============================================================================
// TOAST NOTIFICATIONS HELPER
// ============================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toast");
  const toast = document.createElement("div");
  toast.className = `toast-message ${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Inisialisasi awal UI saat DOM dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderUI();
});
