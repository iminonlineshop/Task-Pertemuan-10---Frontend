/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledMovie from "./Hero.styled";

function Hero() {
    // Membuat state movie
    const [movie, setMovie] = useState("");

    async function fetchMovie() {
         // Melakukan side effect: fetch data movie (api)
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    const data = await response.json();
    
    // Set movie dengan data movie hasil fetch
    setMovie(data);
    }

    useEffect (fetchMovie, []);

    console.log(movie);

    return(
        <StyledMovie>
            <section>
                <div className="left">
                    <h2>{movie.Title}</h2>
                    <h3>Genre : {movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button varian="primary" size="sm, md, lg">Watch Movie</Button>
                </div>
                <div className="right">
                    <img src={movie.Poster} alt={movie.Title}></img>
                </div>
            </section>
        </StyledMovie>
    );
}

export default Hero;