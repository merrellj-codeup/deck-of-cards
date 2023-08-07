class SuitUtility {
    constructor(suit) {
        this.suit = suit
    }
    get svg() {
        switch (this.suit) {
            case 'Hearts':
                return '♥'
            case 'Spades':
                return '♠'
            case 'Clubs':
                return '♣'
            case 'Diamonds':
                return '♦'
            default:
                return ''
        }
    }
    get color() {
        switch (this.suit) {
            case 'Hearts':
            case 'Diamonds':
                return 'red'
            case 'Spades':
            case 'Clubs':
                return 'black'
            default:
                return ''
        }
    }
}

class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }
    get title() {
        return `${this.rank} of ${this.suit}`
    }
    get renderTitle() {
        switch (this.rank) {
            case 'Ace':
                return 'A'
            case 'King':
                return 'K'
            case 'Queen':
                return 'Q'
            case 'Jack':
                return 'J'
            default:
                return this.rank
        }
    }
    get faceValue() {
        switch (this.rank) {
            case 'Ace':
                return 11
            case 'King':
            case 'Queen':
            case 'Jack':
                return 10
            default:
                return parseInt(this.rank)
        }
    }
    get rankValue() {
        switch (this.rank) {
            case 'Ace':
                return 14
            case 'King':
                return 13
            case 'Queen':
                return 12
            case 'Jack':
                return 11
            default:
                return parseInt(this.rank)
        }
    }
    render(target) {
        this.element = document.createElement('div');
        this.element.classList.add('card', 'flipped');
        this.element.style = '--scale: 2;'
        this.element.innerHTML = `
            <div class="card__inner ${new SuitUtility(this.suit).color}">
                <div class="card__front">
                    <div class="card__value">${this.renderTitle}</div>
                    <div class="card__suit">${new SuitUtility(this.suit).svg}</div>
                </div>
                <div class="card__back"></div>
            </div>
        `;
        target.appendChild(this.element);
    }
}

export default Card