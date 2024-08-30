// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('.menu a');
//     const heroSection = document.querySelector('.hero-section section');

//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent default link behavior
//             const page = this.textContent.trim().toLowerCase().replace(/\s+/g, '-') + '.html';
//             loadPage(page);
//         });
//     });

//     function loadPage(page) {
//         fetch(page)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 heroSection.innerHTML = data;
//             })
//             .catch(error => {
//                 heroSection.innerHTML = '<p>Sorry, the content could not be loaded.</p>';
//                 console.error('Error loading page:', error);
//             });
//     }
// });

