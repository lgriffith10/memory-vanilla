import Card from './Card';

import Peer1 from '../images/peer1.jpg';
import Peer2 from '../images/peer2.jpg';
import Peer3 from '../images/peer3.jpg';
import Peer4 from '../images/peer4.png';

class Game {
    compteur = 0;

    #gameContainer = document.querySelector('[data-game]');

    #cards = [
        {
            id: 1,
            name: 'peer-1',
            image: Peer1,
            visible: false,
        },
        {
            id: 2,
            name: 'peer-1',
            image: Peer1,
            visible: false,
        },
        {
            id: 3,
            name: 'peer-2',
            image: Peer2,
            visible: false,
        },
        {
            id: 4,
            name: 'peer-2',
            image: Peer2,
            visible: false,
        },
        {
            id: 5,
            name: 'peer-3',
            image: Peer3,
            visible: false,
        },
        {
            id: 6,
            name: 'peer-3',
            image: Peer3,
            visible: false,
        },
        {
            id: 7,
            name: 'peer-4',
            image: Peer4,
            visible: false,
        },
        {
            id: 8,
            name: 'peer-4',
            image: Peer4,
            visible: false,
        }
    ]

    constructor() {
        this.init();
    }

    init() {
        document.querySelector('[data-win-overlay]').classList.remove('overlay--visible')
        
        this.initCards();
        this.initEvents();
        this.initCompteur();
    }
    
    getCompteur() {
        return this.compteur;
    }

    setCompteur() {
        this.compteur++;
    }

    initCards() {
        const shuffledArray = this.#cards.sort(() => 0.5 - Math.random());

        shuffledArray.forEach(card => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');
            cardContainer.classList.add('col-3');
            cardContainer.dataset.peer = card.name;
            cardContainer.dataset.card = `card-${card.id}`;

            this.#gameContainer.appendChild(cardContainer);


            const cardClass = new Card(card.id, card.name, card.image, cardContainer);
            cardContainer.appendChild(cardClass.initElement());
        })
    }

    initEvents() {
        document.addEventListener('cardClicked', () => {
            this.checkCards();
        }, false);

        document.querySelector('[data-restart]').addEventListener('click', () => {
            this.restartGame();
        })
    }

    initCompteur() {
        const currentCompteur = this.getCompteur();
        document.querySelector('[data-compteur]').innerHTML = `${currentCompteur}`;

        document.addEventListener('compteur', () => {
            this.setCompteur();

            document.querySelector('[data-compteur]').innerHTML = this.getCompteur();
        })
    }

    checkCards() {
        const activeCards = document.querySelectorAll('.card--active');

        if (activeCards.length === 2) {
            const firstCard = activeCards[0].parentElement.dataset.peer;
            const secondCard = activeCards[1].parentElement.dataset.peer;

            if (firstCard === secondCard) {
                activeCards.forEach(card => {
                    card.classList.add('card--matched');
                    card.classList.remove('card--active')
                });
            }

            const event = new Event('compteur');
            document.dispatchEvent(event);
        }

        if (activeCards.length > 2) {
            activeCards.forEach(card => {
                card.classList.remove('card--active');
            });
        }

        console.log(this.compteur);
        this.checkWin();
    }

    checkWin() {
        const cards = document.querySelectorAll('.card');

        const remainingCards = Array.from(cards).filter(card => card.classList.contains('card--matched'));
        

        if (remainingCards.length === cards.length) {
            document.querySelector('[data-win-overlay]').classList.add('overlay--visible');
        }
    }

    restartGame() {
        document.querySelectorAll('card--matched').forEach(card => {
            card.classList.remove('card--matched');
        })

        this.init();
    }
}

export default Game;