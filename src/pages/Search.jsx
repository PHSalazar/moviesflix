import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardFull from '../components/CardFull';
import './Search.css';

const apiSearch_MOVIE = import.meta.env.VITE_SEARCH_MOVIE;
const apiSearch_TV = import.meta.env.VITE_SEARCH_TV;
const apiKey = import.meta.env.VITE_API_KEY;
let page = 1;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [typeLabel, setTypeLabel] = useState('Filmes');

  const getMovies = async (url) => {
    const resM = await fetch(url);
    const jsnM = await resM.json();
    const conct = movies.concat(jsnM.results);
    setMovies(conct);
  };

  const getSeries = async (url) => {
    const resS = await fetch(url);
    const jsnS = await resS.json();
    const conct = series.concat(jsnS.results);
    setSeries(conct);
    console.log(url);
  };

  useEffect(() => {
    getMovies(`${apiSearch_MOVIE}?${apiKey}&query=${query}&language=pt-br`);
  }, [query]);

  const handleType = (e) => {
    e.target.value === 'movie'
      ? setTypeLabel('Filmes')
      : setTypeLabel('Séries');

    const urlMovies = `${apiSearch_MOVIE}?${apiKey}&query=${query}&language=pt-br`;
    const urlSeries = `${apiSearch_TV}?${apiKey}&query=${query}&language=pt-br`;

    e.target.value === 'Filmes' ? getMovies(urlMovies) : getSeries(urlSeries);
  };

  const handleLoadMore = () => {
    page += 1;
    const urlMovies = `${apiSearch_MOVIE}?${apiKey}&query=${query}&language=pt-br&page=${page}`;
    const urlSeries = `${apiSearch_TV}?${apiKey}&query=${query}&language=pt-br&page=${page}`;
    typeLabel === 'Filmes' ? getMovies(urlMovies) : getSeries(urlSeries);
  };

  return (
    <div className="body">
      <div className="typeContainer">
        <span>Exibir resultados de: </span>
        <select name="typeSearch" id="typeSearch" onChange={handleType}>
          <option value="movie">Filmes</option>
          <option value="tv">Séries</option>
        </select>
      </div>

      <h3>
        Resultados de {typeLabel} para{' '}
        <span className="result-label">{query}</span>
      </h3>

      <div className="cardsGrid">
        {typeLabel === 'Filmes'
          ? movies.length > 0 &&
            movies.map((movie) => (
              <CardFull
                id={movie.id}
                name={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                type="movie"
              />
            ))
          : series.map((serie) => (
              <CardFull
                id={serie.id}
                name={serie.name}
                overview={serie.overview}
                poster_path={serie.poster_path}
                vote_average={serie.vote_average}
                type="serie"
              />
            ))}

        {
          <p className="cardSerie" onClick={() => handleLoadMore()}>
            [Carregar mais...]
          </p>
        }
      </div>
    </div>
  );
};

export default Search;
