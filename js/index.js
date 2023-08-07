import Deck from './components/Deck/index.js'


(async ()=>{
    const table = document.querySelector('#table');
    const deck = new Deck();
    deck.shuffle();
    let myHand = deck.deal(25);
    myHand.forEach(card => {
        card.render(table);
        card.element.addEventListener('click', () => {
            card.element.classList.toggle('flipped')
        });
    });

})();