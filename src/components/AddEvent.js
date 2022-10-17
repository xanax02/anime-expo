import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const AddEvent = () => {
  const navigate = useNavigate();

  const venueRef = useRef();
  const dateRef = useRef();
  const durationRef = useRef();
  const imageRef = useRef();
  const desRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const eventBody = {
      venue: venueRef.current.value,
      date: dateRef.current.value,
      duration: durationRef.current.value,
      imageUrl: imageRef.current.value,
      description: desRef.current.value,
    };

    const response = await fetch(
      "https://class-project-ba53c-default-rtdb.firebaseio.com/anime.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(eventBody),
      }
    );

    navigate("/explore", { replace: true });
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-[500px]"
      >
        <Input ref={venueRef} iid="venue" label="Venue" />
        <Input ref={dateRef} iid="date" label="Date" />
        <Input ref={durationRef} iid="duration" label="Duration" />
        <Input ref={imageRef} iid="image" label="Image Url" />
        <div className="mt-2 mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center border-b-2"
            htmlFor="eventDes"
          >
            Description
          </label>
          <textarea
            ref={desRef}
            id="eventDes"
            className="block appearance-none text-center w-full py-2 px-3 focus:outline-gray-300 leading-tight"
            rows="3"
            cols="9"
            placeholder="Description about the Event"
          />
        </div>
        <button className="text-white bg-blue-500 w-full rounded-lg py-3 px-6 mt-6">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
