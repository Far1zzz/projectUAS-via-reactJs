import React, { useState } from "react";
import { useEffect } from "react";
import "../assets/css/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      try {
        // const token = localStorage.getItem("token");
        const response = await axios.post(
          `${process.env.REACT_APP_API_PENDUDUK}/auth/login`,
          data
          // {
          //   headers: {
          //     Authorization: `${token}`,
          //   },
          // }
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
          navigate("/");
        }
      } catch (err) {
        alert("error");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          width="185"
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">Login</h4>
                      </div>

                      {!token ? (
                        <form onSubmit={handleSubmit}>
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example11">
                              Username
                            </label>
                            <input
                              type="email"
                              id="form2Example11"
                              class="form-control"
                              placeholder="Phone number or email address"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example22">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form2Example22"
                              class="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div class="text-center pt-1 mb-5 pb-1">
                            <button
                              class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Log in
                            </button>
                            <a class="text-muted mx-2" href="#!">
                              Forgot password?
                            </a>
                          </div>

                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/register");
                              }}
                              type="submit"
                              class="btn btn-outline-danger"
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                      ) : (
                        <>
                          <button
                            onClick={handleLogout}
                            className="btn btn-danger"
                          >
                            Log Out
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
