/*
 *   Copyright (c) 2025 Foxxite | Articca
 *   All rights reserved.
 */

import HttpBackend from 'i18next-http-backend';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import localesUrl from '/locales.json?url';

i18n.use(HttpBackend) // Use the HTTP backend to load locales
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        backend: {
            loadPath: localesUrl, // Path to your locale files
        },
        lng: 'base', // Default language
        fallbackLng: 'base', // Fallback language if the current language is not available

        interpolation: {
            escapeValue: false, // React already safes from XSS
        },
    });

export default i18n;
