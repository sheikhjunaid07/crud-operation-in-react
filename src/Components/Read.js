import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://649357ad428c3d2035d1ac5a.mockapi.io/crud-in-react")
      .then((resp) => {
        setData(resp.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://649357ad428c3d2035d1ac5a.mockapi.io/crud-in-react/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []);

function setToLocalStorage(id, name, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
}

  return (
    <div>
     <div className="d-flex justify-content-between m-3">
      <h1>Read</h1>
      <Link to={'/'}>
      <button className="btn btn-info" >Create</button>
      </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to={"/update"}>
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
