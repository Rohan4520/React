import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StoryList.css";

export default function StoryList() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
  
        const res = await fetch("https://mxpertztestapi.onrender.com/api/sciencefiction");
        if (!res.ok) throw new Error(`API error ${res.status}`);
        const data = await res.json();
          console.log( data);
        setStories(Array.isArray(data) ? data : []);
        

      } catch (err) {
        console.error(err);
      } finally {

      }
    };
    fetchStories();
  }, []);
  
  if (error) return <div className="center error">{error}</div>;

  return (
    
    <div className="list-page">
      <section className="hero">
        <h1 className="hero-title">Science Fiction Stories</h1>
        <div className="filters">
          <button className="pill">New</button>
          <button className="pill yellow">In Progress</button>
          <button className="pill green">Completed</button>
          <button className="pill clear">Clear All</button>
        </div>
      </section>
    
      <section className="cards-wrap">
        {stories.map((s) => (
          <article
            key={s._id}
            className="card"
            onClick={() => navigate(`/story/${s._id}`)}
            role="button"
            tabIndex={0}
          >
            
            <div className="card-image-wrap">
              <img
                src={`https://ik.imagekit.io/dev24/${s?.Image}`}
                alt={s?.Title || "story"}
                className="card-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">{s?.Title || s?.Storytitle  || "Untitled Story"}</h3>
              <p className="card-desc">{s?.Description ? s.Description.slice(0, 80) + "..." : ""}</p>
              <div className={`status-badge ${(s?.Status || "").toLowerCase().replace(/\s+/g, "-")}`}>
                {s?.Status || "Unknown"}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
