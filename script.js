function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

let slideIndex = 0;
let slideshowActive = true;

function showSlides() {
    if (!slideshowActive) return; 
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);
}
showSlides();

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    noBtn.style.position = 'fixed'; 

    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function handleResponse(answer) {
    if (answer === 'yes') {
        slideshowActive = false; 
        document.getElementById('slideshowArea').style.display = 'none';
        document.getElementById('mainContent').style.display = 'none';
        document.getElementById('btnGroup').style.display = 'none';
        
        const container = document.getElementById('finalImageContainer');
        const img = document.getElementById('finalImg');
        const text = document.getElementById('finalText');
        
        container.style.display = 'block';
        img.src = 'Hugging Hug GIF.gif';
        text.innerText = 'I love you so much Suddi! ❤️';
    }

}
