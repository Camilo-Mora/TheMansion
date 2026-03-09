const ASSET_DATA = [
    { file: '001_Living_00.png', category: 'Living' }, { file: '002_Living_01.mp4', category: 'Living' }, { file: '003_Living_02.png', category: 'Living' }, { file: '004_Living_03.jpg', category: 'Living' }, { file: '005_Living_04.jpg', category: 'Living' }, { file: '006_Living_05.jpg', category: 'Living' }, { file: '007_Living_06.jpg', category: 'Living' },
    { file: '008_Room1_01.png', category: 'Room1' }, { file: '009_Room1_02.jpg', category: 'Room1' }, { file: '010_Room1_03.jpg', category: 'Room1' }, { file: '010a_Room1_01.mp4', category: 'Room1' }, { file: '011_Room1_04.jpg', category: 'Room1' }, { file: '012_Room1_05.jpg', category: 'Room1' }, { file: '013_Room1_06.jpg', category: 'Room1' }, { file: '014_Room1_07.jpg', category: 'Room1' }, { file: '015_Room1_08.jpg', category: 'Room1' }, { file: '016_Room1_10.png', category: 'Room1' },
    { file: '017_Room2_01.png', category: 'Room2' }, { file: '018_Room2_02.jpg', category: 'Room2' }, { file: '019_Room2_03.jpg', category: 'Room2' }, { file: '020_Room2_04.jpg', category: 'Room2' }, { file: '021_Room2_05.jpg', category: 'Room2' }, { file: '022_Room2_06.jpg', category: 'Room2' },
    { file: '023_Room3_00.jpg', category: 'Room3' }, { file: '024_Room3_01.mp4', category: 'Room3' }, { file: '025_Room3_02.jpg', category: 'Room3' }, { file: '026_Room3_03.jpg', category: 'Room3' }, { file: '027_Room3_04.png', category: 'Room3' }, { file: '028_Room3_05.jpg', category: 'Room3' }, { file: '029_Room3_06.jpg', category: 'Room3' }, { file: '030_Room3_07.jpg', category: 'Room3' },
    { file: '031_Lookout_01.jpg', category: 'Lookout' }, { file: '032_Lookout_02.jpg', category: 'Lookout' }, { file: '033_Lookout_03.jpg', category: 'Lookout' }, { file: '034_Lookout_04.jpg', category: 'Lookout' }, { file: '035_Lookout_05.jpg', category: 'Lookout' }, { file: '036_Lookout_06.jpg', category: 'Lookout' }, { file: '037_Lookout_07.jpg', category: 'Lookout' }, { file: '038_Lookout_08.jpg', category: 'Lookout' }, { file: '039_Lookout_09.png', category: 'Lookout' }, { file: '040_Lookout_10.png', category: 'Lookout' }, { file: '041_Lookout_11.jpg', category: 'Lookout' }, { file: '042_Lookout_12.jpg', category: 'Lookout' }, { file: '043_Lookout_13.jpg', category: 'Lookout' }, { file: '044_Lookout_14.jpg', category: 'Lookout' }, { file: '045_Lookout_15.png', category: 'Lookout' },
    { file: '046_CoreArea_00.png', category: 'Core Area' }, { file: '047_CoreArea_01.png', category: 'Core Area' }, { file: '048_CoreArea_02.png', category: 'Core Area' }, { file: '049_CoreArea_03.mp4', category: 'Core Area' }, { file: '050_CoreArea_04.png', category: 'Core Area' }, { file: '051_CoreArea_05.jpg', category: 'Core Area' }, { file: '052_CoreArea_06.jpg', category: 'Core Area' }, { file: '052a_CoreArea_07.png', category: 'Core Area' },
    { file: '053_Pool_01.mp4', category: 'Pool' }, { file: '054_Pool_02.mp4', category: 'Pool' }, { file: '055_Pool_03.mp4', category: 'Pool' }, { file: '056_Pool_04.mp4', category: 'Pool' }, { file: '057_Pool_05.png', category: 'Pool' }, { file: '058_Pool_06.png', category: 'Pool' }, { file: '059_Pool_07.jpg', category: 'Pool' }, { file: '060_Pool_08.jpg', category: 'Pool' }, { file: '061_Pool_09.jpg', category: 'Pool' }, { file: '062_Pool_10.jpg', category: 'Pool' }, { file: '063_Pool_11.mp4', category: 'Pool' },
    { file: '064_BBQ01.jpg', category: 'BBQ' }, { file: '065_BBQ02.jpg', category: 'BBQ' }, { file: '066_BBQ04.jpg', category: 'BBQ' }, { file: '067_BBQ06.jpg', category: 'BBQ' }, { file: '068_BBQ07.jpg', category: 'BBQ' }, { file: '069_BBQ08.jpg', category: 'BBQ' }, { file: '070_BBQ09.jpg', category: 'BBQ' }, { file: '071_BBQ10.mp4', category: 'BBQ' },
    { file: '072_Kitchen_01.jpg', category: 'Kitchen' }, { file: '073_Kitchen_02.jpg', category: 'Kitchen' }, { file: '074_Kitchen_03.jpg', category: 'Kitchen' }, { file: '075_Kitchen_04.jpg', category: 'Kitchen' }, { file: '076_Kitchen_05.jpg', category: 'Kitchen' },
    { file: '077_Garden_01.jpg', category: 'Garden' }, { file: '078_Garden_02.jpg', category: 'Garden' }, { file: '079_Garden_03.mp4', category: 'Garden' },
    { file: '080_SiteImagery_01.jpg', category: 'SiteImagery' }, { file: '081_SiteImagery_02.png', category: 'SiteImagery' }, { file: '082_SiteImagery_03.jpg', category: 'SiteImagery' },
    { file: '083_IntegratedConcept_00.jpg', category: 'IntegratedConcept' }, { file: '084_IntegratedConcept_01.jpeg', category: 'IntegratedConcept' }, { file: '085_IntegratedConcept_02.jpg', category: 'IntegratedConcept' }, { file: '086_IntegratedConcept_03.png', category: 'IntegratedConcept' }, { file: '087_IntegratedConcept_04.jpeg', category: 'IntegratedConcept' }, { file: '088_IntegratedConcept_05.png', category: 'IntegratedConcept' }, { file: '089_IntegratedConcept_06.png', category: 'IntegratedConcept' }, { file: '090_IntegratedConcept_07.png', category: 'IntegratedConcept' }, { file: '091_IntegratedConcept_08.mp4', category: 'IntegratedConcept' }, { file: '092_IntegratedConcept_09.mp4', category: 'IntegratedConcept' }, { file: '093_IntegratedConcept_10.mp4', category: 'IntegratedConcept' }, { file: '094_IntegratedConcept_11.mp4', category: 'IntegratedConcept' }, { file: '095_IntegratedConcept_12.mp4', category: 'IntegratedConcept' }, { file: '096_IntegratedConcept_13.mp4', category: 'IntegratedConcept' }
];

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initLightbox();
    renderFilters();
    renderGallery('all');
});

