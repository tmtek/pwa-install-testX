import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { awaitInstallPrompt, isStandalone } from 'preact-pwa-install';

export function useInstaller() {
    const [standalone] = useState(isStandalone());
    const [installPrompt, setInstallPrompt] = useState(null);
    useEffect(() => awaitInstallPrompt(prompt => setInstallPrompt(prompt)));
    return ({ isStandalone:standalone, installPrompt });
}