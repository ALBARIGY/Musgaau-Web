// --- MUSGAAU ALUMNI WEB PORTAL LOGIC ---

// --- DEFAULT AVATAR SVG GENERATOR ---
function getAvatarUrl(seed, name = 'A') {
  const initials = name.trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const colors = [
    ['#064e3b', '#34d399'], // emerald-mint
    ['#78350f', '#fbbf24'], // gold-amber
    ['#0f172a', '#38bdf8'], // slate-sky
    ['#581c87', '#a855f7'], // purple-violet
    ['#034f43', '#059669'], // dark teal-emerald
    ['#1e3a8a', '#3b82f6'], // navy-blue
    ['#7c2d12', '#f97316'], // rust-orange
    ['#831843', '#ec4899']  // deep pink-rose
  ];
  const color = colors[seed % colors.length];
  
  // Custom premium SVG pattern background
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="grad_${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color[0]}" />
        <stop offset="100%" stop-color="${color[1]}" />
      </linearGradient>
      <pattern id="pattern_${seed}" width="20" height="20" patternUnits="userSpaceOnUse" opacity="0.15">
        <circle cx="10" cy="10" r="2" fill="#ffffff" />
      </pattern>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#grad_${seed})" />
    <rect width="100%" height="100%" fill="url(#pattern_${seed})" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
    <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="36" fill="#ffffff">${initials}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// --- MOCK DATABASE STRUCTURE & SEED DATA ---
const SEED_MEMBERS = [
  {
    name: 'Super Administrator',
    email: 'superadmin@musgaau.org',
    phone: '08011111111',
    password: 'password123',
    department: 'Islamic Studies',
    year: '2010',
    employment: 'Employed',
    marital: 'Married',
    location: 'Akungba, Nigeria',
    bio: 'Super Admin account for global configurations and Union role controls.',
    avatarSeed: 5,
    featured: false,
    role: 'Super Admin',
    status: 'active'
  },
  {
    name: 'Mariam Adebayo',
    email: 'mariam.adebayo@outlook.com',
    phone: '08031112222',
    password: 'password123',
    department: 'Computer Science',
    year: '2018',
    employment: 'Employed',
    marital: 'Married',
    location: 'Lagos, Nigeria',
    bio: 'Software Engineer at Microsoft. Passionate about mentoring junior tech talents and supporting sisters in technology.',
    avatarSeed: 0,
    featured: true,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Dr. Kabir Bello',
    email: 'kabir.bello@aaua.edu.ng',
    phone: '08035556666',
    password: 'password123',
    department: 'Islamic Studies',
    year: '2012',
    employment: 'Employed',
    marital: 'Married',
    location: 'Akungba-Akoko, Nigeria',
    bio: 'Senior Lecturer at AAUA. Researching contemporary Islamic philosophy. Always happy to guide graduates into academic careers.',
    avatarSeed: 4,
    featured: true,
    role: 'Admin',
    status: 'active'
  },
  {
    name: 'Zainab Alao Esq.',
    email: 'zainab.alao@lawfirm.com',
    phone: '08038889999',
    password: 'password123',
    department: 'Law',
    year: '2020',
    employment: 'Self-Employed',
    marital: 'Single',
    location: 'Abuja, Nigeria',
    bio: 'Corporate Legal Consultant. I help startups with incorporation, intellectual property, and agreements. Let\'s collaborate!',
    avatarSeed: 1,
    featured: false,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Abdulrahman Yusuf',
    email: 'abdulrahman.y@biotech.org',
    phone: '08034445555',
    password: 'password123',
    department: 'Biochemistry',
    year: '2015',
    employment: 'Employed',
    marital: 'Married',
    location: 'Ibadan, Nigeria',
    bio: 'Research scientist at a regional diagnostics laboratory. Dedicated to biotech innovations and halal healthcare solutions.',
    avatarSeed: 2,
    featured: false,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Fatima Dahunsi',
    email: 'fatima.dahunsi@gmail.com',
    phone: '08037778888',
    password: 'password123',
    department: 'Economics',
    year: '2022',
    employment: 'Unemployed',
    marital: 'Single',
    location: 'Lekki, Lagos',
    bio: 'First Class Honors graduate looking for investment banking analyst or financial modeling roles. CV is ready!',
    avatarSeed: 7,
    featured: false,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Ibrahim Oyebanji',
    email: 'ibrahim.dev@contractor.co',
    phone: '08032223333',
    password: 'password123',
    department: 'Computer Science',
    year: '2021',
    employment: 'Self-Employed',
    marital: 'Single',
    location: 'Akure, Nigeria',
    bio: 'Full Stack Contractor specialized in React, Node, and AWS. Creating open source projects for the Muslim community.',
    avatarSeed: 5,
    featured: true,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Khadijah Olatunji',
    email: 'khadijah.olat@yahoo.com',
    phone: '08036667777',
    password: 'password123',
    department: 'Microbiology',
    year: '2019',
    employment: 'Student',
    marital: 'Married',
    location: 'Ilorin, Nigeria',
    bio: 'Completing postgrad studies in environmental microbiology. Focused on water purification standards in rural areas.',
    avatarSeed: 3,
    featured: false,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Mustapha Salihu',
    email: 'mustapha.policy@gov.ng',
    phone: '08033334444',
    password: 'password123',
    department: 'Political Science',
    year: '2014',
    employment: 'Employed',
    marital: 'Married',
    location: 'Garki, Abuja',
    bio: 'Policy analyst advising municipal agencies. Specializing in youth vocational training funding and local community organization.',
    avatarSeed: 6,
    featured: false,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Aminah Yusuf',
    email: 'aminah.audit@pwc.com',
    phone: '08039990000',
    password: 'password123',
    department: 'Accounting',
    year: '2017',
    employment: 'Employed',
    marital: 'Married',
    location: 'Ikeja, Lagos',
    bio: 'Chartered Accountant with 5+ years of corporate tax audit experience. Ready to review CVs for aspiring accountants.',
    avatarSeed: 0,
    featured: false,
    role: 'Member',
    status: 'active'
  },
  {
    name: 'Hamzah Kolawole',
    email: 'hamzah.herbs@wellspace.com',
    phone: '08030001111',
    password: 'password123',
    department: 'Biochemistry',
    year: '2016',
    employment: 'Self-Employed',
    marital: 'Single',
    location: 'Kano, Nigeria',
    bio: 'Founder of Wellspace Organics. Sourcing natural supplements. Advocating for physical health and wellness in our communities.',
    avatarSeed: 1,
    featured: false,
    role: 'Member',
    status: 'active'
  }
];

const SEED_MAJLIS_POSTS = [
  {
    id: 'post_1',
    authorName: 'Dr. Kabir Bello',
    authorEmail: 'kabir.bello@aaua.edu.ng',
    category: 'Islamic Insights',
    date: '2026-05-28T09:30:00Z',
    content: 'Alhamdulillah, our weekly dawah session at Akungba chapter yielded great turnout. Let us remain steadfast in support of current campus students facing economic hikes.'
  },
  {
    id: 'post_2',
    authorName: 'Mariam Adebayo',
    authorEmail: 'mariam.adebayo@outlook.com',
    category: 'Career & Jobs',
    date: '2026-05-29T14:15:00Z',
    content: 'My team at Microsoft Nigeria is looking for a Remote QA Engineering Intern. Suitable for fresh Computer Science grads (2024-2025). Send a private Salaam here with your profile link!'
  },
  {
    id: 'post_3',
    authorName: 'Zainab Alao Esq.',
    authorEmail: 'zainab.alao@lawfirm.com',
    category: 'General',
    date: '2026-05-30T17:40:00Z',
    content: 'Registration for the MUSGAAU Annual National Conference in Abuja has opened. Early bird tickets include lunch and resource materials. Looking forward to meeting you all.'
  },
  {
    id: 'post_4',
    authorName: 'Ibrahim Oyebanji',
    authorEmail: 'ibrahim.dev@contractor.co',
    category: 'Career & Jobs',
    date: '2026-05-31T11:10:00Z',
    content: 'Freelance gig available: Need a junior designer to format HTML email newsletters for a local client. Budget is N75k. Hit me up via direct message.'
  }
];

const SEED_MESSAGES = [
  {
    senderEmail: 'mariam.adebayo@outlook.com',
    recipientEmail: 'register_test@musgaau.org',
    content: 'Assalamu Alaykum! Welcome to the MUSGAAU Alumni network. We are glad to have you join us.',
    timestamp: '2026-05-31T12:00:00Z',
    unread: true
  },
  {
    senderEmail: 'kabir.bello@aaua.edu.ng',
    recipientEmail: 'register_test@musgaau.org',
    content: 'Greetings, dear alumnus. Feel free to search the directory and ask any dues or career-related questions.',
    timestamp: '2026-05-31T13:20:00Z',
    unread: true
  }
];

const SEED_ANNOUNCEMENTS = [
  {
    id: 'ann_1',
    title: 'Annual Union Levy 2026 Launched',
    content: 'The Executive Committee has approved the Annual Union Dues of ₦10,000. All active graduates are requested to complete payment to support upcoming reunion projects.',
    date: '2026-05-30T10:00:00Z',
    category: 'Dues Deadline'
  },
  {
    id: 'ann_2',
    title: 'National Reunion Conference 2026 - Venue & Schedule',
    content: 'We are pleased to announce the National Reunion Conference will hold at Abuja International Center on August 15, 2026. Register via the conference form.',
    date: '2026-05-31T08:00:00Z',
    category: 'Union Notice'
  }
];

// --- APP STATE INITIALIZATION ---
let DB = {
  members: [],
  posts: [],
  messages: [],
  currentUser: null,
  duesConfig: { name: 'Annual Alumni Levy 2026', amount: 10000, period: 'Annually' },
  memberDues: {},
  announcements: [],
  settings: {
    unionName: 'MUSGAAU',
    contactEmail: 'info@musgaau.org',
    guestDirectoryEnabled: true,
    publicPostsEnabled: true
  }
};

// Auto-run seeding
function initDatabase() {
  const localData = localStorage.getItem('musgaau_db');
  if (localData) {
    DB = JSON.parse(localData);
    
    // Legacy upgrade check
    if (!DB.duesConfig) {
      DB.duesConfig = { name: 'Annual Alumni Levy 2026', amount: 10000, period: 'Annually' };
    }
    if (!DB.duesConfig.period) {
      DB.duesConfig.period = 'Annually';
    }
    if (!DB.settings) {
      DB.settings = {
        unionName: 'MUSGAAU',
        contactEmail: 'info@musgaau.org',
        guestDirectoryEnabled: true,
        publicPostsEnabled: true
      };
    }
    if (!DB.memberDues) {
      DB.memberDues = {};
      DB.members.forEach((m, index) => {
        DB.memberDues[m.email.toLowerCase()] = index % 2 === 0 ? 'Paid' : 'Unpaid';
      });
    }
    if (!DB.announcements) {
      DB.announcements = [...SEED_ANNOUNCEMENTS];
    }
    
    // Ensure all seeded members are present (e.g. Super Administrator) and have phone numbers
    SEED_MEMBERS.forEach(seedUser => {
      const exists = DB.members.find(m => m.email.toLowerCase() === seedUser.email.toLowerCase());
      if (!exists) {
        DB.members.push(seedUser);
      } else {
        if (!exists.phone) exists.phone = seedUser.phone;
        if (!exists.role) exists.role = seedUser.role;
      }
    });

    DB.members.forEach(m => {
      if (!m.role) {
        m.role = m.email.toLowerCase().includes('bello') ? 'Admin' : 'Member';
      }
      if (!m.status) {
        m.status = 'active';
      }
      if (!m.phone) {
        m.phone = '08030000000';
      }
    });
  } else {
    // Seed initial setup
    DB.members = [...SEED_MEMBERS];
    DB.posts = [...SEED_MAJLIS_POSTS];
    DB.messages = [...SEED_MESSAGES];
    DB.announcements = [...SEED_ANNOUNCEMENTS];
    DB.duesConfig = { name: 'Annual Alumni Levy 2026', amount: 10000, period: 'Annually' };
    DB.memberDues = {};
    DB.members.forEach((m, index) => {
      DB.memberDues[m.email.toLowerCase()] = index % 2 === 0 ? 'Paid' : 'Unpaid';
    });
    DB.settings = {
      unionName: 'MUSGAAU',
      contactEmail: 'info@musgaau.org',
      guestDirectoryEnabled: true,
      publicPostsEnabled: true
    };
    DB.currentUser = null;
    saveToStorage();
  }
}

function saveToStorage() {
  localStorage.setItem('musgaau_db', JSON.stringify(DB));
}

// --- PROGRAMMATIC DROPDOWNS POPULATION ---
function populateYearDropdowns() {
  const regYear = document.getElementById('reg-year');
  const editYear = document.getElementById('edit-year');
  const filterYear = document.getElementById('filter-year');
  
  if (!regYear) return;
  
  const currentYear = new Date().getFullYear();
  let yearHtml = '<option value="" disabled selected>Select Year</option>';
  let filterHtml = '<option value="all">All Years</option>';
  
  for (let y = currentYear; y >= 1999; y--) {
    yearHtml += `<option value="${y}">${y}</option>`;
    filterHtml += `<option value="${y}">${y}</option>`;
  }
  
  regYear.innerHTML = yearHtml;
  editYear.innerHTML = yearHtml.replace('disabled selected', '');
  filterYear.innerHTML = filterHtml;
}

// --- GLOBAL NOTIFICATION APP ALERT ---
function triggerAlert(message, isError = false) {
  const alertEl = document.getElementById('app-alert');
  const alertText = document.getElementById('app-alert-text');
  
  if (!alertEl) return;
  
  alertText.textContent = message;
  
  if (isError) {
    alertEl.classList.add('error-alert');
  } else {
    alertEl.classList.remove('error-alert');
  }
  
  alertEl.classList.add('show');
  
  setTimeout(() => {
    alertEl.classList.remove('show');
  }, 4000);
}

// --- THEME TOGGLE (DARK / LIGHT) ---
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const isLight = document.body.classList.contains('light-mode');
  
  // Custom switch icons (Sun or Moon)
  if (isLight) {
    themeBtn.innerHTML = `
      <!-- Moon Icon -->
      <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill:none; stroke:currentColor;">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    triggerAlert('Switched to light mode theme');
  } else {
    themeBtn.innerHTML = `
      <!-- Sun Icon -->
      <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill:none; stroke:currentColor;">
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    triggerAlert('Switched to dark mode theme');
  }
}

