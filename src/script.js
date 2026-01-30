const { CONFIG, SERVICES_DATA } = window.APP_DATA;

const sectionContainer = document.querySelector('#seccion-contacto');
const contactButton = document.querySelector('#contact-btn');
const servicesSection = document.querySelector('#seccion-interes');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');

const pages = document.querySelectorAll('.pagina');
let currentIndex = 0;

// For handling contact data displaying....
const showContactData = () => {
    sectionContainer.innerHTML = `
                                <h2>CAVATEC</h2>
                                <p><b>Contacto:</b> ${CONFIG.contactName}</p>
                                <p><b>No. Celular:</b> ${CONFIG.contactPhone}</p>
                                <p><b>Correo Electrónico:</b> ${CONFIG.contactEmail}</p>
                                <p><i>"La Calidad en la Técnica"</i></p>
                                <p>Elaboración e implementación de proyectos de Ingeniería Química Sostenible</p>
                                `;

    pages.forEach(p => p.classList.add('hidden'));
    sectionContainer.classList.remove('hidden');
};
contactButton.addEventListener('click', showContactData);

// For handling services iteration....
const showSection = () => {    
    const service = SERVICES_DATA[currentIndex]

    if (!service) {
        servicesSection.innerHTML = `<h2>Próximamente</h2><p>Más información pronto.</p>`;
        return;
    }

    servicesSection.innerHTML = 
                                `
                                <h2>${service.serviceName}</h2>
                                <p>${service.serviceInfo}</p>
                                `;

    sectionContainer.classList.add('hidden'); 
    servicesSection.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    
    if (currentIndex >= SERVICES_DATA.length) {
        currentIndex = 0;
    }
    
    showSection();
});

prevButton.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = SERVICES_DATA.length - 1;
    }
    showSection();
});

showSection();