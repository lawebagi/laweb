document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.pipboy-nav .nav-item');
    const sections = document.querySelectorAll('.pipboy-section');
    const pipboyTime = document.querySelector('.pipboy-time');

    // Update time
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        pipboyTime.textContent = `${hours}:${minutes}`;
    }
    setInterval(updateTime, 1000); // Update every second
    updateTime(); // Initial call

    // Navigation functionality
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Deactivate current active nav item and section
            document.querySelector('.pipboy-nav .nav-item.active').classList.remove('active');
            document.querySelector('.pipboy-section.active-section').classList.remove('active-section');

            // Activate clicked nav item
            item.classList.add('active');

            // Show corresponding section
            const targetId = item.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active-section');
        });
    });

    // Data tab functionality (example for the Data section)
    const dataTabButtons = document.querySelectorAll('.data-tab-button');
    const dataContent = document.querySelector('.data-content'); 

    dataTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            dataTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // You'll need to expand this for different data sections
            dataContent.innerHTML = `<h3>${button.textContent}</h3><p>Content for ${button.textContent} goes here...</p>`; 
        });
    });
});
