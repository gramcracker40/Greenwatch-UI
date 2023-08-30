import React from "react";
import MessageObj from "./messageObj";
import "../../index.css";


const messages = [
  {
    id: 6,
    timestamp: "2023-08-23T17:12:30.123Z",
    room_id: 1,
    user_id: 4,
    body: "Reminder: Scheduled maintenance for room 1 is due next week. Please prepare for maintenance tasks.",
  },
  {
    id: 7,
    timestamp: "2023-08-23T17:25:45.456Z",
    room_id: 2,
    user_id: 3,
    body: "Attention: Maintenance check in room 2 is needed. Please review the maintenance checklist.",
  },
  {
    id: 8,
    timestamp: "2023-08-23T17:38:00.789Z",
    room_id: 3,
    user_id: 0,
    body: "Urgent: Scheduled maintenance for room 3 is overdue. Prioritize maintenance tasks immediately.",
  },
  {
    id: 9,
    timestamp: "2023-08-23T17:49:15.234Z",
    room_id: 4,
    user_id: 0,
    body: "Maintenance Alert: Room 4's equipment requires inspection and servicing. Please schedule maintenance.",
  },
  {
    id: 10,
    timestamp: "2023-08-23T18:02:30.567Z",
    room_id: 5,
    user_id: 0,
    body: "Maintenance Reminder: Ensure that room 5's systems are well-maintained to avoid disruptions.",
  },
  {
    id: 11,
    timestamp: "2023-08-23T18:15:45.890Z",
    room_id: 6,
    user_id: 0,
    body: "Maintenance Due: Room 6's components need a thorough checkup. Plan maintenance accordingly.",
  },
  {
    id: 12,
    timestamp: "2023-08-23T18:28:00.123Z",
    room_id: 7,
    user_id: 0,
    body: "Maintenance Notice: Upcoming maintenance cycle for room 7. Prepare resources and personnel.",
  },
  {
    id: 13,
    timestamp: "2023-08-23T18:41:15.456Z",
    room_id: 8,
    user_id: 0,
    body: "Attention: Room 8's maintenance window opens soon. Review protocols and safety measures.",
  },
  {
    id: 14,
    timestamp: "2023-08-23T18:54:30.789Z",
    room_id: 9,
    user_id: 0,
    body: "Urgent Maintenance Required: Room 9 is experiencing issues. Immediate maintenance action is needed.",
  },
  {
    id: 15,
    timestamp: "2023-08-23T19:07:45.123Z",
    room_id: 10,
    user_id: 0,
    body: "Critical Maintenance Alert: Room 10's systems are compromised. Initiate maintenance protocols.",
  },
];

export default function MessagesList() {
  return (
    <ul className="divide-y divide-gray-300 w-2/5 border-solid border-5 border-slate-200 overflow-hidden rounded-lg shadow">
      {messages.map((message) => (
        <MessageObj
          key={message.id}
          id={message.id}
          user_id={message.user_id}
          room_id={message.room_id}
          body={message.body}
          timestamp={message.timestamp}
        />
      ))}
    </ul>
  );
}
