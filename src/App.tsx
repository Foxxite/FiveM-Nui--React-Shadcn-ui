/** @format */

import { Button } from '@/components/ui/button';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import viteLogo from '/vite.svg';

function App() {
    const { t } = useTranslation();

    const [count, setCount] = useState(0);

    return (
        <main className="container mx-auto mt-10 text-balance text-center">
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
