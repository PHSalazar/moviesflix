import { useEffect } from 'react';
import ContinueWatch from './ContinueWatch';
import HomeMovies from './HomeMovies';
import PopularMovies from './PopularMovies';

const BodyHome = ({ movies }) => {
  return (
    <div>
      {localStorage.getItem('historyWatch') !== null && <ContinueWatch />}
      {<HomeMovies movies={movies} />}
      {<PopularMovies />}
    </div>
  );
};

export default BodyHome;
