// List of gifs
const gifs = [
    "gifs/1.gif",
    "gifs/2.gif",
    "gifs/3.gif",
    "gifs/4.gif",
    "gifs/5.gif",
    "gifs/6.gif",
    "gifs/7.gif",
    "gifs/8.gif",
    "gifs/9.gif",
    "gifs/10.gif",
    "gifs/11.gif",
    "gifs/12.gif",
    "gifs/13.gif",
    "gifs/14.gif",
    "gifs/15.gif",
    "gifs/16.gif",
    "gifs/17.gif",
    "gifs/18.gif",
    "gifs/19.gif",
    "gifs/20.gif",
    "gifs/21.gif",
    "gifs/22.gif"
];

// Randomly select a gif
const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

// Set the gif as the background image
document.body.style.backgroundImage = `url(${randomGif})`;
