import React from 'react';
import { Link } from 'react-router-dom';

import './CardMovie.css';

const handleLocalStorage = (movieClick) => {
  console.log(movieClick);
  let history = JSON.parse(localStorage.getItem('historyWatch')) || [];
  const existsList = history.find((item) => item.id === movieClick.id);
  if (!existsList) {
    history.push(movieClick); //Só adicionar na lista LOCALSTORAGE novamente se o ID não estiver na lista.
    localStorage.setItem('historyWatch', JSON.stringify(history));
  }
};

const CardMovie = ({ title, id, thumb }) => {
  return (
    <Link
      to={`/details/movie/${id}`}
      onClick={() =>
        handleLocalStorage({
          title: title,
          id: id,
          thumb: thumb,
        })
      }
    >
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${thumb})`,
        }}
        className="card-movie"
        id={id}
      >
        <p className="cardMoview-titlte">{title}</p>
      </div>
    </Link>
  );
};

export default CardMovie;
