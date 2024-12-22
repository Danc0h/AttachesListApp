import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Home.css";
import Attache from "../components/Attache"; // Import the AttacheTable component

function Home() {
  const [attaches, setAttaches] = useState([]);
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    getAttaches();
  }, []);

  const getAttaches = () => {
    api
      .get("/api/attaches/")
      .then((res) => res.data)
      .then((data) => {
        setAttaches(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteAttache = (id) => {
    api
      .delete(`/api/attaches/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Attache deleted!");
        else alert("Failed to delete attache.");
        getAttaches();
      })
      .catch((error) => alert(error));
  };

  const createAttache = (e) => {
    e.preventDefault();
    api
      .post("/api/attaches/", { name, regNo, course })
      .then((res) => {
        if (res.status === 201) alert("Attache created!");
        else alert("Failed to create attache.");
        getAttaches();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>List of Students in attachment</h2>
        <Attache attaches={attaches} onDelete={deleteAttache} />
      </div>
      <h2>Create a new attache</h2>
      <form onSubmit={createAttache}>
        <label htmlFor='name'>Student Name:</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label htmlFor='regNo'>Student RegNo:</label>
        <br />
        <input
          type='text'
          id='regNo'
          name='regNo'
          required
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />
        <br />
        <label htmlFor='course'>Student Course:</label>
        <br />
        <input
          type='text'
          id='course'
          name='course'
          required
          onChange={(e) => setCourse(e.target.value)}
          value={course}
        />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Home;
