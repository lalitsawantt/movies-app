import React from 'react';
import { useEffect, useState} from "react";
// import './App.css';
import Movie from "./components/Movie"

// const FEATURED_API = "https://api.themoviedb.org/3/movie/550?api_key=11917ce9d54a485eb07344a9539a872f https://api.themoviedb.org/3/movie/550?api_key=11917ce9d54a485eb07344a9539a872f"
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=11917ce9d54a485eb07344a9539a872f"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=11917ce9d54a485eb07344a9539a872f&query="
function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // useEffect(() => {
    // fetch(FEATURED_API)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   setmovies(data.results)
    // })
  // }, [])

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) =>{
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setmovies(data.results)
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){    
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");  
    }
    
    
  }

  const showHome = () => {
    getMovies(FEATURED_API);
    
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value); 
  }
  return (
    <>
      <header>
        <li className="title"
          onClick={showHome}
        >
          <h2>ReMovie</h2>
        </li>

        <div className="searchbar">  
        <form onSubmit={handleOnSubmit}>
          <input className="search" 
          type="search" 
          placeholder="search..."
          onChange={handleOnChange}>
          </input>
        </form>
        </div>

      </header>

    <div className="movie-container"> 
      {movies.map((movie) => (
      <Movie key={movie.id} {...movie}/>
      ))}
    </div>
  </>
  )
}

export default App;


// 'https://api.themoviedb.org/3/discover/movie?api_key=11917ce9d54a485eb07344a9539a872f&primary_release_year=2017&sort_by=revenue.desc'
// Featured api = "https://api.themoviedb.org/3/discover/movie?
// sort_by=popularity.desc&apikey=fb7bb23f03b6994dafc674c074d01761&page=1"
//
// IMG_APi = "https://image.tmdb.org/t/p/w1280"
// 
// 
// 
// 
// 
// 'fb7bb23f03b6994dafc674c074d01761',
// 'e55425032d3d0f371fc776f302e7c09b',
// '8301a21598f8b45668d5711a814f01f6',
// '8cf43ad9c085135b9479ad5cf6bbcbda',
// 'da63548086e399ffc910fbc08526df05',
// '13e53ff644a8bd4ba37b3e1044ad24f3',
// '269890f657dddf4635473cf4cf456576',
// 'a2f888b27315e62e471b2d587048f32e',
// '8476a7ab80ad76f0936744df0430e67c',
// '5622cafbfe8f8cfe358a29c53e19bba0',
// 'ae4bd1b6fce2a5648671bfc171d15ba4',
// '257654f35e3dff105574f97fb4b97035',
// '2f4038e83265214a0dcd6ec2eb3276f5',
// '9e43f45f94705cc8e1d5a0400d19a7b7',
// 'af6887753365e14160254ac7f4345dd2',
// '06f10fc8741a672af455421c239a1ffc',
// 'fb7bb23f03b6994dafc674c074d01761',
// '09ad8ace66eec34302943272db0e8d2c'


// My api key == 11917ce9d54a485eb07344a9539a872f