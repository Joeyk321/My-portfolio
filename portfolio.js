document.addEventListener("DOMContentLoaded", function () {
    // Trigger the body slide-in effect
    document.body.classList.remove('slide-in');

    // Add delay to each project card to create a staggered animation
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('show');
        }, index * 200); // Staggered animation: 200ms delay between each
    });
});
