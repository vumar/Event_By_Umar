import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function HomePage({ history, isAuth }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL;
    axios
      .get(`${url}/event/all`)
      .then((res) => {
        console.log("Event data", res.data.events);
        setLoading(false);
        setData(res.data.events);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  }, []);

  const removeEvent = (index) => {
    // console.log(
    //   "eventIndex",

    // );
    // setData(
    //   data.filter((_data, i) => {
    //     return i !== index;
    //   })
    // );

    setData(data.filter((_data, i) => i !== index));
  };

  return (
    <div className="container-fluid my-3">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {isAuth && (
            <button
              className="event_create"
              onClick={() => history.push("/create_event")}
            >
              Create Event
            </button>
          )}
          <div className="row g-2">
            {data.map((event, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 ">
                  <Card
                    key={index}
                    index={index}
                    eventName={event.eventName}
                    eventCategory={event.eventCategory}
                    eventDesc={event.eventDesc}
                    eventEndDate={event.endDate}
                    eventStartDate={event.startDate}
                    eventLocation={event.eventLocation}
                    removeEvent={removeEvent}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
