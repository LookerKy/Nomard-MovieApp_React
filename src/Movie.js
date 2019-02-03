import React, { Component } from 'react';
import './Movie.css';

//movie card component
class Movie extends Component {
    render () {
        return (
            <div>
            <MoviePoster/>
            <h1>hello world</h1>
            </div>
        );
    }
}

//image component
class MoviePoster extends Component {
    render () {
        return (
            <img src='http://ph.spotvnews.co.kr/news/photo/201809/237166_290409_1150.jpg' alt ='she is good'/>
        );
    }
}

export default Movie;