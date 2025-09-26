import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
// Attach a date and image id to each post
const enriched = data.map((p) => ({
...p,
date: new Date().toLocaleString(),
imageId: (p.id % 100) + 1,
}));
return enriched;
});


const postsSlice = createSlice({
name: 'posts',
initialState: {
items: [],
status: 'idle',
error: null,
currentPage: 1,
perPage: 6,
},
reducers: {
deletePost(state, action) {
const id = action.payload;
state.items = state.items.filter((p) => p.id !== id);
// adjust page if current page is now out of range
const totalPages = Math.max(1, Math.ceil(state.items.length / state.perPage));
if (state.currentPage > totalPages) state.currentPage = totalPages;
},
setPage(state, action) {
const page = action.payload;
const totalPages = Math.max(1, Math.ceil(state.items.length / state.perPage));
if (page < 1) state.currentPage = 1;
else if (page > totalPages) state.currentPage = totalPages;
else state.currentPage = page;
},
},
extraReducers(builder) {
builder
.addCase(fetchPosts.pending, (state) => {
state.status = 'loading';
})
.addCase(fetchPosts.fulfilled, (state, action) => {
state.status = 'succeeded';
state.items = action.payload;
})
.addCase(fetchPosts.rejected, (state, action) => {
state.status = 'failed';
state.error = action.error.message;
});
},
});


export const { deletePost, setPage } = postsSlice.actions;
export default postsSlice.reducer;