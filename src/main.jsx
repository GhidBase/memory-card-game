import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header.jsx";
import { CardContainer } from "./components/CardContainer.jsx";
import { Card } from "./components/Card.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Game>
            <Header></Header>
            <CardContainer>
                <Card></Card>
            </CardContainer>
        </Game>
    </StrictMode>
);
