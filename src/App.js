//movie list component
import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

/*component 의 life cycle 
  render : componentWillMount() 없어짐 --> render() --> componentDidMount()

  update : static getDerivedStateFromProps() --> shouldComponentUpdate() -->                            componentWillUpdate()없어짐(  대체됨) 
  render() --> getSnapshotBeforeUpdate() --> componentDidUpdate() 
*/

class App extends Component {
  //state 가 변경될 때 마다 render가 새로 생성 될 것이다.
  //example state change
  /*state = {
    // movies : [
    //   {
    //     title : "신과함께 인과연",
    //     poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/9/97/%EC%8B%A0%EA%B3%BC_%ED%95%A8%EA%BB%98_-_%EC%9D%B8%EA%B3%BC_%EC%97%B0.png/250px-%EC%8B%A0%EA%B3%BC_%ED%95%A8%EA%BB%98_-_%EC%9D%B8%EA%B3%BC_%EC%97%B0.png"
    //   },
    //   {
    //     title : "광해",
    //     poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a4/%EA%B4%91%ED%95%B4%2C_%EC%99%95%EC%9D%B4_%EB%90%9C_%EB%82%A8%EC%9E%90.jpg/250px-%EA%B4%91%ED%95%B4%2C_%EC%99%95%EC%9D%B4_%EB%90%9C_%EB%82%A8%EC%9E%90.jpg"
    //   },
    //   {
    //     title : "아쿠아맨",
    //     poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/d/d2/%EC%95%84%EC%BF%A0%EC%95%84%EB%A7%A8_%EC%98%81%ED%99%94.jpg/250px-%EC%95%84%EC%BF%A0%EC%95%84%EB%A7%A8_%EC%98%81%ED%99%94.jpg"
    //   },
    //   {
    //     title : "범죄도시",
    //     poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/8/87/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2017.jpg/250px-%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2017.jpg"
    //   },
    //   {
    //     title : "토이 스토리",
    //     Qposter : "http://mblogthumb4.phinf.naver.net/20150721_167/yessok104_1437478621705X7aor_JPEG/toy_story_wallpaper_by_cepillo16.jpg?type=w2"
    //   } 
    // ]
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        // movies : [
        //   {
        //     title : "토이 스토리",
        //     poster : "http://mblogthumb4.phinf.naver.net/20150721_167/yessok104_1437478621705X7aor_JPEG/toy_story_wallpaper_by_cepillo16.jpg?type=w2"
        //   },
        //   ...this.state.movies
        // ]
        movies : [
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
          },
          {
            title : "토이 스토리",
            poster : "http://mblogthumb4.phinf.naver.net/20150721_167/yessok104_1437478621705X7aor_JPEG/toy_story_wallpaper_by_cepillo16.jpg?type=w2"
          }, 
        ]
      })
    }, 2000);
  }*/
  state = {};
  componentDidMount() {
    this._getMovie();
  }

  _getMovie = async () => {
    const movies = await this._callApi();
    this.setState({ movies });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(movieData => {
        return movieData.json();
      })
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie
          title={`#${index + 1} ${movie.title_english}`}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          rating={movie.rating}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
