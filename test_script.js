function setupHoverEffect(card) {
  const cardContent = card.querySelector(".ot-landing-card-content");
  const cardGif = card.querySelector(".ot-landing-card-gif");
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

    // cardContent.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    cardGif.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

    // cardContent.style.boxShadow = `
    // ${deltaX / 20}px
    // ${deltaY / 30}px
    // ${distance / 20}px
    // rgba(0, 0, 0, 0.4)`;

    cardGif.style.boxShadow = `
    ${deltaX / 20}px
    ${deltaY / 30}px
    ${distance / 20}px
    rgba(0, 0, 0, 0.4)`;

    // cardContent.style.setProperty("--x", x + "px");
    // cardContent.style.setProperty("--y", y + "px");

    cardGif.style.setProperty("--x", x + "px");
    cardGif.style.setProperty("--y", y + "px");
  }); // When the mouse hovers over the content

  card.addEventListener("mouseout", () => {
    // cardContent.style.transform = "rotateX(0) rotateY(0)";
    // cardContent.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

    cardGif.style.transform = "rotateX(0) rotateY(0)";
    cardGif.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  }); // When the mouse leaves the content
}

// Select all elements with the class 'card'
const landingCards = document.querySelectorAll(".ot-landing-card");

// Set up hover effect for each card
landingCards.forEach((card) => {
  setupHoverEffect(card);
});
