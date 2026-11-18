/* =====================================================================
   Lucky Verma (Lokesh) – portfolio scripts
   Edit the DATA section below to change content; no HTML edits needed.
   ===================================================================== */

/* ------------------------------ DATA ------------------------------ */
const CONTACT_EMAIL = 'showmeyouripfastfast@gmail.com';
const WHATSAPP_NUMBER = '919643388118';          // digits only, with country code
const WHATSAPP_DISPLAY = '+91 96433 88118';
const LINKEDIN_URL = 'https://www.linkedin.com/in/lokesh-chand-verma';

const certificates = [
  { img: 'certificates/internship-certificate.png',
    title: 'Full Stack Web Development Internship – Codomax Digital Solutions',
    text: 'Completed a 1-month internship in Full Stack Web Development at Codomax Digital Solutions (15 Oct 2026 – 14 Nov 2026). Certificate ID: CDM/CERT/334684.' },
  { img: 'certificates/ux-design-certificate.jpg',
    title: 'Foundations of User Experience (UX) Design – Google',
    text: 'Completed the Google course on the foundations of UX design, offered through Coursera (23 Mar 2026).' },
  { img: 'certificates/data-analytics-certificate.jpg',
    title: 'Foundations: Data, Data, Everywhere – Google',
    text: 'Completed the Google course on data analytics foundations, offered through Coursera (23 Mar 2026).' },
];

const skillGroups = [
  { group: 'FRONTEND', items: [
    { name: 'HTML5', mark: 'HTML5', text: 'Semantic, accessible markup that gives every page a solid, search-friendly structure.' },
    { name: 'CSS3', mark: 'CSS3', text: 'Responsive layouts with Flexbox and Grid, plus animations and transitions.' },
    { name: 'Tailwind CSS', mark: 'TW', text: 'Utility-first CSS for building fast, consistent and responsive interfaces.' },
    { name: 'JavaScript', mark: 'JS', text: 'Interactive, dynamic behaviour in the browser and on the server.' },
  ]},
  { group: 'MERN STACK', items: [
    { name: 'MongoDB', mark: 'MDB', text: 'NoSQL document database – the "M" in MERN.' },
    { name: 'Express.js', mark: 'EX', text: 'Minimal Node.js framework for building servers and APIs – the "E" in MERN.' },
    { name: 'React.js', mark: 'RE', text: 'Component-based library for building interactive user interfaces – the "R" in MERN.' },
    { name: 'Node.js', mark: 'NODE', text: 'JavaScript runtime for back-end services – the "N" in MERN.' },
  ]},
  { group: 'FRAMEWORK, DATABASE & APIs', items: [
    { name: 'Next.js', mark: 'NEXT', text: 'React framework for routing, server rendering and fast, SEO-friendly websites.' },
    { name: 'MySQL', mark: 'SQL', text: 'Relational database: tables, queries and joins.' },
    { name: 'API', mark: 'API', text: 'Connecting front ends to services and third-party data.' },
    { name: 'RESTful APIs', mark: 'REST', text: 'Designing and consuming REST endpoints (GET, POST, PUT, DELETE) that exchange JSON.' },
  ]},
  { group: 'LANGUAGE & TOOLS', items: [
    { name: 'Python', mark: 'PY', text: 'General-purpose programming and scripting language.' },
    { name: 'Git', mark: 'GIT', text: 'Version control: commits, branches and merges.' },
    { name: 'GitHub', mark: 'GH', text: 'Hosting code, collaborating and reviewing changes through pull requests.' },
  ]},
];


