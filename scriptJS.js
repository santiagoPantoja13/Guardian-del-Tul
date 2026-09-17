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
    'yerba buena': {
        id: 'yerba buena',
        name: 'Yerba buena',
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
    },
    'alegria': {
        id: 'alegria',
        name: 'Alegria',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9KvYR_L1frj9o3V5UA0lchTPx4rZZ37YrnAM8Jnx2apRyUlu0e1OlUI&s=10',
        type: 'Topica',
        daysToGrow: 3,
        desc: 'Alibio pronto'
    },
    'papa_sidra': {
        id: 'papa_sidra',
        name: 'Papa sidra',
        image: 'https://secretosparacontar.org/wp-content/uploads/2025/07/cidra.webp',
        type: 'Fresco',
        daysToGrow: 2,
        desc: 'Frescura y alivio eficaz'
    },
    'limoncillo': {
        id: 'limoncillo',
        name: 'Limoncillo',
        image: 'https://png.pngtree.com/png-vector/20250829/ourmid/pngtree-fresh-lemongrass-bundle-isolated-on-transparent-background-png-image_17325292.webp',
        type: 'Calido',
        daysToGrow: 3,
        desc: 'Calido y delicioso'
    },
    'diente_leon': {
        id: 'diente_leon',
        name: 'Diente de Leon',
        image: 'https://previews.123rf.com/images/goodstudio/goodstudio1709/goodstudio170900051/85575730-beautiful-drawing-of-dandelion-plant-with-ripe-seed-heads-or-blowballs-growing-on-green-stems-and.jpg',
        type: 'Calido',
        daysToGrow: 4,
        desc: 'Calido y reconfortable'
    },
    'len_vaca': {
        id: 'len_vaca',
        name: 'Lengua de vaca',
        image: 'https://laroussecocina.mx/wp-content/uploads/2018/01/Lengua-de-vaca.jpg',
        type: 'Reconfortable',
        daysToGrow: 1,
        desc: 'Reconfortable y eficaz'
    },
    'tomillo': {
        id: 'tomillo',
        name: 'Tomillo',
        image: 'https://img.magnific.com/vector-premium/ilustracion-vector-dibujos-animados-planta-verde-tomillo_87720-8686.jpg',
        type: 'Topica',
        daysToGrow: 2,
        desc: 'Oloroso'
    },
    'calendula': {
        id: 'calendula',
        name: 'Calendula',
        image: 'https://static.vecteezy.com/system/resources/previews/028/293/732/non_2x/calendula-flower-line-drawing-floral-design-elements-isolated-on-white-background-illustration-ingredient-for-herbal-tea-medicinal-cosmetic-preparations-vector.jpg',
        type: 'Calor',
        daysToGrow: 2,
        desc: 'Da calor a los huesos y al espíritu.'
    },
    'menta': {
        id: 'menta',
        name: 'Menta',
        image: 'https://i.pinimg.com/474x/61/b6/54/61b65459faac5fa07cde924b2bbf5bd8.jpg',
        type: 'Fresco',
        daysToGrow: 4,
        desc: 'Frescura y alivio eficaz'
    }
    
};

