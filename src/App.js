//movie list component
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title : "신과함께 인과연",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/9/97/%EC%8B%A0%EA%B3%BC_%ED%95%A8%EA%BB%98_-_%EC%9D%B8%EA%B3%BC_%EC%97%B0.png/250px-%EC%8B%A0%EA%B3%BC_%ED%95%A8%EA%BB%98_-_%EC%9D%B8%EA%B3%BC_%EC%97%B0.png"
  },
  {
    title : "광해",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a4/%EA%B4%91%ED%95%B4%2C_%EC%99%95%EC%9D%B4_%EB%90%9C_%EB%82%A8%EC%9E%90.jpg/250px-%EA%B4%91%ED%95%B4%2C_%EC%99%95%EC%9D%B4_%EB%90%9C_%EB%82%A8%EC%9E%90.jpg"
  },
  {
    title : "아쿠아맨",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/d/d2/%EC%95%84%EC%BF%A0%EC%95%84%EB%A7%A8_%EC%98%81%ED%99%94.jpg/250px-%EC%95%84%EC%BF%A0%EC%95%84%EB%A7%A8_%EC%98%81%ED%99%94.jpg"
  },
  {
    title : "범죄도시",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/8/87/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2017.jpg/250px-%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2017.jpg"
  } 
]

/*component 의 life cycle 
  render : componentWillMount() --> render() --> componentDidMount()

  update : componentWillReciveProps() --> shouldComponentUpdate() --> componentWillUpdate() --> render() --> componentDidUpdate() 
*/

class App extends Component {
  //state 가 변경될 때 마다 render가 새로 생성 될 것이다.
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
        })}
      </div>
    );
  }
}

export default App;
