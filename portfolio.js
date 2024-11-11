
document.addEventListener("DOMContentLoaded", function () {
    // Remove slide-in class to show content after load
    document.body.classList.remove('slide-in');

    // Staggered animation for project cards
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('show');
        }, index * 200); // Stagger the animation with a 200ms delay between cards
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
