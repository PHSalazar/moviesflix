import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Navbar.css';
import ico_search from '../assets/search.svg';
import ico_menu from '../assets/menu.svg';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return; // Se estiver em branco
    navigate(`/search?q=${search}`);
  };

  const links = document.querySelectorAll('#menu a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const cb_menu = document.querySelector('#cb_menu');
      cb_menu.checked = false;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  });

  return (
    <div className="navbar">
      <div>
        <h2>MoviesFlix</h2>

        <input type="checkbox" id="cb_menu" />

        <ul id="menu">
          <li>
            <Link to="/moviesflix/" className="active" data-prop="home">
              Início
            </Link>
          </li>
          <li>
            <Link to="/series" data-prop="series">
              Séries
            </Link>
          </li>
          <li>
            <Link to="/movies" data-prop="movies">
              Filmes
            </Link>
          </li>
          <li>
            <Link to="/about" data-prop="about">
              Sobre esse Projeto
            </Link>
          </li>
        </ul>
      </div>
      <div className="div-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            id="search"
            placeholder="Busque por Files e Séries"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id="btn-search" type="submit">
            <img
              src={ico_search}
              alt="Procurar"
              autoComplete="false"
              id="search-input"
            />
          </button>
        </form>
      </div>
      <div>
        <Link to="/about" data-prop="about">
          Sobre esse Projeto
        </Link>
      </div>

      <label htmlFor="cb_menu">
        <img src={ico_menu} />
      </label>
    </div>
  );
};

export default Navbar;
