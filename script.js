// 1. Dynamic Greeting (displays on the homepage)
const updateGreeting = () => {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    // Assumes you have an element with id="welcome-text"
    const welcomeElement = document.getElementById('welcome-text');
    if (welcomeElement) {
        welcomeElement.innerText = ${greeting} Welcome to my personal site.;
    }
};

// 2. Back to Top Button Logic
const createBackToTopBtn = () => {
    const btn = document.createElement("button");
    btn.innerHTML = "↑";
    btn.setAttribute("id", "backToTop");
    document.body.appendChild(btn);

    // Show button when scrolling down
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // Scroll to top when clicked
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    createBackToTopBtn();
});