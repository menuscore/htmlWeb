// Simple i18n loader: load JSON files from /assets/i18n and replace elements with data-i18n
(function () {
    const LANG_KEY = 'ms_lang';
    const defaultLang = (navigator.language || 'es').startsWith('en') ? 'en' : 'es';
    let current = localStorage.getItem(LANG_KEY) || defaultLang;

    const load = async (lang) => {
        try {
            const res = await fetch('/assets/i18n/' + lang + '.json?v=' + new Date().getTime());
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
        console.log('[i18n] applying translations to', document.querySelectorAll('[data-i18n]').length, 'elements');
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const attrKey = el.getAttribute('data-i18n');
            if (!attrKey) return;

            // Support multiple attributes like [alt]key1[title]key2
            const parts = attrKey.split(/(?=\[)/);
            let processedAttr = false;

            parts.forEach(part => {
                const match = part.match(/^\[(.*)\](.*)/);
                if (match) {
                    const attrName = match[1];
                    const key = match[2];
                    const value = key.split('.').reduce((o, k) => (o || {})[k], data);
                    if (value !== undefined && value !== null) {
                        if (attrName === 'html') {
                            el.innerHTML = String(value).replace(/\\n/g, '<br>');
                        } else {
                            el.setAttribute(attrName, value);
                            if (attrName === 'placeholder') el.placeholder = value;
                            if (attrName === 'alt') el.alt = value;
                            if (attrName === 'value') el.value = value;
                        }
                    } else {
                        console.warn('[i18n] missing key for attribute', attrName, ':', key);
                    }
                    processedAttr = true;
                }
            });

            if (processedAttr) return;

            // Default behavior (no [attr] prefix)
            const value = attrKey.split('.').reduce((o, k) => (o || {})[k], data);
            if (value !== undefined && value !== null) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = value;
                } else if (el.tagName === 'IMG') {
                    el.alt = value;
                } else {
                    const htmlValue = String(value).replace(/\\n/g, '<br>');
                    el.innerHTML = htmlValue;
                }
            } else {
                console.warn('[i18n] missing key:', attrKey);
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
