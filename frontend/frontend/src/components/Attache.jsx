import React from "react";
import "../styles/Attache.css";

function Attache({ attaches, onDelete }) {
  const formattedDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US");
  };

  return (
    <div className='attache-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>RegNo</th>
            <th>Course</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attaches.map((attache) => (
            <tr key={attache.id}>
              <td>{attache.name}</td>
              <td>{attache.regNo}</td>
              <td>{attache.course}</td>
              <td>{formattedDate(attache.created_at)}</td>
              <td>
                <button
                  className='delete-button'
                  onClick={() => onDelete(attache.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attache;