const QUESTS = [
    { id: 1, text: "Hijo, una niña de la vereda tiene un coraje atrapado en el estómago, no puede dormir de los cólicos. ¿Qué planta suave y fresca le damos para armonizar su vientre?", correct: ['yerba buena','diente_leon','limoncillo'], reward: 10, success: "¡Perfecto! La yerba buena relajará su espíritu y su vientre. (+10 Respeto)", fail: "No... esa planta es muy fuerte para una niña o no es para el vientre." },
    { id: 2, text: "Ha bajado un comunero del páramo. Sus pulmones están llenos de frío y neblina, le cuesta respirar. Necesitamos la planta de la montaña.", correct: ['eucalipto'], reward: 10, success: "Bien hecho. Las vaporizaciones de eucalipto sacarán el frío de su pecho. (+10 Respeto)", fail: "Esta medicina no actúa en los pulmones ni saca este frío profundo." },
    { id: 3, text: "Hubo un susto grande en la casa de la vecina. Hay mucha pesadez y energías oscuras rondando. Necesito una planta para hacer un despojo fuerte.", correct: ['ruda'], reward: 15, success: "La ruda espantará las malas energías y protegerá el hogar. Excelente. (+15 Respeto)", fail: "Esa planta no tiene la fuerza espiritual para expulsar la desarmonía." },
    { id: 4, text: "Un agricultor se quemo haciendo el almuerzo. Necesito necesito una planta fresca que me ayude a sanar la piel afectada. Recuerda que el remedio no debe ser tóxico.", correct: ['sabila_lista'], reward: 15, success: "Al desangrar la sábila, le quitamos lo tóxico. Ahora es un remedio bondadoso que limpiará mi vientre. (+15 Respeto)", fail: "Mmm, si me das sábila cruda me irritará más por su resina amarga, u otra planta no me servirá aquí." },
    { id: 5, text: "Estuve trabajando todo el día bajo la lluvia, mis articulaciones y huesos están congelados del dolor. Necesita recuperar el calor.", correct: ['romero'], reward: 10, success: "Con este romero haremos fricciones para devolverle el calor corporal. (+10 Respeto)", fail: "Eso es medicina de fresco, ¡le darás más frío a sus huesos!" },
    { id: 6, text: "He comido pesado y siento una gastritis, Necesito una planta que me alivie la irritación", correct: ['alegria','sabila'], reward: 15, success: "¡Excelente! La alegría funciona como un tópico para la piel (+15 Respeto)", fail: "No... Ten mas cuidado, es planta no es la que necesitamos." },
    { id: 7, text: "El hijo del gobernador ha escondidas se ha comido la panela a escondidas, ahora tiene un fuerte dolor de estomago por los paracitos, necesitas darle algo fresco para tratarlo.", correct: ['papa_sidra'], reward: 20, success: "¡Muy bien! El hijo del gobernador ahora estará mejor, debe dejar de comer dulces. (+20 Respeto)", fail: "Esa planta no ayuda con el dolor de estomago..." },
    { id: 8, text: "Amaneció muy frio el día, hay estudiantes que presentan dolor de estomago, dame una planta para tratar el mal.", correct: ['limoncillo','yerba buena','diente_leon'], reward: 10, success: "Es perfecto, una aromática de limoncillo aliviará el dolor de los estudiantes. (+10 Respeto)", fail: "Ten cuidado, esa planta no es la ideal para tratar el dolor de estomago generado por el frio." },
    { id: 9, text: "Hijo, una joven esta con cólicos menstruales, ¿Qué planta suave pero efectiva le darías?", correct: ['diente_leon','yerba buena', 'limoncillo'], reward: 10, success: "Muy buena decisión, el Te de de esta planta será excelente para tratar su dolor. (+10 Respeto)", fail: "Ten cuidado al medicar plantas, la que seleccionaste, no es la ideal" },
    { id: 10, text: "Un comunero estaba participando en un torneo de futbol, tuvo un fuerte choque en el tobillo y ahora esta infamado. ¿Qué planta le podemos dar para bajar la hinchazón? ", correct: ['len_vaca','calendula'], reward: 13, success: "Muy bien, esa planta es excelente para tratar los golpes. (+13 Respeto)", fail: "Ten cuidado, esa planta no es la ideal para tratar el dolor de estomago generado por el frio." },
    { id: 11, text: "Tengo a una comunera embarazada que presenta un frio bajo, ¿Que planta me sirve para repeler el frio de la comunera embarazada?", correct: ['tomillo'], reward: 5, success: "Muy buena elección, con esta planta repeleremos el frio de nuestra comunera. (+5 Respeto)", fail: "Ten cuidado, esa planta no es la ideal para tratar el frio de las hembrazadas" },
    { id: 12, text: "Hay una planta fuerte para tratar las heridas, me he hecho una herida después de terminar un ritual. ¿Qué planta es la que necesito?", correct: ['calendula'], reward: 20, success: "Muy bien, esa planta es excelente para esos males. (+20 Respeto)", fail: "Ten cuidado, esa planta no es la ideal para tratar el" },
    { id: 13, text: "Mi hija presenta una fuerte tos, dame una planta que la ayude a tratar este problema.", correct: ['menta'], reward: 8, success: "Muy bien, esa planta es excelente para la tos. (+8 Respeto)", fail: "Ten cuidado, esa planta no es la ideal para tratar el" },
];

let state = {
    day: 1,
    moonPhaseIndex: 0,
    respect: 0,
    selectedSeed: null,
    garden: Array(6).fill(null).map(() => ({ plantId: null, age: 0 })),
    inventory: { 'romero': 0, 'ruda': 0, 'sabila_cruda': 0, 'eucalipto': 0, 'yerba buena': 0, 
        'sabila_lista': 0, 'alegria': 0, 'papa_sidra':0, 'limoncillo':0, 
        'diente_leon':0,'len_vaca':0,'tomillo':0, 'calendula':0, 'menta':0 },
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
    ['romero', 'ruda', 'sabila_cruda', 
        'eucalipto', 'yerba buena', 'alegria',
        'papa_sidra','limoncillo','diente_leon',
        'len_vaca','tomillo','calendula','menta'].forEach(id => {
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

    if (state.currentQuest.correct.includes(plantId)) {
        state.inventory[plantId]--;
        state.respect += state.currentQuest.reward;
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

document.getElementById('seed-selector').addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
});