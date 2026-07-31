/**
 * ==========================================================================
 * ADVANCED TECHNICAL PORTFOLIO LOGIC
 * 1. Initialization and Configuration
 * 2. Typewriter Effect Engine (Terminal)
 * 3. Dynamic GitHub API Connection
 * 4. Contact Form Management (EmailJS)
 * 5. CV Download / View Control
 * 6. Language Toggle & Persistence
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Diccionario de textos para el efecto Typewriter según el idioma
    const typewriterPhrases = {
        es: [
            "Especialista en Ciberseguridad",
            "Ingeniero de Sistemas",
            "Automatización con Python",
            "Análisis de Amenazas"
        ],
        en: [
            "Cybersecurity Specialist",
            "Systems Engineer",
            "Python Automation",
            "Threat Analysis"
        ]
    };

    // Diccionario completo con las etiquetas asignadas en el HTML para la traducción al vuelo
    const translations = {
        es: {
            "nav-about": "Sobre Mí",
            "nav-skills": "Habilidades",
            "nav-experience": "Experiencia",
            "nav-education": "Educación",
            "nav-certifications": "Certificaciones",
            "nav-projects": "Proyectos",
            "nav-contact": "Contacto",
            "hero-subtitle": "Ingeniero de Sistemas especializado en Ciberseguridad.",
            "btn-repositories": "<i class='fas fa-code-branch'></i> Consultar Repositorios",
            "btn-resume": "<i class='fas fa-file-pdf'></i> Ver Currículum",
            "about-title": "Sobre Mí",
            "about-content": "<span style='color: #00ff66;'>guest@secport:~$</span> cat about_me.log<br><br>Soy un **Ingeniero de Sistemas** enfocado en el análisis, diagnóstico e implementación de estrategias avanzadas de **Ciberseguridad**. Mi enfoque profesional combina el desarrollo de soluciones luegos, el análisis profundo de datos de tráfico y vulnerabilidades, y la automatización mediante scripting en **Python**.<br><br>Me apasiona desglosar infraestructuras técnicas complejas para fortalecer sus defenses, mitigar riesgos críticos y estructurar sistemas robustos frente a amenazas digitales modernas.",
            "skills-title": "Habilidades Técnicas",
            "skills-subtitle": "Áreas de especialización y herramientas principales de mi stack técnico.",
            "skill-cyber-desc": "Análisis de vulnerabilidades, auditorías de seguridad en entornos de red y fortificación de sistemas operativos.",
            "tech-level-1": "Nivel Técnico Core",
            "skill-dev-title": "Desarrollo de Software",
            "skill-dev-desc": "Construcción de herramientas automatizadas, análisis de datos y creación de interfaces gráficas de escritorio.",
            "tech-level-2": "Nivel Técnico Core",
            "skill-systems-title": "Ingeniería de Sistemas",
            "skill-systems-desc": "Administración e infraestructura de servidores, automatización de tareas y gestión de arquitecturas de red estructuradas.",
            "tech-level-3": "Nivel Técnico Core",
            "exp-title": "Experiencia Laboral",
            "exp-subtitle": "Historial de despliegues y roles en entornos tecnológicos.",
            "exp-role1-title": "[+] Líder de Tecnología y Operaciones (Gerente)",
            "exp-role1-list": "<li>Lideré la implementación de la infraestructura de datos y la gestión tecnológica integral durante la etapa de fundación de la empresa.</li><li>Responsable de la administración de bases de datos, negociación estratégica (IT Procurement) con proveedores tecnológicos y el aprovisionamiento de hardware/software corporativo.</li><li>Administré los perfiles digitales y comerciales del negocio, gestionando la visibilidad en línea y la retroalimentación de los clientes para mejorar el posicionamiento.</li><li>Coordiné el personal operativo y técnico, estableciendo procesos de trabajo para garantizar la escalabilidad y eficiencia de los sistemas desde su etapa inicial.</li>",
            "exp-role2-title": "[+] Coordinador de Infraestructura y Operaciones",
            "exp-role2-list": "<li>Supervisé la continuidad operativa de la infraestructura local y sistemas de punto de venta (POS).</li><li>Ejecuté mantenimiento preventivo/correctivo de equipos y lideré al personal en la adopción de herramientas tecnológicas.</li>",
            "exp-role3-title": "[+] Analista de Sistemas (Pasante de TI)",
            "exp-role3-list": "<li>Desarrollé un sistema automatizado de gestión de archivos en Python, optimizando el flujo de información interna.</li>",
            "exp-role4-title": "[+] Soporte Operativo",
            "exp-role4-list": "<li>Soporte en operaciones comerciales y uso de sistemas corporativos de facturación e inventario.</li>",
            "edu-title": "Educación",
            "edu-subtitle": "Formación académica y bases fundamentales de ingeniería.",
            "edu-degree1-title": "[🎓] Ingeniero de Sistemas",
            "edu-degree1-desc": "Diseño de arquitecturas lógicas, análisis de datos y fundamentos aplicados de seguridad informática.",
            "edu-degree2-title": "[🎓] Ingeniería en Informática",
            "edu-degree2-desc": "Estudios en desarrollo de software, algoritmos avanzados e infraestructura digital.",
            "edu-degree3-title": "[🎓] Bachiller en Ciencias",
            "cert-title": "Certificaciones & Awards",
            "cert-subtitle": "Credenciales oficiales y validaciones de mi formación continua.",
            "cert-linux-desc": "Fundamentos del sistema operativo Linux, administración de líneas de comandos, scripts básicos y conceptos de código abierto.",
            "preview-label-1": "Vista Previa",
            "click-view-1": "Click para ver certificado",
            "open-pdf-1": "ABRIR PDF",
            "verified-label-1": "VERIFICADO",
            "year-label-1": "AÑO: 2023",
            "cert-cyber-desc": "Principios de seguridad de la información, protección de datos, análisis de vulnerabilidades y mitigación de amenazas cibernéticas digitales.",
            "preview-label-2": "Vista Previa",
            "click-view-2": "Click para ver certificado",
            "open-pdf-2": "ABRIR PDF",
            "verified-label-2": "VERIFICADO",
            "year-label-2": "AÑO: 2023",
            "cert-iot-desc": "Conceptos y conexiones del Internet de las Cosas, transformación digital, sensores, automatización y análisis de datos en la nube.",
            "preview-label-3": "Vista Previa",
            "click-view-3": "Click para ver certificado",
            "open-pdf-3": "ABRIR PDF",
            "verified-label-3": "VERIFICADO",
            "year-label-3": "AÑO: 2023",
            "cert-cisco-desc": "Especialización en redes, automatización, Internet de las Cosas y bases sólidas de conectividad digital bajo el ecosistema de Cisco.",
            "click-view-iot": "Click para ver IoT",
            "open-pdf-iot": "ABRIR PDF IoT",
            "click-view-net": "Click para ver Networking",
            "open-pdf-net": "ABRIR PDF NET",
            "click-view-tracer": "Click para ver Cyber",
            "open-pdf-tracer": "ABRIR PDF TRACER",
            "cert-count-label": "3 CERTIFICADOS",
            "projects-header": "Proyectos Destacados",
            "github-loading": "[ ] Cargando logs de repositorios activos desde GitHub...",
            "contact-header": "Iniciar Conexión",
            "form-submit-btn": "<i class='fas fa-paper-plane'></i> Enviar Mensaje"
        },
        en: {
            "nav-about": "About Me",
            "nav-skills": "Skills",
            "nav-experience": "Experience",
            "nav-education": "Education",
            "nav-certifications": "Certifications",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-subtitle": "Systems Engineer specializing in Cybersecurity.",
            "btn-repositories": "<i class='fas fa-code-branch'></i> Check Repositories",
            "btn-resume": "<i class='fas fa-file-pdf'></i> View Resume",
            "about-title": "About Me",
            "about-content": "<span style='color: #00ff66;'>guest@secport:~$</span> cat about_me.log<br><br>I am a **Systems Engineer** focused on the analysis, diagnosis, and implementation of advanced **Cybersecurity** strategies. My professional focus combines software solutions development, deep traffic and vulnerability data analysis, and automation via scripting in **Python**.<br><br>I am passionate about breaking down complex technical infrastructures to strengthen their defenses, mitigate critical risks, and build robust systems against modern digital threats.",
            "skills-title": "Technical Skills",
            "skills-subtitle": "Specialization areas and primary tools of my technical stack.",
            "skill-cyber-desc": "Vulnerability analysis, security audits in network environments, and operating system hardening.",
            "tech-level-1": "Core Tech Level",
            "skill-dev-title": "Software Development",
            "skill-dev-desc": "Building automated tools, data analysis, and creating desktop graphical user interfaces.",
            "tech-level-2": "Core Tech Level",
            "skill-systems-title": "Systems Engineering",
            "skill-systems-desc": "Server administration and infrastructure, task automation, and structured network architecture management.",
            "tech-level-3": "Core Tech Level",
            "exp-title": "Work Experience",
            "exp-subtitle": "Deployment history and roles in technological environments.",
            "exp-role1-title": "[+] Technology and Operations Lead (Manager)",
            "exp-role1-list": "<li>Led the implementation of data infrastructure and comprehensive tech management during the company's founding stage.</li><li>Responsible for database administration, strategic negotiation (IT Procurement) with tech vendors, and corporate hardware/software provisioning.</li><li>Managed the digital and commercial profiles of the business, handling online visibility and customer feedback to improve positioning.</li><li>Coordinated operational and technical staff, establishing workflows to ensure system scalability and efficiency from the ground up.</li>",
            "exp-role2-title": "[+] Infrastructure and Operations Coordinator",
            "exp-role2-list": "<li>Supervised the operational continuity of local infrastructure and Point of Sale (POS) systems.</li><li>Executed preventive/corrective equipment maintenance and led staff in the adoption of technological tools.</li>",
            "exp-role3-title": "[+] Systems Analyst (IT Intern)",
            "exp-role3-list": "<li>Developed an automated file management system in Python, optimizing the internal information flow.</li>",
            "exp-role4-title": "[+] Operational Support",
            "exp-role4-list": "<li>Support in commercial operations and use of corporate billing and inventory systems.</li>",
            "edu-title": "Education",
            "edu-subtitle": "Academic background and fundamental bases of engineering.",
            "edu-degree1-title": "[🎓] Systems Engineer",
            "edu-degree1-desc": "Logic architecture design, data analysis, and applied fundamentals of computer security.",
            "edu-degree2-title": "[🎓] Computer Science Engineering",
            "edu-degree2-desc": "Studies in software development, advanced algorithms, and digital infrastructure.",
            "edu-degree3-title": "[🎓] High School Bachelor of Science",
            "cert-title": "Certifications & Awards",
            "cert-subtitle": "Official credentials and validations of my continuous learning journey.",
            "cert-linux-desc": "Fundamentals of the Linux operating system, command-line administration, basic scripting, and open-source concepts.",
            "preview-label-1": "Preview",
            "click-view-1": "Click to view certificate",
            "open-pdf-1": "OPEN PDF",
            "verified-label-1": "VERIFIED",
            "year-label-1": "YEAR: 2023",
            "cert-cyber-desc": "Information security principles, data protection, vulnerability analysis, and digital cyber threat mitigation.",
            "preview-label-2": "Preview",
            "click-view-2": "Click to view certificate",
            "open-pdf-2": "OPEN PDF",
            "verified-label-2": "VERIFIED",
            "year-label-2": "YEAR: 2023",
            "cert-iot-desc": "Internet of Things concepts and connections, digital transformation, sensors, automation, and cloud data analysis.",
            "preview-label-3": "Preview",
            "click-view-3": "Click to view certificate",
            "open-pdf-3": "OPEN PDF",
            "verified-label-3": "VERIFIED",
            "year-label-3": "YEAR: 2023",
            "cert-cisco-desc": "Specialization in networks, automation, Internet of Things, and strong digital connectivity foundations under the Cisco ecosystem.",
            "click-view-iot": "Click to view IoT",
            "open-pdf-iot": "OPEN IoT PDF",
            "click-view-net": "Click to view Networking",
            "open-pdf-net": "OPEN NET PDF",
            "click-view-tracer": "Click to view Cyber",
            "open-pdf-tracer": "OPEN TRACER PDF",
            "cert-count-label": "3 CERTIFICATES",
            "projects-header": "Featured Projects",
            "github-loading": "[ ] Loading active repository logs from GitHub...",
            "contact-header": "Establish Connection",
            "form-submit-btn": "<i class='fas fa-paper-plane'></i> Send Message"
        }
    };

    // --- 1. CONFIGURACIÓN DEL EFECTO TYPEWRITER ---
    const typewriterElement = document.getElementById('typewriter');
    
    // Detectar el idioma guardado o usar 'en' por defecto
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';
    let phrases = typewriterPhrases[currentLang];

    // Variable para controlar la ejecución activa del typewriter
    let typewriterTimeout;

    function startTypewriter(phrasesList) {
        if (typewriterElement) {
            typewriterElement.textContent = ''; // Limpiar texto previo
            manageTypewriterEffect(typewriterElement, phrasesList, 100, 50, 2000, (timeoutId) => {
                typewriterTimeout = timeoutId;
            });
        }
    }

    // --- 2. CONFIGURACIÓN DE LA API DE GITHUB ---
    const githubUsername = 'Jcruz25'; 
    const projectsContainer = document.getElementById('github-projects');

    if (projectsContainer && githubUsername !== '') {
        loadGitHubRepositories(githubUsername, projectsContainer);
    } else if (projectsContainer) {
        projectsContainer.innerHTML = '<p class="error-text">⚠️ [ERROR]: Nombre de usuario no definido en app.js.</p>';
    }

    // --- 3. GESTIÓN DEL FORMULARIO DE CONTACTO (EMAILJS) ---
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Transmitiendo datos...";
            submitBtn.disabled = true;

            // Inserta aquí tus credenciales reales obtenidas en tu panel de EmailJS
            const serviceID = 'service_fpve2pa';     // Reemplaza con tu Service ID
            const templateID = 'template_jjkhd3r';   // Reemplaza con tu Template ID

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    submitBtn.innerHTML = "<i class='fas fa-check'></i> ¡Conexión Exitosa / Mensaje Enviado!";
                    submitBtn.style.color = "var(--terminal-green)";
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.style.color = "";
                        submitBtn.disabled = false;
                    }, 4000);
                }, (error) => {
                    console.error('FAILED...', error);
                    submitBtn.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Error en la transmisión";
                    submitBtn.disabled = false;
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.disabled = false;
                    }, 4000);
                });
        });
    }

    // --- 4. GESTIÓN DE IDIOMA (LOCALSTORAGE) ---
    const langToggleBtn = document.getElementById('language-toggle');
    const langLabel = document.getElementById('lang-label');

    // Función para traducir todos los elementos estáticos con 'data-key'
    function translatePage(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    }

    // Inicializar el idioma al cargar la página por primera vez
    translatePage(currentLang);
    startTypewriter(phrases);

    // Sincronizar el texto del botón al cargar la página
    if (langLabel) {
        langLabel.textContent = currentLang === 'es' ? 'EN' : 'ES';
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            // Alternar idioma
            currentLang = currentLang === 'es' ? 'en' : 'es';
            
            // Guardar la elección del usuario en el navegador
            localStorage.setItem('portfolio-lang', currentLang);
            
            // Actualizar la etiqueta del botón (muestra el idioma al que puedes cambiar)
            if (langLabel) langLabel.textContent = currentLang === 'es' ? 'EN' : 'ES';

            // 1. Reiniciar el efecto typewriter con los nuevos textos
            if (typewriterTimeout) clearTimeout(typewriterTimeout);
            startTypewriter(typewriterPhrases[currentLang]);

            // 2. Traducir el resto del HTML estático
            translatePage(currentLang);
        });
    }
});

/**
 * ==========================================================================
 * FUNCIONES INTERNAS (MOTORES)
 * ==========================================================================
 */

