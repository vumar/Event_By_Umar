import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CreateEvent({ history, onHome }) {
  const [category, setCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
  }, [startDate, endDate]);

  const submitEvent = () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    axios
      .post(
        `${url}/event`,
        {
          category: category,
          eventName: eventName,
          eventLocation: eventLocation,
          startDate: startDate,
          endDate: endDate,
          eventDesc: eventDesc,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("Event Created ", res);
        toast.success("Event Created Succesfully");
        history.replace("/");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.msg);
        console.log("Failed", err.response);
      });
  };

  return (
    <div className="event_card">
      <div className="event">
        <h2>Create Event</h2>
      </div>
      <form>
        <select
          className="input-1"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Seminor">Seminor</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Workshop">Workshop</option>
        </select>

        <br />
        <input
          type="text"
          placeholder="Event Name"
          className="input-1"
          onInput={(e) => setEventName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Event Location"
          className="input-1"
          onInput={(e) => setEventLocation(e.target.value)}
        />
        <input
          type="date"
          className="input-1"
          onInput={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="input-1"
          onInput={(e) => setEndDate(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Event Description"
          className="input-1"
          onInput={(e) => setEventDesc(e.target.value)}
        />
      </form>
      <button
        type="button btn"
        className="event_btn"
        onClick={() => submitEvent()}
      >
        Create Event
      </button>
    </div>
  );
}

export default CreateEvent;
