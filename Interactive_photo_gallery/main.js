document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        const overlay = image.querySelector('.overlay');
        const caption = image.querySelector('.caption');
        const img = image.querySelector('img');
        const content = image.querySelector('.content');

        image.addEventListener('mouseenter', () => {
            overlay.style.opacity = '0.8';
            img.style.filter = 'grayscale(100%)';
            caption.style.bottom = '44px';
            overlay.classList.add('overlay-transition');
            caption.classList.add('caption-transition');
            caption.style.zIndex = '3';
            content.style.marginBottom = '6px';
            content.style.zIndex = '4';
        });

        image.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
            img.style.filter = 'none';
            caption.style.bottom = '0';
            overlay.classList.remove('overlay-transition');
            caption.classList.remove('caption-transition');
            caption.style.zIndex = '1';
            content.style.zIndex = '2';
        });
    });
});