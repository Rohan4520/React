import { createSlice } from "@reduxjs/toolkit";

const TeacherSlice = createSlice({
  name: "teacher",
  initialState: {
    name: "Mr. Sharma",
    subject: "Mathematics",
    age: 40,
    email: "sharma@example.com",
    phone: "9876543210",
  },
  reducers: {
    updateTeacher: (state, action) => {
      state.name = action.payload.name
      state.name = action.payload.subject
      state.name = action.payload.age
      state.name = action.payload.email
      state.name = action.payload.phone
    },
  },
});

export const { updateTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;
