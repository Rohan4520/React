import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../features/postsSlice';
import "./Pagination.css";


export default function Pagination() {
const dispatch = useDispatch();
const { items, perPage, currentPage } = useSelector((state) => state.posts);
const totalPages = Math.max(1, Math.ceil(items.length / perPage));


const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


const goTo = (p) => dispatch(setPage(p));


return (
<div className="pagination">
<button onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1} className="page-control">Prev</button>


<div className="page-numbers">
{pages.map((p) => (
<button
key={p}
onClick={() => goTo(p)}
className={`page-num ${p === currentPage ? 'active' : ''}`}
>
{p}
</button>
))}
</div>


<button onClick={() => goTo(currentPage + 1)} disabled={currentPage === totalPages} className="page-control">Next</button>
</div>
);
}