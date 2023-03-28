import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const api_MOVIE = import.meta.env.VITE_API;
const api_TV = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;

import './MovieDetails.css';

const MovieDetails = () => {
  const { id, type } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [generos, setGeneros] = useState([{}]);
  const [videos, setVideos] = useState([{}]);

  const getDetails = async (urlMovieDetails) => {
    await fetch(urlMovieDetails)
      .then((response) => response.json())
      .then((json) => {
        setMovieDetails(json);
        getGenres(json.genres);
      });
  };

  const getTrailer = (urlTrailer) => {
    fetch(urlTrailer)
      .then((response) => response.json())
      .then((json) => {
        getVideos(json.results);
      });
  };

  const getGenres = (json) => {
    setGeneros(json);
  };

  const getVideos = (json) => {
    if (json.length === 0) {
      const empty = [
        {
          id: 0,
          key: 'Nenhum trailer encontrado.',
        },
      ];
      setVideos(empty);
    } else {
      setVideos(json);
    }
  };

  useEffect(() => {
    if (type === 'movie') {
      getDetails(`${api_MOVIE}${id}?${apiKey}&language=pt-BR`);
      getTrailer(`${api_MOVIE}${id}/videos?${apiKey}&language=pt-BR`);
    } else if (type === 'serie') {
      getDetails(`${api_TV}${id}?${apiKey}&language=pt-BR`);
      getTrailer(`${api_TV}${id}/videos?${apiKey}&language=pt-BR`);
    } else {
      alert('ERRO ao Carregar essa pagina.');
      location.href = -1;
    }
  }, []);

  //Verificando imagem Thumb/Poster, se for nulo, obter imagem de poster.
  let imageThumb =
    movieDetails.backdrop_path === null
      ? movieDetails.poster_path
      : movieDetails.backdrop_path;

  useEffect(() => {
    //Alterando título da página agregando nome do filme
    if (typeof movieDetails.title != null || typeof movieDetails.name != null) {
      type === 'movie'
        ? (document.title =
            movieDetails.title + ' - MoviesFlix - Pedro Salazar')
        : (document.title =
            movieDetails.name + ' - MoviesFlix - Pedro Salazar');
    }
  }, [movieDetails]);
  return (
    <div
      className="detailsPage"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${imageThumb})`,
      }}
    >
      <div className="detailsInfo">
        <h1>{type === 'movie' ? movieDetails.title : movieDetails.name}</h1>

        <div className="genres">
          {generos.map((item) => (
            <span key={item.id} className="genreLabel">
              {item.name}
            </span>
          ))}
        </div>

        <div className="genres">
          {type === 'serie' && movieDetails.number_of_seasons + ' temporadas'}
        </div>

        <p id="overview">
          {movieDetails.overview !== ''
            ? movieDetails.overview
            : 'Sem descrição disponível.'}
        </p>

        <div id="trailerInfo">
          <h2>Trailer (Youtube)</h2>
          <hr />
          {videos[0].key === 'Nenhum trailer encontrado.' ? (
            <p>{videos[0].key}</p>
          ) : (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${videos[0].key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; allowfullscreen;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              autoplay=""
              allowfullscreen=""
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
