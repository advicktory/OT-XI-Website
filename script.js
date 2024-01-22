// Function to set up hover effect for cards
function setupHoverEffect(card) {
  const cardContent = card.querySelector(".ot-pillers-card-content");

  card.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const deltaX = clientX - cardCenterX;
    const deltaY = clientY - cardCenterY;

    const angleX = (deltaY / cardCenterY) * 20; // Adjust the multiplier for the desired rotation speed
    const angleY = -(deltaX / cardCenterX) * 20;

    cardContent.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });

  card.addEventListener("mouseout", () => {
    cardContent.style.transform = "rotateX(0) rotateY(0)";
  });
}

// Select all elements with the class 'card'
const pillerCards = document.querySelectorAll(".ot-pillers-card");

// Set up hover effect for each card
pillerCards.forEach((card) => {
  setupHoverEffect(card);
});

// Member gallery feature.
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 500;
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current page filename
  var currentPage = window.location.pathname.split("/").pop();

  // Remove leading slash if present
  if (currentPage.charAt(0) === "/") {
    currentPage = currentPage.slice(1);
  }

  // Find the corresponding link and add the 'active' class
  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.parentNode.classList.add("active");
    }
  });
});
