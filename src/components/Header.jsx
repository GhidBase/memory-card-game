import "../css/Header.css";

export function Header({ score, highScore }) {
    return (
        <header>
            <h1>Memory Card Game</h1>
            <div id="scores">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </header>
    );
}
