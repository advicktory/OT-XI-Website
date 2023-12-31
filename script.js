let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 1.5;
})

nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 600;
})

backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 600;
})


document.addEventListener('DOMContentLoaded', function () {
    // Get the current page filename
    var currentPage = window.location.pathname.split('/').pop();

    // Remove leading slash if present
    if (currentPage.charAt(0) === '/') {
        currentPage = currentPage.slice(1);
    }

    // Find the corresponding link and add the 'active' class
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.parentNode.classList.add('active');
        }
    });
});
