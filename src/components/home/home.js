import NavBar from "./navBar";
import RoomList from "./roomList";
import MessagesList from "./messagesList";
import AuthContext from "../../context/authContext";
import { EasyRequest, instanceURL, defHeaders } from "../../api/api";
import { useState, useEffect, useCallback, useContext } from 'react';
import "../../index.css";


export default function HomePage() {
  const [data, setData] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authDetails = useContext(AuthContext)

  const getData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      let roomsURL = instanceURL + "/rooms"
      const roomsReq = await EasyRequest(roomsURL, defHeaders, "GET");
      console.log(roomsReq.status)
      console.log(roomsReq.data)

      setData(roomsReq.data);
      localStorage.setItem('data', roomsReq.data)

      const timestamp = new Date();
      localStorage.setItem('lastFreshData', timestamp.toISOString());


      const filterRooms = data.map(eachRoom => ({
        id: eachRoom.id,
        name: eachRoom.name,
        latestMeasurement: eachRoom.measurements[0]
      }))
      setFilteredRooms(filterRooms);

      const filterMessages = data.messages.map(eachMessage => ({
        room_id: eachMessage.room_id,
        user_id: eachMessage.user_id,
        timestamp: eachMessage.timestamp,
        body: eachMessage.body
      }))
      setFilteredMessages(filterMessages);

    } catch (error) {
      setError(error)
    }

    setIsLoading(false)
  }, []);



  useEffect(() => {
    const clientHasData = localStorage.getItem('data');
    const lastRefreshedTime = new Date(localStorage.getItem('lastFreshData'));
    if (clientHasData) {
      const currTime = new Date();
      const hourInMilli = 60 * 60 * 1000;
      if ((currTime - lastRefreshedTime) > hourInMilli) {
        getData()
      } else {
        setData(clientHasData);
      }

    } else {
      getData();
    }
  }, [getData])

  return (
    <>
      <div className="min-h-full">
        <NavBar />

        {/* Start of main content*/}

        <div className="py-10">
          <main>
            <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8 flex space-x-4">
              <RoomList data={filteredRooms} />
              <MessagesList data={filteredMessages} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
