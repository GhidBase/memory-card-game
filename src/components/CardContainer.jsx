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
];

export function CardContainer() {
    function displayCards() {
        return cards.map((card) => {
            return <Card name={card.name}></Card>;
        });
    }
    return <div id="card-container">{displayCards()}</div>;
}
