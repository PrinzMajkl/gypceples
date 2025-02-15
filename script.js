document.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.content');
    const observerOptions = {
        root: null, // Sleduje celé okno
        rootMargin: '-100px 0px -100px 0px', // Přidá extra prostor (odsazení)
        threshold: 0.1 // Spustí se, když je 20 % obsahu viditelných
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    for (const content of contents) {
      observer.observe(content);
    }
});
