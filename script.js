// Function to set up hover effect for cards
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".navMenu");
  const dot = document.querySelector(".dot");

  navMenu.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "A") {
      const linkRect = event.target.getBoundingClientRect();
      const linkCenterX = linkRect.left + linkRect.width / 2 - 3; //Subtracting 3px (1/2 width of dot) to ensure that the dot is centered under the link.
      const linkUnder = linkRect.height * 0.8;

      // console.log("Center: ", linkCenterX);
      // console.log("Left: ", linkRect.left);
      // console.log("Width: ", linkRect.width);

      dot.style.transform = `translateX(${linkCenterX}px) translateY(${linkUnder}px)`;
      dot.style.opacity = 1;
    }
  });

  navMenu.addEventListener("mouseout", () => {
    dot.style.opacity = 0;
  });
});

function setupHoverEffect(card) {
  const cardContent = card.querySelector(".ot-pillers-card-content");
  card.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const x = clientX - cardRect.left;
    const y = clientY - cardRect.top;

    const deltaX = clientX - cardCenterX;
    const deltaY = clientY - cardCenterY;

    const angleX = (deltaY / cardCenterY) * 15; // Adjust the multiplier for the desired rotation speed
    const angleY = -(deltaX / cardCenterX) * 15;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    cardContent.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

    cardContent.style.boxShadow = `
    ${deltaX / 20}px 
    ${deltaY / 30}px 
    ${distance / 20}px
    rgba(0, 0, 0, 0.4)`;

    cardContent.style.setProperty("--x", x + "px");
    cardContent.style.setProperty("--y", y + "px");
  });

  card.addEventListener("mouseout", () => {
    cardContent.style.transform = "rotateX(0) rotateY(0)";
    cardContent.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
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
