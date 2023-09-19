import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put(`https://649357ad428c3d2035d1ac5a.mockapi.io/crud-in-react/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  }
  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          {" "}
          Update
        </button>
        <Link to={"/read"}>
          <button className="btn btn-secondary" mx-2>
            Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
