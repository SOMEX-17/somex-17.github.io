// ========== МАСТЕРА ==========
const masterNames = [
    "Ашот", "Армен", "Сако", "Эдуард", "Сати", "Сергей",
    "Дима", "Алексей", "Владимир", "Константин", "Михаил", "Егор",
    "Никита", "Илья", "Антон", "Роман", "Андрей", "Олег",
    "Стас", "Вадим", "Григорий", "Филипп", "Даниил", "Иван"
];

const masterSpecs = [
    "Классические мужские стрижки, укладка",
    "Моделирование бороды, современные стрижки",
    "Fade-стрижки, креативные образы",
    "Королевское бритьё, уход за бородой",
    "Спортивные стрижки, окрашивание",
    "Премиальный сервис, работа с длинными волосами",
    "Детские стрижки, семейные залы",
    "Текстурные стрижки, укладки",
    "Бритьё головы, камуфляж седины",
    "Мужской маникюр, уход за руками",
    "SPA-программы для лица",
    "Коррекция бровей, восковая депиляция",
    "Стрижки машинкой, фейды",
    "Вечерние причёски, укладки",
    "Креативное окрашивание",
    "Работа с азиатскими волосами",
    "Кудрявые волосы, стайлинг",
    "Мужские укладки, wax",
    "Традиционное бритьё опасной бритвой",
    "Экспресс-услуги, мужской перерыв",
    "Премиум-класс, работа со знаменитостями",
    "Обучение стажёров, наставник",
    "Мастер-международник, конкурсы",
    "Лучший барбер года"
];

const masterExps = [15, 10, 6, 5, 7, 8, 4, 6, 9, 5, 3, 7, 4, 6, 5, 8, 4, 7, 6, 5, 9, 4, 7, 5];

const allReviews = [
    { author: "Алексей", rating: 5, text: "Отличный мастер! Всегда доволен результатом." },
    { author: "Дмитрий", rating: 5, text: "Профессионал своего дела. Рекомендую!" },
    { author: "Иван", rating: 5, text: "Хороший подход к клиенту, приду ещё." },
    { author: "Михаил", rating: 5, text: "Очень аккуратно и быстро. Супер!" },
    { author: "Андрей", rating: 5, text: "Лучший барбер в городе!" }
];

// Функция для вычисления рейтинга
function calculateAverageRating() {
    let sum = 0;
    for (let review of allReviews) {
        sum += review.rating;
    }
    return (sum / allReviews.length).toFixed(1);
}

// Генерируем карточки мастеров
function generateMasters() {
    const carousel = document.getElementById('mastersCarousel');
    carousel.innerHTML = '';

    for (let i = 0; i < masterNames.length; i++) {
        const card = document.createElement('article');
        card.className = 'master-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${masterNames[i]} - ${masterSpecs[i]}`);

        const photoImg = document.createElement('img');
        photoImg.src = `images/${masterNames[i].toLowerCase()}.jpg`;
        photoImg.alt = `Фото мастера ${masterNames[i]}`;
        photoImg.loading = 'lazy';
        photoImg.onerror = () => photoImg.src = 'images/logo.jpg';

        const photoDiv = document.createElement('div');
        photoDiv.className = 'master-card__photo';
        photoDiv.appendChild(photoImg);

        const nameH3 = document.createElement('h3');
        nameH3.textContent = masterNames[i];

        const descP = document.createElement('p');
        const specText = masterSpecs[i].substring(0, 50);
        descP.textContent = specText + (masterSpecs[i].length > 50 ? '...' : '');

        card.appendChild(photoDiv);
        card.appendChild(nameH3);
        card.appendChild(descP);

        card.addEventListener('click', () => openMasterWithData(i, masterNames[i], masterExps[i], masterSpecs[i]));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openMasterWithData(i, masterNames[i], masterExps[i], masterSpecs[i]);
            }
        });

        carousel.appendChild(card);
    }
}

// Открытие модального окна мастера
function openMasterWithData(index, name, exp, spec) {
    const modal = document.getElementById('masterModal');
    const imgElement = document.querySelector(`.master-card:nth-child(${index + 1}) .master-card__photo img`);
    const imgSrc = imgElement ? imgElement.src : 'images/logo.jpg';

    document.getElementById('modalAvatar').src = imgSrc;
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalExp').textContent = `⏱ Стаж: ${exp} лет`;
    document.getElementById('modalSpec').textContent = spec;

    const avgRating = calculateAverageRating();
    document.getElementById('ratingValue').textContent = avgRating;

    let reviewsHtml = '';
    for (let review of allReviews) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < review.rating ? '★' : '☆';
        }
        reviewsHtml += `
            <div class="review">
                <div class="review-top">
                    <span class="review-author">${review.author}</span>
                    <span class="review-stars">${stars}</span>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `;
    }

    document.getElementById('modalReviews').innerHTML = reviewsHtml;

    const cta = document.getElementById('modalCta');
    cta.href = "https://n1048823.yclients.com";
    cta.textContent = `Записаться к ${name}`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.focus();
}

// Закрытие модального окна
function closeMaster() {
    const modal = document.getElementById('masterModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// ========== ОБРАБОТЧИКИ СОБЫТИЙ ==========

// Закрытие модального окна при нажатии на Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMaster();
});

// Закрытие модального окна при клике вне его
document.getElementById('masterModal').addEventListener('click', (e) => {
    if (e.target.id === 'masterModal') closeMaster();
});

// Закрытие модального окна кнопкой
document.querySelector('.modal-close').addEventListener('click', closeMaster);

// ========== БУРГЕР-МЕНЮ ==========
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Закрытие меню при изменении размера окна
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        burger?.classList.remove('active');
        nav?.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Обработка клика логотипа
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Обработка кнопок "Записаться"
document.querySelectorAll('button[aria-label*="Записаться"], button:contains("Записаться")').forEach(btn => {
    btn.addEventListener('click', () => {
        const mastersSection = document.getElementById('masters');
        mastersSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Обработка большой кнопки "Записаться онлайн"
document.querySelectorAll('.btn--large').forEach(btn => {
    if (btn.textContent.includes('Записаться')) {
        btn.addEventListener('click', () => {
            const mastersSection = document.getElementById('masters');
            mastersSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// ========== СЛАЙДЕР ==========
const slider = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
let slidesCount = 0;
let dots = [];

if (slider && prevBtn && nextBtn && dotsContainer) {
    slidesCount = slider.children.length;

    for (let i = 0; i < slidesCount; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Слайд ${i + 1}`);
        dot.setAttribute('role', 'tab');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
            dot.setAttribute('aria-selected', i === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slidesCount;
        updateSlider();
    });

    // Свайп для мобильных
    let startX = 0;
    let isDragging = false;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    slider.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
            } else {
                currentSlide = (currentSlide + 1) % slidesCount;
            }
            updateSlider();
        }
        isDragging = false;
    });
}

// ========== ГАЛЕРЕЯ BEFORE/AFTER НА МОБИЛЬНЫХ ==========
if (window.innerWidth <= 768) {
    const beforeAfterItems = document.querySelectorAll('.before-after');
    beforeAfterItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    generateMasters();
});
