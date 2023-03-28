import { useEffect, useState } from 'react';
import CardFull from '../components/CardFull';
import Footer from '../components/Footer';
let page = 1;
const Movies = () => {
  // VITE_API_KEY=api_key=883530eeae0f2bef2fd9765c256a41f7
  // VITE_API=https://api.themoviedb.org/3/movie/
  // VITE_SEARCH=https://api.themoviedb.org/3/search/movie/

  const api = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [seriesTV, setSeriesTV] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    const conct = seriesTV.concat(json.results);
    setSeriesTV(conct);
    console.log(conct);
  };

  document.title = 'Filmes em MoviesFlix - Pedro Salazar';
  document.name = 'movies';
  const setActive = () => {
    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) => link.classList.remove('active'));
    const ele = document.querySelector(`.navbar a[data-prop=${document.name}]`);
    ele.classList.add('active');
  };
  useEffect(() => {
    setActive();
  }, []);

  const handleLoadMore = () => {
    const url = `${api}top_rated?${apiKey}&language=pt-BR&page=${page}`;
    getMovies(url);
    page += 1;
  };

  useEffect(() => {
    const url = `${api}top_rated?${apiKey}&language=pt-BR`;
    getMovies(url);
    page += 1;
  }, []);

  return (
    <>
      <div className="body">
        <h3>Filmes em Destaque</h3>

        {seriesTV.length === 0 && <p>Carregando...</p>}
        <div className="cardsGrid">
          {seriesTV.map((item, index) => (
            <CardFull
              id={item.id}
              name={item.title}
              poster_path={item.poster_path}
              overview={item.overview}
              type="movie"
            />
          ))}

          {
            <p className="cardSerie" onClick={() => handleLoadMore()}>
              [Carregar mais...]
            </p>
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
