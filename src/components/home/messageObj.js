import React from 'react'; 
import "../../index.css";


function MessageObj({id, user_id, room_id, body, timestamp}) {

    function convertTimestamp(timestamp){
        const readable = new Date(timestamp);
        const month = readable.getMonth() + 1; // Months are 0-indexed
        const day = readable.getDate();
        const year = readable.getFullYear();
        const hour = readable.getHours();
        const minutes = readable.getMinutes();
        let returner = `${month}/${day}/${year} ${hour}:${minutes}`;

        return returner
    }
    
    return (
        <li key={id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {user_id}
              </p>{" "}
              {/*replace with users name */}
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {body}
              </p>{" "}
            </div>
          </div>

          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{room_id}</p>

            <time dateTime={timestamp}>{convertTimestamp(timestamp)}</time>
          </div>
        </li>
    )
}

export default MessageObj; 