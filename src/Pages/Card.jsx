import React from "react";
import moment from "moment";

function Card({
  eventName,
  eventCategory,
  eventDesc,
  eventEndDate,
  eventStartDate,
  eventLocation,
  index,
  removeEvent,
}) {
  return (
    <div className="card position-relative">
      <div
        className="position-absolute fs-4 cursor-pointer"
        style={{ right: "-10px", top: "-15px", zIndex: 999999 }}
        onClick={() => removeEvent(index)}
      >
        <i class="fas fa-times-circle  text-danger"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{eventName}</h5>
        <p className="card-text">
          {/* {eventDesc} */}
          <br />
          {moment(eventEndDate).format("ll")}
          <br />
          {moment(eventStartDate).format("ll")}
          <br />
          {eventLocation}
        </p>

        <a href="#" class="btn btn-primary">
          {eventCategory}
        </a>
      </div>
    </div>
  );
}

export default Card;
