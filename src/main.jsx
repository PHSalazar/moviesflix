import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import './index.css';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import Series from './pages/Series';
import About from './pages/About';
import Search from './pages/Search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/moviesflix/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/details/:type/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
