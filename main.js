// Mobile Menu Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-xmark');
});

// Close menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }
    });
});

// Category Filtering Logic for "Nossos Livros"
function filterCategory(category, buttonElement) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });

    buttonElement.classList.add('active');
    buttonElement.setAttribute('aria-selected', 'true');

    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        if (category === 'todos' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Modal Trigger Logic
function openModal(title, body) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent = body;
    const modal = document.getElementById('info-modal');
    modal.classList.add('open');
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    modal.classList.remove('open');
}

// Tab Switcher for Code Inspector
function switchTab(tabId, element) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });

    element.classList.add('active');
    element.setAttribute('aria-selected', 'true');

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
}

// Search Form Handler
function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('site-search').value;
    if (query.trim()) {
        openModal('Busca no Acervo', `Resultados de pesquisa para "${query}": Foram encontrados 8 e-books e 3 artigos na base UniFECAF.`);
    }
}