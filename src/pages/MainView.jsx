import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './mainView.css';

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const MainView = ({ movies }) => {
  const [movie, setMovie] = useState([null]);
  const [movieFull, setMovieFull] = useState([null]);
  const navigate = useNavigate();

  const getRandomMovie = () => {
    const randNum = parseInt(Math.random() * movies.length);
    const randMovie = movies[randNum];
    const movieId = randMovie.id;

    fetch(`${api}${movieId}?${apiKey}&language=pt-BR`)
      .then((response) => response.json())
      .then((json) => setMovie(json));
  };

  useEffect(() => {
    getRandomMovie();
  }, []);

  const handleLocalStorage = (movieClick) => {
    let history = JSON.parse(localStorage.getItem('historyWatch')) || [];
    const existsList = history.find((item) => item.id === movieClick.id);
    if (!existsList) {
      history.push(movieClick); //Só adicionar na lista LOCALSTORAGE novamente se o ID não estiver na lista.
      localStorage.setItem('historyWatch', JSON.stringify(history));
    }

    navigate(`/details/movie/${movieClick.id}`);
  };

  const getURLYT = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    const idVideo = json.results[0].key;
    const urlYT = `https://youtube.com/watch?v=${idVideo}`;
    window.open(urlYT, '_blank');
  };
  const handleWatchTrailerYT = (id) => {
    const url = `${api}${id}/videos?${apiKey}&language=pt-BR`;
    getURLYT(url);
  };

  return (
    <div
      className="mainView"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}
    >
      {movie !== null && (
        <div className="infoMainView">
          <p className="titleMainView">{movie.title}</p>
          <p className="tagline">
            {movie.tagline !== '' ? movie.tagline : movie.overview}
          </p>
          <div className="buttons">
            <button
              className="watchVideo"
              onClick={() => handleWatchTrailerYT(movie.id)}
            >
              Assistir Trailer
            </button>
            <button
              className="more-info"
              onClick={() =>
                handleLocalStorage({
                  title: movie.title,
                  id: movie.id,
                  thumb: movie.backdrop_path,
                })
              }
            >
              Mais Informações
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainView;
