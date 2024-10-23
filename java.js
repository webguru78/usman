document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');

    function formatNumber(num) {
        return (num / 1000).toFixed(0) + 'K'; 
    }

    function animateCounter(counter) {
        let count = 0;
        const target = +counter.getAttribute('data-count');
        const speed = 1200; // 
        const increment = target / (speed / 100); // 
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.textContent = formatNumber(Math.floor(count));
        }, 100);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});