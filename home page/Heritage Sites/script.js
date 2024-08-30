// script.js

document.addEventListener('DOMContentLoaded', function () {
    //sm
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle navigation link clicks
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetUrl = this.getAttribute('href');
            window.location.href = targetUrl;
        });
    });

    // Highlight the active link in the navigation
    const currentPage = window.location.pathname.split("/").pop();
    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPage || (currentPage === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Dynamic content changing
    const changeContent = document.querySelector('.change_content');
    const contentList = [
        "Amritsar: The Golden City In Punjab",
        "Lucknow: The City Of The Nawabs",
        "Delhi: A Potpourri Of Different Cultures",
        "Rajasthan: The Land Of Rajputs",
        "Kolkata: The City Of Joy",
        "Mysore: The Palace City Of India",
        "Rann of Kutch: The Land Of The White Desert",
        "Hyderabad: The City Of Nizams",
        "Kerala: God's Own Country",
        "Hampi: Ancient Kingdom Of Vijaynagar",
        "Pattadakal: A Group Of Monuments",
        "Goa: Land Of Beaches And Churches",
        "Chola Temples: Architectural Heritage Of Chola Empire"
    ];

    let index = 0;

    function updateContent() {
        changeContent.textContent = contentList[index];
        index = (index + 1) % contentList.length;
    }

    // Update content every 5 seconds
    setInterval(updateContent, 5000);

    // Modal functionality for image previews
    const images = document.querySelectorAll('.carousel-image');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modal.appendChild(modalImage);

    images.forEach(image => {
        image.addEventListener('click', function () {
            modalImage.src = this.src;
            modal.classList.add('open');
        });
    });

    modal.addEventListener('click', function () {
        modal.classList.remove('open');
    });
});

// Example of additional features

// Smooth scroll back to top button
const backToTopButton = document.createElement('button');
backToTopButton.classList.add('back-to-top');
backToTopButton.textContent = 'Back to Top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
