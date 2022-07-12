const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];
const backgroundImgs = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src=`img/${backgroundImgs}`;

document.body.appendChild(image)