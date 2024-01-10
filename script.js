// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the container and images
    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');

    // Hide all images initially
    images.forEach(img => img.style.display = 'none');

    // Show the first image initially
    images[0].style.display = 'block';

    // Function to switch images in a loop
    function startSlideshow() {
        let currentIndex = 0;

        setInterval(() => {
            // Hide the current image
            images[currentIndex].style.display = 'none';

            // Move to the next image
            currentIndex = (currentIndex + 1) % images.length;

            // Show the next image
            images[currentIndex].style.display = 'block';
        }, 3000); // Change the time interval (in milliseconds) as needed
    }

    startSlideshow();
});
