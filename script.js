        /**
         * АГРЕГАТОР: каждый объект — мастер, поле locations — одна или несколько точек приёма.
         * Добавь мастера = новый объект в MASTERS с массивом locations: { title?, address, lat, lon }.
         * photo — опционально, иначе имя в нижнем регистре (для файла images/…jpg).
         */
        // ====== ДАННЫЕ МАСТЕРОВ ======
        const MASTERS = [
            {
                id: 1,
                name: "Сако",
                spec: "Обучался у таких гуру международного барберинга, как Baldy, Sid Sottung, Kevin Luchmun. Повышение квалификации в школе Simushka, в Академии \"Долорес\". Самый добрый мастер Аляски! Готов воплотить в жизнь все ваши пожелания по стрижке. А качественный сервис - его второе имя!",
                exp: 12,
                photo: "sako",
                yclients_link: "https://n678636.yclients.com/ru/company/123456/record/master/1",
                locations: [
                    { title: "Адрес 1", address: "Москва, ул. Люсиновская, 55", lat: 55.717300, lon: 37.623037 },
                    { title: "Адрес 2", address: "Одинцово, мкр.Клубничное поле, 3", lat: 55.678397, lon: 37.234845 }
                ],
                reviews: [
                    { author: "Михаил", rating: 5, text: "Сако - настоящий профессионал! Стрижка получилась идеальной." },
                    { author: "Денис", rating: 5, text: "Отличный мастер, приятная атмосфера. Рекомендую!" },
                    { author: "Артём", rating: 5, text: "Лучшая стрижка за последние годы. Спасибо!" },
                    { author: "Роман", rating: 5, text: "Всегда доволен результатом. Аккуратно, стильно, быстро." },
                    { author: "Игорь", rating: 5, text: "Профессионал высокого уровня. Буду ходить только к Сако." }
                ]
            },
            {
                id: 2,
                name: "Ашот",
                spec: "Обучался у гуру барберинга Jerome Kantner, Baldy, Sid Sottung, Kevin Luchmun. Если вы не знаете, у кого подстричь сына - доверьтесь Ашоту. Он с легкостью находит общий язык с детьми и знает, как сделать стильную стрижку, чтобы все мальчишки в школе обзавидовались!",
                exp: 20,
                photo: "ashot",
                yclients_link: "https://n678631.yclients.com/ru/company/123456/record/master/2",
                locations: [
                    { title: "Адрес 1", address: "Москва, ул. Люсиновская, 55", lat: 55.717315, lon: 37.623002 }
                ],
                reviews: [
                    { author: "Карен", rating: 5, text: "Ашот - лучший по бороде! Сделал форму идеальной." },
                    { author: "Давид", rating: 5, text: "Внимательный мастер, дал отличные советы по уходу." },
                    { author: "Сергей", rating: 5, text: "Прекрасное бритьё опасной бритвой. Очень рекомендую!" },
                    { author: "Алексей", rating: 5, text: "Ашот делает шикарные фейды! Очень доволен." },
                    { author: "Николай", rating: 5, text: "Отличный сервис и качество!" }
                ]
            },
            {
                id: 3,
                name: "Армен",
                spec: "Обучался у таких гуру международного барберинга, как Jerome Kantner, Baldy, Sid Sottung, Kevin Luchmun. Если вы цените своё время, то Армен вам в этом поможет. Быстро, стильно и качественно выполнит любую стрижку!",
                exp: 17,
                photo: "armen",
                yclients_link: "https://n678654.yclients.com/ru/company/123456/record/master/3",
                locations: [
                    { title: "Адрес 1", address: "Москва, Новопесчаная д4, к1", lat: 55.801749, lon: 37.516808 }
                ],
                reviews: [
                    { author: "Владимир", rating: 5, text: "Мастер своего дела, приду ещё раз." },
                    { author: "Евгений", rating: 5, text: "Топ-мастер, всегда записываюсь только к нему." },
                    { author: "Павел", rating: 5, text: "Креативный подход, результат превзошёл ожидания." },
                    { author: "Антон", rating: 5, text: "Отличная работа, приятная беседа. Спасибо!" },
                    { author: "Максим", rating: 5, text: "Рекомендую всем друзьям!" }
                ]
            },
            {
                id: 4,
                name: "Эдуард",
                spec: "Королевское бритьё, уход за бородой",
                exp: 5,
                photo: "eduard",
                yclients_link: "https://n1048823.yclients.com/ru/company/123456/record/master/4",
                locations: [
                    { title: "Адрес 1", address: "Москва, Новопесчаная д4, к1", lat: 55.801779, lon: 37.516808 }
                ],
                reviews: [
                    { author: "Олег", rating: 5, text: "Эдуард - мастер с золотыми руками. Королевское бритьё - это что-то невероятное!" },
                    { author: "Стас", rating: 5, text: "Очень аккуратно и внимательно. Обязательно приду снова." },
                    { author: "Юрий", rating: 5, text: "Лучший барбер в этом районе. Советую!" },
                    { author: "Вадим", rating: 5, text: "Профессионал высокого класса. Всё чётко и быстро." },
                    { author: "Григорий", rating: 5, text: "Отличное обслуживание, приятная атмосфера." }
                ]
            },
            {
                id: 5,
                name: "Сати",
                spec: "Отучилась в Академии Аляска. Перспективная, схватывающая на лету Сати делает крутейшие стрижки. Жизнерадостная Сати зарядит позитивом на весь день!",
                exp: 7,
                photo: "sati",
                yclients_link: "https://n678637.yclients.com/ru/company/123456/record/master/5",
                locations: [
                    { title: "Адрес 1", address: "Москва, ул. Люсиновская, 55", lat: 55.717333, lon: 37.6230010 }
                ],
                reviews: [
                    { author: "Андрей", rating: 5, text: "Сати - отличный мастер по окрашиванию. Результат супер!" },
                    { author: "Егор", rating: 5, text: "Очень стильная стрижка, спасибо!" },
                    { author: "Никита", rating: 5, text: "Всегда записываюсь только к Сати. Рекомендую!" },
                    { author: "Илья", rating: 5, text: "Профессионал своего дела, очень доволен." },
                    { author: "Роман", rating: 5, text: "Отличный подход к клиенту, учёл все пожелания." }
                ]
            },
            {
                id: 6,
                name: "Сергей",
                spec: "Обучался у таких преподавателей международного барберинга, как Jerome Kantner, Baldy, Sid Sottung, Kevin Luchmun. Сергей - гуру мужских стрижек. Если вы хотите классическую стрижку - приходите к Сергею, он выполнит её безукоризненно. За словом в карман не полезет. Даже самый капризный гость будет в восторге от его стрижки!",
                exp: 30,
                photo: "sergei",
                yclients_link: "https://n678638.yclients.com/ru/company/123456/record/master/5",
                locations: [
                    { title: "Адрес 1", address: "Москва, ул. Люсиновская, 55", lat: 55.717325, lon: 37.6230013 }
                ],
                reviews: [
                    { author: "Андрей", rating: 5, text: "Сергей - отличный мастер. Результат супер!" },
                    { author: "Егор", rating: 5, text: "Очень стильная стрижка, спасибо!" },
                    { author: "Никита", rating: 5, text: "Всегда записываюсь только к Сергею. Рекомендую!" },
                    { author: "Илья", rating: 5, text: "Профессионал своего дела, очень доволен." },
                    { author: "Роман", rating: 5, text: "Отличный подход к клиенту, учёл все пожелания." }
                ]
            }
        ];

        // ====== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ======
        function mapCenterFromAllLocations() {
            let sLat = 0;
            let sLon = 0;
            let n = 0;
            MASTERS.forEach(function (m) {
                m.locations.forEach(function (l) {
                    sLat += l.lat;
                    sLon += l.lon;
                    n += 1;
                });
            });
            if (!n) return { lat: 55.75, lon: 37.62 };
            return { lat: sLat / n, lon: sLon / n };
        }

        function mapCenterFromMasterIndices(masterIndices) {
            let sLat = 0;
            let sLon = 0;
            let n = 0;
            const indices = Array.isArray(masterIndices) ? masterIndices : MASTERS.map((_, i) => i);
            indices.forEach(function (masterIndex) {
                const m = MASTERS[masterIndex];
                if (!m || !Array.isArray(m.locations)) return;
                m.locations.forEach(function (l) {
                    sLat += l.lat;
                    sLon += l.lon;
                    n += 1;
                });
            });
            if (!n) return mapCenterFromAllLocations();
            return { lat: sLat / n, lon: sLon / n };
        }

        // Глобальное состояние страницы.
        let barbersMap = null;
        let useIframeFallbackMap = false;
        let currentFilteredMasterIndices = MASTERS.map((_, i) => i);

        function normalizeText(value) {
            return String(value || "")
                .toLowerCase()
                .replace(/ё/g, "е")
                .trim();
        }

        function getFilteredMasterIndices(query) {
            const q = normalizeText(query);
            if (!q) return MASTERS.map((_, i) => i);
            const tokens = q.split(/\s+/).filter(Boolean);
            return MASTERS
                .map((master, idx) => ({ master, idx }))
                .filter(({ master }) => {
                    const haystack = normalizeText([
                        master.name,
                        master.spec,
                        ...(master.locations || []).map((l) => `${l.title || ""} ${l.address || ""}`)
                    ].join(" "));
                    return tokens.every((token) => haystack.includes(token));
                })
                .map(({ idx }) => idx);
        }

        function masterPhotoFile(master, index) {
            if (master.photo) return master.photo;
            return master.name.toLowerCase();
        }

        function yandexEmbedUrl(lon, lat, zoom) {
            const z = zoom || 17;
            const ll = encodeURIComponent(`${lon},${lat}`);
            const pt = encodeURIComponent(`${lon},${lat},pm2rdm`);
            return `https://yandex.ru/map-widget/v1/?ll=${ll}&z=${z}&l=map&pt=${pt}`;
        }

        function yandexEmbedAllMastersUrl(masterIndices) {
            const pts = [];
            const indices = Array.isArray(masterIndices) ? masterIndices : MASTERS.map((_, i) => i);
            indices.forEach(function (masterIndex) {
                const m = MASTERS[masterIndex];
                if (!m) return;
                m.locations.forEach(function (l) {
                    pts.push(l.lon + ',' + l.lat + ',pm2rdm');
                });
            });
            const c = mapCenterFromMasterIndices(indices);
            const pt = pts.join('~');
            return 'https://yandex.ru/map-widget/v1/?ll=' + c.lon + '%2C' + c.lat + '&z=10&l=map&pt=' + encodeURIComponent(pt);
        }

        function calculateAverageRating(reviews) {
            if (!reviews || !reviews.length) return "0.0";
            const sum = reviews.reduce((s, r) => s + Number(r.rating || 0), 0);
            return (sum / reviews.length).toFixed(1);
        }

        // ====== КАРТА ======
        function initSalonMap() {
            const el = document.getElementById('mainYandexMap');
            if (!el) return;

            if (typeof ymaps === 'undefined') {
                useIframeFallbackMap = true;
                el.innerHTML = `<iframe src="${yandexEmbedAllMastersUrl(currentFilteredMasterIndices)}" width="100%" height="100%" title="Карта мастеров"></iframe>`;
                return;
            }

            ymaps.ready(function () {
                try {
                    const center = mapCenterFromAllLocations();
                    barbersMap = new ymaps.Map('mainYandexMap', {
                        center: [center.lat, center.lon],
                        zoom: 10,
                        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
                    });
                    renderMapMarkers(currentFilteredMasterIndices);
                } catch (e2) {
                    useIframeFallbackMap = true;
                    el.innerHTML = '<iframe src="' + yandexEmbedAllMastersUrl(currentFilteredMasterIndices) + '" width="100%" height="100%" title="Карта мастеров"></iframe>';
                }
            });
        }

        function renderMapMarkers(masterIndices) {
            if (useIframeFallbackMap) {
                const el = document.getElementById('mainYandexMap');
                if (el) {
                    el.innerHTML = '<iframe src="' + yandexEmbedAllMastersUrl(masterIndices) + '" width="100%" height="100%" title="Карта мастеров"></iframe>';
                }
                return;
            }
            if (!barbersMap || typeof ymaps === 'undefined') return;

            barbersMap.geoObjects.removeAll();
            masterIndices.forEach(function (mi) {
                const m = MASTERS[mi];
                if (!m) return;
                m.locations.forEach(function (l, li) {
                    const hint = l.title ? m.name + ' · ' + l.title : m.name;
                    const placemark = new ymaps.Placemark([l.lat, l.lon], { hintContent: hint }, { hasBalloon: false });
                    placemark.events.add('click', function () {
                        openMaster(mi, li);
                    });
                    barbersMap.geoObjects.add(placemark);
                });
            });
            try {
                barbersMap.setBounds(barbersMap.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 36 });
            } catch (e1) {}
        }

        // ====== РЕНДЕР МАСТЕРОВ И ПОИСК ======
        function generateMasters(masterIndices) {
            const carousel = document.getElementById('mastersCarousel');
            carousel.innerHTML = '';
            const mastersCountEl = document.getElementById('mastersCount');
            if (mastersCountEl) mastersCountEl.textContent = String(MASTERS.length);
            const meta = document.getElementById('masterSearchMeta');
            const indices = Array.isArray(masterIndices) ? masterIndices : MASTERS.map((_, i) => i);
            if (meta) meta.textContent = 'Показано мастеров: ' + indices.length + ' из ' + MASTERS.length;
            if (!indices.length) {
                carousel.innerHTML = '<p class="section-subtitle">По вашему запросу мастера не найдены.</p>';
                return;
            }

            indices.forEach(function (i) {
                const master = MASTERS[i];
                const card = document.createElement('div');
                card.className = 'master-card';
                card.addEventListener('click', function () {
                    openMaster(i, 0);
                });
                const rating = calculateAverageRating(master.reviews);
                const locationsHtml = (master.locations || [])
                    .map(function (location) {
                        return '<span class="master-card__loc-line">' + location.address + '</span>';
                    })
                    .join('');
                const imgFile = masterPhotoFile(master, i);
                card.innerHTML =
                    '<div class="master-card__photo">' +
                    '<img src="images/' + imgFile + '.jpg" alt="' + master.name + '" onerror="this.src=\'images/logo.jpg\'">' +
                    '</div>' +
                    '<h3>' + master.name + '</h3>' +
                    '<p class="master-card__rating">' +
                    '<span class="master-card__rating-star">★</span>' +
                    '<span class="master-card__rating-value">' + rating + '</span>' +
                    '<span class="master-card__rating-count">· ' + (master.reviews?.length || 0) + ' отзывов</span>' +
                    '</p>' +
                    (locationsHtml ? '<div class="master-card__loc">' + locationsHtml + '</div>' : '');
                carousel.appendChild(card);
            });
        }

        function applyMasterFilter(query) {
            currentFilteredMasterIndices = getFilteredMasterIndices(query);
            generateMasters(currentFilteredMasterIndices);
            renderMapMarkers(currentFilteredMasterIndices);
        }

        function setupMasterSearch() {
            const input = document.getElementById('masterSearch');
            const clearBtn = document.getElementById('masterSearchClear');
            if (!input || !clearBtn) return;

            input.addEventListener('input', function () {
                applyMasterFilter(input.value);
            });

            clearBtn.addEventListener('click', function () {
                input.value = '';
                applyMasterFilter('');
                input.focus();
            });
        }

        // ====== МОДАЛЬНОЕ ОКНО МАСТЕРА ======
        function openMaster(masterIndex, locationIndex) {
            const modal = document.getElementById('masterModal');
            const m = MASTERS[masterIndex];
            if (!m || !m.locations || !m.locations.length) return;

            let li = locationIndex == null ? 0 : locationIndex;
            if (li < 0 || li >= m.locations.length) li = 0;
            const loc = m.locations[li];

            const imgFile = masterPhotoFile(m, masterIndex);
            const imgSrc = 'images/' + imgFile + '.jpg';

            document.getElementById('modalAvatar').src = imgSrc;
            document.getElementById('modalName').textContent = m.name;
            document.getElementById('modalExp').textContent = '⏱ Стаж: ' + m.exp + ' лет';
            document.getElementById('modalSpec').textContent = m.spec;
            document.getElementById('modalAddress').textContent = (loc.title ? loc.title + ' — ' : '') + loc.address;
            const reviews = Array.isArray(m.reviews) ? m.reviews : [];
            document.getElementById('ratingValue').textContent = calculateAverageRating(reviews);
            document.getElementById('ratingStars').textContent = "★".repeat(Math.round(Number(calculateAverageRating(reviews)) || 0));

            let reviewsHtml = '';
            reviews.forEach(function (review) {
                let stars = '';
                for (let s = 0; s < 5; s++) {
                    stars += s < review.rating ? '★' : '☆';
                }
                reviewsHtml +=
                    '<div class="review">' +
                    '<div class="review-top">' +
                    '<span class="review-author">' + review.author + '</span>' +
                    '<span class="review-stars">' + stars + '</span>' +
                    '</div>' +
                    '<p class="review-text">' + review.text + '</p>' +
                    '</div>';
            });
            document.getElementById('modalReviews').innerHTML = reviewsHtml;

            const locWrap = document.getElementById('modalLocations');
            locWrap.innerHTML = '';
            if (m.locations.length > 1) {
                locWrap.classList.add('has-multiple');
                document.getElementById('modalAddress').style.display = 'none';
                m.locations.forEach(function (l, idx) {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'modal-location-btn' + (idx === li ? ' is-active' : '');
                    btn.textContent = l.address;
                    btn.addEventListener('click', function () {
                        openMaster(masterIndex, idx);
                    });
                    locWrap.appendChild(btn);
                });
            } else {
                locWrap.classList.remove('has-multiple');
                document.getElementById('modalAddress').style.display = '';
            }

            const modalIframe = document.getElementById('modalMap');
            modalIframe.src = yandexEmbedUrl(loc.lon, loc.lat, 16) + '&_=' + Date.now();

            const cta = document.getElementById('modalCta');
            cta.href = m.yclients_link || 'https://n1048823.yclients.com';
            cta.textContent = 'Записаться к ' + m.name;

            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeMaster() {
            const modal = document.getElementById('masterModal');
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeMaster();
        });

        // ====== БАЗОВЫЕ ЭЛЕМЕНТЫ И НАВИГАЦИЯ ======
        const logoLink = document.getElementById('logoLink');
        const headerBookBtn = document.getElementById('headerBookBtn');
        const heroBookBtn = document.getElementById('heroBookBtn');
        const modalOverlay = document.getElementById('masterModal');
        const modalCloseBtn = document.getElementById('modalCloseBtn');

        if (logoLink) {
            logoLink.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        [headerBookBtn, heroBookBtn].forEach(function (btn) {
            if (!btn) return;
            btn.addEventListener('click', function () {
                document.getElementById('masters').scrollIntoView({ behavior: 'smooth' });
            });
        });

        if (modalOverlay) {
            modalOverlay.addEventListener('click', function (event) {
                if (event.target === modalOverlay) closeMaster();
            });
        }

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeMaster);
        }

        // Бургер-меню
        // ====== МОБИЛЬНОЕ МЕНЮ ======
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav');

        function closeMobileMenu() {
            if (!burger || !nav) return;
            burger.classList.remove('active');
            nav.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }

        function openMobileMenu() {
            if (!burger || !nav) return;
            burger.classList.add('active');
            nav.classList.add('active');
            burger.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
        }

        if (burger && nav) {
            burger.addEventListener('click', (event) => {
                event.stopPropagation();
                if (nav.classList.contains('active')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });

            nav.addEventListener('click', function (event) {
                event.stopPropagation();
            });

            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });

            document.addEventListener('click', function (event) {
                if (window.innerWidth > 768) return;
                if (!nav.classList.contains('active')) return;
                if (event.target.closest('.nav') || event.target.closest('.burger')) return;
                closeMobileMenu();
            });
        }

        // Для мобильных: галерея before/after по клику
        // На мобильных before/after переключается по тапу.
        if (window.innerWidth <= 768) {
            const beforeAfterItems = document.querySelectorAll('.before-after');
            beforeAfterItems.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

        // ====== ГАЛЕРЕЯ РАБОТ ======
        const galleryGrid = document.getElementById('galleryGrid');
        const galleryPrevBtn = document.getElementById('galleryPrev');
        const galleryNextBtn = document.getElementById('galleryNext');

        if (galleryGrid && galleryPrevBtn && galleryNextBtn) {
            // Шаг прокрутки равен ширине одной карточки вместе с gap.
            const getGalleryStep = () => {
                const firstItem = galleryGrid.querySelector('.gallery-item');
                if (!firstItem) return 320;
                const itemWidth = firstItem.getBoundingClientRect().width;
                const styles = window.getComputedStyle(galleryGrid);
                const gap = parseFloat(styles.columnGap || styles.gap || '30') || 30;
                return itemWidth + gap;
            };

            const scrollGallery = (direction) => {
                galleryGrid.scrollBy({
                    left: direction * getGalleryStep(),
                    behavior: 'smooth'
                });
            };

            galleryPrevBtn.addEventListener('click', () => scrollGallery(-1));
            galleryNextBtn.addEventListener('click', () => scrollGallery(1));
        }

        // Слайдер
        // ====== СЛАЙДЕР АТМОСФЕРЫ ======
        const sliderRoot = document.querySelector('.slider');
        const slider = sliderRoot?.querySelector('.slides');
        const prevBtn = document.getElementById('sliderPrev');
        const nextBtn = document.getElementById('sliderNext');
        const dotsContainer = sliderRoot?.querySelector('.dots');
        let currentSlide = 0;
        let slidesCount = 0;
        let dots = [];

        if (slider && prevBtn && nextBtn && dotsContainer) {
            slidesCount = slider.children.length;
            
            for (let i = 0; i < slidesCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
                dots.push(dot);
            }

            function updateSlider() {
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentSlide);
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

        // ====== ПЛАВНАЯ ПРОКРУТКА ПО ЯКОРЯМ ======
        document.querySelectorAll('.nav a').forEach(function (link) {
            const href = link.getAttribute('href');
            if (href === '#contacts') {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
                });
            }
            if (href === '#mastersMap') {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.getElementById('mastersMap').scrollIntoView({ behavior: 'smooth' });
                });
            }
        });

        // ====== ИНИЦИАЛИЗАЦИЯ ======
        generateMasters(currentFilteredMasterIndices);
        setupMasterSearch();
        initSalonMap();
