import React, { useEffect } from "react";
import artistInfo from "../componenst/Artist";
import { useLocation, useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();
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
      <h2 className="h2Artist">
        ลุ้นเป็นผู้โชคดี
        <br />
        ถ่ายภาพหมู่กับศิลปินที่คุณรัก
        <br />( 1 Dealer code / 1 สิทธิ์เท่านั้น )
      </h2>
      {/* <h1 className="h1Artist">
        กิจกรรม <span style={{ color: "red" }}>Lucky Fans</span>
      </h1> */}
      <h2 className="h2Artist">แตะเพื่อเลือกศิลปิน</h2>
      {artistInfo.map((item) => (
        <div
          onClick={() => {
            navigate("/random", {
              state: { api: item.api, img: item.img, artist: item.name },
            });
          }}
          className="artist"
          key={item.id}
        >
          <img className="imageArtist" src={item.img} />
        </div>
      ))}
    </div>
  );
}

export default Home;
