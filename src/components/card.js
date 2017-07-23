import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, author, excerpt}) => {
  return (
    <Link className="content-card" to={`/${id}`}>
      <div>
        <h3 className="content-card-author">{author}</h3>
        <p className="content-card-excerpt">{excerpt}</p>
      </div>
    </Link>
  );
}

export default Card;
