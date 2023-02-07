import BackImage from '../images/back.png';


class Card {
    constructor(id, name, image, container) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.container = container;

        this.init();
    }

    init() {
        this.initElement();
        this.initEvents();
    }

    initElement() {
        const element = document.createElement('div');
        element.classList.add('card');

        const faces = [
            {
                tag: 'div',
                classes: ['card-side', 'back']
            },
            {
                tag: 'div',
                classes: ['card-side', 'front']
            }
        ];

        faces.forEach(face => {
            const faceElement = document.createElement(face.tag);
            face.classes.forEach(faceClass => faceElement.classList.add(faceClass));
            element.appendChild(faceElement);

            if(face.classes.includes('front')) {
                const imageElement = new Image();
                imageElement.src = this.image;
                faceElement.appendChild(imageElement);
            } else {
                const imageElement = new Image();
                imageElement.src = BackImage;
                faceElement.appendChild(imageElement);
            }
        });

        return element;
    }

    initEvents() {
        this.container.addEventListener('click', () => {
            this.container.querySelector('.card').classList.add('card--active');

            const event = new Event('cardClicked');
            document.dispatchEvent(event);
        });
    }
}

export default Card;