// --- SINGLE PAGE ROUTER ---
let currentActiveView = 'landing';

function navigateTo(viewId, subAction = null) {
  // Authentication Guard for Protected Views
  const protectedViews = ['dashboard', 'majlis', 'chat', 'profile', 'dues'];
  // New section protected views
  const newProtectedViews = ['events', 'jobs', 'gallery', 'mentorship', 'settings', 'search'];

  // Custom directory configuration checks
  if (viewId === 'directory') {
    const isGuestDirectoryEnabled = DB.settings ? DB.settings.guestDirectoryEnabled : true;
    if (!DB.currentUser && !isGuestDirectoryEnabled) {
      triggerAlert('Access restricted. Directory is only viewable to registered alumni.', true);
      navigateTo('auth');
      return;
    }
  } else if (newProtectedViews.includes(viewId) && !DB.currentUser) {
    triggerAlert('Please sign in to access this section.', true);
    navigateTo('auth');
    return;
  } else if (protectedViews.includes(viewId) && !DB.currentUser) {
    triggerAlert('Access denied. Please sign in or register to view this page.', true);
    navigateTo('auth');
    return;
  }

  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (activeUser && activeUser.status === 'pending') {
    if (viewId !== 'pending-notice' && viewId !== 'profile' && viewId !== 'landing') {
      triggerAlert('Your profile is pending admin approval. Access restricted.', true);
      navigateTo('pending-notice');
      return;
    }
  }

  // Hide all view panels
  const views = document.querySelectorAll('.app-view');
  views.forEach(v => v.classList.remove('active-view'));

  // Show target view panel
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active-view');
    currentActiveView = viewId;
  }

  // Sync Desktop Sidebar Active State
  const navItems = document.querySelectorAll('.sidebar .nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  const activeNav = document.getElementById(`nav-${viewId}`);
  if (activeNav) activeNav.classList.add('active');

  // Sync Mobile Bottom Nav Active State
  const mobItems = document.querySelectorAll('.mobile-nav-item');
  mobItems.forEach(item => item.classList.remove('active'));
  const activeMob = document.getElementById(`mob-nav-${viewId}`);
  if (activeMob) activeMob.classList.add('active');

  // Sub-Actions inside views
  if (viewId === 'auth') {
    if (subAction === 'register') {
      toggleAuthTab('register');
    } else {
      toggleAuthTab('login');
    }
  }

  // Show/hide public footer
  const footer = document.getElementById('site-footer');
  const publicViews = ['landing', 'about', 'contact'];
  if (footer) footer.style.display = publicViews.includes(viewId) ? 'block' : 'none';

  // Close notification panel if open
  if (typeof closeNotificationsPanel === 'function') closeNotificationsPanel();

  // Load view-specific content triggers
  if (viewId === 'landing') {
    renderPublicAnnouncements();
  } else if (viewId === 'dashboard') {
    renderDashboard();
  } else if (viewId === 'directory') {
    renderDirectory();
  } else if (viewId === 'profile') {
    renderProfileEdit();
  } else if (viewId === 'majlis') {
    renderMajlisForum();
  } else if (viewId === 'chat') {
    renderChatThreads();
  } else if (viewId === 'dues') {
    renderDuesPage();
  } else if (viewId === 'admin') {
    renderAdminPanel();
    if (typeof renderAnalytics === 'function') renderAnalytics();
  } else if (viewId === 'events') {
    if (typeof renderEventsPage === 'function') renderEventsPage();
  } else if (viewId === 'jobs') {
    if (typeof renderJobsPage === 'function') renderJobsPage();
  } else if (viewId === 'gallery') {
    if (typeof renderGalleryPage === 'function') renderGalleryPage();
  } else if (viewId === 'mentorship') {
    if (typeof renderMentorshipPage === 'function') renderMentorshipPage();
  } else if (viewId === 'settings') {
    if (typeof renderSettingsPage === 'function') renderSettingsPage();
  }

  // Scroll content to top
  const mainContent = document.querySelector('.main-content');
  if (mainContent) mainContent.scrollTop = 0;
}

// --- VIEW CONTROLLERS ---

// 1. AUTHENTICATION (LOGIN / REGISTER) SLIDER & SUBMIT
let currentAuthTab = 'login';

function toggleAuthTab(tab) {
  const loginFormView = document.getElementById('login-form-view');
  const registerFormView = document.getElementById('register-form-view');
  const loginBtn = document.getElementById('tab-login-btn');
  const registerBtn = document.getElementById('tab-register-btn');
  const switchLink = document.getElementById('auth-switch-text');
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  
  if (!loginFormView || !registerFormView) return;
  
  if (tab === 'switch') {
    tab = currentAuthTab === 'login' ? 'register' : 'login';
  }
  
  currentAuthTab = tab;
  
  if (tab === 'login') {
    loginFormView.style.display = 'block';
    registerFormView.style.display = 'none';
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    switchLink.innerHTML = "Don't have an account? <span>Sign Up</span>";
    title.textContent = "Alumni Portal";
    subtitle.textContent = "Sign in to access your dashboard";
  } else {
    loginFormView.style.display = 'none';
    registerFormView.style.display = 'block';
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
    switchLink.innerHTML = "Already registered? <span>Sign In</span>";
    title.textContent = "Create Profile";
    subtitle.textContent = "Join the AAUA Muslim graduates network";
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value;
  
  const member = DB.members.find(m => 
    m.email.toLowerCase() === username.toLowerCase() ||
    (m.phone && m.phone.trim() === username)
  );
  
  if (!member) {
    triggerAlert('Account credentials not found. Enter your email or phone number.', true);
    return;
  }
  
  if (member.password !== pass) {
    triggerAlert('Incorrect password. Please try again.', true);
    return;
  }
  
  // Logged-in session start
  DB.currentUser = member.email;
  saveToStorage();
  
  // Clean Form
  document.getElementById('login-form').reset();
  
  // Update UI Panels
  syncAuthUIState();
  triggerAlert(`Welcome back, ${member.name}! Assalamu Alaykum.`);
  const redirectView = event.targetView || 'dashboard';
  navigateTo(redirectView);
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const pass = document.getElementById('reg-password').value;
  const dept = document.getElementById('reg-dept').value;
  const year = document.getElementById('reg-year').value;
  const employment = document.getElementById('reg-employment').value;
  const marital = document.getElementById('reg-marital').value;
  const location = document.getElementById('reg-location').value.trim();
  const bio = document.getElementById('reg-bio').value.trim();
  
  // Verification Checks
  if (pass.length < 6) {
    triggerAlert('Password must be at least 6 characters long.', true);
    return;
  }
  
  const emailExists = DB.members.some(m => m.email.toLowerCase() === email.toLowerCase());
  if (emailExists) {
    triggerAlert('Email already registered. Try signing in.', true);
    return;
  }

  const phoneExists = DB.members.some(m => m.phone && m.phone.trim() === phone);
  if (phoneExists) {
    triggerAlert('Phone number already registered. Try signing in.', true);
    return;
  }
  
  // Register new alumni
  const randomSeed = Math.floor(Math.random() * 8);
  const isEmailAdmin = email.toLowerCase().includes('admin') || email.toLowerCase().includes('bello');
  const role = isEmailAdmin ? 'Admin' : 'Member';
  const status = isEmailAdmin ? 'active' : 'pending';

  const newAlumni = {
    name,
    email,
    phone,
    password: pass,
    department: dept,
    year,
    employment,
    marital,
    location,
    bio,
    avatarSeed: randomSeed,
    featured: false,
    role,
    status
  };
  
  DB.members.push(newAlumni);
  DB.memberDues[email.toLowerCase()] = 'Unpaid';
  DB.currentUser = email;
  saveToStorage();
  
  // Clear Form
  document.getElementById('register-form').reset();
  
  syncAuthUIState();
  if (status === 'pending') {
    triggerAlert('Registration submitted. Profile is pending admin approval.');
    navigateTo('pending-notice');
  } else {
    triggerAlert('Admin profile registered successfully!');
    navigateTo('dashboard');
  }
}

// --- FORGOT PASSWORD MOCK WORKFLOW ---
let generatedOTPCode = '';
let targetResetEmail = '';

function openForgotPasswordModal() {
  document.getElementById('forgot-password-form-step1').reset();
  document.getElementById('forgot-password-form-step2').reset();
  document.getElementById('forgot-password-step-1').style.display = 'block';
  document.getElementById('forgot-password-step-2').style.display = 'none';
  document.getElementById('alumni-forgot-password-modal').classList.add('open');
}

function closeForgotPasswordModal(event) {
  if (!event || event.target.id === 'alumni-forgot-password-modal' || event.target.classList.contains('modal-close-btn')) {
    document.getElementById('alumni-forgot-password-modal').classList.remove('open');
  }
}

function handleForgotPasswordRequest(event) {
  event.preventDefault();
  const username = document.getElementById('forgot-username').value.trim();
  
  const member = DB.members.find(m => 
    m.email.toLowerCase() === username.toLowerCase() ||
    (m.phone && m.phone.trim() === username)
  );
  
  if (!member) {
    triggerAlert('Account credentials not found.', true);
    return;
  }
  
  // Generate random 4-digit code
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  generatedOTPCode = code;
  targetResetEmail = member.email;
  
  // Simulated OTP delivery
  triggerAlert(`Recovery OTP generated: ${code}. Enter it to reset password.`);
  
  // Swap steps
  document.getElementById('forgot-password-step-1').style.display = 'none';
  document.getElementById('forgot-password-step-2').style.display = 'block';
}

function handleForgotPasswordReset(event) {
  event.preventDefault();
  const enteredOtp = document.getElementById('forgot-otp').value.trim();
  const newPass = document.getElementById('forgot-new-password').value;
  
  if (enteredOtp !== generatedOTPCode) {
    triggerAlert('Incorrect OTP verification code.', true);
    return;
  }
  
  if (newPass.length < 6) {
    triggerAlert('New password must be at least 6 characters long.', true);
    return;
  }
  
  const memberIndex = DB.members.findIndex(m => m.email.toLowerCase() === targetResetEmail.toLowerCase());
  if (memberIndex !== -1) {
    DB.members[memberIndex].password = newPass;
    saveToStorage();
    triggerAlert('Password recovered successfully! Try logging in now.');
    closeForgotPasswordModal(null);
  } else {
    triggerAlert('Error updating account credentials.', true);
  }
}

// --- QUICK DEMO LOGIN FUNCTION ---
function quickLogin(role, targetView = 'dashboard') {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) return;
  
  toggleAuthTab('login');
  
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  
  if (role === 'superadmin') {
    emailInput.value = 'superadmin@musgaau.org';
    passInput.value = 'password123';
  } else if (role === 'admin') {
    emailInput.value = 'kabir.bello@aaua.edu.ng';
    passInput.value = 'password123';
  } else if (role === 'member') {
    emailInput.value = 'mariam.adebayo@outlook.com';
    passInput.value = 'password123';
  }
  
  // Submit the form programmatically
  setTimeout(() => {
    // Manually trigger the submit handler
    const event = new Event('submit');
    event.targetView = targetView;
    handleLoginSubmit(event);
  }, 100);
}

// --- PUBLIC CONTACT SUBMIT ---
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  
  triggerAlert(`Thank you ${name}. Your message has been sent to the MUSGAAU executive committee.`);
  document.getElementById('contact-form').reset();
}

function handleLogout() {
  DB.currentUser = null;
  saveToStorage();
  syncAuthUIState();
  triggerAlert('Successfully logged out of your session.');
  navigateTo('landing');
}

