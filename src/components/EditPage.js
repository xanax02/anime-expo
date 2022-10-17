import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "./Input";

const EditPage = () => {
  // usePrams for getting id
  const params = useParams();
  const id = params.params;
  //   console.log(id);

  //refs for the input fields
  const venueRef = useRef();
  const dateRef = useRef();
  const durationRef = useRef();
  const imageRef = useRef();
  const desRef = useRef();

  //navigate function on cancel event editing
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/explore", { replace: true });
  };

  //useState for having the data of current event from the database
  //   const [event, setEvent] = useState();

  //useEffect for loading the data for the selected event to be edited
  useEffect(() => {
    getEvent();
  }, []);
  //getEvent function for useEffect
  const getEvent = async () => {
    const response = await fetch(
      "https://class-project-ba53c-default-rtdb.firebaseio.com/anime.json"
    );
    const data = await response.json();
    for (const key in data) {
      if (key === id) {
        venueRef.current.value = data[key].venue;
        durationRef.current.value = data[key].duration;
        dateRef.current.value = data[key].date;
        imageRef.current.value = data[key].imageUrl;
        desRef.current.value = data[key].description;
      }
    }
  };

  // submit button that will update the current event with the new values
  const submitHandler = async (event) => {
    event.preventDefault();
    const editedEvent = {
      venue: venueRef.current.value,
      date: dateRef.current.value,
      duration: durationRef.current.value,
      imageUrl: imageRef.current.value,
      description: desRef.current.value,
    };

    const response = await fetch(
      `https://class-project-ba53c-default-rtdb.firebaseio.com/anime/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(editedEvent),
      }
    );
    const data = response.json();
    console.log(data);
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
        <div className="w-full flex justify-center">
          <button className="text-white bg-red-500 rounded-lg py-3 px-6 mt-6 mr-10">
            Confirm
          </button>
          <button
            onClick={cancelHandler}
            className="text-white bg-blue-500 rounded-lg py-3 px-6 mt-6"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
