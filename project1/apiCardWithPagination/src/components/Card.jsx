import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../features/postsSlice';
import "./Card.css";


export default function Card({ post }) {
const dispatch = useDispatch();


const handleDelete = () => {
dispatch(deletePost(post.id));
};


return (
<div className="card">
<button className="delete-btn" onClick={handleDelete} aria-label="remove">×</button>
<div className="card-body">
<h3 className="card-title">{post.title}</h3>
<p className="card-text">{post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}</p>
<div className="card-meta">{post.date}</div>
<img
className="card-img"
src={`https://picsum.photos/seed/${post.imageId}/300/180`}
alt="post"
/>
</div>
</div>
);
}