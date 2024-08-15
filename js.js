document.addEventListener('DOMContentLoaded', function () {
    // Preloader Functionality
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
        showAdBanner();
    }, 4000);

    // Ad Banner Functionality
    const adBanner = document.getElementById('ad-banner');
    const countdownElement = document.getElementById('countdown');
    const closeBtn = document.getElementById('close-btn');
    const waterEffect = document.createElement('div');
    waterEffect.id = 'water-effect';
    document.body.appendChild(waterEffect);

    let countdown = 5;
    let canCloseAd = false; // Flag to check if the ad can be closed

    function showAdBanner() {
        adBanner.classList.remove('hidden');
        adBanner.style.opacity = '1';
        adBanner.style.pointerEvents = 'all';

        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown === 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = 'none';
                closeBtn.classList.remove('hidden');
                canCloseAd = true; // Allow closing the ad
            }
        }, 1000);
    }

    // Close Ad Button
    closeBtn.addEventListener('click', function () {
        if (canCloseAd) { // Check if the ad can be closed
            adBanner.style.opacity = '0';
            adBanner.style.transform = 'translateX(100%)';
            waterEffect.style.opacity = '1';
            setTimeout(() => {
                adBanner.style.display = 'none';
                waterEffect.style.opacity = '0';
            }, 1000); // Match this duration with the transition effect time
        }
    });

    // Add scroll animations for features
    const featureItems = document.querySelectorAll('.feature-item');
    window.addEventListener('scroll', function () {
        featureItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    });
});