function syncAuthUIState() {
  const sidebarCard = document.getElementById('sidebar-profile-card');
  const logoutBtn = document.getElementById('logout-btn');
  const navAuthBtn = document.getElementById('nav-auth-btn');
  const navAuthText = document.getElementById('nav-auth-text');
  
  const mobAuth = document.getElementById('mob-nav-auth');
  const mobAuthText = document.getElementById('mob-nav-auth-text');
  
  // Navigation Links items
  const navDashboard = document.getElementById('nav-dashboard');
  const navDirectory = document.getElementById('nav-directory');
  const navMajlis = document.getElementById('nav-majlis');
  const navChat = document.getElementById('nav-chat');
  
  const navDues = document.getElementById('nav-dues');
  const navAdmin = document.getElementById('nav-admin');
  
  const mobDashboard = document.getElementById('mob-nav-dashboard');
  const mobDirectory = document.getElementById('mob-nav-directory');
  const mobMajlis = document.getElementById('mob-nav-majlis');
  const mobChat = document.getElementById('mob-nav-chat');
  
  const mobDues = document.getElementById('mob-nav-dues');
  const mobAdmin = document.getElementById('mob-nav-admin');
  
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  
  if (activeUser) {
    // Logged in UI Setup
    sidebarCard.style.display = 'flex';
    document.getElementById('sidebar-user-avatar').src = getAvatarUrl(activeUser.avatarSeed, activeUser.name);
    document.getElementById('sidebar-user-name').textContent = activeUser.name;
    document.getElementById('sidebar-user-dept').textContent = `${activeUser.department} (${activeUser.year})`;
    
    logoutBtn.style.display = 'flex';
    
    // Switch auth nav buttons to edit profile links
    navAuthText.textContent = 'Edit Profile';
    navAuthBtn.querySelector('a').setAttribute('onclick', "navigateTo('profile')");
    navAuthBtn.classList.remove('gold-link');
    
    mobAuthText.textContent = 'Profile';
    mobAuth.setAttribute('onclick', "navigateTo('profile')");
    mobAuth.id = 'mob-nav-profile';
    
    if (activeUser.status === 'pending') {
      // Pending approvals locked state
      navDashboard.style.display = 'none';
      navDirectory.style.display = 'none';
      navMajlis.style.display = 'none';
      navChat.style.display = 'none';
      navDues.style.display = 'none';
      navAdmin.style.display = 'none';
      
      mobDashboard.style.display = 'none';
      mobDirectory.style.display = 'none';
      mobMajlis.style.display = 'none';
      mobChat.style.display = 'none';
      mobDues.style.display = 'none';
      mobAdmin.style.display = 'none';
    } else {
      // Active states
      navDashboard.style.display = 'block';
      navDirectory.style.display = 'block';
      navMajlis.style.display = 'block';
      navChat.style.display = 'block';
      
      mobDashboard.style.display = 'flex';
      mobDirectory.style.display = 'flex';
      mobMajlis.style.display = 'flex';
      mobChat.style.display = 'flex';
      
      navAdmin.style.display = 'block';
      mobAdmin.style.display = 'flex';
      if (activeUser.role === 'Admin' || activeUser.role === 'Super Admin') {
        navDues.style.display = 'none';
        mobDues.style.display = 'none';
      } else {
        navDues.style.display = 'block';
        mobDues.style.display = 'flex';
      }
    }
  } else {
    // Logged out UI Setup (Guest)
    sidebarCard.style.display = 'none';
    logoutBtn.style.display = 'none';
    
    navAuthText.textContent = 'Sign In / Join';
    navAuthBtn.querySelector('a').setAttribute('onclick', "navigateTo('auth')");
    navAuthBtn.classList.add('gold-link');
    
    mobAuthText.textContent = 'Sign In';
    mobAuth.setAttribute('onclick', "navigateTo('auth')");
    if (document.getElementById('mob-nav-profile')) {
      document.getElementById('mob-nav-profile').id = 'mob-nav-auth';
    }
    
    // Hide sections
    navDashboard.style.display = 'none';
    
    // Check if guest directory is permitted by configurations
    const guestDir = DB.settings ? DB.settings.guestDirectoryEnabled : true;
    navDirectory.style.display = guestDir ? 'block' : 'none';
    mobDirectory.style.display = guestDir ? 'flex' : 'none';
    
    navMajlis.style.display = 'none';
    navChat.style.display = 'none';
    navDues.style.display = 'none';
    navAdmin.style.display = 'block';
    
    mobDashboard.style.display = 'none';
    mobMajlis.style.display = 'none';
    mobChat.style.display = 'none';
    mobDues.style.display = 'none';
    mobAdmin.style.display = 'flex';
  }
  
  // Refresh stats in Hero view
  document.getElementById('stat-members-count').textContent = `${DB.members.length}+`;
  document.getElementById('stat-jobs-count').textContent = DB.posts.filter(p => p.category === 'Career & Jobs').length + 5;
}

// --- RENDER PUBLIC ANNOUNCEMENTS ON LANDING PAGE ---
function renderPublicAnnouncements() {
  const publicSection = document.getElementById('public-announcements-section');
  const publicContainer = document.getElementById('public-announcements-container');
  
  if (!publicSection || !publicContainer) return;
  
  const enabled = DB.settings ? DB.settings.publicPostsEnabled : true;
  if (!enabled || !DB.announcements) {
    publicSection.style.display = 'none';
    return;
  }
  
  const publicAnn = DB.announcements.filter(ann => ann.public);
  
  if (publicAnn.length === 0) {
    publicSection.style.display = 'none';
    return;
  }
  
  publicSection.style.display = 'block';
  
  publicContainer.innerHTML = publicAnn.map(ann => {
    const formattedDate = new Date(ann.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    let mediaHtml = '';
    if (ann.image) {
      mediaHtml += `<img src="${ann.image}" class="feed-item-image" alt="Announcement Image">`;
    }
    if (ann.attachment) {
      mediaHtml += `
        <div>
          <a href="${ann.attachment}" target="_blank" class="feed-item-attachment">
            <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
            <span>Download Attached Resource</span>
          </a>
        </div>
      `;
    }
    
    return `
      <div class="feed-item" style="border-left: 4px solid var(--emerald-primary);">
        <div class="feed-item-header">
          <div class="feed-item-meta" style="margin-left: 0;">
            <div class="author" style="color: var(--emerald-mint); font-weight: 700; font-size: 0.95rem;">${ann.title}</div>
            <div class="date">${formattedDate}</div>
          </div>
        </div>
        <div class="feed-item-body" style="font-size: 0.9rem; line-height: 1.6; margin-top: 0.5rem; color: var(--text-light);">${ann.content}</div>
        ${mediaHtml}
        <span class="feed-item-tag" style="background: rgba(226, 177, 60, 0.1); border-color: rgba(226, 177, 60, 0.25); color: var(--gold-primary);">${ann.category}</span>
      </div>
    `;
  }).join('');
}

// 2. DASHBOARD CONTROLLER
function renderDashboard() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;
  
  // 1. Sync Official Announcements Ticker Widget
  const tickerEl = document.getElementById('dash-announcements-ticker');
  const tickerText = document.getElementById('dash-announcement-ticker-text');
  if (DB.announcements && DB.announcements.length > 0) {
    const latestAnn = DB.announcements[DB.announcements.length - 1];
    tickerText.innerHTML = `<strong>${latestAnn.title}</strong>: ${latestAnn.content}`;
    tickerEl.style.display = 'flex';
  } else {
    tickerEl.style.display = 'none';
  }
  
  // 2. Sync Dues Widget in Sidebar
  const duesWidget = document.getElementById('dash-dues-widget');
  if (activeUser.role === 'Admin') {
    duesWidget.style.display = 'none';
  } else {
    duesWidget.style.display = 'block';
    const amount = DB.duesConfig ? DB.duesConfig.amount : 10000;
    const name = DB.duesConfig ? DB.duesConfig.name : 'Annual Dues 2026';
    const status = DB.memberDues[activeUser.email.toLowerCase()] || 'Unpaid';
    
    document.getElementById('dash-dues-amount').textContent = `₦${amount.toLocaleString()}.00`;
    document.getElementById('dash-dues-name').textContent = name;
    
    const badge = document.getElementById('dash-dues-status-badge');
    badge.textContent = status;
    if (status === 'Paid') {
      badge.style.background = 'rgba(160, 208, 128, 0.15)';
      badge.style.border = '1px solid var(--emerald-primary)';
      badge.style.color = 'var(--emerald-primary)';
      duesWidget.classList.add('paid');
    } else {
      badge.style.background = 'rgba(226, 177, 60, 0.15)';
      badge.style.border = '1px solid var(--gold-primary)';
      badge.style.color = 'var(--gold-primary)';
      duesWidget.classList.remove('paid');
    }
  }

  // Custom Greeting
  document.getElementById('dash-user-welcome').textContent = `Assalamu Alaykum, ${activeUser.name.split(' ')[0]}!`;
  document.getElementById('dash-user-badge').textContent = `CLASS OF ${activeUser.year}`;
  
  // Count stats
  const totalAlumni = DB.members.length;
  const totalTopics = DB.posts.length;
  
  // Unread Salaams Count (Direct messages)
  const unreadMessages = DB.messages.filter(msg => msg.recipientEmail.toLowerCase() === activeUser.email.toLowerCase() && msg.unread).length;
  
  document.getElementById('dash-members-count').textContent = totalAlumni;
  document.getElementById('dash-discussions-count').textContent = totalTopics;
  document.getElementById('dash-messages-count').textContent = unreadMessages;
  
  // Render recent 3 forum posts
  const feedContainer = document.getElementById('dash-feed-container');
  const sortedPosts = [...DB.posts].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  
  if (sortedPosts.length === 0) {
    feedContainer.innerHTML = '<div style="color:var(--text-dark); text-align:center; padding:2rem;">No announcements shared yet.</div>';
  } else {
    feedContainer.innerHTML = sortedPosts.map(post => {
      const author = DB.members.find(m => m.email === post.authorEmail) || { avatarSeed: 0 };
      const formattedDate = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      return `
        <div class="feed-item">
          <div class="feed-item-header">
            <img src="${getAvatarUrl(author.avatarSeed || 0, post.authorName)}" alt="Post Author Avatar">
            <div class="feed-item-meta">
              <div class="author">${post.authorName}</div>
              <div class="date">${formattedDate}</div>
            </div>
          </div>
          <div class="feed-item-body">${post.content}</div>
          <span class="feed-item-tag">${post.category}</span>
        </div>
      `;
    }).join('');
  }
  
  // Profile Checklist & Progress bar
  let completionPct = 50; // registered (base)
  const avatarCheck = document.getElementById('chk-avatar');
  const bioCheck = document.getElementById('chk-bio');
  
  // If user changed default randomized avatar seed
  avatarCheck.classList.add('done'); // Standard green check mark
  
  if (activeUser.bio && activeUser.bio.length > 5) {
    bioCheck.classList.add('done');
    completionPct = 100;
  } else {
    bioCheck.classList.remove('done');
    completionPct = 75;
  }
  
  document.getElementById('dash-profile-progress').style.width = `${completionPct}%`;
  
  // Seeding Spotlight side column (Random spotlight of 3 members except current user)
  const spotlightContainer = document.getElementById('dash-spotlight-container');
  const peerMembers = DB.members.filter(m => m.email !== activeUser.email);
  const selectedPeers = peerMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
  
  if (selectedPeers.length === 0) {
    spotlightContainer.innerHTML = '<div style="color:var(--text-dark); text-align:center;">No other members.</div>';
  } else {
    spotlightContainer.innerHTML = selectedPeers.map(member => `
      <div class="member-row" onclick="openAlumniDetailsModal('${member.email}')">
        <img src="${getAvatarUrl(member.avatarSeed, member.name)}" alt="${member.name} Avatar">
        <div class="member-row-info">
          <div class="name">${member.name}</div>
          <div class="dept">${member.department} (${member.year})</div>
        </div>
        <div class="status-indicator"></div>
      </div>
    `).join('');
  }
}

// 3. EDIT PROFILE CONTROLLER
let selectedAvatarSeed = 0;

function renderProfileEdit() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;
  
  selectedAvatarSeed = activeUser.avatarSeed;
  
  // Populate form
  document.getElementById('edit-name').value = activeUser.name;
  document.getElementById('edit-email').value = activeUser.email;
  document.getElementById('edit-dept').value = activeUser.department;
  document.getElementById('edit-year').value = activeUser.year;
  document.getElementById('edit-employment').value = activeUser.employment;
  document.getElementById('edit-marital').value = activeUser.marital;
  document.getElementById('edit-location').value = activeUser.location;
  document.getElementById('edit-bio').value = activeUser.bio || '';
  
  // Render Large Avatar Card
  document.getElementById('profile-edit-avatar-large').src = getAvatarUrl(selectedAvatarSeed, activeUser.name);
  document.getElementById('profile-edit-avatar-name').textContent = activeUser.name;
  document.getElementById('profile-edit-avatar-dept').textContent = `${activeUser.department} (${activeUser.year})`;
  
  // Render Selection grid of 8 default SVGs
  const grid = document.getElementById('avatar-selector-grid');
  let gridHtml = '';
  for (let i = 0; i < 8; i++) {
    const isSelected = i === selectedAvatarSeed ? 'selected' : '';
    gridHtml += `
      <div class="avatar-option ${isSelected}" onclick="changeProfileEditAvatar(${i})" data-index="${i}">
        <img src="${getAvatarUrl(i, activeUser.name)}" alt="Avatar Option ${i}">
      </div>
    `;
  }
  grid.innerHTML = gridHtml;
}

function changeProfileEditAvatar(index) {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  selectedAvatarSeed = index;
  
  // Highlight border selector
  const options = document.querySelectorAll('.avatar-option');
  options.forEach(opt => opt.classList.remove('selected'));
  options[index].classList.add('selected');
  
  // Update main large avatar
  document.getElementById('profile-edit-avatar-large').src = getAvatarUrl(index, activeUser.name);
}

function handleProfileUpdateSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('edit-name').value.trim();
  const dept = document.getElementById('edit-dept').value;
  const year = document.getElementById('edit-year').value;
  const employment = document.getElementById('edit-employment').value;
  const marital = document.getElementById('edit-marital').value;
  const location = document.getElementById('edit-location').value.trim();
  const bio = document.getElementById('edit-bio').value.trim();
  
  const userIndex = DB.members.findIndex(m => m.email === DB.currentUser);
  if (userIndex === -1) return;
  
  // Update db record
  DB.members[userIndex].name = name;
  DB.members[userIndex].department = dept;
  DB.members[userIndex].year = year;
  DB.members[userIndex].employment = employment;
  DB.members[userIndex].marital = marital;
  DB.members[userIndex].location = location;
  DB.members[userIndex].bio = bio;
  DB.members[userIndex].avatarSeed = selectedAvatarSeed;
  
  saveToStorage();
  
  // Sync Sidebar profile card details
  syncAuthUIState();
  triggerAlert('Profile settings updated successfully!');
  navigateTo('dashboard');
}

// 4. ALUMNI DIRECTORY CONTROLLER
let filterDrawerOpen = false;

function toggleFilterDrawer() {
  const drawer = document.getElementById('directory-filter-drawer');
  const toggleBtn = document.getElementById('filter-drawer-toggle');
  
  filterDrawerOpen = !filterDrawerOpen;
  
  if (filterDrawerOpen) {
    drawer.classList.add('open');
    toggleBtn.classList.add('active');
  } else {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('active');
  }
}

function resetFilters() {
  document.getElementById('filter-dept').value = 'all';
  document.getElementById('filter-year').value = 'all';
  document.getElementById('filter-employment').value = 'all';
  document.getElementById('filter-marital').value = 'all';
  document.getElementById('directory-search-input').value = '';
  
  handleDirectorySearchFilter();
}

