import React, { useEffect, useRef, useCallback, useState } from "react";
import { Api } from "../componenst/Api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const userData = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    console.log(userData);

    Api.post("/login", userData).then((res) => {
      let data = res.data;
      if (data === true) {
        navigate("/data", {
          state: {
            data,
          },
        });
      } else {
        alert("invalid username or password");
      }
      console.log(data);
    });
  }
  return (
    <div className="mainContainer">
      <div className="resultContainer">
        <h1 style={{ padding: "2rem" }}>Log in</h1>
        <form style={{ width: "100%", padding: "1rem" }} onSubmit={handleLogin}>
          <label style={{ color: "white" }}>
            username :
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <br />
          <label style={{ color: "white" }}>
            password :
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            disabled={(userName === "") | null ? true : false}
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
