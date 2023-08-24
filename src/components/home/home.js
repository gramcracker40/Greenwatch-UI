import NavBar from "./navBar";
import RoomList from "./roomList";
import MessagesList from "./messagesList";
import { EasyRequest } from "../../api/api";
import { useState, useEffect } from 'react'; 
import "../../index.css";


export default function HomePage() {
  // const [users, setUsers] = useState([])
  

  // useEffect(() => {
    
  // }, [users])

  return (
    <>
      <div className="min-h-full">
        <NavBar />

        {/* Start of main content*/}

        <div className="py-10">
          <main>
            <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8 flex space-x-4">
              <RoomList />
              <MessagesList />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
