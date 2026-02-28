const ASSET_DATA = {
    mountains: [
        { file: 'MountainProfile01.jpg', title: 'LAND CONTEXT' },
        { file: 'MountainProfile02.png', title: 'LAND CONTEXT' },
        { file: 'MountainProfile03.jpg', title: 'LAND CONTEXT' },
        { file: 'FullConcept_Topography.jpg', title: 'LAND CONTEXT' },
        { file: 'FullConcept_Floorplan_FrontView.png', title: 'Frontal layout' },
        { file: 'Buitrera_17Feb2026.dwg', title: 'DWG Drawing of Terrain', type: 'dwg' }
    ],
    vision: [
        'FullConcept00.png', 'FullConcept000.png', 'FullConcept02.jpeg',
        'FullConcept05.jpg', 'FullConcept05.png',
        'FullConcept06.jpg', 'FullConcept06.png', 'FullConcept07.png',
        'FullConcept07_Floorplan.png', 'FullConcept13.jpg', 'FullConcept14.jpg'
    ],
    lowerLevel: [
        'LowerLevel00.png', 'LowerLevel01.png', 'LowerLevel03.png', 'LowerLevel2.mp4', 'FullConcept01.png',
        'FullConcept03.png', 'FullConcept04.png', 'Pasillo03.jpg', 'Pasillo04.jpg',
        'Master13.jpg'
    ],
    highlights: [
        'Best00.mp4', 'Best000.mp4', 'Best01.mp4', 'Best02.mp4', 'Best03.mp4',
        'Best04.mp4', 'Best05.mp4', 'Best06.mp4', 'Best07.mp4'
    ],
    library: [
        { file: 'Bar.mp4', category: 'Bar' },
        { file: 'Bar01.jpg', category: 'Bar' }, { file: 'Bar02.jpg', category: 'Bar' },
        { file: 'Bar04.jpg', category: 'Bar' }, { file: 'Bar06.jpg', category: 'Bar' },
        { file: 'Bar07.jpg', category: 'Bar' }, { file: 'Bar08.jpg', category: 'Bar' },
        { file: 'Bathroom01.jpg', category: 'Bathroom' },
        { file: 'Bedbunk01.jpg', category: 'Bedroom' }, { file: 'Bedbunk02.jpg', category: 'Bedroom' },
        { file: 'Bedbunk03.jpg', category: 'Bedroom' }, { file: 'Bedbunk04.png', category: 'Bedroom' },
        { file: 'Bedbunk05.jpg', category: 'Bedroom' }, { file: 'Bedbunk06.jpg', category: 'Bedroom' },
        { file: 'BioPool01.mp4', category: 'Pool' }, { file: 'BioPool02.mp4', category: 'Pool' },
        { file: 'BioPool03.mp4', category: 'Pool' }, { file: 'BioPool04.mp4', category: 'Pool' },
        { file: 'Cocina01.jpg', category: 'Kitchen' }, { file: 'Cocina02.jpg', category: 'Kitchen' },
        { file: 'Cocina03.jpg', category: 'Kitchen' }, { file: 'Cocina04.jpg', category: 'Kitchen' },
        { file: 'Cocina05.jpg', category: 'Kitchen' }, { file: 'Cocina06.jpg', category: 'Kitchen' },
        { file: 'Cocina07.jpg', category: 'Kitchen' },
        { file: 'Fogata01.jpg', category: 'Outdoor' }, { file: 'Fogata02.jpg', category: 'Outdoor' },
        { file: 'Fogata03.jpg', category: 'Outdoor' },
        { file: 'Lookout01.jpg', category: 'Vistas' }, { file: 'Lookout02.jpg', category: 'Vistas' },
        { file: 'Lookout03.jpg', category: 'Vistas' }, { file: 'Lookout04.jpg', category: 'Vistas' },
        { file: 'Lookout05.jpg', category: 'Vistas' }, { file: 'Lookout06.jpg', category: 'Vistas' },
        { file: 'Lookout07.jpg', category: 'Vistas' }, { file: 'Lookout08.jpg', category: 'Vistas' },
        { file: 'Lookout09.jpg', category: 'Vistas' }, { file: 'Lookout10.jpg', category: 'Vistas' },
        { file: 'Lookout11.jpg', category: 'Vistas' },
        { file: 'Master01.png', category: 'Master Suite' }, { file: 'Master02.jpg', category: 'Master Suite' },
        { file: 'Master03.jpg', category: 'Master Suite' }, { file: 'Master04.jpg', category: 'Master Suite' },
        { file: 'Master05.jpg', category: 'Master Suite' }, { file: 'Master06.jpg', category: 'Master Suite' },
        { file: 'Master07.jpg', category: 'Master Suite' }, { file: 'Master08.jpg', category: 'Master Suite' },
        { file: 'Master10.jpg', category: 'Master Suite' }, { file: 'Master12.jpg', category: 'Master Suite' },
        { file: 'Master14.jpg', category: 'Master Suite' },
        { file: 'Master15.jpg', category: 'Master Suite' }, { file: 'Master16.jpg', category: 'Master Suite' },
        { file: 'Master17.jpg', category: 'Master Suite' }, { file: 'Master18.jpg', category: 'Master Suite' },
        { file: 'Pasillo01.jpg', category: 'Flow' }, { file: 'Pasillo02.jpg', category: 'Flow' },
        { file: 'Pond01.jpg', category: 'Pool' }, { file: 'Pond02.jpg', category: 'Pool' },
        { file: 'Pool01.png', category: 'Pool' }, { file: 'Pool06.jpg', category: 'Pool' },
        { file: 'Pool07.jpg', category: 'Pool' }, { file: 'Pool13.jpg', category: 'Pool' },
        { file: 'Pool15.jpg', category: 'Pool' }, { file: 'Pool18.jpg', category: 'Pool' },
        { file: 'Pool21.jpg', category: 'Pool' }, { file: 'Pool22.jpg', category: 'Pool' },
        { file: 'Pool24.jpg', category: 'Pool' }, { file: 'Pool25.jpg', category: 'Pool' },
        { file: 'Pool26.jpg', category: 'Pool' }, { file: 'Pool28.jpg', category: 'Pool' },
        { file: 'Pool29.mp4', category: 'Pool' },
        { file: 'Lobby01.png', category: 'Flow' },
        { file: 'Concept00.png', category: 'Studies' }, { file: 'Concept01.jpeg', category: 'Studies' },
        { file: 'Concept02.jpg', category: 'Studies' }, { file: 'Concept03.jpg', category: 'Studies' },
        { file: 'Concept04.jpg', category: 'Studies' }, { file: 'Concept05.jpg', category: 'Studies' },
        { file: 'Concept06.jpg', category: 'Studies' }, { file: 'Concept07.jpg', category: 'Studies' },
        { file: 'Concept08.jpg', category: 'Studies' }, { file: 'Concept09.jpg', category: 'Studies' },
        { file: 'Concept10.jpg', category: 'Studies' }, { file: 'Concept11.jpg', category: 'Studies' },
        { file: 'Concept12.jpg', category: 'Studies' }, { file: 'Concept13.jpg', category: 'Studies' },
        { file: 'Concept14.jpg', category: 'Studies' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    renderLand();
    renderVision();
    renderLowerLevel();
    renderHighlights();
    renderFilters();
    renderLibrary('all');
    initLightbox();
});

function isVideo(filename) {
    return filename.toLowerCase().endsWith('.mp4');
}

function initBackground() {
    const bg = document.getElementById('global-bg');
    let current = 0;

    const changeBg = () => {
        const file = ASSET_DATA.mountains[current].file;
        const img = new Image();
        img.onload = () => {
            bg.style.backgroundImage = `url('${file}')`;
        };
        img.src = file;
        current = (current + 1) % ASSET_DATA.mountains.length;
    };

    changeBg();
    setInterval(changeBg, 10000);
}

function createCard(filename, title, index) {
    const card = document.createElement('div');
    card.className = 'card loading';

    if (index !== undefined) {
        const num = document.createElement('div');
        num.className = 'card-number';
        num.textContent = `#${index}`;
        card.appendChild(num);
    }

    let media;
    if (isVideo(filename)) {
        media = document.createElement('video');
        media.dataset.src = filename;
        media.muted = true;
        media.loop = true;
        media.playsInline = true;
        media.preload = 'none';

        media.onloadeddata = () => card.classList.add('loaded');
        media.onerror = () => {
            card.classList.remove('loading');
            card.classList.add('error');
        };

        card.addEventListener('mouseenter', () => {
            if (!media.src) media.src = media.dataset.src;
            media.play();
        });
        card.addEventListener('mouseleave', () => {
            media.pause();
            media.currentTime = 0;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!media.src) {
                        media.src = media.dataset.src;
                        media.preload = 'metadata';
                    }
                    observer.unobserve(card);
                }
            });
        }, { rootMargin: '100px' });
        observer.observe(card);

    } else {
        media = document.createElement('img');
        media.onload = () => card.classList.add('loaded');
        media.onerror = () => {
            card.classList.remove('loading');
            card.classList.add('error');
        };
        media.loading = 'lazy';
        media.src = filename; // Set SRC after listeners
    }

    const info = document.createElement('div');
    info.className = 'card-info';
    info.innerHTML = `<h3>${title || filename.split('.')[0]}</h3>`;

    card.appendChild(media);
    card.appendChild(info);

    card.addEventListener('click', () => openLightbox(filename, (title || filename.split('.')[0]) + (index ? ` #${index}` : '')));

    return card;
}

