import "../css/Card.css";
import { useState } from "react";

export function Card({ name }) {
    const [imageUrl, setImageUrl] = useState();

    async function getImgUrl() {
        const apiPath = "https://pokeapi.co/api/v2/pokemon/" + name;

        let pokemonResponse = await fetch(apiPath);
        let pokemonJson = await pokemonResponse.json();
        setImageUrl(pokemonJson.sprites.front_default);
        console.log(name)
    }

    getImgUrl();
    return <img src={imageUrl} className="card"></img>;
}
