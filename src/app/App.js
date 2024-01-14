import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Todo from "./features/todo/Todo";
import Header from "./shared/header/Header";
import Contact from "./features/contact/Contact";
import Login from "./features/login/Login";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const t = localStorage.getItem("x-token");
    setToken(t);
  }, [location]);
  return (
    <>
      {token && <Header />}
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