function createDwgCard(item, index) {
    const card = document.createElement('div');
    card.className = 'card loaded dwg-card';
    card.style.cursor = 'default';

    if (index !== undefined) {
        const num = document.createElement('div');
        num.className = 'card-number';
        num.textContent = `#${index}`;
        card.appendChild(num);
    }

    // Avatar body
    const avatar = document.createElement('div');
    avatar.className = 'dwg-avatar';
    avatar.innerHTML = `
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Blueprint paper -->
          <rect x="8" y="6" width="52" height="64" rx="4" fill="#0d2a4a" stroke="#3a8fd8" stroke-width="1.5"/>
          <!-- Grid lines -->
          <line x1="8" y1="22" x2="60" y2="22" stroke="#3a8fd8" stroke-width="0.5" stroke-opacity="0.5"/>
          <line x1="8" y1="38" x2="60" y2="38" stroke="#3a8fd8" stroke-width="0.5" stroke-opacity="0.5"/>
          <line x1="8" y1="54" x2="60" y2="54" stroke="#3a8fd8" stroke-width="0.5" stroke-opacity="0.5"/>
          <line x1="24" y1="6" x2="24" y2="70" stroke="#3a8fd8" stroke-width="0.5" stroke-opacity="0.5"/>
          <line x1="40" y1="6" x2="40" y2="70" stroke="#3a8fd8" stroke-width="0.5" stroke-opacity="0.5"/>
          <!-- Terrain contour lines -->
          <path d="M14 48 Q22 36 32 40 Q42 44 52 30" stroke="#64c8ff" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M14 56 Q24 46 34 50 Q44 54 54 42" stroke="#64c8ff" stroke-width="1" fill="none" stroke-linecap="round" stroke-opacity="0.6"/>
          <!-- North arrow -->
          <polygon points="66,12 62,22 66,20 70,22" fill="#f0b429" stroke="#f0b429" stroke-width="0.5"/>
          <line x1="66" y1="12" x2="66" y2="22" stroke="#f0b429" stroke-width="1.5"/>
          <!-- DWG badge -->
          <rect x="10" y="9" width="26" height="9" rx="2" fill="#1a6bb5"/>
          <text x="23" y="17" text-anchor="middle" font-size="5.5" fill="white" font-family="monospace" font-weight="bold">DWG</text>
        </svg>
    `;

    const label = document.createElement('div');
    label.className = 'dwg-label';
    label.textContent = item.title;

    const sub = document.createElement('div');
    sub.className = 'dwg-sub';
    sub.textContent = item.file;

    const link = document.createElement('a');
    link.href = item.file;
    link.download = item.file;
    link.className = 'dwg-download';
    link.textContent = '⬇ Download DWG';
    link.addEventListener('click', e => e.stopPropagation());

    avatar.appendChild(label);
    avatar.appendChild(sub);
    avatar.appendChild(link);
    card.appendChild(avatar);

    return card;
}

