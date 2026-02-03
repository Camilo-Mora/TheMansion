const ASSET_DATA = {
    mountains: [
        { file: 'MountainProfile01.jpg', title: 'LAND CONTEXT' },
        { file: 'MountainProfile02.png', title: 'LAND CONTEXT' },
        { file: 'MountainProfile03.jpg', title: 'LAND CONTEXT' },
        { file: 'FullConcept_Topography.jpg', title: 'LAND CONTEXT' },
        { file: 'FullConcept_Floorplan_FrontView.png', title: 'Frontal layout' },
        { file: 'FullConcept_Floorplan_LateralView.png', title: 'Lateral layout' }
    ],
    vision: [
        'FullConcept00.png', 'FullConcept000.png', 'FullConcept01.png', 'FullConcept02.jpeg',
        'FullConcept03.png', 'FullConcept04.png', 'FullConcept05.jpg', 'FullConcept05.png',
        'FullConcept06.jpg', 'FullConcept06.png', 'FullConcept07.png',
        'FullConcept07_Floorplan.png', 'FullConcept13.jpg', 'FullConcept14.jpg'
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
        { file: 'Master13.jpg', category: 'Master Suite' }, { file: 'Master14.jpg', category: 'Master Suite' },
        { file: 'Master15.jpg', category: 'Master Suite' }, { file: 'Master16.jpg', category: 'Master Suite' },
        { file: 'Master17.jpg', category: 'Master Suite' }, { file: 'Master18.jpg', category: 'Master Suite' },
        { file: 'Pasillo01.jpg', category: 'Flow' }, { file: 'Pasillo02.jpg', category: 'Flow' },
        { file: 'Pasillo03.jpg', category: 'Flow' }, { file: 'Pasillo04.jpg', category: 'Flow' },
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
        bg.style.backgroundImage = `url('${ASSET_DATA.mountains[current].file}')`;
        current = (current + 1) % ASSET_DATA.mountains.length;
    };

    changeBg();
    setInterval(changeBg, 10000);
}

function createCard(filename, title, index) {
    const card = document.createElement('div');
    card.className = 'card';

    if (index !== undefined) {
        const num = document.createElement('div');
        num.className = 'card-number';
        num.textContent = `#${index}`;
        card.appendChild(num);
    }

    let media;
    if (isVideo(filename)) {
        media = document.createElement('video');
        media.src = filename;
        media.muted = true;
        media.loop = true;
        media.playsInline = true;
        card.addEventListener('mouseenter', () => media.play());
        card.addEventListener('mouseleave', () => { media.pause(); media.currentTime = 0; });
    } else {
        media = document.createElement('img');
        media.src = filename;
        media.loading = 'lazy';
    }

    const info = document.createElement('div');
    info.className = 'card-info';
    info.innerHTML = `<h3>${title || filename.split('.')[0]}</h3>`;

    card.appendChild(media);
    card.appendChild(info);

    card.addEventListener('click', () => openLightbox(filename, (title || filename.split('.')[0]) + (index ? ` #${index}` : '')));

    return card;
}

function renderLand() {
    const grid = document.getElementById('land-grid');
    ASSET_DATA.mountains.forEach((item, i) => {
        grid.appendChild(createCard(item.file, item.title, i + 1));
    });
}

function renderVision() {
    const grid = document.getElementById('vision-grid');
    ASSET_DATA.vision.forEach((file, i) => {
        grid.appendChild(createCard(file, 'MASTER CONCEPT', i + 1));
    });
}

function renderHighlights() {
    const grid = document.getElementById('highlights-grid');
    ASSET_DATA.highlights.forEach((file, i) => {
        grid.appendChild(createCard(file, 'PREVIEW', i + 1));
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
            items.forEach((item, i) => {
                grid.appendChild(createCard(item.file, item.category, i + 1));
            });
        });
    } else {
        const items = ASSET_DATA.library.filter(i => i.category === filter);
        items.forEach((item, i) => {
            grid.appendChild(createCard(item.file, item.category, i + 1));
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
