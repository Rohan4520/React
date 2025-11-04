import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/StoryDetails.css";

export default function StoryDetail() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [active, setActive] = useState("wordExplorer");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ added
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        if (!res.ok) throw new Error(`API error ${res.status}`);
        const data = await res.json();
        setStory(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load story.");
      } finally {
        setLoading(false); // ✅ fixed
      }
    };
    fetchStory();
  }, [id]);

  if (loading) return <div className="center">Loading story...</div>;
  if (error) return <div className="center error">{error}</div>;
  if (!story) return <div className="center">No story found.</div>;

  return (
    <div className="detail-page">
      <div className="detail-top">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h1 className="detail-title">{story?.Title}</h1>
      </div>

      <div className="detail-grid">
        <div className="left-col">
          <img
            src={`https://ik.imagekit.io/dev24/${story?.Image?.[0]}`}
            alt={story?.Title}
            className="detail-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image";
            }}
          />
          <div className="meta">
            <p><strong>Status:</strong> {story?.Status || "N/A"}</p>
            {story?.Author && <p><strong>Author:</strong> {story.Author}</p>}
          </div>
        </div>

        <div className="right-col">
          <div className="tabs">
            <button
              className={active === "wordExplorer" ? "tab active" : "tab"}
              onClick={() => setActive("wordExplorer")}
            >
              Word Explorer
            </button>
            <button
              className={active === "storyAdventure" ? "tab active" : "tab"}
              onClick={() => setActive("storyAdventure")}
            >
              Story Adventure
            </button>
            <button
              className={active === "brainQuest" ? "tab active" : "tab"}
              onClick={() => setActive("brainQuest")}
            >
              Brain Quest
            </button>
          </div>

          <div className="tab-content">
            {active === "wordExplorer" && (
              <>
                <h3>Word Explorer</h3>
                <p>{story?.Storyitext || "No description available."}</p>
              </>
            )}

            {active === "storyAdventure" && (
              <>
                <h3>Story Adventure</h3>
                <p>{story?.Story || story?.Content || "No story content available."}</p>
              </>
            )}

            {active === "brainQuest" && (
              <>
                <h3>Brain Quest</h3>
                {story?.Quiz ? (
                  <div><p>{story.Quiz}</p></div>
                ) : (
                  <p>No quiz available for this story.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
