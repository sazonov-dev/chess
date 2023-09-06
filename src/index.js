import './scss/styles.scss';

const updateActiveDotTeam = () => {
    const scroll = document.querySelector('.scroll-team');
    const scrollContainer = scroll.querySelector('.scroll__container');
    const dotsTeam = document.querySelector('.dots-team')
    const dots = dotsTeam.querySelectorAll('.dot');
    const cardWidth = scrollContainer.querySelector('.scroll__container-card').offsetWidth;
    const scrollLeft = scrollContainer.scrollLeft;
    const activeIndex = Math.floor(scrollLeft / cardWidth);

    dots.forEach(dot => dot.classList.remove('active-dot'));

    if (dots[activeIndex]) {
        dots[activeIndex].classList.add('active-dot');
    }
}

const updateActiveDotBattle = () => {
    const scroll = document.querySelector('.scroll-battle');
    const scrollContainer = scroll.querySelector('.scroll__container');
    const dotsBattle = document.querySelector('.dots-battle');
    const dots = dotsBattle.querySelectorAll('.dot');
    const cardWidth = scrollContainer.querySelector('.scroll__container-card').offsetWidth;
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

const getChessboardElements = (className) => {
    const chessboard = document.querySelector(className)
    const chessboardLineOne = chessboard.querySelectorAll('.line-one');
    const chessboardLineTwo = chessboard.querySelectorAll('.line-two');
    const chessboardElements = {
        lineOne: [],
        lineTwo: []
    }

    for (let i = 0; i < chessboardLineOne.length; i++) {
        chessboardElements.lineOne.push(...Array.from(chessboardLineOne[i].children));
    }

    for (let i = 0; i < chessboardLineTwo.length; i++) {
        chessboardElements.lineTwo.push(...Array.from(chessboardLineTwo[i].children));
    }

    return chessboardElements;
}

const setColorToChessboardElements = (elements, color) => {
    const {lineOne, lineTwo} = elements;
    for (let i = 0; i < lineOne.length; i++) {
        if (i % 2 === 1) {
            lineOne[i].style.backgroundColor = color;
        }
    }

    for (let i = 0; i < lineTwo.length; i++) {
        if (i % 2 === 0) {
            lineTwo[i].style.backgroundColor = color;
        }
    }
}

const regButtonRedirect = (event) => {
    window.location.href = window.location.href + 'registration.html';
}

if (document.querySelector('#general')) {
    const regButton = document.querySelectorAll('#reg-button');
    const chessboardContentElements = getChessboardElements('.chessboard-content');
    const chessboardBattleElements = getChessboardElements('.chessboard-battle');
    setColorToChessboardElements(chessboardContentElements, '#5036E6')
    setColorToChessboardElements(chessboardBattleElements, '#009465')

    const scrollContainerTeam = document.querySelector('.scroll-team').querySelector('.scroll__container');
    const scrollContainerBattle = document.querySelector('.scroll-battle').querySelector('.scroll__container');
    const scrollContainerTeamLength = Array.from(scrollContainerTeam.querySelectorAll('.scroll__container-card')).length;
    const scrollContainerBattleLength = Array.from(scrollContainerBattle.querySelectorAll('.scroll__container-card')).length;
    const dotContainerTeam = document.querySelector('.dots-team');
    const dotContainerBattle = document.querySelector('.dots-battle');

    appendDots(scrollContainerTeamLength, dotContainerTeam);
    appendDots(scrollContainerBattleLength, dotContainerBattle);
    scrollContainerTeam.addEventListener('scroll', updateActiveDotTeam);
    scrollContainerBattle.addEventListener('scroll', updateActiveDotBattle);

    regButton.forEach((button) => button.addEventListener('click', regButtonRedirect))
}
