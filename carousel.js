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
    { name: 'Jane Smith', position: 'Vice President', major: 'Electrical Engineering', class: '2024', pinNumber: '002', frontImage: 'path/to/front-image2.jpg', backImage: 'path/to/back-image2.jpg' },
    { name: 'Alice Johnson', major: 'Mechanical Engineering', class: '2025', pinNumber: '003', frontImage: 'path/to/front-image3.jpg', backImage: 'path/to/back-image3.jpg' },
    // Add more members...
];

const activeMembers = [
    { name: 'Alice Johnson', major: 'Mechanical Engineering', class: '2025', pinNumber: '003', frontImage: 'path/to/front-image3.jpg', backImage: 'path/to/back-image3.jpg' },
    { name: 'Bob Williams', major: 'Chemical Engineering', class: '2025', pinNumber: '004', frontImage: 'path/to/front-image4.jpg', backImage: 'path/to/back-image4.jpg' },
    // Add more members...
];

const alumniMembers = [
    { name: 'Charlie Brown', major: 'Civil Engineering', class: '2022', pinNumber: '005', frontImage: 'path/to/front-image5.jpg', backImage: 'path/to/back-image5.jpg' },
    { name: 'Diana Prince', major: 'Aerospace Engineering', class: '2021', pinNumber: '006', frontImage: 'path/to/front-image6.jpg', backImage: 'path/to/back-image6.jpg' },
    // Add more members...
];

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    new Carousel(document.querySelector('.eboard-members .carousel-container'), eboardMembers);
    new Carousel(document.querySelector('.active-members .carousel-container'), activeMembers);
    new Carousel(document.querySelector('.alumni-members .carousel-container'), alumniMembers);
});