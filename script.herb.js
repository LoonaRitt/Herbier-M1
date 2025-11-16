const PLANCHES = [
  {
  id: "LR001",
  images: [
    { src: "images/LR001-1.jpg", label: "Planche" },
    { src: "images/LR001-2.jpg", label: "Avant récolte" }
  ],
  latin: "Helianthus annuus L.",
  commun: "Tournesol",
  famille: "Asteraceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-001"
},
{
  id: "LR002",
  images: [
    { src: "images/LR002-1.jpg", label: "Planche" },
    { src: "images/LR002-2.jpg", label: "Avant récolte" }
  ],
  latin: "Mercurialis annua L.",
  commun: "Mercuriale annuelle",
  famille: "Euphorbiaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-002"
},
{
  id: "LR003",
  images: [
    { src: "images/LR003-1.jpg", label: "Planche" },
    { src: "images/LR003-2.jpg", label: "Avant récolte" }
  ],
  latin: "Echinochloa crus-galli (L.) P.Beauv",
  commun: "Borgou pied-de-coq",
  famille: "Poaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-003"
},
{
  id: "LR004",
  images: [
    { src: "images/LR004-1.jpg", label: "Planche" },
    { src: "images/LR004-2.jpg", label: "Avant récolte" }
  ],
  latin: "Brassica montana Pourr.",
  commun: "Chou des montagnes",
  famille: "Brassicaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-004"
},
{
  id: "LR005",
  images: [
    { src: "images/LR005-1.jpg", label: "Planche" },
    { src: "images/LR005-2.jpg", label: "Avant récolte" }
  ],
  latin: "Plantago major L.",
  commun: "Grand plantain",
  famille: "Plantaginaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-005"
},
{
  id: "LR006",
  images: [
    { src: "images/LR006-1.jpg", label: "Planche" },
    { src: "images/LR006-2.jpg", label: "Avant récolte" }
  ],
  latin: "Reseda phyteuma L.",
  commun: "Réséda raiponce",
  famille: "Resedaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-006"
},
{
  id: "LR007",
  images: [
    { src: "images/LR007-1.jpg", label: "Planche" },
    { src: "images/LR007-2.jpg", label: "Avant récolte" }
  ],
  latin: "Potentilla reptans L.",
  commun: "Potentille rampante",
  famille: "Rosaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-007"
},
{
  id: "LR008",
  images: [
    { src: "images/LR008-1.jpg", label: "Planche" },
    { src: "images/LR008-2.jpg", label: "Avant récolte" }
  ],
  latin: "Heliotropium europaeum L.",
  commun: "Héliotrope d’Europe",
  famille: "Boraginaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-008"
},
{
  id: "LR009",
  images: [
    { src: "images/LR009-1.jpg", label: "Planche" },
    { src: "images/LR009-2.jpg", label: "Avant récolte" }
  ],
  latin: "Solanum nigrum L.",
  commun: "Morelle noire",
  famille: "Solanaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-009"
},
{
  id: "LR010",
  images: [
    { src: "images/LR010-1.jpg", label: "Planche" },
    { src: "images/LR010-2.jpg", label: "Avant récolte" }
  ],
  latin: "Portulaca oleracea L.",
  commun: "Pourpier maraîcher",
  famille: "Portulacaceae",
  date: "2025-10-01",
  lieu: "Auriac-sur-Vendinelle, France",
  coords: "43.5130, 1.8040",
  collecteur: "Loona Ritt",
  reference: "LR-010"
}
];

// ========= État / Références DOM =========
let index = 0;
let autoplay = false;
let timer = null;

const stage = document.getElementById('stage');
const thumbs = document.getElementById('thumbs');

const elLatin = document.getElementById('latin');
const elCommon = document.getElementById('common');
const elTags = document.getElementById('tags');
const elFamily = document.getElementById('family');
const elDate = document.getElementById('date');
const elLocation = document.getElementById('location');
const elCoords = document.getElementById('coords');
const elCollector = document.getElementById('collector');
const elRef = document.getElementById('ref');
const elNotes = document.getElementById('notes');

const progressFill = document.getElementById('progressFill');

const btnPrev = document.getElementById('prevBtn');
const btnNext = document.getElementById('nextBtn');
const btnAutoplay = document.getElementById('btnAutoplay');
const btnShuffle = document.getElementById('btnShuffle');

