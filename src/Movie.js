import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//movie card component
class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render () {
        return (
            <div className="Movies">
            <MoviePoster poster = {this.props.poster}/>
            <h1>{this.props.title}</h1>
            </div>
        );
    }
}

//image component
class MoviePoster extends Component {
    static propTypes = {
        poster : PropTypes.string.isRequired
    }
    render () {
        return (
            <img src={this.props.poster} alt ='she is good'/>
        );
    }
}

export default Movie;