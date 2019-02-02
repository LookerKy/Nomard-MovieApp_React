import React, { Component } from 'react';
import './Movie.css';

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

class MoviePoster extends Component {
    render () {
        return (
            <img src='http://ph.spotvnews.co.kr/news/photo/201809/237166_290409_1150.jpg'/>
        );
    }
}

export default Movie;