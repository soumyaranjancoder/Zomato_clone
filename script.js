// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Handle search input interactivity
    const searchInput = document.querySelector('main > section:first-of-type input');

    searchInput.addEventListener('focus', () => {
        searchInput.placeholder = 'Start typing your favorite dish...';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = 'Search for restaurant, cuisine or a dish';
    });

    // Handle search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query !== '') {
                // For demonstration, we'll just alert the query
                // In a real application, you'd perform a search or redirect
                alert(`You searched for: ${query}`);
                // Clear the input
                searchInput.value = '';
            }
        }
    });

    // Feature Cards Animation on Scroll
    const featureCards = document.querySelectorAll('.features .card');

    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, options);

    featureCards.forEach(card => {
        revealOnScroll.observe(card);
    });

    // Optional: Add click event to feature cards for more interactivity
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            // For demonstration, alert the feature title
            const featureTitle = card.querySelector('h3').innerText;
            alert(`You clicked on: ${featureTitle}`);
            // In a real application, you might navigate to a detailed page or open a modal
        });
    });
});
