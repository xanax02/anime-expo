import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  // state of events array
  const [events, setEvents] = useState([]);

  //event fetching on reload
  useEffect(() => {
    getEvents();
  }, []);
  //fetching function
  const getEvents = async () => {
    const response = await fetch(
      "https://class-project-ba53c-default-rtdb.firebaseio.com/anime.json"
    );
    const data = await response.json();
    // console.log(data);
    const events = [];
    for (const key in data) {
      events.push({ id: key, ...data[key] });
    }
    setEvents(events);
  };

  //event delelte function
  const deleteHandler = async (id) => {
    const response = await fetch(
      `https://class-project-ba53c-default-rtdb.firebaseio.com/anime/${id}.json`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      getEvents();
    }
  };

  return (
    <>
      <h2 className="text-center text-4xl text-gray-600 border-b-4 mb-8 mt-2">
        List of upcomming Anime Expo
      </h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 justify-center">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-500 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 py-4 text-left ml-4"
                    >
                      Venue
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => {
                    return (
                      <tr className="bg-gray-100 border-b">
                        <td className="text-sm text-gray-700 font-medium px-6 py-4 whitespace-nowrap">
                          {event.venue}
                        </td>
                        <td className="text-sm text-gray-700 font-medium px-6 py-4 whitespace-nowrap">
                          {event.date}
                        </td>
                        <td className="text-sm text-gray-700 font-medium px-6 py-4 whitespace-nowrap">
                          {`${event.duration}-days`}
                        </td>
                        <td className="text-sm text-gray-700 font-medium px-6 py-4 whitespace-nowrap">
                          <div className="flex mr-[-150px]">
                            <Link to={`/edit/${event.id}`}>
                              <button className="text-white font-semibold bg-blue-500 px-4 py-2 rounded-md mr-2">
                                Edit
                              </button>
                            </Link>
                            <Link to={`/explore/${event.id}`}>
                              <button className="text-white font-semibold bg-green-500 px-4 py-2 rounded-md mr-2">
                                View
                              </button>
                            </Link>
                            <button
                              onClick={() => {
                                deleteHandler(event.id);
                              }}
                              className="text-white font-semibold bg-red-500 px-4 py-2 rounded-md mr-2"
                            >
                              Close
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 text-center">
        <Link to="/add-event">
          <button className="px-6 py-4 bg-blue-500 text-white text-xl font-bold rounded-lg">
            Add Event
          </button>
        </Link>
      </div>
    </>
  );
};

export default Explore;
