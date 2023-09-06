import './scss/styles.scss';

const updateActiveDot = () => {
    const scrollContainer = document.querySelector('.team-top__players');
    const dots = document.querySelectorAll('.dot');
    const cardWidth = scrollContainer.querySelector('.team-top__players-card').offsetWidth;
    const scrollLeft = scrollContainer.scrollLeft;
    const activeIndex = Math.floor(scrollLeft / cardWidth);

    dots.forEach(dot => dot.classList.remove('active-dot'));

    if (dots[activeIndex]) {
        dots[activeIndex].classList.add('active-dot');
    }
}

const appendDots = (count, section) => {
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div')
        if (i === 0) {
            dot.classList.add('dot', 'active-dot');
        } else {
            dot.classList.add('dot');
        }
        section.append(dot);
    }
}

if (document.querySelector('#general')) {
    const scrollContainer = document.querySelector('.team-top__players');
    const scrollContainerLength = Array.from(scrollContainer.querySelectorAll('.team-top__players-card')).length;
    const dotContainer = document.querySelector('.dots-container');

    appendDots(scrollContainerLength, dotContainer);
    scrollContainer.addEventListener('scroll', updateActiveDot);
}
