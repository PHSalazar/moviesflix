import React, { useEffect, useState } from 'react';
import BodyHome from './BodyHome';
import MainView from './MainView';

import './Home.css';
import Footer from '../components/Footer';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movieRandom, setMovieRandom] = useState();

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  document.title = 'MoviesFlix - Pedro Salazar';
  document.name = 'home';
  const setActive = () => {
    const links = document.querySelectorAll('.navbar li a');
    links.forEach((link) => link.classList.remove('active'));
    const ele = document.querySelector(
      `.navbar li a[data-prop=${document.name}]`,
    );
    ele.classList.add('active');
  };
  useEffect(() => {
    setActive();
  }, []);

  useEffect(() => {
    const randomNumberPage = parseInt(Math.random() * 500); //500 é o limite da pagina na API; API não permite maior do que isso.
    getMovies(
      `${apiUrl}top_rated?${apiKey}&language=pt-BR&page=${randomNumberPage}`,
    );
  }, []);

  return (
    <div>
      {movies.length === 0 && (
        <p
          style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            fontSize: '2.3rem',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '200',
          }}
        >
          Carregando ...
        </p>
      )}
      {movies.length > 0 && typeof movies != null ? (
        <MainView movies={movies} />
      ) : (
        ''
      )}
      {movies.length > 0 && typeof movies != null ? (
        <BodyHome movies={movies} />
      ) : (
        ''
      )}
      <Footer />
    </div>
  );
};

export default Home;
