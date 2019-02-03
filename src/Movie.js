import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//movie card component
const Movie = ({title, poster}) =>{
    return (
        <div className="Movies">
            <MoviePoster poster = {poster}/>
            <h1>{title}</h1>
            </div>
    )
}

//image dumb component
const MoviePoster = ({poster}) => {
    return (
        <img src={poster} alt ='Movie poster'/>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

export default Movie;