/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Card = ({ rocket }: { rocket: Rocket }) => {
    return (
      <div key={rocket.id} className="card-container">
        <div className="image-container">
          <img
            src={rocket.imageUrl}
            alt="Rocket Image"
            className="card-image"
          />
        </div>
        <div className="card-column">
          <h2 className="card-title">{rocket.title}</h2>
          <p className="card-description">{rocket.description}</p>
          <div className="card-icons">
            <div className="card-icon">
              <img src="/path/to/icon-1.png" alt="Icon 1" />
            </div>
            <div className="card-icon">
              <img src="/path/to/icon-2.png" alt="Icon 2" />
            </div>
            <div className="card-icon">
              <img src="/path/to/icon-3.png" alt="Icon 3" />
            </div>
          </div>
          <p className="card-author">{rocket.githubUserInformation}</p>
        </div>
      </div>
    );
  };

  export default Card;