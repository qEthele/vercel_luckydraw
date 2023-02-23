import React, { useEffect, useRef, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactCanvasConfetti from "react-canvas-confetti";

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
  useEffect(() => {
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
    <div>
      <h1>
        {data.data.status === 1
          ? `Congratulation ${data.data.name}`
          : `Maybe next time ${data.data.name}`}
      </h1>
      <h2>
        {data.data.status === 1 ? `Please screen capture this page` : null}
      </h2>
      {data.data.status === 1 ? (
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      ) : null}
    </div>
  );
}

export default Result;
