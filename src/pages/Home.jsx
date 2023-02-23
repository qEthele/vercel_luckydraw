import React, { useEffect, useState } from "react";
import { Api } from "../componenst/Api";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";
import wheel from "../assets/lotties/wheel.json";

function Home() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function Random(e) {
    e.preventDefault();

    const userData = {
      name: e.target[0].value,
      status: Math.floor(Math.random() * 2),
    };
    console.log(userData);

    Api.post("/mydata", userData).then((res) => {
      let data = res.data;
      navigate("/result", {
        state: {
          data,
        },
      });
    });
  }
  return (
    <div className="App">
      <Lottie
        loop
        animationData={wheel}
        play
        style={{ width: 550, height: 550 }}
      />
      <form onSubmit={Random}>
        <label>
          Name :
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <button
          disabled={(userName === "") | null ? true : false}
          type="submit"
        >
          Random
        </button>
      </form>
    </div>
  );
}

export default Home;
