import "../css/CardContainer.css";
import { Card } from "./Card";

let cards = [
    {
        name: "ditto",
    },
    {
        name: "ponyta",
    },
    {
        name: "squirtle",
    },
    {
        name: "roggenrola",
    },
    {
        name: "mankey",
    },
    {
        name: "piplup",
    },
];

export function CardContainer({ onCardPress }) {
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
