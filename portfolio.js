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
