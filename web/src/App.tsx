/** @format */

import { fetchNui, isEnvBrowser, useNuiEvent } from '@krzx000/fivem-utils';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import reactLogo from './assets/react.svg';
import { useTranslation } from 'react-i18next';
import viteLogo from '/vite.svg';

function App() {
    const { t } = useTranslation();

    const [count, setCount] = useState(0);

    const [visible, setVisible] = useState(isEnvBrowser() ? true : false);
    useNuiEvent('show', () => {
        setVisible(true);
    });
    useNuiEvent('hide', () => {
        setVisible(false);
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                fetchNui('close');
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <main className="container mx-auto mt-10 text-center text-balance">
            <div className="mb-4 flex items-center justify-center gap-2">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="aspect-square h-32" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="aspect-square h-32" alt="React logo" />
                </a>
            </div>

            <h1 className="text-3xl">{t('title')}</h1>
            <h2 className="text-2xl">{t('description')}</h2>

            <div className="m-4">
                <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

            <p className="text-sm">{t('docs')}</p>
        </main>
    );
}

export default App;
