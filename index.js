const containers = [...document.querySelectorAll('.image.blurry')];

containers.forEach(container => {
    const large = container.dataset.large;
    const image = container.querySelector('img');

    const smallImage = new Image();
    smallImage.src = image.src;
    smallImage.onload = () => {
        image.classList.add('loaded');
    };

    const largeImage = new Image();
    largeImage.src = large;
    largeImage.onload = () => {
        largeImage.classList.add('loaded');
    };

    container.appendChild(largeImage);
});
