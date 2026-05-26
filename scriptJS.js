

const MOON_PHASES = [
    { icon: '🌑', name: 'Nueva', desc: 'Descanso de la tierra.' },
    { icon: '🌓', name: 'Creciente', desc: 'Buena para sembrar hojas.' },
    { icon: '🌕', name: 'Llena', desc: 'Máxima fuerza. Excelente para cosechar.' },
    { icon: '🌗', name: 'Menguante', desc: 'Ideal para sembrar raíz y limpieza.' }
];

const PLANTS = {
    'romero': {
        id: 'romero',
        name: 'Romero',
        image: 'https://i.pinimg.com/736x/66/32/4c/66324c943b5fb23c6ef9dbb70845fe76.jpg',
        type: 'Calor',
        daysToGrow: 2,
        desc: 'Da calor a los huesos y al espíritu.'
    },
    'ruda': {
        id: 'ruda',
        name: 'Ruda',
        image: 'https://img.freepik.com/vector-premium/dibujo-planta-hojas-verdes-flores-amarillas_1058795-371.jpg?semt=ais_hybrid&w=740&q=80',
        type: 'Protección',
        daysToGrow: 3,
        desc: 'Limpia energías, planta fuerte.'
    },
    'sabila_cruda': {
        id: 'sabila_cruda',
        name: 'Sábila',
        image: 'https://png.pngtree.com/png-vector/20240221/ourmid/pngtree-aloe-vera-png-image_11868652.png',
        type: 'Fresco',
        daysToGrow: 3,
        desc: 'Fresca. Requiere desangrarse antes de tomar.'
    },
    'eucalipto': {
        id: 'eucalipto',
        name: 'Eucalipto',
        image: 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-eucalyptus-leaves-vector-or-color-illustration-png-image_5274469.jpg',
        type: 'Respiración',
        daysToGrow: 4,
        desc: 'Abre los pulmones del frío del páramo.'
    },
    'hierbabuena': {
        id: 'hierbabuena',
        name: 'Hierbabuena',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UbyLosjlqvHRdLAO2F8LV5b-uP2Htpi8fA&s',
        type: 'Armonía',
        daysToGrow: 2,
        desc: 'Fresco suave. Asienta el vientre y relaja.'
    },
    'sabila_lista': {
        id: 'sabila_lista',
        name: 'Sábila Desangrada',
        image: 'https://thumbs.dreamstime.com/b/dibujo-hecho-mano-por-aloe-vera-plant-con-l%C3%A1pices-de-colores-ilustraci%C3%B3n-planta-m%C3%A9dico-saludable-198206329.jpg',
        type: 'Fresco/Limpio',
        daysToGrow: 0,
        desc: 'Lista para el vientre.'
    }
};

const QUESTS = [
    { id: 1, text: "Hijo, una niña de la vereda tiene un coraje atrapado en el estómago, no puede dormir de los cólicos. ¿Qué planta suave y fresca le damos para armonizar su vientre?", correct: 'hierbabuena', success: "¡Perfecto! La hierbabuena relajará su espíritu y su vientre. (+10 Respeto)", fail: "No... esa planta es muy fuerte para una niña o no es para el vientre." },
    { id: 2, text: "Ha bajado un comunero del páramo. Sus pulmones están llenos de frío y neblina, le cuesta respirar. Necesitamos la planta de la montaña.", correct: 'eucalipto', success: "Bien hecho. Las vaporizaciones de eucalipto sacarán el frío de su pecho. (+10 Respeto)", fail: "Esta medicina no actúa en los pulmones ni saca este frío profundo." },
    { id: 3, text: "Hubo un susto grande en la casa de la vecina. Hay mucha pesadez y energías oscuras rondando. Necesito una planta para hacer un despojo fuerte.", correct: 'ruda', success: "La ruda espantará las malas energías y protegerá el hogar. Excelente. (+15 Respeto)", fail: "Esa planta no tiene la fuerza espiritual para expulsar la desarmonía." },
    { id: 4, text: "Un agricultor se mojó en el aguacero y ahora sus articulaciones y huesos están congelados del dolor. Necesita recuperar el calor.", correct: 'romero', success: "Con este romero haremos fricciones para devolverle el calor corporal. (+10 Respeto)", fail: "Eso es medicina de fresco, ¡le darás más frío a sus huesos!" },
    { id: 5, text: "He comido pesado y siento una gastritis ardiendo. Necesito limpiar mi organismo, pero recuerda que el remedio no debe ser amargo o tóxico.", correct: 'sabila_lista', success: "Al desangrar la sábila, le quitamos lo tóxico. Ahora es un remedio bondadoso que limpiará mi vientre. (+15 Respeto)", fail: "Mmm, si me das sábila cruda me irritará más por su resina amarga, u otra planta no me servirá aquí." }
];

