import React from 'react';
import { Route } from 'react-router-dom'

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <Route path={`/movies/:id`}><div className="save-button" onClick={props.onClick}>Save</div></Route>
    </div>
  );
};

export default MovieCard;
