import React, { useState } from "react";

function ListingCard({ description, image, location, id, onDeleteClick }) {
  const [activeStar, setActiveStar] = useState(false)

  function handleDeleteClick(){
    onDeleteClick(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {activeStar ? (
          <button onClick={() => setActiveStar(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setActiveStar(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
