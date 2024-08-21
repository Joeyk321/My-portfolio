document.addEventListener("DOMContentLoaded", function () {
    const introText = "Hi there! I'm Joey Katach,";
    const jobTitleText = "a passionate Web Developer.";
    const callToActionText = "Please click the button below to explore my portfolio.";

    let introIndex = 0;
    let jobTitleIndex = 0;
    let callToActionIndex = 0;
    const typingSpeed = 100; // Adjust the speed of typing (milliseconds)

    function typeIntro() {
        if (introIndex < introText.length) {
            document.getElementById("intro-text").innerHTML += introText.charAt(introIndex);
            introIndex++;
            setTimeout(typeIntro, typingSpeed);
        } else {
            setTimeout(typeJobTitle, typingSpeed);
        }
    }

    function typeJobTitle() {
        if (jobTitleIndex < jobTitleText.length) {
            document.getElementById("job-title").innerHTML += jobTitleText.charAt(jobTitleIndex);
            jobTitleIndex++;
            setTimeout(typeJobTitle, typingSpeed);
        } else {
            setTimeout(typeCallToAction, typingSpeed);
        }
    }

    function typeCallToAction() {
        if (callToActionIndex < callToActionText.length) {
            document.getElementById("call-to-action").innerHTML += callToActionText.charAt(callToActionIndex);
            callToActionIndex++;
            setTimeout(typeCallToAction, typingSpeed);
        }
    }

    typeIntro(); // Start typing the intro text

    // Handle the portfolio button click
    document.querySelector('.portfolio-button').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        document.body.classList.add('slide-out'); // Add slide-out class for animation

        setTimeout(function() {
            window.location.href = "portfolio.html"; // Redirect to portfolio.html after animation
        }, 1000); // Delay matches the CSS transition duration
    });
});
