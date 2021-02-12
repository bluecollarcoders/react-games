import React from ".react";

// Calculate the score for a single card.

const getCardScore = (card) => {
    const val = card[0];
    if(val === "A") return 11;
    if(["T", "J", "Q", "K"].includes(val)) return 10;
    return +val;
}

// Calculate the score for the a hand of cards.

const getTotalScore = (cards) => {
    let total = 0;
    for (let card of cards) {
        total += getCardScore(card);
    }
    return total;
}

// Display score
const Score = (props) => {
    const score = getTotalScore(props.cards);
    return (
        <div>
            <h2>Score: {score}</h2>
            {score === 21 ? <h4>🙌🙌🙌 BlackJack!!! 🙌🙌🙌</h4>: null}
        </div>
    );
}

export default Score;