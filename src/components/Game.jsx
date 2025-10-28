import { CardContainer } from "./CardContainer.jsx";
import { Header } from "./Header.jsx";
import { Fragment, useState } from "react";

export function Game() {
    const [selectedCards, setSelectedCards] = useState([]);
    console.log(selectedCards)

    function onCardPress(name) {
        console.log(name);
        const newSelections = [...selectedCards, name];
        setSelectedCards(newSelections);
    }

    return (
        <Fragment>
            <Header></Header>
            <CardContainer onCardPress={onCardPress}></CardContainer>
        </Fragment>
    );
}
