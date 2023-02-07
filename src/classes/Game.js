import Card from './Card';

import Peer1 from '../images/peer1.jpg';
import Peer2 from '../images/peer2.jpg';
import Peer3 from '../images/peer3.jpg';
import Peer4 from '../images/peer4.png';

class Game {
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
        this.initCards();
    }

    initCards() {
        this.#cards.forEach(card => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');
            cardContainer.dataset.peer = card.name;
            cardContainer.dataset.card = `card-${card.id}`;

            this.#gameContainer.appendChild(cardContainer);


            const cardClass = new Card(card.id, card.name, card.image);
            cardContainer.appendChild(cardClass.initElement());
        })
    }
}

export default Game;