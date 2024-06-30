document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('imageModal');
    let modalImg = document.getElementById('modalImage');
    let captionText = document.getElementById('caption');
    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-item img');

    images.forEach((img, index) => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            currentIndex = index;
        }
    });

    document.querySelector('.close').onclick = function() {
        modal.style.display = "none";
    }

    document.querySelector('.prev').onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) < 0 ? images.length - 1 : (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    }

    document.querySelector('.next').onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    }
});
