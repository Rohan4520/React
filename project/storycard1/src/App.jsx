import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import StoryDetail from "./components/StoryDetails";
import StoryList from "./components/StoryList";


export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="brand">
          <div className="logo-circle">🔮</div>
          <Link to="/" className="brand-text">BrainyLingo</Link>
        </div>
        <nav className="nav-right">
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<StoryList/>} />
          <Route path="/story/:id" element={<StoryDetail />} />
        </Routes>
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} BrainyLingo — Demo
      </footer>
    </div>
  );
}
