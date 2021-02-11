import React from 'react';
import Card from "./Card";

const Cardlist = (props) => {
    const cards = props.cards.map(cardId => (
        <Card cardId={cardId} key={cardId} />
    ));
    return <div>{cards}</div>
}

export default Cardlist;