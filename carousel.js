class Carousel {
    constructor(container, members) {
        this.container = container;
        this.members = members;
        this.currentIndex = 0;
        this.carouselContent = container.querySelector('.carousel-content');
        this.prevButton = container.querySelector('.prev');
        this.nextButton = container.querySelector('.next');

        this.initCarousel();
        this.addEventListeners();
    }

    initCarousel() {
        this.updateVisibleCards();
    }

    updateVisibleCards() {
        this.carouselContent.innerHTML = '';
        const totalMembers = this.members.length;
        const newVisibleCards = [];
        for (let i = -2; i <= 2; i++) {
            const index = (this.currentIndex + i + totalMembers) % totalMembers;
            newVisibleCards.push({ ...this.members[index], displayIndex: i });
        }
        newVisibleCards.forEach(member => {
            const card = this.createCard(member);
            this.carouselContent.appendChild(card);
        });
    }

    createCard(member) {
        const card = document.createElement('div');
        card.className = `carousel-item card ${this.getCardClassName(member.displayIndex)}`;
        card.innerHTML = `
            <div class="card-flipper">
                <div class="card-front">
                    <img src="${member.frontImage}" alt="${member.name}">
                    <div class="card-front-content">
                        <p>Name: ${member.name}</p>
                        ${member.position ? `<p>Position: ${member.position}</p>` : ''}
                        <p>Major: ${member.major}</p>
                        <p>Class: ${member.class}</p>
                    </div>
                </div>
                <div class="card-back">
                    <img src="${member.backImage}" alt="${member.name} Back">
                    <div class="card-back-content">
                        <p>Pin #: ${member.pinNumber}</p>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    getCardClassName(displayIndex) {
        switch (displayIndex) {
            case -2: return 'card-far-left';
            case -1: return 'card-left';
            case 0: return 'card-center';
            case 1: return 'card-right';
            case 2: return 'card-far-right';
            default: return '';
        }
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.members.length) % this.members.length;
        this.updateVisibleCards();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.members.length;
        this.updateVisibleCards();
    }
}

// Sample data (you'll need to replace this with your actual member data)
const eboardMembers = [
    { name: 'John Doe', position: 'President', major: 'Computer Science', class: '2024', pinNumber: '001', frontImage: 'path/to/front-image.jpg', backImage: 'path/to/back-image.jpg' },
    // Add more members...
];

const activeMembers = [
    { name: 'Jane Smith', major: 'Electrical Engineering', class: '2025', pinNumber: '002', frontImage: 'path/to/front-image.jpg', backImage: 'path/to/back-image.jpg' },
    // Add more members...
];

const alumniMembers = [
    { name: 'Bob Johnson', major: 'Mechanical Engineering', graduated: '2022', pinNumber: '003', frontImage: 'path/to/front-image.jpg', backImage: 'path/to/back-image.jpg' },
    // Add more members...
];

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    new Carousel(document.querySelector('.eboard-members .carousel-container'), eboardMembers);
    new Carousel(document.querySelector('.active-members .carousel-container'), activeMembers);
    new Carousel(document.querySelector('.alumni-members .carousel-container'), alumniMembers);
});