// Simple i18n loader: load JSON files from /assets/i18n and replace elements with data-i18n
(function () {
    const LANG_KEY = 'ms_lang';
    const defaultLang = (navigator.language || 'es').startsWith('en') ? 'en' : 'es';
    let current = localStorage.getItem(LANG_KEY) || defaultLang;

    const load = async (lang) => {
        try {
            const res = await fetch('/assets/i18n/' + lang + '.json');
            if (!res.ok) throw new Error('i18n not found');
            const data = await res.json();
            apply(data);
            document.documentElement.lang = lang;
            localStorage.setItem(LANG_KEY, lang);
            current = lang;
            const btn = document.getElementById('langToggle');
            // prefer localized language name if available in JSON under data.lang
            if (btn) {
                try {
                    btn.textContent = (data.lang && data.lang[lang]) ? data.lang[lang] : lang.toUpperCase();
                } catch (e) { btn.textContent = lang.toUpperCase(); }
            }
            // mark active menu items and aria state
            document.querySelectorAll('.lang-select').forEach(el => {
                const isActive = (el.dataset.lang === lang);
                el.classList.toggle('active', isActive);
                el.setAttribute('aria-checked', String(isActive));
            });
            document.title = data.title || document.title;
            console.debug('[i18n] loaded', lang);
        } catch (err) { console.warn('i18n load failed', err) }
    };

    const apply = (data) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = key.split('.').reduce((o, k) => o && o[k], data);
            if (value !== undefined && value !== null) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = value;
                else el.innerHTML = value;
            }
        });
    };

    // Use event delegation for lang selection so it works even if menu items change
    const activateLang = (lang) => {
        if (!lang) return;
        load(lang);
        // hide dropdown (Bootstrap)
        try { const btn = document.getElementById('langToggle'); if (btn) { const inst = bootstrap.Dropdown.getInstance(btn) || new bootstrap.Dropdown(btn); inst.hide(); } } catch (e) { }
    };

    document.addEventListener('click', function (e) {
        const target = e.target.closest && e.target.closest('.lang-select');
        if (target) { e.preventDefault(); activateLang(target.dataset.lang); }
    });

    // keyboard support for delegated items (Enter / Space)
    document.addEventListener('keydown', function (e) {
        const target = e.target && e.target.closest && e.target.closest('.lang-select');
        if (target && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault(); activateLang(target.dataset.lang);
        }
    });

    // ensure dropdown instance exists (Bootstrap)
    try { const btn = document.getElementById('langToggle'); if (btn) { new bootstrap.Dropdown(btn); } } catch (e) { }

    // direct listeners as a fallback (some browsers/contexts behave better with direct handlers)
    document.querySelectorAll('.lang-select').forEach(function (el) {
        el.addEventListener('click', function (e) { e.preventDefault(); activateLang(el.dataset.lang); });
        el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateLang(el.dataset.lang); } });
    });

    // initial load
    load(current);
})();
