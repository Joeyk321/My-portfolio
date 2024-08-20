document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.portfolio-button').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('slide-out'); // Add the slide-out class with background color

        setTimeout(function() {
            window.location.href = "portfolio.html";
        }, 1000); // Matches the CSS transition duration
    });
});