/* Inline SVG icons (white on the black card). Keys match skill names. */
const T = (x, y, size, txt, fill = '#000', font = 'Arial,sans-serif', w = 800) =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="${w}" font-family="${font}" fill="${fill}">${txt}</text>`;
const PY = 'M11.9 2C7.3 2 7.6 4 7.6 4v2.1H12v.7H5.9S3 6.5 3 11.2s2.5 4.5 2.5 4.5H7v-2.2s-.1-2.5 2.5-2.5h4.3s2.4 0 2.4-2.3V4.3S16.6 2 11.9 2z';
const ICONS = {
  'HTML5': ['0 0 24 24', '<path fill="currentColor" d="M3 2l1.6 18L12 22l7.4-2L21 2z"/>' + T(12, 16.2, 12, '5')],
  'CSS3': ['0 0 24 24', '<path fill="currentColor" d="M3 2l1.6 18L12 22l7.4-2L21 2z"/>' + T(12, 16.2, 12, '3')],
  'Tailwind CSS': ['0 0 24 24', '<path fill="currentColor" d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.200 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.300 13.400 9 12 6 12z"/>'],
  'JavaScript': ['0 0 24 24', '<rect x="2" y="2" width="20" height="20" rx="2.5" fill="currentColor"/>' + T(15.6, 19.2, 10.5, 'JS')],
  'Next.js': ['0 0 24 24', '<circle cx="12" cy="12" r="10.5" fill="currentColor"/>' + T(12, 16.4, 12.5, 'N')],
  'MongoDB': ['0 0 24 24', '<path fill="currentColor" d="M12 1.5s-6 6-6 12.2c0 3.6 2.4 6.300 5.200 7.300L11.400 23h1.200l.2-2c2.800-1 5.200-3.700 5.200-7.300C18 7.500 12 1.500 12 1.500z"/><path d="M12 6v14" stroke="#000" stroke-width="1"/>'],
  'Express.js': ['0 0 24 24', T(12, 16.5, 15, 'ex', 'currentColor', 'Georgia,serif', 700)],
  'React.js': ['0 0 24 24', '<g fill="none" stroke="currentColor" stroke-width="1.2"><ellipse cx="12" cy="12" rx="10.5" ry="4.2"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)"/></g><circle cx="12" cy="12" r="2" fill="currentColor"/>'],
  'Node.js': ['0 0 24 24', '<path fill="currentColor" d="M12 1.500l9 5.200v10.600l-9 5.200-9-5.200V6.700z"/>' + T(12, 15.4, 8.5, 'JS')],
  'MySQL': ['0 0 24 24', '<g fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5.500" rx="7.500" ry="3"/><path d="M4.500 5.500v13c0 1.700 3.400 3 7.500 3s7.500-1.300 7.500-3v-13"/><path d="M4.500 12c0 1.700 3.400 3 7.500 3s7.500-1.300 7.500-3"/></g>'],
  'API': ['0 0 24 24', '<rect x="2" y="5" width="20" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>' + T(12, 15.2, 7.5, 'API', 'currentColor')],
  'RESTful APIs': ['0 0 24 24', '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h17M16 4l4 4-4 4"/><path d="M21 16H4M8 12l-4 4 4 4"/></g>'],
  'Python': ['0 0 24 24', `<g fill="currentColor"><path d="${PY}"/><path transform="rotate(180 12 12)" d="${PY}"/></g><circle cx="9.300" cy="4.300" r=".9" fill="#000"/><circle cx="14.700" cy="19.700" r=".9" fill="#000"/>`],
  'Git': ['0 0 24 24', '<rect x="3.500" y="3.500" width="17" height="17" rx="2.500" transform="rotate(45 12 12)" fill="currentColor"/><path d="M9 9.500v5M9 11c3 0 4 .3 5 1" stroke="#000" stroke-width="1.300" fill="none"/><g fill="#000"><circle cx="9" cy="8.500" r="1.500"/><circle cx="9" cy="15.500" r="1.500"/><circle cx="15" cy="12" r="1.500"/></g>'],
  'GitHub': ['0 0 16 16', '<path fill="currentColor" d="M8 0c4.420 0 8 3.580 8 8a8.013 8.013 0 0 1-5.450 7.590c-.4.080-.55-.170-.55-.380 0-.270.010-1.130.010-2.200 0-.750-.250-1.230-.540-1.480 1.780-.2 3.650-.880 3.650-3.950 0-.880-.310-1.590-.820-2.150.080-.2.360-1.020-.080-2.120 0 0-.670-.220-2.200.820-.640-.180-1.320-.270-2-.270-.680 0-1.360.090-2 .270-1.530-1.030-2.200-.820-2.200-.820-.440 1.100-.160 1.920-.080 2.120-.510.560-.820 1.280-.820 2.150 0 3.060 1.860 3.750 3.640 3.950-.230.200-.440.550-.510 1.070-.460.210-1.610.550-2.330-.660-.150-.240-.600-.830-1.230-.820-.670.010-.270.380.010.530.340.190.730.900.820 1.130.160.450.680 1.310 2.690.940 0 .670.010 1.300.010 1.490 0 .210-.150.450-.550.380A7.995 7.995 0 0 1 0 8c0-4.420 3.580-8 8-8Z"/>'],
};
const iconSvg = (name, fallback) => ICONS[name]
  ? `<div class="ico"><svg viewBox="${ICONS[name][0]}" aria-hidden="true">${ICONS[name][1]}</svg></div>`
  : `<div class="mono">${esc(fallback)}</div>`;

const projects = [
  { title: 'Angel Web Creations', img: 'project-images/angel-web-creations.jpg', tag: 'SEO-BASED WEBSITE · FULL STACK',
    url: 'https://angel-web-creations.vercel.app/',
    text: 'A studio website for SEO websites, full stack web apps, browser extensions and smooth 3D experiences – built to be found first, with clean semantic code, structured data and fast Core Web Vitals.' },
  { title: 'Aural Headphones', img: 'project-images/aural.jpg', tag: 'SEO-BASED WEBSITE · 3D SCROLL',
    url: 'https://aural-site-livid.vercel.app/',
    text: 'A headphone store with a scroll-driven 3D experience, built SEO first: six models with specs, product details and a shopping bag.' },
  { title: 'Xincord', img: 'project-images/xincord.jpg', tag: 'SEO-BASED WEB APP · SOCIAL',
    url: 'https://xincord.vercel.app/',
    text: 'A social web experience that blends Instagram, Discord, Twitter and reels – photo feed, stories, trending topics and friend suggestions.' },
  { title: 'Tesla Scroll Experience', img: 'project-images/tesla.jpg', tag: 'SEO-BASED WEBSITE · SCROLL',
    url: 'https://tesla-scroll-site-ebon.vercel.app/',
    text: 'A cinematic, scroll-driven Tesla experience: each scroll moves through a new chapter, with feature call-outs and a progress indicator.' },
];

/* ---------------------------- HELPERS ----------------------------- */
const INTRO_MS = 5000;   // keep in sync with --intro-ms in style.css
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ------------------------------ INTRO ----------------------------- */
function unlockSite() {
  const intro = $('introSection');
  if (intro) intro.style.display = 'none';
  document.body.classList.add('unlocked');
  startCounters();
}
window.addEventListener('load', () => {
  const intro = $('introSection');
  if (!intro) return;
  if (sessionStorage.getItem('introSeen')) {
    document.body.classList.add('skip-intro');
    document.documentElement.style.setProperty('--intro-ms', '0ms');
    unlockSite();
    return;
  }
  setTimeout(() => {
    intro.classList.add('fade-out');
    setTimeout(() => { sessionStorage.setItem('introSeen', '1'); unlockSite(); }, 1000);
  }, INTRO_MS);
});

/* ------------------------------ MODALS ---------------------------- */
function openModal(src) { $('certificateModal').style.display = 'block'; $('modalImage').src = src; }
function closeModal() { $('certificateModal').style.display = 'none'; }
function closeSkillModal() { $('skillsmodal').style.display = 'none'; }
function openSkillModal(name, category, text) {
  $('skill-name').textContent = 'Skill : ' + name;
  $('experience').textContent = 'Category : ' + category;
  $('details').textContent = text;
  $('skillsmodal').style.display = 'block';
}
window.addEventListener('click', (e) => {
  if (e.target === $('certificateModal')) closeModal();
  if (e.target === $('skillsmodal')) closeSkillModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeSkillModal(); }
});

/* --------------------- MENU + SCROLL HIGHLIGHT -------------------- */
const mobileMenu = $('mobile-menu');
$('mob-menu').addEventListener('click', () => mobileMenu.classList.add('active'));
$('mob-menu-close').addEventListener('click', () => mobileMenu.classList.remove('active'));
document.querySelectorAll('.mobile-menu a, .vertival-menu a').forEach((a) =>
  a.addEventListener('click', () => mobileMenu.classList.remove('active')));

function setActive(id) {
  document.querySelectorAll('.mobile-menu a, .vertival-menu a').forEach((a) =>
    a.classList.toggle('active', a.getAttribute('href') === '#' + id));
}
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.dataset.spy); });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('[data-spy]').forEach((el) => spy.observe(el));

/* ----------------------------- COUNTERS --------------------------- */
function startCounters() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count, 10) || 0, suffix = el.dataset.suffix || '';
    let n = 0;
    const t = setInterval(() => {
      el.textContent = ++n + suffix;
      if (n >= target) clearInterval(t);
    }, Math.max(30, Math.round(1200 / Math.max(target, 1))));
  });
}

/* ---------------------------- CERTIFICATES ------------------------ */
$('certificateList').innerHTML = '';
certificates.forEach((c, i) => {
  const item = document.createElement('div');
  item.className = 'certificate-item';
  item.tabIndex = 0;
  item.setAttribute('role', 'button');
  item.setAttribute('aria-label', 'Open certificate: ' + c.title);
  item.innerHTML = `<img src="${esc(c.img)}" alt="${esc(c.title)}"><h3>${i + 1}. ${esc(c.title)}</h3><p>${esc(c.text)}</p>`;
  item.addEventListener('click', () => openModal(c.img));
  item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(c.img); } });
  $('certificateList').appendChild(item);
});

/* ------------------------------ SKILLS ---------------------------- */
$('skillGroups').innerHTML = skillGroups.map((g) =>
  `<div class="skill-group"><h2>${esc(g.group)}</h2><div class="row">` +
  g.items.map((s) => `<div class="skill-card" tabindex="0" role="button" data-name="${esc(s.name)}" data-group="${esc(g.group)}">
      <div class="upper">${iconSvg(s.name, s.mark)}</div><div class="lower"><h3>${esc(s.name)}</h3></div></div>`).join('') +
  '</div></div>').join('');
const skillIndex = Object.fromEntries(skillGroups.flatMap((g) => g.items.map((s) => [s.name, s])));
document.querySelectorAll('.skill-card').forEach((card) => {
  const open = () => openSkillModal(card.dataset.name, card.dataset.group, skillIndex[card.dataset.name].text);
  card.addEventListener('click', open);
  card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
});

/* ----------------------------- PROJECTS --------------------------- */
$('projectList').innerHTML = projects.map((p) =>
  `<a class="project-item" href="${esc(p.url)}" target="_blank" rel="noopener">
     <img class="proj-shot" src="${esc(p.img)}" alt="${esc(p.title)} website screenshot" loading="lazy">
     <div class="project-details"><h2>${esc(p.title)}</h2><h3>${esc(p.tag)}</h3><h4>${esc(p.text)}</h4><span class="visit">VISIT LIVE SITE ↗</span></div>
   </a>`).join('') +
  `<a class="project-item more" href="${LINKEDIN_URL}" target="_blank" rel="noopener">
     <div class="proj-mark">30+</div>
     <div class="project-details"><h2>Many more projects</h2><h4>Websites, web apps and experiments across the full stack – from landing pages to MERN apps. See all of them on LinkedIn.</h4><span class="visit">SEE MORE ON LINKEDIN ↗</span></div>
   </a>`;

/* ------------------------------ CONTACT --------------------------- */
$('contactLinks').innerHTML =
  `Email : <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a><br>` +
  `WhatsApp : <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">${WHATSAPP_DISPLAY}</a><br>` +
  `LinkedIn : <a href="${LINKEDIN_URL}" target="_blank" rel="noopener">linkedin.com/in/lokesh-chand-verma</a>`;

$('sendBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const name = $('cName').value.trim(), email = $('cEmail').value.trim(), msg = $('cMsg').value.trim(), via = $('cVia').value;
  const status = $('contactStatus');
  if (!name || !msg || (via === 'email' && !email)) {
    status.textContent = via === 'email' ? 'Please fill in your name, email and message.' : 'Please fill in your name and message.';
    return;
  }
  const body = `${msg}\n\n– ${name}${email ? ' (' + email + ')' : ''}`;
  if (via === 'whatsapp') {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
    status.textContent = 'Opening WhatsApp…';
  } else {
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Portfolio message from ' + name)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Opening your email app…';
  }
});

$('currentYear').textContent = new Date().getFullYear();