function handleCVAction(action) {
    const cvUrl = './CURRICULUM VITAE JC.pdf'; 
    const fileName = 'CURRICULUM VITAE JC.pdf';

    if (action === 'view') {
        window.open(cvUrl, '_blank');
    } else if (action === 'download') {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function manageTypewriterEffect(element, texts, typeSpeed, eraseSpeed, delayBetween, onTimeoutUpdate) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let activeTimeoutId = null;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? eraseSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            currentSpeed = delayBetween;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            currentSpeed = 500;
        }

        activeTimeoutId = setTimeout(type, currentSpeed);
        if (onTimeoutUpdate) onTimeoutUpdate(activeTimeoutId);
    }

    type();
}

async function loadGitHubRepositories(username, container) {
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('No se pudo establecer conexión con los servidores de GitHub');

        const repositories = await response.json();
        container.innerHTML = '';

        const sourceRepos = repositories.filter(repo => !repo.fork);

        if (sourceRepos.length === 0) {
            container.innerHTML = '<p class="loading-text">No se encontraron repositorios públicos originales en este perfil.</p>';
            return;
        }

        sourceRepos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const language = repo.language ? repo.language : 'Script';
            let langIcon = '<i class="fa-solid fa-code"></i>';
            
            if (language.toLowerCase() === 'python') langIcon = '<i class="fa-brands fa-python"></i>';
            if (language.toLowerCase() === 'html') langIcon = '<i class="fa-brands fa-html5"></i>';
            if (language.toLowerCase() === 'javascript') langIcon = '<i class="fa-brands fa-js"></i>';

            const safeName = document.createTextNode(repo.name).textContent;
            const safeDescription = document.createTextNode(
                repo.description || 'Herramienta técnica en desarrollo. Repositorio público asignado a la infraestructura del portafolio.'
            ).textContent;

            card.innerHTML = `
                <div>
                    <h3>${safeName}</h3>
                    <p>${safeDescription}</p>
                    <div class="repo-meta">
                        <span class="lang-tag">${langIcon} ${language}</span>
                        <span><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</span>
                    </div>
                </div>
                <div>
                    <a href="${repo.html_url}" target="_blank" class="repo-link">
                        <span>src_code</span> <i class="fa-solid fa-terminal"></i>
                    </a>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error en la petición API:', error);
        const errorParagraph = document.createElement('p');
        errorParagraph.className = 'error-text';
        errorParagraph.textContent = `⚠️ [ERROR_DE_CONEXIÓN]: ${error.message}`;
        container.innerHTML = '';
        container.appendChild(errorParagraph);
    }
}

// Gestión de pestañas para múltiples certificados (Cisco)
document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelector('.cert-tabs');

    if (tabsContainer) {
        tabsContainer.addEventListener('click', (event) => {
            const clickedBtn = event.target.closest('.tab-btn');
            if (!clickedBtn) return;

            event.stopPropagation();

            const allButtons = tabsContainer.querySelectorAll('.tab-btn');
            allButtons.forEach(btn => btn.classList.remove('active'));

            const cardBack = tabsContainer.closest('.card-back');
            const allContents = cardBack.querySelectorAll('.cert-tab-content');
            allContents.forEach(content => content.style.display = 'none');

            clickedBtn.classList.add('active');

            const targetId = clickedBtn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    }
});