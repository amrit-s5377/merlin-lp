
gsap.registerPlugin(ScrollTrigger);

/* ── PROPERTY DATA ── */
const DATA = {
  tuscany: {
    tag: 'Merlin Tuscany · Siena, Italy',
    title: 'Merlin <em>Tuscany</em>',
    bg: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=2000&q=90',
    price: '€ 480',
    meta: [
      {k:'Location',v:'Siena, Tuscany'},
      {k:'Suites',v:'48 rooms'},
      {k:'Grounds',v:'12 acres'},
      {k:'Open since',v:'2006'}
    ],
    desc: ['The original Merlin property. Set within a restored 16th-century villa surrounded by private vineyards, Merlin Tuscany has defined the group\'s philosophy since opening in 2006.','Arriving along a cypress-lined driveway, guests enter a courtyard unchanged by centuries. Inside, original frescoes share walls with contemporary Italian design. Every detail has been considered; nothing is superfluous.'],
    rooms: [
      {cat:'Garden Wing', name:'Deluxe Room', price:'€ 480 / night', img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80'},
      {cat:'Main House', name:'Classic Suite', price:'€ 720 / night', img:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80'},
      {cat:'Tower', name:'Junior Suite', price:'€ 980 / night', img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80'},
      {cat:'Private Wing', name:'Grand Suite', price:'€ 1,600 / night', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80'},
    ],
    amenities: ['Heated outdoor pool','10-room thermal spa','Sommelier cellar tours','Estate vineyard & winery','Cooking school','Private chapel','Helicopter landing pad','Ferrari hire','In-suite dining 24h','Personal butler'],
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=400&q=80',
    ]
  },
  amalfi: {
    tag: 'Merlin Amalfi · Positano, Italy',
    title: 'Merlin <em>Amalfi</em>',
    bg: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=2000&q=90',
    price: '€ 680',
    meta: [
      {k:'Location',v:'Positano, Amalfi Coast'},
      {k:'Suites',v:'32 rooms'},
      {k:'Setting',v:'Cliff-side'},
      {k:'Award',v:'Michelin ★ Dining'}
    ],
    desc: ['Carved into a cliff face ninety metres above the Tyrrhenian Sea, Merlin Amalfi is the most dramatic of the three properties. Every suite faces the sea; the sound of waves replaces all other concerns.','The cave spa — accessible only by private boat — is an experience with no analogue. The Michelin-starred restaurant, set within a candlelit grotto, has a three-month waiting list.'],
    rooms: [
      {cat:'Sea View', name:'Sea View Room', price:'€ 680 / night', img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80'},
      {cat:'Terrace', name:'Terrace Suite', price:'€ 1,050 / night', img:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80'},
      {cat:'Cliff Suite', name:'Grotto Suite', price:'€ 1,480 / night', img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80'},
      {cat:'Pinnacle', name:'Penthouse', price:'€ 2,400 / night', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80'},
    ],
    amenities: ['Sea-water infinity pool','Cave spa (boat access)','Private beach club','Michelin ★ restaurant','Water taxi service','Snorkelling & diving','Yacht charter','Glass-floor sauna','Sea-view terraces','24h in-suite dining'],
    gallery: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80',
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=400&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    ]
  },
  alpine: {
    tag: 'Merlin Alpine · Chamonix, France',
    title: 'Merlin <em>Alpine</em>',
    bg: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=2000&q=90',
    price: '€ 920',
    meta: [
      {k:'Location',v:'Chamonix, France'},
      {k:'Suites',v:'24 rooms'},
      {k:'Altitude',v:'1,600 m'},
      {k:'Ski',v:'Ski-in / Ski-out'}
    ],
    desc: ['At 1,600 metres above sea level, Merlin Alpine was built on a singular premise: that the mountain should be visible from every room. Hand-hewn stone and reclaimed Alpine timber give the interior its warmth; the fireplaces give it its soul.','In winter, step directly onto the Grand Montets piste. In summer, the same slopes become trails through wildflower meadows. Mont Blanc fills every window regardless of season.'],
    rooms: [
      {cat:'Mountain Wing', name:'Alpine Room', price:'€ 920 / night', img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80'},
      {cat:'Summit Level', name:'Peak Suite', price:'€ 1,380 / night', img:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80'},
      {cat:'Glacier View', name:'Panorama Suite', price:'€ 1,950 / night', img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80'},
      {cat:'Private Chalet', name:'The Chalet', price:'€ 3,600 / night', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80'},
    ],
    amenities: ['Ski-in / ski-out','Outdoor thermal pool','Fireplace in every suite','Hammam & spa','Personal ski concierge','Snowshoe guides','Fine dining by open fire','Fondue cave experience','Gear & boot room','Heliskiing partnerships'],
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    ]
  }
};

/* ── LOADER ── */
window.addEventListener('load', () => {
  const tl = gsap.timeline();
  tl.to('#loaderLogo', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
    .to('#loaderBar', { width: '100%', duration: 1.4, ease: 'power2.inOut' }, '-=0.3')
    .to('#loaderNum', { innerHTML: '100%', snap: { innerHTML: 1 }, duration: 1.4, ease: 'power2.inOut' }, '<')
    .to('#loader', { yPercent: -100, duration: 0.9, ease: 'power3.inOut', delay: 0.15,
      onComplete: () => { document.getElementById('loader').style.display = 'none'; initLanding(); }
    });
});

function initLanding() {
  /* hero entrance */
  gsap.to('#h-eye',  { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
  gsap.to('#h-title',{ opacity: 1, y: 0, duration: 0.9, delay: 0.28, ease: 'power3.out' });
  gsap.to('#h-sub',  { opacity: 1, y: 0, duration: 0.8, delay: 0.46, ease: 'power3.out' });
  gsap.to('#h-act',  { opacity: 1, y: 0, duration: 0.8, delay: 0.62, ease: 'power3.out' });
  gsap.to('#h-scroll',{ opacity: 1, y: 0, duration: 0.8, delay: 0.84, ease: 'power3.out' });
  initScrollAnimations();
}

function initScrollAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill());

  /* generic .g-up */
  gsap.utils.toArray('.g-up').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  /* .g-scale cards */
  gsap.utils.toArray('.g-scale').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      delay: i * 0.08
    });
  });

  /* .g-right */
  gsap.utils.toArray('.g-right').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });

  /* parallax */
  gsap.to('#parBg', {
    yPercent: 22,
    ease: 'none',
    scrollTrigger: { trigger: '#parSec', start: 'top bottom', end: 'bottom top', scrub: true }
  });
  gsap.to('#ctaBg', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: { trigger: '#cta-sec', start: 'top bottom', end: 'bottom top', scrub: true }
  });

  /* hero bg subtle parallax */
  gsap.to('#heroBg', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });
}

/* ── NAV ── */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  const isHero = window.scrollY < window.innerHeight * 0.85;
  if (window.scrollY > 60) mainNav.classList.add('solid');
  else mainNav.classList.remove('solid');
  if (isHero) mainNav.classList.add('dark-mode');
  else mainNav.classList.remove('dark-mode');
}, { passive: true });
/* init nav mode */
mainNav.classList.add('dark-mode');