// ========= Helpers =========
const clamp = (n, min, max)=> Math.max(min, Math.min(max, n));
const getPhotos = (p) => Array.isArray(p.images) && p.images.length
  ? p.images
  : (p.image ? [{src: p.image, label: "Photo"}] : []);

// mémorise la photo sélectionnée par planche (index de la photo)
const selectedPhotoIndex = new Map();
const getSel = (i)=> selectedPhotoIndex.get(i) ?? 0;
const setSel = (i,v)=> selectedPhotoIndex.set(i, v);

// ========= Slides (image principale) =========
function buildSlides(){
  stage.innerHTML = '';
  PLANCHES.forEach((p, i)=>{
    const div = document.createElement('div');
    div.className = 'slide' + (i===index? ' active':'');
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = `${p.latin || ""} — ${p.commun || ""}`.trim();
    const photos = getPhotos(p);
    const sel = getSel(i);
    img.src = photos[sel]?.src || photos[0]?.src || "";
    img.onerror = ()=> {
      div.innerHTML = `<div style="padding:18px;color:#9fb0c3;text-align:center">Image introuvable <code>${photos[sel]?.src || photos[0]?.src}</code></div>`;
    };
    div.appendChild(img);
    stage.appendChild(div);
  });

  // construit/maj la colonne de miniatures pour la planche visible
  buildAltColumnFor(index);
}

// ========= Colonne de vignettes (en haut à droite) =========
let altColumn = null;

function ensureAltColumn(){
  if(altColumn) return altColumn;
  const viewer = document.querySelector('.viewer');
  if(!viewer) return null;
  altColumn = document.createElement('div');
  altColumn.className = 'alt-column';
  viewer.appendChild(altColumn);
  return altColumn;
}

function buildAltColumnFor(plancheIdx){
  const col = ensureAltColumn();
  if(!col) return;
  col.innerHTML = '';

  const p = PLANCHES[plancheIdx];
  const photos = getPhotos(p);
  const sel = getSel(plancheIdx);

  photos.forEach((ph, j)=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'alt-thumb' + (j===sel ? ' active' : '');
    btn.title = ph.label || `Photo ${j+1}`;
    btn.innerHTML = `<img src="${ph.src}" alt="${ph.label || `Photo ${j+1}`}">`;
    btn.addEventListener('click', ()=>{
      setSel(plancheIdx, j);
      const slide = stage.children[plancheIdx];
      const img = slide?.querySelector('img');
      if(img) img.src = ph.src;
      [...col.children].forEach(c=> c.classList.remove('active'));
      btn.classList.add('active');
    });
    col.appendChild(btn);
  });
}

// ========= Thumbs (barre du bas) =========
function buildThumbs(){
  thumbs.innerHTML = '';
  PLANCHES.forEach((p, i)=>{
    const t = document.createElement('button');
    t.className = 'thumb' + (i===index? ' active':'');
    t.setAttribute('aria-label', `Aller à ${p.latin || p.commun || `planche ${i+1}`}`);
    const img = document.createElement('img');
    const first = getPhotos(p)[0];
    img.src = first?.src || '';
    img.alt=''; img.loading='lazy';
    t.appendChild(img);
    t.addEventListener('click', ()=> goTo(i));
    thumbs.appendChild(t);
  });
}

// ========= Métadonnées =========
function renderMeta(){
  const p = PLANCHES[index];
  elLatin.textContent = p.latin || '—';
  elCommon.textContent = p.commun || '';
  elFamily.textContent = p.famille || '—';
  elDate.textContent = p.date || '—';
  elLocation.textContent = p.lieu || '—';
  elCoords.textContent = p.coords || '—';
  elCollector.textContent = p.collecteur || '—';
  elRef.textContent = p.reference || '—';
  elNotes.textContent = p.notes || '—';

  elTags.innerHTML = '';
  (p.tags || []).forEach(t=>{
    const span = document.createElement('span');
    span.className='tag'; span.textContent = t; elTags.appendChild(span);
  });

  const pct = (index+1)/PLANCHES.length*100;
  progressFill.style.width = pct.toFixed(2) + '%';

  if(location.hash.replace('#','') !== p.id){
    history.replaceState(null, '', `#${p.id}`);
  }

  [...thumbs.children].forEach((c,i)=> c.classList.toggle('active', i===index));
  btnPrev.disabled = (index===0);
  btnNext.disabled = (index===PLANCHES.length-1);
}

