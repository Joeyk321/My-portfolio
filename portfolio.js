
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("floating-particles");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    let particlesArray = [];

    // Particle Constructor
    class Particle {
        constructor(x, y, size, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
            this.opacity = Math.random() * 0.5 + 0.5; // Reduced opacity for a subtle effect
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Re-position particles when they move out of bounds
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
            ctx.closePath();
        }
    }

    // Initialize particles
    function initParticles() {
        particlesArray = [];
        const numberOfParticles = 100;
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 3 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speedX = (Math.random() * 0.5) - 0.25;
            const speedY = (Math.random() * 0.5) - 0.25;
            particlesArray.push(new Particle(x, y, size, speedX, speedY));
        }
    }

    // Animate particles
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    // Resize canvas on window resize
    window.addEventListener("resize", () => {
        resizeCanvas();
        initParticles();
    });

    initParticles();
    animateParticles();
});



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