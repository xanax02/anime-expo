import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = (props) => {
  const params = useParams();
  //   console.log(params.params);

  const [event, setEvent] = useState();

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    const response = await fetch(
      "https://class-project-ba53c-default-rtdb.firebaseio.com/anime.json"
    );
    const data = await response.json();
    for (const key in data) {
      if (key === params.params) {
        setEvent({ ...data[key] });
      }
    }
  };

  if (!event) {
    return (
      <div className="max-w-[90vw] flex justify-center mt-10 mx-auto">
        <div className="bg-gray-50 shadow-md p-10 rounded-lg flex justify-between">
          <h1 className="text-2xl font-bold text-center">Loading... </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[90vw] flex justify-center mt-10 mx-auto">
      <div className="bg-gray-50 shadow-md p-10 rounded-lg flex justify-between">
        <div className="h-[300px] w-[400px]">
          <img
            className="block h-full w-full rounded-md"
            src={event?.imageUrl}
            alt="img"
          />
        </div>
        <div className="w-[500px] ml-10 flex flex-col justify-center">
          <h2 className="text-gray-700 font-bold text-4xl mb-4">
            {event?.venue}
          </h2>
          <h2 className="text-gray-500 font-bold text-sm mb-1">
            {event?.date}
          </h2>
          <h2 className="text-gray-500 font-bold text-sm mb-2">{`${event?.duration}-days`}</h2>
          <p className="text-gray-600 font-semibold">{event?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