function renderLand() {
    const grid = document.getElementById('land-grid');
    let offset = 1;
    ASSET_DATA.mountains.forEach((item) => {
        let numStr = String(offset++).padStart(2, '0');
        if (item.type === 'dwg') {
            grid.appendChild(createDwgCard(item, numStr));
        } else {
            grid.appendChild(createCard(item.file, item.title, numStr));
        }
    });
}


function renderVision() {
    const grid = document.getElementById('vision-grid');
    let offset = ASSET_DATA.mountains.length + 1;
    ASSET_DATA.vision.forEach((file) => {
        let numStr = String(offset++).padStart(2, '0');
        grid.appendChild(createCard(file, 'MASTER CONCEPT', numStr));
    });
}

function renderLowerLevel() {
    const grid = document.getElementById('lower-level-grid');
    let offset = ASSET_DATA.mountains.length + ASSET_DATA.vision.length + 1;
    ASSET_DATA.lowerLevel.forEach((file) => {
        let title = 'LOWER LEVEL';
        if (file === 'LowerLevel01.png') title = 'HOTEL PACAMARA';
        let numStr = String(offset++).padStart(2, '0');
        grid.appendChild(createCard(file, title, numStr));
    });
}

function renderHighlights() {
    const grid = document.getElementById('highlights-grid');
    let offset = ASSET_DATA.mountains.length + ASSET_DATA.vision.length + ASSET_DATA.lowerLevel.length + 1;
    ASSET_DATA.highlights.forEach((file) => {
        let numStr = String(offset++).padStart(2, '0');
        grid.appendChild(createCard(file, 'PREVIEW', numStr));
    });
}

