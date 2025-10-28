import "../css/Card.css";
import { useState } from "react";

export function Card({ name, onCardPress }) {
    const [imageUrl, setImageUrl] = useState(null);

    async function getImgUrl(name) {
        const apiPath = "https://pokeapi.co/api/v2/pokemon/" + name;

        let pokemonResponse = await fetch(apiPath);
        let pokemonJson = await pokemonResponse.json();
        setImageUrl(pokemonJson.sprites.front_default);
    }

    if (imageUrl == null) {
        getImgUrl(name);
    }
    return <img src={imageUrl} className="card" onClick={() => onCardPress(name)}></img>;
}
