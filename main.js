if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('Service Worker registrado com sucesso!', registration);
        })
        .catch(error => {
            console.error('Erro ao registrar o Service Worker:', error);
        });
    });
}