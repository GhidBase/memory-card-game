import { CardContainer } from "./CardContainer.jsx";
import { Header } from "./Header.jsx";
import { Fragment, useState } from "react";
import { shuffleArray } from "../js/shuffle.js";

export function Game() {
    const [selectedCards, setSelectedCards] = useState([]);
    const [highScore, setHighScore] = useState(0);
    console.log(selectedCards);
    if (selectedCards.length > highScore) {
        setHighScore(selectedCards.length);
    }

    function onCardPress(name) {
        setCards(shuffleArray(cards));

        let newSelections;
        if (selectedCards.includes(name)) {
            newSelections = [];
        } else {
            newSelections = [...selectedCards, name];
        }

        setSelectedCards(newSelections);
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
            <Header score={selectedCards.length} highScore={highScore}></Header>
            <CardContainer
                cards={cards}
                onCardPress={onCardPress}
            ></CardContainer>
        </Fragment>
    );
}
