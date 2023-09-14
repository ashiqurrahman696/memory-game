let startScreen = document.querySelector('.start-screen');
let buttons = document.querySelectorAll('button');
let cards4x3screen = document.querySelector('#card4x3');
let cards4x3 = document.querySelectorAll('#card4x3 .card');
let cards4x4screen = document.querySelector('#card4x4');
let cards4x4 = document.querySelectorAll('#card4x4 .card');
let cards4x5screen = document.querySelector('#card4x5');
let cards4x5 = document.querySelectorAll('#card4x5 .card');
let cards5x6screen = document.querySelector('#card5x6');
let cards5x6 = document.querySelectorAll('#card5x6 .card');
let cards = document.querySelectorAll('.card');
let options = document.querySelector('.options');
let newGameBtn = document.getElementById('newGame');
let restartGameBtn = document.getElementById('restartGame');
let cardOne, cardTwo;
let disabledDeck = false;
let matched = 0;

function flipCard4x3(e){
    let clickedCard = e.target;
    if(cardOne !== clickedCard && !disabledDeck){
        clickedCard.classList.add('flip');
        if(!cardOne) return cardOne = clickedCard;
        disabledDeck = true;
        cardTwo = clickedCard;
        let cardOneImg = cardOne.querySelector('.back-view img').src;
        let cardTwoImg = cardTwo.querySelector('.back-view img').src;
        matchCards4x3(cardOneImg, cardTwoImg);
    }
}

function matchCards4x3(img1, img2){
    if(img1 === img2){
        matched++;
        if(matched === 6){
            setTimeout(() => {
                return shuffleCard4x3();
            }, 1200);
        }
        cardOne.removeEventListener('click', flipCard4x3);
        cardTwo.removeEventListener('click', flipCard4x3);
        cardOne = cardTwo = '';
        return disabledDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = '';
        disabledDeck = false;
    }, 1200);
}

function shuffleCard4x3(){
    matched = 0;
    disabledDeck = false;
    cardOne = cardTwo = '';
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards4x3.forEach((card, i) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('.back-view img');
        imgTag.src = `images/${arr[i]}.jpg`;
        card.addEventListener('click', flipCard4x3);
    });
}


function flipCard4x4(e){
    let clickedCard = e.target;
    if(cardOne !== clickedCard && !disabledDeck){
        clickedCard.classList.add('flip');
        if(!cardOne) return cardOne = clickedCard;
        disabledDeck = true;
        cardTwo = clickedCard;
        let cardOneImg = cardOne.querySelector('.back-view img').src;
        let cardTwoImg = cardTwo.querySelector('.back-view img').src;
        matchCards4x4(cardOneImg, cardTwoImg);
    }
}

function matchCards4x4(img1, img2){
    if(img1 === img2){
        matched++;
        if(matched === 8){
            setTimeout(() => {
                return shuffleCard4x4();
            }, 1200);
        }
        cardOne.removeEventListener('click', flipCard4x4);
        cardTwo.removeEventListener('click', flipCard4x4);
        cardOne = cardTwo = '';
        return disabledDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = '';
        disabledDeck = false;
    }, 1200);
}

function shuffleCard4x4(){
    matched = 0;
    disabledDeck = false;
    cardOne = cardTwo = '';
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards4x4.forEach((card, i) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('.back-view img');
        imgTag.src = `images/${arr[i]}.jpg`;
        card.addEventListener('click', flipCard4x4);
    });
}


function flipCard4x5(e){
    let clickedCard = e.target;
    if(cardOne !== clickedCard && !disabledDeck){
        clickedCard.classList.add('flip');
        if(!cardOne) return cardOne = clickedCard;
        disabledDeck = true;
        cardTwo = clickedCard;
        let cardOneImg = cardOne.querySelector('.back-view img').src;
        let cardTwoImg = cardTwo.querySelector('.back-view img').src;
        matchCards4x5(cardOneImg, cardTwoImg);
    }
}

function matchCards4x5(img1, img2){
    if(img1 === img2){
        matched++;
        if(matched === 10){
            setTimeout(() => {
                return shuffleCard4x5();
            }, 1200);
        }
        cardOne.removeEventListener('click', flipCard4x5);
        cardTwo.removeEventListener('click', flipCard4x5);
        cardOne = cardTwo = '';
        return disabledDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = '';
        disabledDeck = false;
    }, 1200);
}

function shuffleCard4x5(){
    matched = 0;
    disabledDeck = false;
    cardOne = cardTwo = '';
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards4x5.forEach((card, i) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('.back-view img');
        imgTag.src = `images/${arr[i]}.jpg`;
        card.addEventListener('click', flipCard4x5);
    });
}


function flipCard5x6(e){
    let clickedCard = e.target;
    if(cardOne !== clickedCard && !disabledDeck){
        clickedCard.classList.add('flip');
        if(!cardOne) return cardOne = clickedCard;
        disabledDeck = true;
        cardTwo = clickedCard;
        let cardOneImg = cardOne.querySelector('.back-view img').src;
        let cardTwoImg = cardTwo.querySelector('.back-view img').src;
        matchCards5x6(cardOneImg, cardTwoImg);
    }
}

function matchCards5x6(img1, img2){
    if(img1 === img2){
        matched++;
        if(matched === 15){
            setTimeout(() => {
                return shuffleCard5x6();
            }, 1200);
        }
        cardOne.removeEventListener('click', flipCard5x6);
        cardTwo.removeEventListener('click', flipCard5x6);
        cardOne = cardTwo = '';
        return disabledDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = '';
        disabledDeck = false;
    }, 1200);
}

function shuffleCard5x6(){
    matched = 0;
    disabledDeck = false;
    cardOne = cardTwo = '';
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards5x6.forEach((card, i) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('.back-view img');
        imgTag.src = `images/${arr[i]}.jpg`;
        card.addEventListener('click', flipCard5x6);
    });
}

shuffleCards();

function shuffleCards(){
    shuffleCard4x3();
    shuffleCard4x4();
    shuffleCard4x5();
    shuffleCard5x6();
}

function newGame(){
    startScreen.classList.remove('hide');
    cards4x3screen.classList.add('hide');
    cards4x4screen.classList.add('hide');
    cards4x5screen.classList.add('hide');
    cards5x6screen.classList.add('hide');
    options.classList.add('hide');
    shuffleCards();
}

function restartGame(){
    cards.forEach(card => {
        card.classList.remove('flip');
    });
    shuffleCards();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id == 'btn4x3'){
            startScreen.classList.add('hide');
            cards4x3screen.classList.remove('hide');
        }
        else if(button.id == 'btn4x4'){
            startScreen.classList.add('hide');
            cards4x4screen.classList.remove('hide');
        }
        else if(button.id == 'btn4x5'){
            startScreen.classList.add('hide');
            cards4x5screen.classList.remove('hide');
        }
        else if(button.id == 'btn5x6'){
            startScreen.classList.add('hide');
            cards5x6screen.classList.remove('hide');
        }
        options.classList.remove('hide');
    });
});

cards4x3.forEach(card => {
    card.addEventListener('click', flipCard4x3);
});

cards4x4.forEach(card => {
    card.addEventListener('click', flipCard4x4);
});

cards4x5.forEach(card => {
    card.addEventListener('click', flipCard4x5);
});

cards5x6.forEach(card => {
    card.addEventListener('click', flipCard5x6);
});

newGameBtn.addEventListener('click', newGame);
restartGameBtn.addEventListener('click', restartGame);