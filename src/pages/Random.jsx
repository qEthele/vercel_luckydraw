import React, { useEffect, useState } from "react";
import { Api } from "../componenst/Api";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "react-lottie-player";
import wheel from "../assets/lotties/wheel.json";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";

function Random() {
  const [userName, setUserName] = useState("");
  const [retailName, setRetailName] = useState("");
  const [tel, setTel] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function Random(e) {
    e.preventDefault();
    console.log(location.state.api);
    const userData = {
      player_name: e.target[0].value,
      status: Math.floor(Math.random() * 2),
      retail: e.target[1].value,
      tel: e.target[2].value,
      id: e.target[3].value,
    };

    Api.post(`${location.state.api}`, userData).then((res) => {
      let data = res.data;
      navigate("/result", {
        state: {
          data,
          img: location.state.img,
          artist: location.state.artist,
        },
      });
    });
  }
  return (
    <div
      className="selectArtist"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100vw",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "10vh",
          padding: "0rem 2rem 0rem 2rem",
        }}
      >
        <img src={logo} width="20%" style={{ float: "right" }} />
      </div>
      <h1 className="h1Artist">รายละเอียดผู้เข้าร่วมกิจกรรม</h1>
      <h2 className="h2Artist" style={{ color: "red" }}>
        Lucky Fans
      </h2>
      <div className="lottieContainer">
        <form onSubmit={Random}>
          <label>
            ชื่อ :
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <br />
          <label>
            ชื่อร้าน :
            <input
              value={retailName}
              onChange={(e) => setRetailName(e.target.value)}
            />
          </label>
          <br />
          <label>
            เบอร์โทร :
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </label>
          <br />
          <label>
            เลขบัตร :
            <input value={id} onChange={(e) => setId(e.target.value)} />
          </label>
          <br />
          <button
            className="submitBtn"
            disabled={
              (userName === "" ||
                tel === "" ||
                retailName === "" ||
                id === "") | null
                ? true
                : false
            }
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Random;
