import React, { useEffect, useRef, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactCanvasConfetti from "react-canvas-confetti";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";
import { Api } from "../componenst/Api";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    data: { data: { name: null, status: null } },
  });

  const [img, setImg] = useState(null);

  console.log(location.state);
  Api.post("/allData", location.state.data);

  useEffect(() => {
    if (data.data.status === 1) {
      setImg(location.state.img);
    }

    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    if (location.state === null) {
      navigate("/");
    } else {
      setData(location.state);
    }
  });

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  return (
    <div
      className="selectArtist"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100vw",
        backgroundAttachment: "fixed",
        height: "100vh",
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
      {data.data.check === true ? (
        <div className="resultContainer">
          {data.data.status === 1 ? (
            <div className="resultContainer">
              <h1 className="h1Artist">Lucky Fans</h1>
              <h2 className="h2Artist">
                ขอแสดงความยินดี !!
                <br />
                คุณได้รับสิทธิ์ถ่ายภาพหมู่ (PHOTO GROUP) กับ
                <br />
                <span style={{ color: "red" }}>"{location.state.artist}"</span>
              </h2>
              <img width="80%" src={img} style={{ paddingTop: "2rem" }} />
              {data.data.status === 1 ? (
                <ReactCanvasConfetti
                  refConfetti={getInstance}
                  style={canvasStyles}
                />
              ) : null}
            </div>
          ) : (
            <div
              className="resultContainer"
              style={{ justifyContent: "center" }}
            >
              <h1 className="h1Artist">ขอแสดงความเสียใจ</h1>
              <h2 className="h2Artist">
                คุณไม่ได้รางวัล
                <span style={{ color: "red" }}> {""}Lucky Fans</span>
              </h2>
              <img width="80%" src={img} />
              {data.data.status === 1 ? (
                <ReactCanvasConfetti
                  refConfetti={getInstance}
                  style={canvasStyles}
                />
              ) : null}
            </div>
          )}
        </div>
      ) : (
        <div className="resultContainer" style={{ justifyContent: "center" }}>
          <h1 className="h1Artist">คุณได้ใช้สิทธิไปแล้ว</h1>
        </div>
      )}

      {/* <div className="resultContainer">
        <h1>
          
        </h1>
        <h2>
          {data.data.status === 1 ? `Please screen capture this page` : null}
        </h2>
        <img width="80%" src={img} />
        {data.data.status === 1 ? (
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        ) : null}
      </div> */}
    </div>
  );
}

export default Result;