/* ── HAMBURGER ── */
const navHam = document.getElementById('navHam');
const mobDrawer = document.getElementById('mobDrawer');
navHam.addEventListener('click', () => {
  navHam.classList.toggle('open');
  mobDrawer.classList.toggle('open');
});
function closeDrawer() {
  navHam.classList.remove('open');
  mobDrawer.classList.remove('open');
}

/* ── HELPERS ── */
function smoothScrollTo(id) {
  closeDrawer();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── PAGE TRANSITIONS ── */
function goHome() {
  closeDrawer();
  gsap.to('#detailPg', {
    opacity: 0, y: 20, duration: 0.4, ease: 'power2.in',
    onComplete: () => {
      document.getElementById('detailPg').classList.remove('active');
      document.getElementById('landingPg').classList.add('active');
      gsap.fromTo('#landingPg', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
      window.scrollTo({ top: 0 });
      mainNav.classList.add('dark-mode');
      setTimeout(initScrollAnimations, 50);
    }
  });
}

function openDetail(key) {
  const d = DATA[key];

  /* fill content */
  document.getElementById('dHeroBg').style.backgroundImage = `url('${d.bg}')`;
  document.getElementById('dTag').textContent = d.tag;
  document.getElementById('dTitle').innerHTML = d.title;
  document.getElementById('dMeta').innerHTML = d.meta.map(m => `<div class="d-meta-item"><strong>${m.v}</strong> · ${m.k}</div>`).join('');

  /* booking card */
  document.getElementById('bcName').textContent = d.tag.split('·')[0].trim();
  document.getElementById('bcPrice').innerHTML = `${d.price} <span>/ night</span>`;
  document.getElementById('bcRooms').innerHTML = d.rooms.map(r => `<option>${r.name} — ${r.price}</option>`).join('');
  const t = new Date(), t2 = new Date(); t2.setDate(t.getDate()+3);
  document.getElementById('bcIn').value  = t.toISOString().split('T')[0];
  document.getElementById('bcOut').value = t2.toISOString().split('T')[0];

  /* main content */
  const descHTML   = d.desc.map(p => `<p>${p}</p>`).join('');
  const roomsHTML  = d.rooms.map(r => `
    <div class="d-room">
      <div class="img-wrap"><img src="${r.img}" alt="${r.name}" loading="lazy"></div>
      <div class="d-room-info">
        <div class="d-room-cat">${r.cat}</div>
        <div class="d-room-name">${r.name}</div>
        <div class="d-room-price">${r.price}</div>
      </div>
    </div>`).join('');
  const amenHTML   = d.amenities.map(a => `<div class="d-amen-item">${a}</div>`).join('');
  const galleryHTML = d.gallery.map((g,i) => `<div class="g-img"><img src="${g}" alt="Gallery ${i+1}" loading="lazy"></div>`).join('');

  document.getElementById('dMain').innerHTML = `
    <section>
      <div class="s-label">Overview</div>
      <h3>About the Property</h3>
      ${descHTML}
    </section>
    <section>
      <div class="s-label">Accommodations</div>
      <h3>Rooms &amp; Suites</h3>
      <div class="d-rooms">${roomsHTML}</div>
    </section>
    <section>
      <div class="s-label">Facilities</div>
      <h3>Amenities &amp; Services</h3>
      <div class="d-amen-grid">${amenHTML}</div>
    </section>
    <section>
      <div class="s-label">Gallery</div>
      <h3>The Property in Images</h3>
      <div class="d-gallery">${galleryHTML}</div>
    </section>`;

  /* transition */
  gsap.to('#landingPg', {
    opacity: 0, y: -16, duration: 0.38, ease: 'power2.in',
    onComplete: () => {
      document.getElementById('landingPg').classList.remove('active');
      document.getElementById('detailPg').classList.add('active');
      window.scrollTo({ top: 0 });
      mainNav.classList.remove('dark-mode');
      mainNav.classList.add('solid');
      gsap.fromTo('#detailPg', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' });

      /* detail page parallax */
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.to('#dHeroBg', {
        yPercent: 16, ease: 'none',
        scrollTrigger: { trigger: '.d-hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    }
  });
}
