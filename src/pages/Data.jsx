import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Api } from "../componenst/Api";

function Data() {
  const [data, setData] = useState([{ name: "", status: "" }]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/login");
    }

    Api.get("/data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>All lucky player data</h1>
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
    </div>
  );
}

export default Data;
