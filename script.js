document.addEventListener("DOMContentLoaded", function () {
    const introText = "Hello! My name is Joey Katach!";
    const jobTitleText = "Web Developer";
    
    let introIndex = 0;
    let jobTitleIndex = 0;
    const typingSpeed = 100; // Adjust the speed of typing (milliseconds)
    
    function typeIntro() {
        if (introIndex < introText.length) {
            document.getElementById("intro-text").innerHTML += introText.charAt(introIndex);
            introIndex++;
            setTimeout(typeIntro, typingSpeed);
        } else {
            setTimeout(typeJobTitle, typingSpeed); // Start typing the job title after intro
        }
    }

    function typeJobTitle() {
        if (jobTitleIndex < jobTitleText.length) {
            document.getElementById("job-title").innerHTML += jobTitleText.charAt(jobTitleIndex);
            jobTitleIndex++;
            setTimeout(typeJobTitle, typingSpeed);
        }
    }

    typeIntro(); // Start typing the intro text

    // Handle the portfolio button click with a slide-out effect
    document.querySelector('.portfolio-button').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        document.body.classList.add('slide-out'); // Add slide-out class for animation

        setTimeout(function() {
            window.location.href = "portfolio.html"; // Redirect to portfolio.html after animation
        }, 1000); // Delay matches the CSS transition duration
    });
});
