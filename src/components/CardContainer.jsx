// import { useState } from "react";
import "../css/CardContainer.css";
import { Card } from "./Card";



export function CardContainer({ onCardPress, cards }) {
    function displayCards() {
        return cards.map((card) => {
            return (
                <Card
                    key={card.name}
                    name={card.name}
                    onCardPress={onCardPress}
                ></Card>
            );
        });
    }
    return <div id="card-container">{displayCards()}</div>;
}
