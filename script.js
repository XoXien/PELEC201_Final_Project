(function() {
    const mainImages = document.querySelectorAll('#carousel img');
    let mainIndex = 0;
    const mainInterval = 2500; // 2500ms = 2.5 seconds
        if (mainImages.length) {
            mainImages.forEach((img, i) => img.classList.toggle('active', i === 0));
            setInterval(() => {
                mainImages[mainIndex].classList.remove('active');
                mainIndex = (mainIndex + 1) % mainImages.length;
                mainImages[mainIndex].classList.add('active');
            }, mainInterval);
        }

    const virtualImages = document.querySelectorAll('.virtual-image-box img');
    let virtualIndex = 0;
    const virtualInterval = 2500; // 2.5s for virtual section
        if (virtualImages.length) {
            virtualImages.forEach((img, i) => img.classList.toggle('active', i === 0));
            setInterval(() => {
                virtualImages[virtualIndex].classList.remove('active');
                virtualIndex = (virtualIndex + 1) % virtualImages.length;
                virtualImages[virtualIndex].classList.add('active');
            }, virtualInterval);
        }
})();