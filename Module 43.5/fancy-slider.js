const images = [
    './images/2.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/12.jpg',
    './images/14.jpg',
    './images/15.jpg',
    './images/16.jpg',
    './images/18.jpg',
    './images/25.jpg',
    './images/37.jpg'
]

let imageIndex = 0;

const imageSlider = document.getElementById('img-slider');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const getImages = images[imageIndex];
    imageSlider.setAttribute('src', getImages);
    imageIndex++;
}, 1400);