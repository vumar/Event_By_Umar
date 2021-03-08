import React from "react";

function Card({ eventName, eventCategory, eventDesc }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{eventName}</h5>
        <p className="card-text">{eventDesc}</p>
        <a href="#" class="btn btn-primary">
          {eventCategory}
        </a>
      </div>
    </div>
  );
}

export default Card;
