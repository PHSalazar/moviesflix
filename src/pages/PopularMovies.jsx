import CardMovie from '../components/CardMovie';

import '../components/CardMovie';
import { useEffect, useState } from 'react';

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPopularMovies(json.results));
  };

  useEffect(() => {
    getMovies(`${api}popular?${apiKey}&language=pt-BR`);
  }, []);

  let currentPos = 0;
  const navCarousel = (direction) => {
    const parent = event.target.parentNode;
    const container = parent.querySelector('.container');
    const tela = parseInt(event.target.parentNode.offsetWidth / 200);

    if (direction === 'prev') {
      currentPos += 200;
    } else if (direction === 'next') {
      currentPos -= 200;
    }

    if (currentPos > 0) {
      currentPos = -container.offsetWidth + 200 * tela;
    } else if (currentPos < -container.offsetWidth + 200 * tela) {
      currentPos = 0;
    }
    container.style.transform = `translateX(${currentPos}px)`;
    console.log('ok');
  };

  return (
    <div className="section">
      <h3>Populares na MoviesFlix</h3>
      <div className="wrapper">
        <div id="arrow-left-section" onClick={() => navCarousel('prev')}>
          «
        </div>
        <div className="container">
          {popularMovies.length === 0 && <p>Carrendo lista de Populares</p>}
          {popularMovies.length > 0 &&
            popularMovies.map((item) => (
              <CardMovie
                key={item.id}
                title={item.title}
                id={item.id}
                thumb={item.backdrop_path}
              />
            ))}
        </div>

        <div id="arrow-right-section" onClick={() => navCarousel('next')}>
          »
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
