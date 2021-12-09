/**
 * List of cards details
 */
const cardsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * This method will initialize the card layout
 */
const initializeCards = () => {
    let cardsLayout = ``;

    cardsNumber.forEach(num => {
        cardsLayout = cardsLayout +
            `<div class="text background-color-${num}">
                <h1>${num}</h1>
            </div>`
    });

    const numberedCards = document.querySelector(".number-cards");
    numberedCards.innerHTML = cardsLayout;
}

/**
 * This method will shuffle the cards ramdomly
 *
 * @param cards list of the cards
 */
const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    initializeCards(cards);
}

/**
 * This method will sort the cards in ascending order
 *
 * @param cards list of the cards
 */
const sortCards = (cards) => {
    cards.sort((num1, num2) => num1 - num2);
    initializeCards(cards);
}

initializeCards(cardsNumber);