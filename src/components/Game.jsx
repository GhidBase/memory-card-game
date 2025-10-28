import { CardContainer } from "./CardContainer.jsx";
import { Header } from "./Header.jsx";
import { Fragment, useState } from "react";
import { shuffleArray } from "../js/shuffle.js";

export function Game() {
    const [selectedCards, setSelectedCards] = useState([]);
    console.log(selectedCards);

    function onCardPress(name) {
        const newSelections = [...selectedCards, name];
        setSelectedCards(newSelections);

        setCards(shuffleArray(cards));
    }

    const [cards, setCards] = useState([
        { name: "ditto" },
        { name: "ponyta" },
        { name: "squirtle" },
        { name: "roggenrola" },
        { name: "mankey" },
        { name: "piplup" },
    ]);

    return (
        <Fragment>
            <Header></Header>
            <CardContainer
                cards={cards}
                onCardPress={onCardPress}
            ></CardContainer>
        </Fragment>
    );
}