function renderDirectory() {
  // Clear search elements
  document.getElementById('directory-search-input').value = '';
  document.getElementById('filter-dept').value = 'all';
  document.getElementById('filter-year').value = 'all';
  document.getElementById('filter-employment').value = 'all';
  document.getElementById('filter-marital').value = 'all';
  
  // Populated dynamic grid cards
  filterAlumniDirectory(DB.members);
}

function handleDirectorySearchFilter() {
  const searchQuery = document.getElementById('directory-search-input').value.toLowerCase().trim();
  const deptFilter = document.getElementById('filter-dept').value;
  const yearFilter = document.getElementById('filter-year').value;
  const employmentFilter = document.getElementById('filter-employment').value;
  const maritalFilter = document.getElementById('filter-marital').value;
  
  const filtered = DB.members.filter(member => {
    // 1. Text Search matching name, location, department
    const matchesText = !searchQuery || 
      member.name.toLowerCase().includes(searchQuery) ||
      member.location.toLowerCase().includes(searchQuery) ||
      member.department.toLowerCase().includes(searchQuery) ||
      (member.bio && member.bio.toLowerCase().includes(searchQuery));
      
    // 2. Department Dropdown
    const matchesDept = deptFilter === 'all' || member.department === deptFilter;
    
    // 3. Grad Year Dropdown
    const matchesYear = yearFilter === 'all' || member.year === yearFilter;
    
    // 4. Employment Status Dropdown
    const matchesEmployment = employmentFilter === 'all' || member.employment === employmentFilter;
    
    // 5. Marital Status Dropdown
    const matchesMarital = maritalFilter === 'all' || member.marital === maritalFilter;
    
    return matchesText && matchesDept && matchesYear && matchesEmployment && matchesMarital;
  });
  
  filterAlumniDirectory(filtered);
}

function filterAlumniDirectory(alumniList) {
  const container = document.getElementById('directory-cards-container');
  if (alumniList.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="grid-column: 1 / -1; padding:3rem; text-align:center;">
        <h3 style="color:var(--text-gray); font-family:var(--font-title);">No Alumni Members Found</h3>
        <p style="color:var(--text-dark); margin-top:8px; font-size:0.9rem;">Try adjusting your keywords or clearing the filter options drawer.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = alumniList.map(member => {
    const isGoldBorder = member.featured ? 'gold-border' : '';
    const employmentBadgeClass = member.employment === 'Employed' || member.employment === 'Self-Employed' ? 'emerald-badge' : '';
    
    return `
      <div class="alumni-card ${isGoldBorder}">
        <img src="${getAvatarUrl(member.avatarSeed, member.name)}" class="card-avatar" alt="${member.name} Avatar">
        <h3 class="card-name">${member.name}</h3>
        <div class="card-dept">${member.department} (${member.year})</div>
        
        <div class="card-meta-badges">
          <span class="badge-meta ${employmentBadgeClass}">${member.employment}</span>
          <span class="badge-meta">${member.location.split(',')[0]}</span>
        </div>
        
        <div class="card-buttons">
          <button class="card-btn card-btn-secondary" onclick="openAlumniDetailsModal('${member.email}')">View Profile</button>
          <button class="card-btn card-btn-primary" onclick="initiateDirectMessage('${member.email}')">Send Salaam</button>
        </div>
      </div>
    `;
  }).join('');
}

// 5. DETAILS MODAL CONTROLLER
let activeModalUserEmail = '';

function openAlumniDetailsModal(email) {
  if (!DB.currentUser) {
    triggerAlert('Please sign in or register to view full profiles and contact info.', true);
    navigateTo('auth');
    return;
  }
  const member = DB.members.find(m => m.email === email);
  if (!member) return;
  
  activeModalUserEmail = email;
  
  // Fill Modal HTML
  document.getElementById('modal-user-avatar').src = getAvatarUrl(member.avatarSeed, member.name);
  document.getElementById('modal-user-name').textContent = member.name;
  document.getElementById('modal-user-dept').textContent = `Department of ${member.department}`;
  
  document.getElementById('modal-user-year').textContent = `${member.year} Graduation`;
  document.getElementById('modal-user-employment').textContent = member.employment;
  document.getElementById('modal-user-marital').textContent = member.marital;
  document.getElementById('modal-user-location').textContent = member.location;
  
  document.getElementById('modal-user-bio').textContent = member.bio || 'This member has not written a bio yet.';
  
  // Set DM button trigger
  const dmBtn = document.getElementById('modal-user-dm-btn');
  
  // Check if detail is current user
  if (email.toLowerCase() === DB.currentUser.toLowerCase()) {
    dmBtn.style.display = 'none';
  } else {
    dmBtn.style.display = 'inline-flex';
    dmBtn.setAttribute('onclick', `initiateDirectMessage('${email}')`);
  }
  
  // Show Modal Overlay
  document.getElementById('alumni-details-modal').classList.add('open');
}

function closeAlumniModal(event) {
  // If overlay or close button clicked
  if (!event || event.target.id === 'alumni-details-modal' || event.target.classList.contains('modal-close-btn')) {
    document.getElementById('alumni-details-modal').classList.remove('open');
  }
}

// 6. GLOBAL MAJLIS FORUM CONTROLLER
function renderMajlisForum() {
  // Render forum category statistics
  const catStats = {
    'General': 0,
    'Career & Jobs': 0,
    'Islamic Insights': 0,
    'Events & Reunion': 0
  };
  
  DB.posts.forEach(p => {
    if (catStats[p.category] !== undefined) {
      catStats[p.category]++;
    }
  });
  
  document.getElementById('cat-stat-general').textContent = catStats['General'];
  document.getElementById('cat-stat-career').textContent = catStats['Career & Jobs'];
  document.getElementById('cat-stat-islamic').textContent = catStats['Islamic Insights'];
  document.getElementById('cat-stat-events').textContent = catStats['Events & Reunion'];
  
  // Render posts list
  const container = document.getElementById('majlis-posts-container');
  const sortedPosts = [...DB.posts].sort((a,b) => new Date(b.date) - new Date(a.date));
  
  if (sortedPosts.length === 0) {
    container.innerHTML = '<div class="glass-card" style="padding:3rem; text-align:center; color:var(--text-dark);">No posts shared. Start the conversation above!</div>';
    return;
  }
  
  container.innerHTML = sortedPosts.map(post => {
    const author = DB.members.find(m => m.email === post.authorEmail) || { avatarSeed: 0 };
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    
    return `
      <div class="feed-item">
        <div class="feed-item-header">
          <img src="${getAvatarUrl(author.avatarSeed, post.authorName)}" alt="${post.authorName} Avatar" onclick="openAlumniDetailsModal('${post.authorEmail}')" style="cursor:pointer;">
          <div class="feed-item-meta">
            <div class="author" onclick="openAlumniDetailsModal('${post.authorEmail}')" style="cursor:pointer; text-decoration: underline;">${post.authorName}</div>
            <div class="date">${formattedDate}</div>
          </div>
        </div>
        <div class="feed-item-body">${post.content}</div>
        <span class="feed-item-tag">${post.category}</span>
      </div>
    `;
  }).join('');
}

function handleCreateForumPost() {
  const content = document.getElementById('majlis-post-textarea').value.trim();
  const category = document.getElementById('majlis-post-category').value;
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  
  if (!content) {
    triggerAlert('Please write some content to share in the Majlis.', true);
    return;
  }
  
  const newPost = {
    id: `post_${Date.now()}`,
    authorName: activeUser.name,
    authorEmail: activeUser.email,
    category,
    date: new Date().toISOString(),
    content
  };
  
  DB.posts.push(newPost);
  saveToStorage();
  
  // Clear textarea
  document.getElementById('majlis-post-textarea').value = '';
  
  triggerAlert('Post shared successfully with the Majlis feed!');
  renderMajlisForum();
}

// 7. PRIVATE CHAT / DM CONTROLLER
let activeChatThreadEmail = '';

function renderChatThreads() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;
  
  // Find all messages involving current logged in user
  const userMessages = DB.messages.filter(msg => 
    msg.senderEmail.toLowerCase() === activeUser.email.toLowerCase() ||
    msg.recipientEmail.toLowerCase() === activeUser.email.toLowerCase()
  );
  
  // Group by peer email to find distinct threads
  const peerEmails = new Set();
  userMessages.forEach(msg => {
    if (msg.senderEmail.toLowerCase() !== activeUser.email.toLowerCase()) {
      peerEmails.add(msg.senderEmail.toLowerCase());
    }
    if (msg.recipientEmail.toLowerCase() !== activeUser.email.toLowerCase()) {
      peerEmails.add(msg.recipientEmail.toLowerCase());
    }
  });
  
  const threadsContainer = document.getElementById('chat-threads-container');
  
  if (peerEmails.size === 0) {
    threadsContainer.innerHTML = '<div style="color:var(--text-dark); text-align:center; padding:2rem; font-size:0.85rem;">No direct messaging history. Click "Send Salaam" on an alumni profile card in the directory to start a chat!</div>';
    
    // Clear chat window preview pane
    document.getElementById('chat-window-panel').style.opacity = '0.3';
    document.getElementById('chat-window-panel').style.pointerEvents = 'none';
    document.getElementById('chat-header-name').textContent = 'Select a conversation';
    document.getElementById('chat-bubbles-container').innerHTML = '';
    return;
  }
  
  document.getElementById('chat-window-panel').style.opacity = '1';
  document.getElementById('chat-window-panel').style.pointerEvents = 'all';
  
  // Build threads array
  const threads = Array.from(peerEmails).map(peerEmail => {
    const peerUser = DB.members.find(m => m.email.toLowerCase() === peerEmail.toLowerCase()) || {
      name: peerEmail,
      email: peerEmail,
      avatarSeed: 0,
      department: 'Alumni'
    };
    
    const threadMsgs = userMessages.filter(msg => 
      msg.senderEmail.toLowerCase() === peerEmail || msg.recipientEmail.toLowerCase() === peerEmail
    ).sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    const lastMsg = threadMsgs[threadMsgs.length - 1];
    const unreadCount = threadMsgs.filter(msg => msg.recipientEmail.toLowerCase() === activeUser.email.toLowerCase() && msg.unread).length;
    
    return {
      peerUser,
      lastMsg,
      unreadCount
    };
  });
  
  // Sort threads by latest message timestamp
  threads.sort((a,b) => new Date(b.lastMsg.timestamp) - new Date(a.lastMsg.timestamp));
  
  threadsContainer.innerHTML = threads.map(thread => {
    const isActive = thread.peerUser.email.toLowerCase() === activeChatThreadEmail.toLowerCase() ? 'active' : '';
    const unreadBadge = thread.unreadCount > 0 ? `<span style="background:var(--gold-primary); color:#000; font-size:0.7rem; font-weight:700; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center;">${thread.unreadCount}</span>` : '';
    
    const lastMsgText = thread.lastMsg ? thread.lastMsg.content : 'Start chatting';
    const lastMsgTime = thread.lastMsg ? new Date(thread.lastMsg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    
    return `
      <div class="thread-row ${isActive}" onclick="openChatThread('${thread.peerUser.email}')">
        <img src="${getAvatarUrl(thread.peerUser.avatarSeed, thread.peerUser.name)}" alt="${thread.peerUser.name} Avatar">
        <div class="thread-row-details">
          <div class="top">
            <span class="name">${thread.peerUser.name}</span>
            <span class="time">${lastMsgTime}</span>
          </div>
          <div class="top">
            <span class="last-msg ${thread.unreadCount > 0 ? 'unread' : ''}">${lastMsgText}</span>
            ${unreadBadge}
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // If we have an active thread open, refresh it. If not, auto-open the first one.
  if (activeChatThreadEmail) {
    openChatThread(activeChatThreadEmail, false); // false to avoid recursive loops
  } else if (threads.length > 0) {
    openChatThread(threads[0].peerUser.email, false);
  }
}

function openChatThread(peerEmail, reRenderList = true) {
  activeChatThreadEmail = peerEmail;
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  const peerUser = DB.members.find(m => m.email.toLowerCase() === peerEmail.toLowerCase()) || {
    name: peerEmail,
    avatarSeed: 0
  };
  
  // UI header update
  document.getElementById('chat-header-avatar').src = getAvatarUrl(peerUser.avatarSeed, peerUser.name);
  document.getElementById('chat-header-name').textContent = peerUser.name;
  
  // Mark all incoming messages in this thread as READ
  let didRead = false;
  DB.messages.forEach(msg => {
    if (msg.senderEmail.toLowerCase() === peerEmail.toLowerCase() && 
        msg.recipientEmail.toLowerCase() === activeUser.email.toLowerCase() && 
        msg.unread) {
      msg.unread = false;
      didRead = true;
    }
  });
  
  if (didRead) {
    saveToStorage();
    // Sync dashboard stats
    document.getElementById('dash-messages-count').textContent = DB.messages.filter(msg => 
      msg.recipientEmail.toLowerCase() === activeUser.email.toLowerCase() && msg.unread
    ).length;
  }
  
  // Load conversation bubbles
  const bubblesContainer = document.getElementById('chat-bubbles-container');
  const threadMsgs = DB.messages.filter(msg => 
    (msg.senderEmail.toLowerCase() === activeUser.email.toLowerCase() && msg.recipientEmail.toLowerCase() === peerEmail.toLowerCase()) ||
    (msg.senderEmail.toLowerCase() === peerEmail.toLowerCase() && msg.recipientEmail.toLowerCase() === activeUser.email.toLowerCase())
  ).sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));
  
  bubblesContainer.innerHTML = threadMsgs.map(msg => {
    const isSent = msg.senderEmail.toLowerCase() === activeUser.email.toLowerCase();
    const wrapperClass = isSent ? 'sent' : 'received';
    const authorName = isSent ? activeUser.name : peerUser.name;
    const authorAvatar = getAvatarUrl(isSent ? activeUser.avatarSeed : peerUser.avatarSeed, authorName);
    const msgTime = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return `
      <div class="msg-bubble-wrapper ${wrapperClass}">
        <img src="${authorAvatar}" alt="${authorName} avatar">
        <div class="msg-bubble-container">
          <div class="msg-bubble">${msg.content}</div>
          <span class="msg-bubble-time">${msgTime}</span>
        </div>
      </div>
    `;
  }).join('');
  
  // Auto Scroll to Chat Bottom
  bubblesContainer.scrollTop = bubblesContainer.scrollHeight;
  
  // Toggle UI Layout on mobile view (in-thread state)
  toggleMobileThreadListView(false);
  
  // Highlight row selection class
  if (reRenderList) {
    const rows = document.querySelectorAll('.thread-row');
    rows.forEach(r => {
      r.classList.remove('active');
      const text = r.querySelector('.name').textContent;
      if (text.trim().toLowerCase() === peerUser.name.trim().toLowerCase()) {
        r.classList.add('active');
      }
    });
  }
}

function initiateDirectMessage(peerEmail) {
  if (!DB.currentUser) {
    triggerAlert('Please sign in or register to send direct Salaams.', true);
    navigateTo('auth');
    return;
  }
  // If detail modal is open, close it
  document.getElementById('alumni-details-modal').classList.remove('open');
  
  // Navigate to Chat Tab
  activeChatThreadEmail = peerEmail;
  navigateTo('chat');
}

function handleSendMessageClick() {
  const inputEl = document.getElementById('chat-message-input');
  const messageContent = inputEl.value.trim();
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  
  if (!messageContent || !activeChatThreadEmail) return;
  
  const newMsg = {
    senderEmail: activeUser.email,
    recipientEmail: activeChatThreadEmail,
    content: messageContent,
    timestamp: new Date().toISOString(),
    unread: true
  };
  
  DB.messages.push(newMsg);
  saveToStorage();
  
  // Clear input
  inputEl.value = '';
  
  // Refresh Chat log instantly
  openChatThread(activeChatThreadEmail, true);
  
  // Trigger Simulated Contextual Reply from mock seeded members
  simulateMockAlumniResponse(activeChatThreadEmail, messageContent);
}

function handleChatInputKey(event) {
  if (event.key === 'Enter') {
    handleSendMessageClick();
  }
}

// Contextual Simulated Chat Engine
function simulateMockAlumniResponse(mockEmail, incomingMessage) {
  const peer = DB.members.find(m => m.email.toLowerCase() === mockEmail.toLowerCase());
  if (!peer) return;
  
  // Delay 1.5s for realism
  setTimeout(() => {
    const userMessages = DB.messages.filter(msg => 
      (msg.senderEmail.toLowerCase() === DB.currentUser.toLowerCase() && msg.recipientEmail.toLowerCase() === mockEmail.toLowerCase()) ||
      (msg.senderEmail.toLowerCase() === mockEmail.toLowerCase() && msg.recipientEmail.toLowerCase() === DB.currentUser.toLowerCase())
    );
    
    // Create responses list
    let replyText = `Wa Alaykumussalam! Thank you for the message. I would be happy to connect and collaborate. How can I help you?`;
    
    const msgLower = incomingMessage.toLowerCase();
    
    if (msgLower.includes('salaam') || msgLower.includes('hello') || msgLower.includes('hi')) {
      replyText = `Wa Alaykumussalam, warahmatullah wabarakaatuh. Hope you are doing well? It is great connecting with you here!`;
    } else if (msgLower.includes('job') || msgLower.includes('hire') || msgLower.includes('career') || msgLower.includes('intern')) {
      if (peer.department === 'Computer Science') {
        replyText = `Regarding tech careers: I recommend polishing your portfolio and doing some mock interviews. I am happy to refer you if you apply to Microsoft roles!`;
      } else if (peer.department === 'Accounting') {
        replyText = `Accounting firms like PwC are always looking for dedicated candidates. Make sure you complete your ICAN or ACCA examinations, it makes a huge difference!`;
      } else {
        replyText = `Career growth is indeed key. Let\'s schedule a call this week to review your resume together.`;
      }
    } else if (msgLower.includes('conference') || msgLower.includes('reunion') || msgLower.includes('event')) {
      replyText = `Yes, I am definitely planning to attend the annual national reunion conference in Abuja! Let's arrange to catch up in person there.`;
    } else if (userMessages.length > 2) {
      replyText = `Jazakallahu Khayran for sharing. Let me look into this and get back to you soon. Wishing you the best!`;
    }
    
    const replyMsg = {
      senderEmail: mockEmail,
      recipientEmail: DB.currentUser,
      content: replyText,
      timestamp: new Date().toISOString(),
      unread: true
    };
    
    DB.messages.push(replyMsg);
    saveToStorage();
    
    // If user is still viewing the chat, refresh it
    if (currentActiveView === 'chat' && activeChatThreadEmail.toLowerCase() === mockEmail.toLowerCase()) {
      openChatThread(mockEmail, true);
    } else {
      // Sync dashboard unread counters
      syncAuthUIState();
    }
    
    triggerAlert(`New message in inbox from ${peer.name}`);
  }, 1800);
}

