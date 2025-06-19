// simple hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
// make the images clickable to open in a modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.gallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
// without this it does not close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
// close the modal when clicking outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
