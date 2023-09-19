import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const list = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit");
    axios
      .post("https://649357ad428c3d2035d1ac5a.mockapi.io/crud-in-react", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        list("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h1>Create</h1>
        <Link to={"/read"}>
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}> 
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