// Mobile responsive thread list vs conversation view helper toggle
function toggleMobileThreadListView(showThreadsList) {
  const root = document.getElementById('interaction-layout-root');
  const chatBackBtn = document.getElementById('chat-mobile-back-btn');
  
  if (!root) return;
  
  if (showThreadsList) {
    root.classList.remove('in-thread');
    chatBackBtn.style.display = 'none';
  } else {
    // Show back button on mobile only (CSS handles media visibility)
    root.classList.add('in-thread');
    if (window.innerWidth <= 768) {
      chatBackBtn.style.display = 'inline-flex';
    }
  }
}

// --- DUES INVOICE PORTAL & MOCK PAYMENT GATEWAY ---
function renderDuesPage() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;
  
  const amount = DB.duesConfig ? DB.duesConfig.amount : 10000;
  const name = DB.duesConfig ? DB.duesConfig.name : 'Annual Alumni Levy 2026';
  const period = DB.duesConfig && DB.duesConfig.period ? DB.duesConfig.period : 'Annually';
  const status = DB.memberDues[activeUser.email.toLowerCase()] || 'Unpaid';
  
  document.getElementById('dues-invoice-name').textContent = `${name} (${period})`;
  document.getElementById('dues-item-amount').textContent = `₦${amount.toLocaleString()}.00`;
  document.getElementById('dues-total-amount').textContent = `₦${amount.toLocaleString()}.00`;
  
  const statusBadge = document.getElementById('dues-status-badge');
  statusBadge.textContent = status;
  
  const payActions = document.getElementById('dues-pay-actions-row');
  const receiptPanel = document.getElementById('dues-receipt-panel');
  const duesCard = document.getElementById('dues-details-card');
  
  if (status === 'Paid') {
    statusBadge.className = 'status-badge-lg paid';
    payActions.style.display = 'none';
    receiptPanel.style.display = 'block';
    duesCard.classList.add('paid');
    
    // Generate a consistent receipt code
    const emailHash = activeUser.email.split('@')[0].toUpperCase();
    document.getElementById('receipt-no').textContent = `TXN-${emailHash}-2026-AAUA`;
  } else {
    statusBadge.className = 'status-badge-lg unpaid';
    payActions.style.display = 'flex';
    receiptPanel.style.display = 'none';
    duesCard.classList.remove('paid');
  }
}

function openPaymentModal() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;
  
  // Clear forms
  document.getElementById('dues-payment-form').reset();
  
  // Sync holder name
  document.getElementById('card-holder').value = activeUser.name;
  
  // Reset payment success and loading displays
  document.getElementById('payment-processing-area').style.display = 'none';
  document.getElementById('payment-success-area').style.display = 'none';
  document.getElementById('btn-payment-submit').style.display = 'block';
  
  // Sync mockup visual display card values
  syncCardMockupDisplay();
  
  // Open modal
  document.getElementById('alumni-dues-payment-modal').classList.add('open');
}

function closePaymentModal(event) {
  if (!event || event.target.id === 'alumni-dues-payment-modal' || event.target.classList.contains('modal-close-btn')) {
    document.getElementById('alumni-dues-payment-modal').classList.remove('open');
  }
}