function renderFilters() {
    const filterContainer = document.getElementById('category-filters');
    const categories = [...new Set(ASSET_DATA.library.map(item => item.category))];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = cat;
        btn.dataset.category = cat;
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderLibrary(cat);
        });
        filterContainer.appendChild(btn);
    });

    document.querySelector('[data-category="all"]').addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderLibrary('all');
    });
}

function renderLibrary(filter) {
    const grid = document.getElementById('library-grid');
    grid.innerHTML = '';

    let offset = ASSET_DATA.mountains.length + ASSET_DATA.vision.length + ASSET_DATA.lowerLevel.length + ASSET_DATA.highlights.length + 1;

    if (filter === 'all') {
        const categories = [...new Set(ASSET_DATA.library.map(item => item.category))];
        categories.forEach(cat => {
            // Add Category Header
            const header = document.createElement('div');
            header.className = 'category-divider';
            header.innerHTML = `<h3 class="category-title">${cat}</h3>`;
            grid.appendChild(header);

            // Add items in that category
            const items = ASSET_DATA.library.filter(i => i.category === cat);
            items.forEach((item) => {
                let numStr = String(offset++).padStart(2, '0');
                grid.appendChild(createCard(item.file, item.category, numStr));
            });
        });
    } else {
        const items = ASSET_DATA.library.filter(i => i.category === filter);
        items.forEach((item) => {
            let numStr = String(offset++).padStart(2, '0');
            grid.appendChild(createCard(item.file, item.category, numStr));
        });
    }
}

function initLightbox() {
    const lb = document.getElementById('lightbox');
    const close = document.getElementById('lightbox-close');

    close.addEventListener('click', () => {
        lb.style.display = 'none';
        document.getElementById('lightbox-media-container').innerHTML = '';
    });

    lb.addEventListener('click', (e) => {
        if (e.target === lb) close.click();
    });
}

function openLightbox(file, title) {
    const lb = document.getElementById('lightbox');
    const container = document.getElementById('lightbox-media-container');
    const titleEl = document.getElementById('lightbox-title');

    container.innerHTML = '';

    let media;
    if (isVideo(file)) {
        media = document.createElement('video');
        media.src = file;
        media.controls = true;
        media.autoplay = true;
        media.id = 'lightbox-media';
    } else {
        media = document.createElement('img');
        media.src = file;
        media.id = 'lightbox-media';
    }

    container.appendChild(media);
    titleEl.textContent = title;
    lb.style.display = 'flex';
}
