import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Protected from "./components/security/Protected";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
      </Routes>

      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>
  );
}

export default App;