// ========= Navigation =========
function goTo(i){
  const newIndex = clamp(i, 0, PLANCHES.length-1);
  if(newIndex === index) return;
  const slides = stage.children;
  slides[index]?.classList.remove('active');
  index = newIndex;
  slides[index]?.classList.add('active');
  renderMeta();
  buildAltColumnFor(index);
  // précharge suivante
  const next = getPhotos(PLANCHES[index+1] || [])[0]?.src;
  if(next){ new Image().src = next; }
}

function next(){ goTo(index+1); }
function prev(){ goTo(index-1); }

function toggleAutoplay(force){
  autoplay = typeof force === 'boolean' ? force : !autoplay;
  btnAutoplay.setAttribute('aria-pressed', String(autoplay));
  btnAutoplay.textContent = autoplay ? '⏸ Pause' : '▶ Lecture';
  clearInterval(timer);
  if(autoplay){
    timer = setInterval(()=>{
      if(index >= PLANCHES.length-1){ toggleAutoplay(false); return; }
      next();
    }, 3500);
  }
}

function shuffle(){
  const current = PLANCHES[index];
  const rest = PLANCHES.filter((_,i)=> i!==index);
  for(let i=rest.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  const mixed = [current, ...rest];
  PLANCHES.length = 0; PLANCHES.push(...mixed);
  index = 0;
  buildSlides();
  buildThumbs();
  renderMeta();
}

// ========= Gestes & clavier =========
btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);
btnAutoplay.addEventListener('click', ()=> toggleAutoplay());
btnShuffle.addEventListener('click', shuffle);

document.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowRight'){ next(); }
  else if(e.key === 'ArrowLeft'){ prev(); }
  else if(e.code === 'Space'){ e.preventDefault(); toggleAutoplay(); }
});

// Swipe
let startX = 0, startY = 0, dragging = false;
stage.addEventListener('touchstart', (e)=>{
  if(!e.touches[0]) return; dragging = true; startX = e.touches[0].clientX; startY = e.touches[0].clientY;
}, {passive:true});
stage.addEventListener('touchend', (e)=>{
  if(!dragging) return; dragging=false;
  const dx = (e.changedTouches[0]?.clientX || 0) - startX;
  const dy = (e.changedTouches[0]?.clientY || 0) - startY;
  if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){
    dx < 0 ? next() : prev();
  }
}, {passive:true});

// Hash
window.addEventListener('hashchange', ()=>{
  const id = location.hash.replace('#','');
  const i = PLANCHES.findIndex(p=> p.id === id);
  if(i>=0) goTo(i);
});

// ========= Init =========
(function init(){
  if(!PLANCHES.length){
    stage.innerHTML = '<div class="slide active"><div style="padding:40px; text-align:center; color:#9fb0c3">Aucune planche. Ajoutez des éléments dans <code>PLANCHES</code>.</div></div>';
    return;
  }
  const hashId = location.hash.replace('#','');
  const i = PLANCHES.findIndex(p=> p.id === hashId);
  index = i>=0? i : 0;
  buildSlides();
  buildThumbs();
  renderMeta();
})();














/* ===== HERO — Données (images champ-1 à champ-5) ===== */
const HERO = {
  images: [
    "images/champ-1.jpg",
    "images/champ-2.jpg",
    "images/champ-3.jpg",
    "images/champ-4.jpg",
    "images/champ-5.jpg"
  ],
  ville: "Auriac-sur-Vendinelle, 31460 France",
  meteo: "Ensoleillé, 21°C · vent faible",
  date: "2025-10-01",
  statut_champ: "Non biologique",
  notes: "Collecte d’adventices dans un champ de tournesol en post-récolte."
};

/* ===== HERO — État ===== */
let heroIndex = 0;
let heroPlaying = true;
let heroTimer = null;
const heroDelay = 4000;

/* ===== HERO — Références DOM (récupérées au build) ===== */
let heroStage, heroDots, heroVille, heroMeteo, heroDate, heroStatut, heroNotes, heroPrev, heroNext, heroPlay;
let heroBound = false;

/* ===== HERO — Helpers ===== */
function heroSetAspectFromFirstImage(){
  if(!heroStage) return;
  const first = heroStage.querySelector('img');
  if(!first) return;
  const apply = ()=>{
    const w = first.naturalWidth, h = first.naturalHeight;
  };
  if(first.complete) apply(); else first.addEventListener('load', apply, {once:true});
}

