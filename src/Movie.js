import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//movie card component
const Movie = ({ title, poster, genres, rating, synopsis }) => {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt = {title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map( (genre, index) => <MovieGenre genre = {genre} key = {index}/> )}
                </div>
                <h3 className ="Movie__rating">
                    {rating}
                </h3>
                <p className ="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

//image dumb component
const MoviePoster = ({ poster, alt }) => {
    return (
        <img src={poster} alt={alt} title = {alt} />
    )
}

//Genre dumb component
const MovieGenre = ({ genre }) => {
    return (
        <span className ="Movie__Genre"> {genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired, 
    rating : PropTypes.number.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;