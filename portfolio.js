// Initialize EmailJS with your User ID
emailjs.init("z0-Ln8fXj5FVAFWkg");  // Replace with your actual User ID from EmailJS

document.addEventListener("DOMContentLoaded", function() {
    // 1. Remove slide-in class to show content after load
    document.body.classList.remove('slide-in');

    // 2. Staggered animation for project cards
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('show');
        }, index * 200); // Stagger the animation with a 200ms delay between cards
    });

    // 3. Hamburger menu toggle (if exists)
    const hamburger = document.getElementById('menu-icon');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // 4. Custom Cursor Logic
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // 5. Custom Cursor with bubble effect for interactive elements
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

    // 6. Form submission logic for EmailJS
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = {
                full_name: document.getElementById('full-name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            console.log('Form Data:', formData);  // Log the form data to see if it's being collected correctly

            // Send email using EmailJS
            emailjs.send('service_ip5q0as', 'template_qoosw5q', formData)
                .then(function(response) {
                    console.log('Email sent successfully:', response);  // Log the success response
                    alert('Message sent successfully!');
                    messageForm.reset(); // Clear the form
                }, function(error) {
                    console.error('Failed to send message:', error);  // Log the error for debugging
                    alert('Failed to send message. Please try again later.');
                });
        });
    }
});
