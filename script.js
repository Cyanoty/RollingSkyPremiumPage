const images = [
    "Assets/Background1.png",
    "Assets/Background2.png",
    "Assets/Background3.png",
    "Assets/Background4.png",
    "Assets/Background5.png",
    "Assets/Background6.png",
    "Assets/Background7.png",
    "Assets/Background8.png",
    "Assets/background8a.png",
    "Assets/background8b.png",
    "Assets/Background10.png", 
    "Assets/Background11.png", 
    "Assets/Background12.png", 
    "Assets/Background13.png", 
    "Assets/Background14.png", 
    "Assets/Background15.png", 
    // Add more image paths 
];

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImagePath = images[randomIndex];
    document.getElementById("random-image").src = randomImagePath;
}

randomImage();
