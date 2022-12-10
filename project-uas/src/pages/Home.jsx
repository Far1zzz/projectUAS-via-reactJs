import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default Home;
