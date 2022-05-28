import StyledMovie from "./Movie.styled";

// Menangkap props dari movie.js
function Movie(props) {
    // Destructing object
    const {movie} = props;
    return(
        <StyledMovie>
            <img src={movie.poster} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.type}</p>
        </StyledMovie>
    );
}

export default Movie;