function isVideo(filename) {
    return filename.toLowerCase().endsWith('.mp4');
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

function renderFilters() {
    const container = document.getElementById('category-filters');
    const categories = ['all', ...new Set(ASSET_DATA.map(item => item.category))];

    container.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = cat === 'all' ? 'filter-btn active' : 'filter-btn';
        btn.textContent = cat === 'all' ? 'All Details' : cat;
        btn.dataset.category = cat;
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(cat);
        };
        container.appendChild(btn);
    });
}

function renderGallery(filterCategory = 'all') {
    const grid = document.getElementById('main-grid');
    grid.innerHTML = '';

    const filtered = filterCategory === 'all'
        ? ASSET_DATA
        : ASSET_DATA.filter(item => item.category === filterCategory);

    filtered.forEach((item) => {
        // Extract 3-digit prefix from filename (e.g., "001_Living_00.png" -> "001")
        const prefix = item.file.match(/^\d{3}[a-z]?/i);
        const displayNum = prefix ? prefix[0] : '';

        const card = createCard(item.file, item.category, displayNum);
        grid.appendChild(card);
    });
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

/* ── SPATIAL MAP LOGIC (Capsules over Image) ────────────── */
let mapLocked = true;
let nodesVisible = true;
let activeEditNode = null;

const mapNodes = [
    { id: 'living', title: 'Living', x: 934, y: 464, group: 'core', width: 90, height: 20, fontSize: 15, color: '#e69b27', target: 'Living' },
    { id: 'room1', title: 'Room1', x: 1006, y: 435, group: 'core', width: 100, height: 20, fontSize: 15, color: '#e69b27', target: 'Room1' },
    { id: 'room2', title: 'Room2', x: 845, y: 467, group: 'core', width: 100, height: 20, fontSize: 15, color: '#e69b27', target: 'Room2' },
    { id: 'lookout', title: 'Lookout', x: 958, y: 397, width: 90, height: 10, fontSize: 12, color: '#e69b27', target: 'Lookout' },
    { id: 'corearea', title: 'Core area', x: 874, y: 388, group: 'core', width: 120, height: 20, fontSize: 18, color: '#e69b27', target: 'Core Area' },
    { id: 'pool', title: 'Pool', x: 647, y: 388, width: 120, height: 20, fontSize: 18, color: '#4a90e2', target: 'Pool' },
    { id: 'bbq', title: 'BBQ', x: 554, y: 388, width: 100, height: 20, fontSize: 18, color: '#e69b27', target: 'BBQ' },
    { id: 'bathroom', title: 'Bathroom', x: 477, y: 346, width: 110, height: 11, fontSize: 13, color: '#d1b894', target: 'Core Area' },
    { id: 'shower', title: 'Shower', x: 477, y: 372, width: 110, height: 11, fontSize: 13, color: '#d1b894', target: 'Core Area' },
    { id: 'storage', title: 'Storage', x: 476, y: 398, width: 110, height: 11, fontSize: 13, color: '#d1b894', target: 'Core Area' },
    { id: 'room3', title: 'Room3', x: 308, y: 464, width: 100, height: 20, fontSize: 15, color: '#e69b27', target: 'Room3' },
    { id: 'garden', title: 'Garden', x: 763, y: 397, width: 70, height: 10, fontSize: 11, color: '#2ecc71', target: 'Garden' }
];

// Optional: you can add explicit line connections here if you still want them. 
// I'll leave it empty for now so it matches your PPT perfectly, but you can add them back.
const mapConnections = [];

function getNode(id) { return mapNodes.find(n => n.id === id); }

// Convert hex color to rgba with given opacity (0-1)
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Darken a hex color by a given factor (0-1, where 0 = black, 1 = original)
function darkenHex(hex, factor) {
    const r = Math.round(parseInt(hex.slice(1, 3), 16) * factor);
    const g = Math.round(parseInt(hex.slice(3, 5), 16) * factor);
    const b = Math.round(parseInt(hex.slice(5, 7), 16) * factor);
    return `rgb(${r}, ${g}, ${b})`;
}

function renderMap() {
    const container = document.getElementById('map-container');
    // Only remove the old SVG, not the entire container content
    const oldSvg = container.querySelector('svg');
    if (oldSvg) oldSvg.remove();

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute('viewBox', '0 0 1200 600'); // Note: Adjust viewBox sizes based on coordinates
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';

    // Connections
    mapConnections.forEach(conn => {
        const fromNode = getNode(conn.from);
        const toNode = getNode(conn.to);
        if (!fromNode || !toNode) return;

        const line = document.createElementNS(svgNS, "line");
        line.setAttribute('x1', fromNode.x);
        line.setAttribute('y1', fromNode.y);
        line.setAttribute('x2', toNode.x);
        line.setAttribute('y2', toNode.y);
        line.setAttribute('stroke', 'rgba(255,255,255,0.4)');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    });

    // Nodes as Rounded Rectangles (Capsules)
    mapNodes.forEach((node, idx) => {
        // Apply default values if missing from older nodes
        if (!node.height) node.height = 35;
        if (!node.fontSize) node.fontSize = 20;

        const g = document.createElementNS(svgNS, "g");
        g.setAttribute('transform', `translate(${node.x}, ${node.y})`);

        // Use user-defined width
        const hWidth = node.width / 2;
        const hHeight = node.height; // Using custom height

        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute('x', -hWidth);
        rect.setAttribute('y', -hHeight);
        rect.setAttribute('width', node.width);
        rect.setAttribute('height', hHeight * 2);
        rect.setAttribute('rx', hHeight); // curves the edges fully (capsule shape)
        rect.setAttribute('fill', hexToRgba(node.color, 0.75)); // 25% transparent
        const borderColor = (activeEditNode && activeEditNode.id === node.id) ? '#ffffff' : darkenHex(node.color, 0.45); // Darker version of fill
        rect.setAttribute('stroke', borderColor);
        rect.setAttribute('stroke-width', (activeEditNode && activeEditNode.id === node.id) ? '4' : '3');
        rect.style.cursor = mapLocked ? 'pointer' : 'grab';
        rect.style.transition = 'all 0.1s ease';

        const label = document.createElementNS(svgNS, "text");
        label.setAttribute('y', node.fontSize * 0.35); // Center font vertically roughly based on size
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('fill', '#000000');
        label.setAttribute('font-size', node.fontSize);
        label.setAttribute('font-weight', '700');
        label.setAttribute('font-family', 'Montserrat, sans-serif');
        label.setAttribute('pointer-events', 'none');
        label.innerHTML = node.title;

        // Navigation or Dragging & Selecting
        rect.addEventListener('mousedown', (e) => {
            if (mapLocked) {
                const targetCat = node.target || 'all';
                const filterBtn = document.querySelector(`.filter-btn[data-category="${targetCat}"]`);

                if (filterBtn) {
                    filterBtn.click();
                    document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                activeEditNode = node;
                updateEditPanel();
                dragNode(e, node);
            }
        });

        g.appendChild(rect);
        g.appendChild(label);
        svg.appendChild(g);
    });

    container.appendChild(svg);
}

function updateEditPanel() {
    const panel = document.getElementById('node-edit-panel');
    if (!activeEditNode || mapLocked) {
        panel.style.display = 'none';
        return;
    }
    panel.style.display = 'block';
    document.getElementById('edit-node-title').textContent = activeEditNode.title;
    document.getElementById('edit-node-x').value = activeEditNode.x;
    document.getElementById('edit-node-y').value = activeEditNode.y;
    document.getElementById('edit-node-width').value = activeEditNode.width;
    document.getElementById('edit-node-height').value = activeEditNode.height;
    document.getElementById('edit-node-font').value = activeEditNode.fontSize;
}

function dragNode(evt, node) {
    function getMousePosition(e) {
        const currentSvg = document.querySelector('#map-container svg');
        if (!currentSvg) return { x: 0, y: 0 };
        let pt = currentSvg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        return pt.matrixTransform(currentSvg.getScreenCTM().inverse());
    }

    let isDragging = true;

    // Calculate the initial offset of the mouse click relative to the node's position
    let initialP = getMousePosition(evt);
    let offsetX = initialP.x - node.x;
    let offsetY = initialP.y - node.y;

    function mousemove(e) {
        if (isDragging) {
            let svgP = getMousePosition(e);
            node.x = Math.round(svgP.x - offsetX);
            node.y = Math.round(svgP.y - offsetY);
            renderMap();
            updateEditPanel(); // Update panel with new coordinates
        }
    }

    function mouseup() {
        isDragging = false;
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
    }

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);
}

function initMap() {
    renderMap();
    updateEditPanel(); // Initialize panel state

    // Setup manual input listeners
    ['x', 'y', 'width', 'height', 'font'].forEach(prop => {
        document.getElementById(`edit-node-${prop}`).addEventListener('input', (e) => {
            if (!activeEditNode) return;
            let val = parseInt(e.target.value);
            if (isNaN(val)) return;

            if (prop === 'font') activeEditNode.fontSize = val;
            else activeEditNode[prop] = val;

            renderMap();
        });
    });

    // Lock Toggle
    document.getElementById('toggle-map-lock').addEventListener('click', (e) => {
        mapLocked = !mapLocked;
        activeEditNode = null; // clear selection on toggle
        updateEditPanel();

        const btn = e.currentTarget;
        if (mapLocked) {
            btn.innerHTML = `<span class="icon">🔒</span> <span class="text">Map Locked</span>`;
            document.getElementById('export-map-positions').style.display = 'none';
        } else {
            btn.innerHTML = `<span class="icon">🔓</span> <span class="text">Map Unlocked (Draggable)</span>`;
            document.getElementById('export-map-positions').style.display = 'inline-block';
        }
        renderMap();
    });

    // Visibility Toggle
    document.getElementById('toggle-map-nodes').addEventListener('click', (e) => {
        nodesVisible = !nodesVisible;
        const btn = e.currentTarget;
        const container = document.getElementById('map-container');
        if (nodesVisible) {
            btn.innerHTML = `<span class="icon">👁️</span> <span class="text">Hide Nodes</span>`;
            container.classList.remove('nodes-hidden');
        } else {
            btn.innerHTML = `<span class="icon">👁️‍🗨️</span> <span class="text">Show Nodes</span>`;
            container.classList.add('nodes-hidden');
        }
    });

    // Export Positions
    document.getElementById('export-map-positions').addEventListener('click', () => {
        const text = JSON.stringify(mapNodes.map(n => ({
            id: n.id, title: n.title, x: n.x, y: n.y, group: n.group,
            width: n.width, height: n.height, fontSize: n.fontSize,
            color: n.color, target: n.target
        })), null, 4);
        navigator.clipboard.writeText(text).then(() => {
            alert("All Size & Node data copied to clipboard!\n\n" + text);
        }).catch(err => {
            console.error("Failed to copy:", err);
            prompt("Copy from here:", text);
        });
    });

    // New Control Listeners
    document.getElementById('btn-site-imagery').addEventListener('click', () => {
        renderGallery('SiteImagery');
        document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
    });

    const topoModal = document.getElementById('topography-modal');
    document.getElementById('btn-topography').addEventListener('click', () => {
        topoModal.style.display = 'flex';
    });

    document.getElementById('modal-close').addEventListener('click', () => {
        topoModal.style.display = 'none';
    });

    // Project Description Modal
    const descModal = document.getElementById('description-modal');
    document.getElementById('btn-project-description').addEventListener('click', () => {
        descModal.style.display = 'flex';
    });

    document.getElementById('description-modal-close').addEventListener('click', () => {
        descModal.style.display = 'none';
    });

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === topoModal) {
            topoModal.style.display = 'none';
        }
        if (e.target === descModal) {
            descModal.style.display = 'none';
        }
    });

    document.getElementById('btn-integrated-concepts').addEventListener('click', () => {
        renderGallery('IntegratedConcept');
        document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Search functionality
    const searchInput = document.getElementById('asset-search');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim().padStart(3, '0');
            const asset = ASSET_DATA.find(item => item.file.startsWith(query));

            if (asset) {
                // Find category and filter to it
                const targetCat = asset.category;
                const filterBtn = document.querySelector(`.filter-btn[data-category="${targetCat}"]`);
                if (filterBtn) filterBtn.click();

                // Scroll to the gallery section
                document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });

                searchInput.value = '';
                searchInput.blur();
            } else {
                // Error feedback
                searchInput.classList.add('search-error');
                setTimeout(() => searchInput.classList.remove('search-error'), 400);
            }
        }
    });
}
