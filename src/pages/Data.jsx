import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Api } from "../componenst/Api";

function Data() {
  const [dataPP, setDataPP] = useState([{ name: "", status: "" }]);
  const [dataBellkin, setDataBellkin] = useState([{ name: "", status: "" }]);
  const [dataTmd, setDataTmd] = useState([{ name: "", status: "" }]);
  const [dataNonTanon, setDataNonTanon] = useState([{ name: "", status: "" }]);
  const location = useLocation();
  const navigate = useNavigate();

  function resetData() {
    Api.delete("/ppKrit").then(() => {});
    Api.delete("/billkin").then(() => {});
    Api.delete("/tmd").then(() => {});
    Api.delete("/nonTanon").then(() => {});
    Api.delete("/allData").then(() => {});
    alert("Reset Data");
    navigate("/login");
  }

  useEffect(() => {
    if (location.state === null) {
      navigate("/login");
    }

    Api.get("/ppKrit").then((res) => {
      setDataPP(res.data);
    });
    Api.get("/billkin").then((res) => {
      setDataBellkin(res.data);
    });
    Api.get("/tmd").then((res) => {
      setDataTmd(res.data);
    });
    Api.get("/nonTanon").then((res) => {
      setDataNonTanon(res.data);
    });
  }, []);

  return (
    <div className="mainContainerData" style={{ height: "auto" }}>
      <div className="mainContainerData" style={{ height: "auto" }}>
        <h2 style={{ color: "red" }}>PP Krit luckydraw data</h2>
        <table className="playerTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Dealer Code</th>
            </tr>
          </thead>
          <tbody>
            {dataPP.map((item) => (
              <tr key={item.id}>
                <td>{item.player_name}</td>
                <td>{item.status}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total lucky player {dataPP.length}/25</p>
        <p>
          --------------------------------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="mainContainerData">
        <h2 style={{ color: "red" }}>Bellkin luckydraw data</h2>
        <table className="playerTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Dealer Code</th>
            </tr>
          </thead>
          <tbody>
            {dataBellkin.map((item) => (
              <tr key={item.id}>
                <td>{item.player_name}</td>
                <td>{item.status}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total lucky player {dataBellkin.length}/25</p>
        <p>
          --------------------------------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="mainContainerData">
        <h2 style={{ color: "red" }}>Three man down luckydraw data</h2>
        <table className="playerTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Dealer Code</th>
            </tr>
          </thead>
          <tbody>
            {dataTmd.map((item) => (
              <tr key={item.id}>
                <td>{item.player_name}</td>
                <td>{item.status}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total lucky player {dataTmd.length}/50</p>
        <p>
          --------------------------------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="mainContainerData">
        <h2 style={{ color: "red" }}>Non Tanon luckydraw data</h2>
        <table className="playerTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Dealer Code</th>
            </tr>
          </thead>
          <tbody>
            {dataNonTanon.map((item) => (
              <tr key={item.id}>
                <td>{item.player_name}</td>
                <td>{item.status}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total lucky player {dataNonTanon.length}/50</p>
        <p>
          --------------------------------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <button
        onClick={() => {
          resetData();
        }}
      >
        Reset All Data
      </button>
    </div>
  );
}

export default Data;