/* ===== HERO — Build ===== */
function buildHero(){
  // Récupère les éléments (fonctionne même sans <script defer>)
  heroStage  = document.getElementById('heroStage');
  heroDots   = document.getElementById('heroDots');
  heroVille  = document.getElementById('heroVille');
  heroMeteo  = document.getElementById('heroMeteo');
  heroDate   = document.getElementById('heroDate');
  heroStatut = document.getElementById('heroStatut');
  heroNotes  = document.getElementById('heroNotes');
  heroPrev   = document.getElementById('heroPrev');
  heroNext   = document.getElementById('heroNext');
  heroPlay   = document.getElementById('heroPlay');

  if(!heroStage || !heroDots || !heroVille || !heroMeteo || !heroDate || !heroStatut || !heroNotes) return;

  // Slides
  heroStage.innerHTML = '';
  HERO.images.forEach((src, i)=>{
    const s = document.createElement('div');
    s.className = 'hero-slide' + (i===heroIndex ? ' active':'');
    const img = document.createElement('img');
    img.src = src; img.alt = `Champ — vue ${i+1}`; img.loading = 'eager';
    img.onerror = ()=>{ s.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:18px;color:#9fb0c3;text-align:center">Image introuvable : <code>${src}</code></div>`; };
    s.appendChild(img);
    heroStage.appendChild(s);
  });

  // Dots
  heroDots.innerHTML = '';
  HERO.images.forEach((_, i)=>{
    const b = document.createElement('button');
    if(i===heroIndex) b.classList.add('active');
    b.setAttribute('aria-label', `Aller à l'image ${i+1}`);
    b.addEventListener('click', ()=> heroGoTo(i));
    heroDots.appendChild(b);
  });

  // Métadonnées
  heroVille.textContent  = HERO.ville || '—';
  heroMeteo.textContent  = HERO.meteo || '—';
  heroDate.textContent   = HERO.date || '—';
  heroStatut.textContent = HERO.statut_champ || '—';
  heroNotes.textContent  = HERO.notes || '—';

  // Contrôles (branchés une seule fois)
  if(!heroBound && heroPrev && heroNext && heroPlay){
    heroPrev.addEventListener('click', heroPrevImg);
    heroNext.addEventListener('click', heroNextImg);
    heroPlay.addEventListener('click', ()=> heroTogglePlay());
    // Swipe
    let hx0=0, hy0=0, hdrag=false;
    heroStage.addEventListener('touchstart', (e)=>{ if(!e.touches[0]) return; hdrag=true; hx0=e.touches[0].clientX; hy0=e.touches[0].clientY; }, {passive:true});
    heroStage.addEventListener('touchend', (e)=>{
      if(!hdrag) return; hdrag=false;
      const dx=(e.changedTouches[0]?.clientX||0)-hx0, dy=(e.changedTouches[0]?.clientY||0)-hy0;
      if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)){ dx<0 ? heroNextImg() : heroPrevImg(); }
    }, {passive:true});
    heroBound = true;
  }

  heroSetAspectFromFirstImage();
}

function heroGoTo(i){
  if(!heroStage || !heroDots) return;
  const slides = heroStage.children;
  slides[heroIndex]?.classList.remove('active');
  heroDots.children[heroIndex]?.classList.remove('active');
  heroIndex = (i + HERO.images.length) % HERO.images.length;
  slides[heroIndex]?.classList.add('active');
  heroDots.children[heroIndex]?.classList.add('active');

  // Précharge suivante
  const next = HERO.images[(heroIndex+1)%HERO.images.length];
  if(next) new Image().src = next;
}

function heroNextImg(){ heroGoTo(heroIndex+1); }
function heroPrevImg(){ heroGoTo(heroIndex-1); }

function heroTogglePlay(force){
  heroPlaying = typeof force === 'boolean' ? force : !heroPlaying;
  if(heroPlay){
    heroPlay.textContent = heroPlaying ? '⏸ Pause' : '▶ Lecture';
    heroPlay.setAttribute('aria-pressed', String(heroPlaying));
  }
  clearInterval(heroTimer);
  if(heroPlaying) heroTimer = setInterval(heroNextImg, heroDelay);
}

/* Lancer le HERO quand le DOM est prêt */
document.addEventListener('DOMContentLoaded', ()=>{
  if(HERO?.images?.length) { buildHero(); heroTogglePlay(true); }
});

