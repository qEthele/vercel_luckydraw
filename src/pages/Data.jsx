import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Api } from "../componenst/Api";

function Data() {
  const [data, setData] = useState([{ name: "", status: "" }]);
  const location = useLocation();
  const navigate = useNavigate();

  function resetData() {
    Api.get("/resetAllData").then(() => {
      alert("Reset Data");
      navigate("/login");
    });
  }

  useEffect(() => {
    if (location.state === null) {
      navigate("/login");
    }

    Api.get("/data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="mainContainer">
      <div className="container">
        <h2>All lucky player data</h2>
        <table className="playerTable">
          <thead>
            <tr>
              <th>name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total lucky player {data.length}/10</p>
        <button
          onClick={() => {
            resetData();
          }}
        >
          Reset All Data
        </button>
      </div>
    </div>
  );
}

export default Data;
