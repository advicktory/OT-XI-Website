document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".ot-landing-navbar-links");
  const dot = document.querySelector(".dot");
  const dotWidth = parseFloat(window.getComputedStyle(dot).width);

  navMenu.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.tagName === "IMG") {
      target = target.closest("A");
    }

    if (target.tagName === "A") {
      const linkRect = target.getBoundingClientRect();
      const linkCenterX = linkRect.left + linkRect.width / 2 - dotWidth / 2; //Subtracting 3px (1/2 width of dot) to ensure that the dot is centered under the link.
      const linkUnder = linkRect.height * 1.2;

      console.log(linkRect.width);
      dot.style.transform = `translateX(${linkCenterX}px) translateY(${linkUnder}px)`;
      dot.style.opacity = 1;
    }
  });

  navMenu.addEventListener("mouseout", () => {
    dot.style.opacity = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".ot-landing-navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // User is scrolling down
      navbar.classList.add("hidden");
    } else {
      // User is scrolling up
      navbar.classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  });
});

function setupHoverEffect(card, whichCard) {
  if ("piller" === whichCard) {
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
  } else if ("landing" === whichCard) {
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

      const angleX = (deltaY / cardCenterY) * 30; // Adjust the multiplier for the desired rotation speed
      const angleY = -(deltaX / cardCenterX) * 30;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      cardGif.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

      cardGif.style.boxShadow = `
        ${deltaX / 20}px
        ${deltaY / 30}px
        ${distance / 20}px
        rgba(0, 0, 0, 0.4)`;

      cardGif.style.setProperty("--x", x + "px");
      cardGif.style.setProperty("--y", y + "px");
    }); // When the mouse hovers over the content

    card.addEventListener("mouseout", () => {
      cardGif.style.transform = "rotateX(0) rotateY(0)";
      cardGif.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    }); // When the mouse leaves the content
  }
}

// Select all elements with the class 'card'
const pillerCards = document.querySelectorAll(".ot-pillers-card");
const landingCards = document.querySelectorAll(".ot-landing-card");

landingCards.forEach((card) => {
  setupHoverEffect(card, "landing");
});

// Set up hover effect for each card
pillerCards.forEach((card) => {
  setupHoverEffect(card, "piller");
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
// End member feature
