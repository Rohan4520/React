import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
  name: "student",
  initialState: {
    name: "Rohan Yadav",
    course: "MCA",
    age: 23,
    email: "rohan@gmail.com",
    phone: "7747808237",
  },
  reducers: {
    updateStudent: (state, action) => {
       state.name = action.payload.name
      state.name = action.payload.course
            state.name = action.payload.age
      state.name = action.payload.email
      state.name = action.payload.phone
    },
  },
});

export const { updateStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
