import Card from '../Card/index.js';

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        // this.shuffle();
    }
    get length() {
        return this.deck.length;
    }
    reset() {
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 'King', 'Queen', 'Jack', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(new Card(suits[suit], values[value]));
            }
        }
    }
    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return this;
    }
    deal(numCards) {
        const cardsToDeal = [];
     
        for (let i = 0; i < numCards; i++) {
           if (this.deck.length === 0) {
              // Handle case when deck is empty
              throw new Error('Deck is empty');
           }
           
           cardsToDeal.push(this.deck.pop());
        }
     
        return cardsToDeal;
     }
}

export default Deck;