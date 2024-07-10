document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const percentage = document.getElementById('percentage');
    const image = document.getElementById('image');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');

    let currentPercentage = 0;
    const images = ['rip-gravestone-isolated-on-white-background-HJCGHT.jpg', 'cute-and-funny-little-cat-cartoon-illustration-vector.jpg', 'th.jpeg', 'Cartoon.jpg', '16.jpg','th (1).jpeg','ca.jpg','th(2).jpeg','v.jpg','f.jpg','a.jpg'];
    let currentIndex = 0;

    const updateProgressBar = () => {
        progressBar.style.width = `${currentPercentage}%`;
        percentage.textContent = `${currentPercentage}%`;
    };

    const changeImage = (index) => {
        if (index >= 0 && index < images.length) {
            image.src = images[index];
        }
    };

    increaseBtn.addEventListener('click', () => {
        if (currentPercentage < 100) {
            currentPercentage += 10;
            currentIndex = (currentIndex + 1) % images.length;
            updateProgressBar();
            changeImage(currentIndex);
        }
    });

    decreaseBtn.addEventListener('click', () => {
        if (currentPercentage > 0) {
            currentPercentage -= 10;
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateProgressBar();
            changeImage(currentIndex);
        }
    });
});
        