import "../css/CardContainer.css";
import { Card } from "./Card";

// const apiPath = "https://pokeapi.co/api/v2/pokemon/";

let cards = [
    {
        name: "ditto",
    },
];

export function CardContainer() {
    function displayCards() {
        return cards.map((card) => {
            // console.log(card.name);
            return <Card name={card.name}></Card>;
        });
    }
    return <div id="card-container">{displayCards()}</div>;
}
