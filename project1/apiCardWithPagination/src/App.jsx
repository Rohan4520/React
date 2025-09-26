import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, setPage } from './features/postsSlice';
import Card from './components/Card';
import Pagination from './components/Pagination';
import "./App.css";

export default function App() {
const dispatch = useDispatch();
const { items, perPage, currentPage, status } = useSelector((state) => state.posts);
const [loadingScreen, setLoadingScreen] = useState(true);


useEffect(() => {
// Fetch posts immediately
dispatch(fetchPosts());
// Show loading screen for at least 5 seconds
const t = setTimeout(() => setLoadingScreen(false), 5000);
return () => clearTimeout(t);
}, [dispatch]);


useEffect(() => {
// If items change and current page is out of range, adjust
const totalPages = Math.max(1, Math.ceil(items.length / perPage));
if (currentPage > totalPages) dispatch(setPage(totalPages));
}, [items, perPage, currentPage, dispatch]);

if (loadingScreen) {
return (
<div className="loading-screen">
<div className="loading-box">Loading...</div>
</div>
);
}


if (status === 'loading') {
// posts are still fetching but loading screen done
return (
<div className="loading-screen">
<div className="loading-box">Fetching posts...</div>
</div>
);
}


if (status === 'failed') {
return <div className="error">Failed to load posts.</div>;
}

// calculate visible posts
const start = (currentPage - 1) * perPage;
const visible = items.slice(start, start + perPage);

return (
<div className="app-container">
<header className="header">
<h1>Posts Gallery</h1>
</header>


<main>
<div className="cards-grid">
{visible.map((p) => (
<Card key={p.id} post={p} />
))}
{/* If there are less than perPage items on a page, show placeholders to keep layout */}
{visible.length < perPage && Array.from({ length: perPage - visible.length }).map((_, i) => (
<div className="card placeholder" key={`ph-${i}`}></div>
))}
</div>


<Pagination />
</main>


<footer className="footer">Built with React + Redux Toolkit</footer>
</div>
);
}