function syncCardMockupDisplay() {
  const holderInput = document.getElementById('card-holder').value;
  const numInput = document.getElementById('card-number').value;
  const expInput = document.getElementById('card-expiry').value;
  
  // Sync card number digits
  const numDisp = document.getElementById('mock-card-num-disp');
  let formattedNum = numInput.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  
  // Format visual card number digits
  const cardNumInput = document.getElementById('card-number');
  cardNumInput.value = formattedNum;
  
  numDisp.textContent = formattedNum || '•••• •••• •••• ••••';
  
  // Sync name display
  document.getElementById('mock-card-name-disp').textContent = holderInput.toUpperCase() || 'MEMBER NAME';
  
  // Sync expiry display
  const expDisp = document.getElementById('mock-card-expiry-disp');
  
  // Format visual expiry date
  const cardExpInput = document.getElementById('card-expiry');
  let cleanExp = expInput.replace(/\//g, '');
  if (cleanExp.length > 2) {
    cardExpInput.value = cleanExp.substring(0, 2) + '/' + cleanExp.substring(2, 4);
  }
  
  expDisp.textContent = cardExpInput.value || 'MM/YY';
}

function processCardPayment(event) {
  event.preventDefault();
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;
  
  const submitBtn = document.getElementById('btn-payment-submit');
  const processingArea = document.getElementById('payment-processing-area');
  const successArea = document.getElementById('payment-success-area');
  
  submitBtn.style.display = 'none';
  processingArea.style.display = 'block';
  
  // Simulate banking network request latency
  setTimeout(() => {
    processingArea.style.display = 'none';
    successArea.style.display = 'block';
    
    setTimeout(() => {
      // Close modal and resolve invoice paid
      document.getElementById('alumni-dues-payment-modal').classList.remove('open');
      
      DB.memberDues[activeUser.email.toLowerCase()] = 'Paid';
      saveToStorage();
      
      triggerAlert('Dues invoice paid successfully! Receipt generated.');
      renderDuesPage();
      
    }, 1500);
  }, 1800);
}

// --- ADMIN CONTROL PANEL VIEWS ---
let activeAdminSubTab = 'members';

function toggleAdminSubView(tabId) {
  activeAdminSubTab = tabId;
  
  // Toggle sub tabs highlight borders
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-admin-tab-${tabId}`).classList.add('active');
  
  // Switch sub panels visibility
  const panels = document.querySelectorAll('.admin-sub-view');
  panels.forEach(p => p.classList.remove('active-sub-view'));
  document.getElementById(`admin-sub-view-${tabId}`).classList.add('active-sub-view');
  
  if (tabId === 'members' || tabId === 'dues' || tabId === 'settings') {
    renderAdminPanel();
  }
}

function renderAdminPanel() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  const isAuthorized = activeUser && (activeUser.role === 'Admin' || activeUser.role === 'Super Admin');
  
  const gatewayEl = document.getElementById('admin-gateway-panel');
  const authorizedEl = document.getElementById('admin-authorized-panel');
  
  if (!isAuthorized) {
    if (gatewayEl) gatewayEl.style.display = 'block';
    if (authorizedEl) authorizedEl.style.display = 'none';
    return;
  }
  
  if (gatewayEl) gatewayEl.style.display = 'none';
  if (authorizedEl) authorizedEl.style.display = 'block';
  
  // Toggle settings tab button visibility for Super Admin
  const settingsTabBtn = document.getElementById('btn-admin-tab-settings');
  if (settingsTabBtn) {
    settingsTabBtn.style.display = activeUser.role === 'Super Admin' ? 'block' : 'none';
  }

  // 1. Render Members Table Approvals
  const approvalsBody = document.getElementById('admin-member-approvals-table-body');
  if (approvalsBody) {
    approvalsBody.innerHTML = DB.members.map(m => {
      const isSelf = m.email.toLowerCase() === activeUser.email.toLowerCase();
      
      // Status Badge Markup
      let statusClass = 'status-cell-badge active';
      if (m.status === 'pending') statusClass = 'status-cell-badge pending';
      if (m.status === 'suspended') statusClass = 'status-cell-badge suspended';
      
      // Disable action changes on self account
      let actionButtons = `<span style="color:var(--text-dark); font-style:italic;">Logged In</span>`;
      if (!isSelf) {
        if (m.status === 'pending') {
          actionButtons = `
            <div class="table-action-btns">
              <button class="table-btn table-btn-approve" onclick="approveMember('${m.email}')">Approve</button>
              <button class="table-btn table-btn-suspend" onclick="suspendMember('${m.email}')">Suspend</button>
            </div>
          `;
        } else if (m.status === 'active') {
          actionButtons = `
            <div class="table-action-btns">
              <button class="table-btn table-btn-suspend" onclick="suspendMember('${m.email}')">Suspend</button>
            </div>
          `;
        } else {
          actionButtons = `
            <div class="table-action-btns">
              <button class="table-btn table-btn-approve" onclick="approveMember('${m.email}')">Activate</button>
            </div>
          `;
        }
      }
      
      return `
        <tr>
          <td style="font-weight:600;">${m.name}</td>
          <td>${m.department}</td>
          <td>${m.year}</td>
          <td>${m.location.split(',')[0]}</td>
          <td><span class="${statusClass}">${m.status}</span></td>
          <td>${actionButtons}</td>
        </tr>
      `;
    }).join('');
  }
  
  // 2. Render Dues Ledger Table
  const ledgerBody = document.getElementById('admin-dues-ledger-table-body');
  if (ledgerBody) {
    // Populate current configuration values in form inputs
    document.getElementById('admin-dues-name-input').value = DB.duesConfig ? DB.duesConfig.name : '';
    document.getElementById('admin-dues-amount-input').value = DB.duesConfig ? DB.duesConfig.amount : '';
    document.getElementById('admin-dues-period-input').value = DB.duesConfig && DB.duesConfig.period ? DB.duesConfig.period : 'Annually';
    
    const configName = DB.duesConfig ? DB.duesConfig.name : 'Annual Alumni Levy 2026';
    const configAmount = DB.duesConfig ? DB.duesConfig.amount : 10000;
    
    // Filter members list to display only active standard members
    const ledgerMembers = DB.members.filter(m => m.status === 'active' && m.role !== 'Admin' && m.role !== 'Super Admin');
    
    if (ledgerMembers.length === 0) {
      ledgerBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-dark); padding:2rem;">No active standard members registered in ledger.</td></tr>`;
    } else {
      ledgerBody.innerHTML = ledgerMembers.map(m => {
        const paymentStatus = DB.memberDues[m.email.toLowerCase()] || 'Unpaid';
        const badgeClass = paymentStatus === 'Paid' ? 'status-cell-badge active' : 'status-cell-badge pending';
        
        const toggleText = paymentStatus === 'Paid' ? 'Mark Unpaid' : 'Mark Paid';
        const toggleActionClass = paymentStatus === 'Paid' ? 'table-btn-suspend' : 'table-btn-approve';
        
        return `
          <tr>
            <td style="font-weight:600;">${m.name}</td>
            <td>${m.department}</td>
            <td>${configName}</td>
            <td style="font-weight:600;">₦${configAmount.toLocaleString()}</td>
            <td><span class="${badgeClass}">${paymentStatus}</span></td>
            <td>
              <button class="table-btn ${toggleActionClass}" onclick="toggleMemberDuesStatus('${m.email}')">${toggleText}</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  // 3. Render Super Admin system settings subtab
  if (activeAdminSubTab === 'settings' && activeUser.role === 'Super Admin') {
    document.getElementById('settings-union-name').value = DB.settings ? DB.settings.unionName : 'MUSGAAU';
    document.getElementById('settings-contact-email').value = DB.settings ? DB.settings.contactEmail : 'info@musgaau.org';
    document.getElementById('settings-guest-directory-toggle').checked = DB.settings ? DB.settings.guestDirectoryEnabled : true;
    document.getElementById('settings-public-posts-toggle').checked = DB.settings ? DB.settings.publicPostsEnabled : true;
    
    const rolesBody = document.getElementById('admin-roles-table-body');
    if (rolesBody) {
      rolesBody.innerHTML = DB.members.map(m => {
        const isSelf = m.email.toLowerCase() === activeUser.email.toLowerCase();
        let actionsHtml = '';
        if (isSelf) {
          actionsHtml = `<span style="color:var(--text-dark); font-style:italic;">Logged In</span>`;
        } else {
          actionsHtml = `
            <select class="form-control" style="font-size:0.8rem; padding:0.25rem; height:auto; width:130px; display:inline-block;" onchange="updateUserRole('${m.email}', this.value)">
              <option value="Member" ${m.role === 'Member' ? 'selected' : ''}>Member</option>
              <option value="Admin" ${m.role === 'Admin' ? 'selected' : ''}>Admin</option>
              <option value="Super Admin" ${m.role === 'Super Admin' ? 'selected' : ''}>Super Admin</option>
            </select>
          `;
        }
        return `
          <tr>
            <td style="font-weight:600;">${m.name}</td>
            <td>${m.email}</td>
            <td>${m.department}</td>
            <td style="font-weight:600; color:var(--emerald-mint);">${m.role}</td>
            <td>${actionsHtml}</td>
          </tr>
        `;
      }).join('');
    }
  }
}

function approveMember(email) {
  const memberIndex = DB.members.findIndex(m => m.email.toLowerCase() === email.toLowerCase());
  if (memberIndex === -1) return;
  
  DB.members[memberIndex].status = 'active';
  saveToStorage();
  
  triggerAlert(`Account approved: ${DB.members[memberIndex].name} is now active.`);
  renderAdminPanel();
}

function suspendMember(email) {
  const memberIndex = DB.members.findIndex(m => m.email.toLowerCase() === email.toLowerCase());
  if (memberIndex === -1) return;
  
  DB.members[memberIndex].status = 'suspended';
  saveToStorage();
  
  triggerAlert(`Account suspended: ${DB.members[memberIndex].name} has been suspended.`);
  renderAdminPanel();
}

function toggleMemberDuesStatus(email) {
  const currentStatus = DB.memberDues[email.toLowerCase()] || 'Unpaid';
  const nextStatus = currentStatus === 'Paid' ? 'Unpaid' : 'Paid';
  
  DB.memberDues[email.toLowerCase()] = nextStatus;
  saveToStorage();
  
  triggerAlert(`Invoice updated: Status set to ${nextStatus}.`);
  renderAdminPanel();
}

function handleSaveDuesConfig(event) {
  event.preventDefault();
  const name = document.getElementById('admin-dues-name-input').value.trim();
  const amount = parseInt(document.getElementById('admin-dues-amount-input').value);
  const period = document.getElementById('admin-dues-period-input').value;
  
  DB.duesConfig = {
    name,
    amount,
    period
  };
  saveToStorage();
  
  triggerAlert('Union dues billing settings configured successfully!');
  renderAdminPanel();
}

function handlePublishAnnouncement() {
  const content = document.getElementById('admin-announcement-textarea').value.trim();
  const category = document.getElementById('admin-announcement-category').value;
  const image = document.getElementById('admin-announcement-image').value.trim();
  const attachment = document.getElementById('admin-announcement-attachment').value.trim();
  const publicVisibility = document.getElementById('admin-announcement-public').checked;
  
  if (!content) {
    triggerAlert('Please write announcement content to publish.', true);
    return;
  }
  
  const newAnn = {
    id: `ann_${Date.now()}`,
    title: category,
    content,
    date: new Date().toISOString(),
    category,
    image,
    attachment,
    public: publicVisibility
  };
  
  DB.announcements.push(newAnn);
  saveToStorage();
  
  // Reset composer inputs
  document.getElementById('admin-announcement-textarea').value = '';
  document.getElementById('admin-announcement-image').value = '';
  document.getElementById('admin-announcement-attachment').value = '';
  document.getElementById('admin-announcement-public').checked = false;
  
  triggerAlert('Official announcement published successfully!');
  
  // Switch to approvals tab preview
  toggleAdminSubView('members');
  renderPublicAnnouncements();
}

function updateUserRole(email, newRole) {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser || activeUser.role !== 'Super Admin') return;

  const idx = DB.members.findIndex(m => m.email.toLowerCase() === email.toLowerCase());
  if (idx !== -1) {
    DB.members[idx].role = newRole;
    saveToStorage();
    triggerAlert(`Role updated: ${DB.members[idx].name} role set to ${newRole}.`);
    renderAdminPanel();
    syncAuthUIState();
  }
}

function handleSaveSystemSettings() {
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser || activeUser.role !== 'Super Admin') return;

  const unionName = document.getElementById('settings-union-name').value.trim() || 'MUSGAAU';
  const contactEmail = document.getElementById('settings-contact-email').value.trim() || 'info@musgaau.org';
  const guestDirectoryEnabled = document.getElementById('settings-guest-directory-toggle').checked;
  const publicPostsEnabled = document.getElementById('settings-public-posts-toggle').checked;
  
  DB.settings = {
    unionName,
    contactEmail,
    guestDirectoryEnabled,
    publicPostsEnabled
  };
  saveToStorage();
  
  // Update header/logo text dynamically
  document.querySelector('.logo-text h1').textContent = unionName;
  document.title = `${unionName} - Muslim Graduates Alumni of Adekunle Ajasin University`;
  
  // Update contact email dynamically
  const emailInfoLabel = document.getElementById('contact-info-email');
  if (emailInfoLabel) emailInfoLabel.textContent = contactEmail;
  
  triggerAlert('Global system configurations successfully updated.');
  syncAuthUIState();
  renderPublicAnnouncements();
}

// --- BOOTSTRAP EVENT LISTENERS ---
window.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  populateYearDropdowns();
  
  // Dynamic header union naming setup
  if (DB.settings && DB.settings.unionName) {
    document.querySelector('.logo-text h1').textContent = DB.settings.unionName;
    document.title = `${DB.settings.unionName} - Muslim Graduates Alumni of Adekunle Ajasin University`;
  }
  const contactInfoLabel = document.getElementById('contact-info-email');
  if (contactInfoLabel && DB.settings && DB.settings.contactEmail) {
    contactInfoLabel.textContent = DB.settings.contactEmail;
  }
  
  syncAuthUIState();
  
  // Set default view on loading
  navigateTo('landing');
  
  // Alert resize checks for responsive back buttons
  window.addEventListener('resize', () => {
    const chatBackBtn = document.getElementById('chat-mobile-back-btn');
    if (window.innerWidth > 768) {
      chatBackBtn.style.display = 'none';
    } else if (currentActiveView === 'chat' && activeChatThreadEmail) {
      chatBackBtn.style.display = 'inline-flex';
    }
  });
});

// =============================================
//  NEW SECTIONS — SEED DATA
// =============================================

const SEED_EVENTS = [
  {
    id: 'ev_1',
    title: 'Annual National Reunion Conference 2026',
    date: '2026-08-15',
    venue: 'Abuja International Conference Centre',
    category: 'Conference',
    description: 'Join us for the flagship annual gathering of MUSGAAU alumni nationwide. Keynotes, networking sessions, career fair, and halal dinner.',
    rsvps: []
  },
  {
    id: 'ev_2',
    title: 'Lagos Chapter Monthly Salah & Networking',
    date: '2026-07-25',
    venue: 'Lekki Central Mosque, Lagos',
    category: 'Prayer',
    description: 'Monthly jumu\'ah prayer gathering followed by an informal networking session for Lagos-based alumni.',
    rsvps: []
  },
  {
    id: 'ev_3',
    title: 'Career Development & CV Workshop',
    date: '2026-08-05',
    venue: 'Zoom (Online)',
    category: 'Workshop',
    description: 'A live virtual workshop covering CV building, LinkedIn optimization, and interview techniques. Open to all alumni.',
    rsvps: []
  },
  {
    id: 'ev_4',
    title: 'MUSGAAU Fundraising Dinner 2026',
    date: '2026-09-20',
    venue: 'Transcorp Hilton, Abuja',
    category: 'Fundraiser',
    description: 'Black-tie fundraising dinner to raise funds for the AAUA campus mosque renovation and student scholarship fund.',
    rsvps: []
  }
];

const SEED_JOBS = [
  {
    id: 'job_1',
    title: 'QA Engineering Intern',
    company: 'Microsoft Nigeria',
    location: 'Lagos, Nigeria',
    type: 'Internship',
    field: 'Technology',
    salary: '₦150k/month',
    description: 'We are looking for fresh Computer Science graduates (2024–2025) to join our Lagos QA team. Must know Python, Selenium, and have strong attention to detail.',
    applyLink: 'careers@microsoft.com',
    posterEmail: 'mariam.adebayo@outlook.com',
    posterName: 'Mariam Adebayo',
    date: '2026-05-29T14:15:00Z'
  },
  {
    id: 'job_2',
    title: 'Freelance HTML Email Designer',
    company: 'Oyebanji Labs',
    location: 'Remote',
    type: 'Remote',
    field: 'Design / Technology',
    salary: '₦75,000 (Fixed)',
    description: 'Need a junior designer to format HTML email newsletters for a local client. Must know HTML, CSS, and email marketing templates. Short-term 2-week project.',
    applyLink: 'ibrahim.dev@contractor.co',
    posterEmail: 'ibrahim.dev@contractor.co',
    posterName: 'Ibrahim Oyebanji',
    date: '2026-05-31T11:10:00Z'
  },
  {
    id: 'job_3',
    title: 'Investment Banking Analyst',
    company: 'Stanbic IBTC',
    location: 'Victoria Island, Lagos',
    type: 'Full-time',
    field: 'Finance / Economics',
    salary: '₦450k–₦600k/month',
    description: 'Stanbic IBTC is recruiting analysts for our investment banking division. Strong financial modeling skills, CFA Level I preferred. Exceptional graduates encouraged to apply.',
    applyLink: 'https://stanbicibtc.com/careers',
    posterEmail: 'fatima.dahunsi@gmail.com',
    posterName: 'Fatima Dahunsi',
    date: '2026-06-01T09:00:00Z'
  },
  {
    id: 'job_4',
    title: 'Corporate Legal Consultant',
    company: 'Alao & Associates',
    location: 'Abuja, Nigeria',
    type: 'Contract',
    field: 'Law',
    salary: '₦200k–₦350k/month',
    description: 'Experienced corporate legal consultants needed for startup incorporation, IP registration, and commercial agreements. LLB + 2 years call experience required.',
    applyLink: 'zainab.alao@lawfirm.com',
    posterEmail: 'zainab.alao@lawfirm.com',
    posterName: 'Zainab Alao Esq.',
    date: '2026-06-03T10:30:00Z'
  }
];

const SEED_GALLERY = [
  { id: 'gal_1', caption: 'National Reunion 2024 — Abuja', category: 'Reunion', color: '#064e3b' },
  { id: 'gal_2', caption: 'Lagos Chapter Jumu\'ah — March 2025', category: 'Prayer', color: '#78350f' },
  { id: 'gal_3', caption: 'CV Workshop Virtual Session', category: 'Workshop', color: '#1e3a8a' },
  { id: 'gal_4', caption: 'AAUA Campus Visit — Alumni Day', category: 'Campus', color: '#581c87' },
  { id: 'gal_5', caption: 'Scholarship Presentation Ceremony', category: 'Charity', color: '#034f43' },
  { id: 'gal_6', caption: 'Executive Committee Meeting 2025', category: 'Reunion', color: '#7c2d12' }
];

const MENTOR_SKILLS_MAP = {
  'Computer Science': ['Web Development', 'Data Science', 'Cloud (AWS)', 'Open Source'],
  'Accounting': ['Tax Audit', 'ICAN / ACCA', 'Financial Modeling', 'Corporate Finance'],
  'Islamic Studies': ['Academic Research', 'Islamic Finance', 'Dawah Strategy'],
  'Law': ['Corporate Law', 'IP Law', 'Contract Drafting', 'Startup Legal'],
  'Biochemistry': ['Biotech Research', 'Halal Healthcare', 'Lab Management'],
  'Economics': ['Financial Analysis', 'Policy Research', 'Econometrics'],
  'Political Science': ['Public Policy', 'NGO Management', 'Youth Programs'],
  'Microbiology': ['Environmental Science', 'Water Treatment', 'Research Writing']
};

// =============================================
//  NEW SECTIONS — DB INITIALIZATION UPGRADE
// =============================================
function initDatabaseUpgrade() {
  if (!DB.events) DB.events = [...SEED_EVENTS];
  if (!DB.jobs) DB.jobs = [...SEED_JOBS];
  if (!DB.gallery) DB.gallery = [...SEED_GALLERY];
  if (!DB.mentors) DB.mentors = [];
  if (!DB.notifications) DB.notifications = [];
  if (!DB.notifPrefs) DB.notifPrefs = { messages: true, majlis: true, dues: true, events: true };
  if (!DB.privacyPrefs) DB.privacyPrefs = { showMarital: true, allowDM: true };

  // Seed some notifications for logged-in user context
  if (DB.notifications.length === 0) {
    DB.notifications = [
      { id: 'n1', type: 'message', icon: '💬', title: 'Mariam Adebayo sent you a Salaam', time: '2026-05-31T12:00:00Z', unread: true, action: 'chat' },
      { id: 'n2', type: 'event', icon: '🗓️', title: 'New Event: Annual Conference 2026', time: '2026-06-01T08:00:00Z', unread: true, action: 'events' },
      { id: 'n3', type: 'dues', icon: '💳', title: 'Dues Reminder: Annual Levy due soon', time: '2026-06-02T10:00:00Z', unread: false, action: 'dues' },
      { id: 'n4', type: 'majlis', icon: '📢', title: 'Dr. Kabir Bello posted in Majlis', time: '2026-05-28T09:30:00Z', unread: false, action: 'majlis' }
    ];
  }

  saveToStorage();
}

// =============================================
//  NEW SECTIONS — NAVIGATION ROUTING
// =============================================
// All new view routing is now merged into the main navigateTo() function above.

// =============================================
//  NEW SECTIONS — syncAuthUIState UPGRADE
// =============================================
const _origSyncAuthUIState = syncAuthUIState;
syncAuthUIState = function() {
  _origSyncAuthUIState();

  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  const isLoggedIn = !!activeUser;
  const isActive = isLoggedIn && activeUser.status === 'active';

  // Show/hide new nav items
  const newNavItems = ['events', 'jobs', 'gallery', 'mentorship', 'settings'];
  newNavItems.forEach(id => {
    const nav = document.getElementById(`nav-${id}`);
    const mob = document.getElementById(`mob-nav-${id}`);
    if (nav) nav.style.display = isActive ? 'block' : 'none';
    if (mob) mob.style.display = isActive ? 'flex' : 'none';
  });

  // Show/hide bell + search buttons
  const bellBtn = document.getElementById('notif-bell-btn');
  const searchBtn = document.getElementById('global-search-btn');
  if (bellBtn) bellBtn.style.display = isActive ? 'flex' : 'none';
  if (searchBtn) searchBtn.style.display = isActive ? 'flex' : 'none';

  // Update notification badge
  updateNotifBadge();

  // Show/hide create-event button for admins
  const createEventBtn = document.getElementById('create-event-btn');
  if (createEventBtn) {
    const isAdmin = isActive && (activeUser.role === 'Admin' || activeUser.role === 'Super Admin');
    createEventBtn.style.display = isAdmin ? 'inline-flex' : 'none';
  }
};

// =============================================
//  NOTIFICATIONS CENTER
// =============================================
function updateNotifBadge() {
  if (!DB.notifications) return;
  const unread = DB.notifications.filter(n => n.unread).length;
  const badge = document.getElementById('notif-badge-count');
  if (!badge) return;
  if (unread > 0) {
    badge.textContent = unread > 9 ? '9+' : unread;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

let notifPanelOpen = false;
function toggleNotificationsPanel() {
  const panel = document.getElementById('notif-panel');
  if (!panel) return;
  notifPanelOpen = !notifPanelOpen;
  if (notifPanelOpen) {
    renderNotifPanel();
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

function closeNotificationsPanel() {
  const panel = document.getElementById('notif-panel');
  if (panel) panel.style.display = 'none';
  notifPanelOpen = false;
}

function renderNotifPanel() {
  initDatabaseUpgrade();
  const container = document.getElementById('notif-list-container');
  if (!container) return;

  if (!DB.notifications || DB.notifications.length === 0) {
    container.innerHTML = '<div style="padding:2rem; text-align:center; color:var(--text-dark); font-size:0.85rem;">No notifications yet.</div>';
    return;
  }

  container.innerHTML = [...DB.notifications].reverse().map(n => {
    const timeStr = new Date(n.time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    return `
      <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="handleNotifClick('${n.id}', '${n.action}')">
        <div class="notif-icon" style="background:rgba(160,208,128,0.1); border:1px solid var(--glass-border);">${n.icon}</div>
        <div class="notif-body" style="flex:1;">
          <div class="notif-title">${n.title}</div>
          <div class="notif-time">${timeStr}</div>
        </div>
        ${n.unread ? '<div class="notif-unread-dot"></div>' : ''}
      </div>
    `;
  }).join('');
}

function handleNotifClick(id, action) {
  // Mark as read
  const notif = DB.notifications.find(n => n.id === id);
  if (notif) notif.unread = false;
  saveToStorage();
  updateNotifBadge();
  closeNotificationsPanel();
  if (action) navigateTo(action);
}

// Add new notification helper
function addNotification(icon, title, action) {
  initDatabaseUpgrade();
  const newNotif = {
    id: `n_${Date.now()}`,
    icon, title, action,
    time: new Date().toISOString(),
    unread: true
  };
  DB.notifications.push(newNotif);
  saveToStorage();
  updateNotifBadge();
}

// =============================================
//  GLOBAL SEARCH
// =============================================
function openGlobalSearch() {
  const overlay = document.getElementById('global-search-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    setTimeout(() => {
      const input = document.getElementById('global-search-input');
      if (input) { input.value = ''; input.focus(); }
      document.getElementById('global-search-results').innerHTML = '<div class="search-empty">Start typing to search alumni, posts, and jobs...</div>';
    }, 50);
  }
}

function closeGlobalSearch() {
  const overlay = document.getElementById('global-search-overlay');
  if (overlay) overlay.style.display = 'none';
}

function closeGlobalSearchIfOutside(event) {
  if (event.target.id === 'global-search-overlay') closeGlobalSearch();
}

function handleGlobalSearch() {
  const query = document.getElementById('global-search-input').value.trim().toLowerCase();
  const resultsEl = document.getElementById('global-search-results');
  if (!query) {
    resultsEl.innerHTML = '<div class="search-empty">Start typing to search alumni, posts, and jobs...</div>';
    return;
  }

  let html = '';

  // Search Alumni
  const matchedMembers = DB.members.filter(m =>
    m.name.toLowerCase().includes(query) ||
    m.department.toLowerCase().includes(query) ||
    (m.bio && m.bio.toLowerCase().includes(query))
  ).slice(0, 4);

  if (matchedMembers.length > 0) {
    html += '<div class="search-result-group">Alumni Members</div>';
    html += matchedMembers.map(m => `
      <div class="search-result-item" onclick="closeGlobalSearch(); openAlumniDetailsModal('${m.email}')">
        <img src="${getAvatarUrl(m.avatarSeed, m.name)}" alt="${m.name}">
        <div><div class="sr-label">${m.name}</div><div class="sr-sub">${m.department} · ${m.year}</div></div>
      </div>
    `).join('');
  }

  // Search Posts
  const matchedPosts = DB.posts.filter(p =>
    p.content.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.authorName.toLowerCase().includes(query)
  ).slice(0, 3);

  if (matchedPosts.length > 0) {
    html += '<div class="search-result-group">Majlis Posts</div>';
    html += matchedPosts.map(p => `
      <div class="search-result-item" onclick="closeGlobalSearch(); navigateTo('majlis')">
        <div class="sr-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
        <div><div class="sr-label">${p.content.substring(0, 55)}...</div><div class="sr-sub">By ${p.authorName} · ${p.category}</div></div>
      </div>
    `).join('');
  }

  // Search Jobs
  if (DB.jobs) {
    const matchedJobs = DB.jobs.filter(j =>
      j.title.toLowerCase().includes(query) ||
      j.company.toLowerCase().includes(query) ||
      j.field.toLowerCase().includes(query) ||
      j.description.toLowerCase().includes(query)
    ).slice(0, 3);

    if (matchedJobs.length > 0) {
      html += '<div class="search-result-group">Job Listings</div>';
      html += matchedJobs.map(j => `
        <div class="search-result-item" onclick="closeGlobalSearch(); navigateTo('jobs')">
          <div class="sr-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
          <div><div class="sr-label">${j.title}</div><div class="sr-sub">${j.company} · ${j.type} · ${j.location}</div></div>
        </div>
      `).join('');
    }
  }

  if (!html) html = '<div class="search-empty">No results found for "<strong>' + query + '</strong>"</div>';
  resultsEl.innerHTML = html;
}

// =============================================
//  EVENTS PAGE
// =============================================
function renderEventsPage() {
  initDatabaseUpgrade();
  const container = document.getElementById('events-list-container');
  if (!container) return;

  // Show admin create button
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  const createBtn = document.getElementById('create-event-btn');
  if (createBtn && activeUser) {
    createBtn.style.display = (activeUser.role === 'Admin' || activeUser.role === 'Super Admin') ? 'inline-flex' : 'none';
  }

  if (!DB.events || DB.events.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-dark);padding:3rem;grid-column:1/-1;">No events scheduled yet.</div>';
    return;
  }

  const sorted = [...DB.events].sort((a, b) => new Date(a.date) - new Date(b.date));
  container.innerHTML = sorted.map(ev => {
    const d = new Date(ev.date);
    const month = d.toLocaleDateString('en-US', { month: 'short' });
    const day = d.getDate();
    const isRsvpd = ev.rsvps && DB.currentUser && ev.rsvps.includes(DB.currentUser);
    const daysUntil = Math.ceil((d - new Date()) / (1000 * 60 * 60 * 24));
    const isPast = daysUntil < 0;
    return `
      <div class="event-card">
        <div class="event-card-header">
          <div>
            <span class="event-cat-pill">${ev.category}</span>
            ${!isPast && daysUntil <= 7 ? `<span class="event-cat-pill" style="background:rgba(239,68,68,0.1);border-color:#ef4444;color:#f87171;margin-left:4px;">Soon</span>` : ''}
          </div>
          <div class="event-date-badge">
            <div class="month">${month}</div>
            <div class="day">${day}</div>
          </div>
        </div>
        <h3>${ev.title}</h3>
        <div class="event-meta">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${ev.venue}
        </div>
        <p class="event-desc">${ev.description}</p>
        ${isPast
          ? `<div style="text-align:center;font-size:0.8rem;color:var(--text-dark);padding:0.5rem;border:1px solid var(--glass-border);border-radius:10px;">Event has passed</div>`
          : `<button class="event-rsvp-btn ${isRsvpd ? 'rsvp-joined' : ''}" onclick="toggleEventRSVP('${ev.id}', this)">
              ${isRsvpd ? '✓ RSVP\'d — You\'re Attending' : 'RSVP to Attend'}
            </button>`
        }
        <div style="font-size:0.7rem;color:var(--text-dark);margin-top:0.75rem;text-align:right;">${(ev.rsvps||[]).length} attending</div>
      </div>
    `;
  }).join('');
}

function toggleEventRSVP(eventId, btn) {
  if (!DB.currentUser) { triggerAlert('Sign in to RSVP', true); return; }
  const ev = DB.events.find(e => e.id === eventId);
  if (!ev) return;
  if (!ev.rsvps) ev.rsvps = [];
  const idx = ev.rsvps.indexOf(DB.currentUser);
  if (idx === -1) {
    ev.rsvps.push(DB.currentUser);
    btn.textContent = "✓ RSVP'd — You're Attending";
    btn.classList.add('rsvp-joined');
    triggerAlert('You have RSVP\'d to this event!');
    addNotification('🗓️', `RSVP confirmed: ${ev.title}`, 'events');
  } else {
    ev.rsvps.splice(idx, 1);
    btn.textContent = "RSVP to Attend";
    btn.classList.remove('rsvp-joined');
    triggerAlert('RSVP cancelled.');
  }
  // Update count
  btn.closest('.event-card').querySelector('[style*="attending"]').textContent = `${ev.rsvps.length} attending`;
  saveToStorage();
}

function openCreateEventModal() {
  document.getElementById('create-event-form').reset();
  document.getElementById('create-event-modal').classList.add('open');
}
function closeCreateEventModal(event) {
  if (!event || event.target.id === 'create-event-modal' || event.target.classList.contains('modal-close-btn')) {
    document.getElementById('create-event-modal').classList.remove('open');
  }
}
function handleCreateEvent(event) {
  event.preventDefault();
  const newEv = {
    id: `ev_${Date.now()}`,
    title: document.getElementById('event-title-input').value.trim(),
    date: document.getElementById('event-date-input').value,
    venue: document.getElementById('event-venue-input').value.trim(),
    category: document.getElementById('event-cat-input').value,
    description: document.getElementById('event-desc-input').value.trim(),
    rsvps: []
  };
  DB.events.push(newEv);
  saveToStorage();
  closeCreateEventModal(null);
  triggerAlert(`Event "${newEv.title}" published!`);
  addNotification('🗓️', `New Event: ${newEv.title}`, 'events');
  renderEventsPage();
}

// =============================================
//  JOB BOARD
// =============================================
function renderJobsPage() {
  initDatabaseUpgrade();
  filterJobs();
}

function filterJobs() {
  const query = (document.getElementById('jobs-search-input')?.value || '').toLowerCase().trim();
  const typeFilter = document.getElementById('jobs-filter-type')?.value || 'all';
  const container = document.getElementById('jobs-list-container');
  if (!container || !DB.jobs) return;

  const filtered = DB.jobs.filter(j => {
    const matchesText = !query || j.title.toLowerCase().includes(query) || j.company.toLowerCase().includes(query) || j.field.toLowerCase().includes(query) || j.description.toLowerCase().includes(query);
    const matchesType = typeFilter === 'all' || j.type === typeFilter;
    return matchesText && matchesType;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-dark);padding:3rem;grid-column:1/-1;">No job listings match your search.</div>';
    return;
  }

  container.innerHTML = filtered.map(j => {
    const poster = DB.members.find(m => m.email === j.posterEmail);
    const dateStr = new Date(j.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const remoteClass = j.type === 'Remote' ? 'remote' : '';
    return `
      <div class="job-card">
        <div class="job-card-top">
          <div>
            <div class="job-title">${j.title}</div>
            <div class="job-company">${j.company}</div>
          </div>
          <span class="job-type-badge ${remoteClass}">${j.type}</span>
        </div>
        <div class="job-meta-row">
          <div class="job-meta-item">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${j.location}
          </div>
          <div class="job-meta-item">
            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            ${j.field}
          </div>
        </div>
        ${j.salary ? `<div class="job-salary">💰 ${j.salary}</div>` : ''}
        <div class="job-desc">${j.description}</div>
        <button class="job-apply-btn" onclick="handleJobApply('${j.id}')">Apply Now</button>
        <div class="job-poster">Posted by ${j.posterName} · ${dateStr}</div>
      </div>
    `;
  }).join('');
}

function handleJobApply(jobId) {
  const job = DB.jobs.find(j => j.id === jobId);
  if (!job) return;
  if (job.applyLink && job.applyLink.startsWith('http')) {
    window.open(job.applyLink, '_blank');
  } else {
    triggerAlert(`Application contact: ${job.applyLink || 'Contact the poster directly.'}`);
  }
}

function openPostJobModal() {
  document.getElementById('post-job-form').reset();
  document.getElementById('post-job-modal').classList.add('open');
}
function closePostJobModal(event) {
  if (!event || event.target.id === 'post-job-modal' || event.target.classList.contains('modal-close-btn')) {
    document.getElementById('post-job-modal').classList.remove('open');
  }
}
function handlePostJob(event) {
  event.preventDefault();
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  const newJob = {
    id: `job_${Date.now()}`,
    title: document.getElementById('job-title-input').value.trim(),
    company: document.getElementById('job-company-input').value.trim(),
    location: document.getElementById('job-location-input').value.trim(),
    type: document.getElementById('job-type-input').value,
    field: document.getElementById('job-field-input').value.trim(),
    salary: document.getElementById('job-salary-input').value.trim(),
    description: document.getElementById('job-desc-input').value.trim(),
    applyLink: document.getElementById('job-link-input').value.trim(),
    posterEmail: activeUser.email,
    posterName: activeUser.name,
    date: new Date().toISOString()
  };
  DB.jobs.push(newJob);
  saveToStorage();
  closePostJobModal(null);
  triggerAlert(`Job listing "${newJob.title}" published!`);
  // Update landing page job stat
  document.getElementById('stat-jobs-count').textContent = DB.posts.filter(p => p.category === 'Career & Jobs').length + DB.jobs.length;
  renderJobsPage();
}

// =============================================
//  GALLERY PAGE
// =============================================
let galleryFilter = 'All';

function renderGalleryPage() {
  initDatabaseUpgrade();
  const filterRow = document.getElementById('gallery-filter-row');
  const gridContainer = document.getElementById('gallery-grid-container');
  if (!filterRow || !gridContainer) return;

  const categories = ['All', ...new Set(DB.gallery.map(g => g.category))];
  filterRow.innerHTML = categories.map(cat => `
    <button class="gallery-filter-btn ${cat === galleryFilter ? 'active' : ''}" onclick="setGalleryFilter('${cat}')">${cat}</button>
  `).join('');

  const filtered = galleryFilter === 'All' ? DB.gallery : DB.gallery.filter(g => g.category === galleryFilter);

  gridContainer.innerHTML = filtered.map(item => `
    <div class="gallery-item">
      <div style="width:100%;height:100%;background:linear-gradient(135deg, ${item.color}88, ${item.color}22); display:flex; align-items:center; justify-content:center;">
        <div style="text-align:center; color:white; opacity:0.5;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        </div>
      </div>
      <div class="gallery-item-overlay">
        <div class="caption">${item.caption}</div>
        <div class="gallery-cat">${item.category}</div>
      </div>
    </div>
  `).join('');
}

function setGalleryFilter(cat) {
  galleryFilter = cat;
  renderGalleryPage();
}

// =============================================
//  MENTORSHIP HUB
// =============================================
function renderMentorshipPage() {
  initDatabaseUpgrade();
  const container = document.getElementById('mentors-list-container');
  if (!container) return;

  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  const isMentor = DB.mentors && DB.mentors.includes(DB.currentUser);
  const mentorBtn = document.getElementById('become-mentor-btn');
  const mentorLabel = document.getElementById('mentor-btn-label');
  if (mentorLabel) mentorLabel.textContent = isMentor ? 'Withdraw as Mentor' : 'Become a Mentor';
  if (mentorBtn) mentorBtn.style.background = isMentor ? 'rgba(239,68,68,0.15)' : '';

  // Build mentor list from featured members + any who opted in
  const mentorEmails = new Set([
    'kabir.bello@aaua.edu.ng',
    'mariam.adebayo@outlook.com',
    'zainab.alao@lawfirm.com',
    'aminah.audit@pwc.com',
    ...(DB.mentors || [])
  ]);

  const mentorMembers = DB.members.filter(m => mentorEmails.has(m.email) && m.status === 'active');

  if (mentorMembers.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-dark);padding:3rem;grid-column:1/-1;">No mentors available yet. Be the first!</div>';
    return;
  }

  container.innerHTML = mentorMembers.map(m => {
    const skills = MENTOR_SKILLS_MAP[m.department] || ['Professional Guidance', 'Career Advice'];
    const isSelf = m.email === DB.currentUser;
    return `
      <div class="mentor-card">
        <div class="mentor-badge">Mentor</div>
        <img src="${getAvatarUrl(m.avatarSeed, m.name)}" alt="${m.name}">
        <h3>${m.name}</h3>
        <div class="mentor-dept">${m.department} (${m.year}) · ${m.location.split(',')[0]}</div>
        <div class="mentor-skills">
          ${skills.map(s => `<span class="mentor-skill-tag">${s}</span>`).join('')}
        </div>
        ${isSelf
          ? `<div style="font-size:0.8rem;color:var(--text-gray);padding:0.5rem;text-align:center;">You are listed as a mentor</div>`
          : `<button class="mentor-contact-btn" onclick="initiateDirectMessage('${m.email}')">Request Mentorship</button>`
        }
      </div>
    `;
  }).join('');
}

function toggleMentorStatus() {
  if (!DB.currentUser) return;
  initDatabaseUpgrade();
  const idx = DB.mentors.indexOf(DB.currentUser);
  if (idx === -1) {
    DB.mentors.push(DB.currentUser);
    triggerAlert('You are now listed as a mentor! Other alumni can find and contact you.');
  } else {
    DB.mentors.splice(idx, 1);
    triggerAlert('You have been removed from the mentors list.');
  }
  saveToStorage();
  renderMentorshipPage();
}

// =============================================
//  ACCOUNT SETTINGS PAGE
// =============================================
function renderSettingsPage() {
  initDatabaseUpgrade();
  const prefs = DB.notifPrefs || {};
  const privacy = DB.privacyPrefs || {};

  const setPref = (id, val) => { const el = document.getElementById(id); if (el) el.checked = val !== false; };
  setPref('notif-pref-messages', prefs.messages);
  setPref('notif-pref-majlis', prefs.majlis);
  setPref('notif-pref-dues', prefs.dues);
  setPref('notif-pref-events', prefs.events);
  setPref('privacy-show-marital', privacy.showMarital);
  setPref('privacy-allow-dm', privacy.allowDM);

  if (document.getElementById('settings-current-pass')) {
    document.getElementById('settings-current-pass').value = '';
    document.getElementById('settings-new-pass').value = '';
  }
}

function handleChangePassword(event) {
  event.preventDefault();
  const currentPass = document.getElementById('settings-current-pass').value;
  const newPass = document.getElementById('settings-new-pass').value;
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser) return;

  if (activeUser.password !== currentPass) {
    triggerAlert('Current password is incorrect.', true);
    return;
  }
  if (newPass.length < 6) {
    triggerAlert('New password must be at least 6 characters.', true);
    return;
  }
  activeUser.password = newPass;
  saveToStorage();
  triggerAlert('Password updated successfully!');
  document.getElementById('settings-current-pass').value = '';
  document.getElementById('settings-new-pass').value = '';
}

function saveNotifPrefs() {
  initDatabaseUpgrade();
  DB.notifPrefs = {
    messages: document.getElementById('notif-pref-messages')?.checked !== false,
    majlis: document.getElementById('notif-pref-majlis')?.checked !== false,
    dues: document.getElementById('notif-pref-dues')?.checked !== false,
    events: document.getElementById('notif-pref-events')?.checked !== false
  };
  saveToStorage();
  triggerAlert('Notification preferences saved.');
}

function savePrivacyPrefs() {
  initDatabaseUpgrade();
  DB.privacyPrefs = {
    showMarital: document.getElementById('privacy-show-marital')?.checked !== false,
    allowDM: document.getElementById('privacy-allow-dm')?.checked !== false
  };
  saveToStorage();
  triggerAlert('Privacy settings updated.');
}

function handleDeactivateAccount() {
  const confirmed = confirm('Are you sure you want to deactivate your account? You will be logged out and your profile will be suspended.');
  if (!confirmed) return;
  const userIdx = DB.members.findIndex(m => m.email === DB.currentUser);
  if (userIdx !== -1) DB.members[userIdx].status = 'suspended';
  DB.currentUser = null;
  saveToStorage();
  syncAuthUIState();
  triggerAlert('Your account has been deactivated.');
  navigateTo('landing');
}

// =============================================
//  ADMIN ANALYTICS
// =============================================
function renderAnalytics() {
  initDatabaseUpgrade();
  const activeUser = DB.members.find(m => m.email === DB.currentUser);
  if (!activeUser || (activeUser.role !== 'Admin' && activeUser.role !== 'Super Admin')) return;

  // KPIs
  const totalEl = document.getElementById('analytic-total-members');
  const rateEl = document.getElementById('analytic-dues-rate');
  const pendingEl = document.getElementById('analytic-pending');
  const postsEl = document.getElementById('analytic-posts');

  if (totalEl) totalEl.textContent = DB.members.length;
  if (postsEl) postsEl.textContent = DB.posts.length;

  const activeMembers = DB.members.filter(m => m.role === 'Member' && m.status === 'active');
  const paidCount = activeMembers.filter(m => DB.memberDues[m.email.toLowerCase()] === 'Paid').length;
  const duesRate = activeMembers.length > 0 ? Math.round((paidCount / activeMembers.length) * 100) : 0;
  if (rateEl) rateEl.textContent = `${duesRate}%`;

  const pending = DB.members.filter(m => m.status === 'pending').length;
  if (pendingEl) pendingEl.textContent = pending;

  // Department Breakdown
  const deptEl = document.getElementById('analytics-dept-breakdown');
  if (deptEl) {
    const deptCounts = {};
    DB.members.forEach(m => { deptCounts[m.department] = (deptCounts[m.department] || 0) + 1; });
    const max = Math.max(...Object.values(deptCounts), 1);
    deptEl.innerHTML = Object.entries(deptCounts).map(([dept, count]) => `
      <div class="analytics-bar-row">
        <div class="analytics-bar-label">${dept.split(' ')[0]}</div>
        <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width:${Math.round((count/max)*100)}%"></div></div>
        <div class="analytics-bar-count">${count}</div>
      </div>
    `).join('');
  }

  // Employment Breakdown
  const empEl = document.getElementById('analytics-employment-breakdown');
  if (empEl) {
    const empCounts = { 'Employed': 0, 'Self-Employed': 0, 'Unemployed': 0, 'Student': 0 };
    DB.members.forEach(m => { if (empCounts[m.employment] !== undefined) empCounts[m.employment]++; });
    const maxE = Math.max(...Object.values(empCounts), 1);
    empEl.innerHTML = Object.entries(empCounts).map(([emp, count]) => `
      <div class="analytics-bar-row">
        <div class="analytics-bar-label">${emp}</div>
        <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width:${Math.round((count/maxE)*100)}%; background:linear-gradient(90deg,var(--gold-primary),var(--gold-dark));"></div></div>
        <div class="analytics-bar-count" style="color:var(--gold-primary);">${count}</div>
      </div>
    `).join('');
  }
}

// Patch toggleAdminSubView to render analytics when that tab is clicked
const _origToggleAdminSubView = toggleAdminSubView;
toggleAdminSubView = function(tabId) {
  _origToggleAdminSubView(tabId);
  if (tabId === 'analytics') {
    // The sub-view is now shown, render it
    setTimeout(renderAnalytics, 100);
  }
};

// =============================================
//  INITIALIZE NEW DATA ON LOAD
// =============================================
window.addEventListener('DOMContentLoaded', () => {
  // Run upgrade after DB is initialized
  setTimeout(initDatabaseUpgrade, 100);
}, { once: false });

