import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <div>
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4 className="title">{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "read less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            ignore me
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Tour;
