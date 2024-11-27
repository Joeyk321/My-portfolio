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
    // Ensure DOM Loads Before Attaching Listeners
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('menu-icon');
    hamburger.addEventListener('click', toggleMenu);

// Custom Cursor Logic
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.createElement('div');
    const cursorBubble = document.createElement('div');

    customCursor.classList.add('custom-cursor');
    cursorBubble.classList.add('cursor-bubble');

    document.body.appendChild(customCursor);
    document.body.appendChild(cursorBubble);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');

    // Move the cursor and bubble with the mouse
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;

        cursorBubble.style.left = `${e.clientX}px`;
        cursorBubble.style.top = `${e.clientY}px`;
    });

    // Apply click effect
    document.addEventListener('mousedown', () => {
        customCursor.classList.add('click');
        cursorBubble.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        customCursor.classList.remove('click');
        cursorBubble.classList.remove('click');
    });

    // Apply hover effect on interactive elements
    interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
            cursorBubble.classList.add('hover');
        });

        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
            cursorBubble.classList.remove('hover');
        });
    });

    // Hide the cursor when leaving the viewport
    document.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
        cursorBubble.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
        cursorBubble.style.opacity = '1';
    });
});
