const back = import.meta.env.VITE_IMG;
import { Link } from 'react-router-dom';

import './CardFull.css';

const CardFull = ({ id, name, overview, poster_path, vote_average, type }) => {
  return (
    <div
      className="cardSerie"
      style={{
        backgroundImage: `url(${back}${poster_path})`,
      }}
      key={id}
      votes={vote_average}
    >
      <div className="infoCardSerie">
        <h4 className="title-serie">{name}</h4>
        <p className="text-serie">
          {overview === '' ? 'Sem descrição' : overview}
        </p>
        <Link to={`/details/${type}/${id}`}>
          <button>+ info</button>
        </Link>
      </div>
    </div>
  );
};

export default CardFull;
