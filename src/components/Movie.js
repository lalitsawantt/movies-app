import React from 'react'

const IMG_API="https://image.tmdb.org/t/p/w1280";

const setVoteColor = (vote) => {
  if (vote >= 7) {
    return "green"
  } else if( vote >= 6){
    return "orange"
  }else {
    return "red"
  }
}

const Movie = ({title, poster_path, overview, vote_average}) => {
  return (
    
      <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteColor(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="movie-over">
          <h2>Overview:</h2>
          <p>
            {overview}
          </p>
        </div>
      </div>
  )
}

export default Movie