let state = {
    day: 1,
    moonPhaseIndex: 0,
    respect: 0,
    selectedSeed: null,
    garden: Array(6).fill(null).map(() => ({ plantId: null, age: 0 })),
    inventory: { 'romero': 0, 'ruda': 0, 'sabila_cruda': 0, 'eucalipto': 0, 'hierbabuena': 0, 'sabila_lista': 0 },
    currentQuest: null,
    questDelay: false,
    sabilaProcesando: 0
};

const DOM = {
    day: document.getElementById('ui-day'),
    moonIcon: document.getElementById('ui-moon-icon'),
    moonName: document.getElementById('ui-moon-name'),
    respect: document.getElementById('ui-respect'),
    garden: document.getElementById('garden-grid'),
    seeds: document.getElementById('seed-selector'),
    inventory: document.getElementById('inventory-list'),
    dialogue: document.getElementById('dialogue-box'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modal-title'),
    modalText: document.getElementById('modal-text'),
    btnDesangrar: document.getElementById('btn-desangrar')
};

function initGame() {
    renderSeeds();
    renderGarden();
    updateUI();
    renderInventory();
    assignNewQuest();
    showModal("Bienvenido al Tul", "Aprende el equilibrio sembrando. Pide permiso a la tierra, cuida las fases lunares y ayuda al The' Wala a sanar a la comunidad.");

    DOM.btnDesangrar.addEventListener('click', () => {
        if (state.inventory['sabila_cruda'] > 0) {
            state.inventory['sabila_cruda']--;
            showModal("Proceso Iniciado", "Has puesto la penca de Sábila en agua. Estará desangrada y lista mañana.");
            state.sabilaProcesando = (state.sabilaProcesando || 0) + 1;
            updateUI();
            renderInventory();
        }
    });
}

function renderSeeds() {
    DOM.seeds.innerHTML = '';
    ['romero', 'ruda', 'sabila_cruda', 'eucalipto', 'hierbabuena'].forEach(id => {
        const p = PLANTS[id];
        const btn = document.createElement('button');
        btn.className = 'seed-btn';
        btn.onclick = () => selectSeed(id, btn);
        btn.innerHTML = `
                    <span class="seed-icon"><img src="${p.image}" alt="${p.name}"></span>
                    <span>${p.name}</span>
                    <div class="tooltip">${p.type} (${p.daysToGrow} días)</div>
                `;
        DOM.seeds.appendChild(btn);
    });
}

function selectSeed(id, btnEl) {
    state.selectedSeed = id;
    document.querySelectorAll('.seed-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
}

function renderGarden() {
    DOM.garden.innerHTML = '';
    state.garden.forEach((plot, index) => {
        const div = document.createElement('div');
        div.className = 'plot';

        if (plot.plantId) {
            const plantInfo = PLANTS[plot.plantId];
            if (plot.age >= plantInfo.daysToGrow) {
                div.innerHTML = `<img class="plant-img" src="${plantInfo.image}" alt="${plantInfo.name}"><div class="progress">Lista</div>`;
                div.style.backgroundColor = '#8d6e63';
            } else {
                div.innerHTML = `🌱<div class="progress">${plot.age}/${plantInfo.daysToGrow}</div>`;
            }
            div.onclick = () => handlePlotClick(index, true);
        } else {
            div.onclick = () => handlePlotClick(index, false);
        }

        DOM.garden.appendChild(div);
    });
}

function renderInventory() {
    DOM.inventory.innerHTML = '';
    let empty = true;

    for (const [id, count] of Object.entries(state.inventory)) {
        if (count > 0) {
            empty = false;
            const p = PLANTS[id];
            const item = document.createElement('div');
            item.className = 'inv-item';
            item.title = `Dar ${p.name} al The' Wala`;
            item.innerHTML = `<img class="inv-img" src="${p.image}" alt="${p.name}"><span>x${count}</span>`;
            item.onclick = () => tryDeliverQuest(id);
            DOM.inventory.appendChild(item);
        }
    }

    if (empty) {
        DOM.inventory.innerHTML = '<span style="font-size:12px;">Vacío</span>';
    }

    DOM.btnDesangrar.style.display = state.inventory['sabila_cruda'] > 0 ? 'block' : 'none';
}

function updateUI() {
    DOM.day.innerText = state.day;
    const moon = MOON_PHASES[state.moonPhaseIndex];
    DOM.moonIcon.innerText = moon.icon;
    DOM.moonName.innerText = moon.name;
    DOM.respect.innerText = state.respect;
}

function handlePlotClick(index, isPlanted) {
    if (!isPlanted && state.selectedSeed) {
        showModal("Pidiendo permiso...", `Has hablado con la Uma Kiwe para sembrar ${PLANTS[state.selectedSeed].name}.`);
        setTimeout(() => {
            closeModal();
            state.garden[index] = { plantId: state.selectedSeed, age: 0 };
            state.selectedSeed = null;
            document.querySelectorAll('.seed-btn').forEach(b => b.classList.remove('active'));
            renderGarden();
        }, 1000);
    } else if (isPlanted) {
        const plot = state.garden[index];
        const plantInfo = PLANTS[plot.plantId];
        if (plot.age >= plantInfo.daysToGrow) {
            harvestPlant(index, plot.plantId);
        } else {
            showModal("Aún no", "Esta medicina aún necesita tiempo en la tierra para absorber su fuerza.");
        }
    }
}

function harvestPlant(index, plantId) {
    const moon = MOON_PHASES[state.moonPhaseIndex].name;
    let bonusMsg = "";

    if (plantId === 'sabila_cruda' && moon === 'Llena') {
        state.respect += 2;
        bonusMsg = " ¡Cosechada en Luna Llena! (+2 Respeto. Su gel es más potente).";
    } else if (plantId === 'ruda' && moon === 'Menguante') {
        state.respect += 2;
        bonusMsg = " ¡Cosechada en Menguante! (+2 Respeto. Ideal para limpieza energética).";
    }

    state.inventory[plantId]++;
    state.garden[index] = { plantId: null, age: 0 };
    renderGarden();
    renderInventory();
    updateUI();

    showModal("Cosecha exitosa", `Has recolectado ${PLANTS[plantId].name}.${bonusMsg}`);
}

function nextDay() {
    state.day++;
    state.moonPhaseIndex = (state.moonPhaseIndex + 1) % MOON_PHASES.length;

    state.garden.forEach(plot => {
        if (plot.plantId) plot.age++;
    });

    if (state.sabilaProcesando > 0) {
        state.inventory['sabila_lista'] += state.sabilaProcesando;
        showModal("Sábila Lista", "La sábila ha soltado su resina amarga. Está desangrada y lista para sanar el vientre.");
        state.sabilaProcesando = 0;
    }

    updateUI();
    renderGarden();
    renderInventory();

    if (state.questDelay) {
        state.questDelay = false;
        assignNewQuest();
    }
}

function assignNewQuest() {
    let possibleQuests = QUESTS.filter(q => !state.currentQuest || q.id !== state.currentQuest.id);
    state.currentQuest = possibleQuests[Math.floor(Math.random() * possibleQuests.length)];
    DOM.dialogue.innerText = state.currentQuest.text;
}

function tryDeliverQuest(plantId) {
    if (!state.currentQuest || state.questDelay) return;

    if (state.currentQuest.correct === plantId) {
        state.inventory[plantId]--;
        state.respect += (plantId === 'ruda' || plantId === 'sabila_lista') ? 15 : 10;
        DOM.dialogue.innerHTML = `<span style="color: green; font-weight: bold;">${state.currentQuest.success}</span><br><br><i>El The' Wala se ha ido a curar al paciente. Volverá mañana con otro caso.</i>`;
        state.currentQuest = null;
        state.questDelay = true;
    } else {
        DOM.dialogue.innerHTML = `<span style="color: red; font-weight: bold;">"No, hijo. ${state.currentQuest.fail}"</span><br><br>${state.currentQuest.text}`;
    }

    updateUI();
    renderInventory();
}

function showModal(title, text) {
    DOM.modalTitle.innerText = title;
    DOM.modalText.innerText = text;
    DOM.modal.style.display = 'flex';
}

function closeModal() {
    DOM.modal.style.display = 'none';
}

initGame();
