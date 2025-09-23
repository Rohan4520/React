import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./TeacherSlice";
import studentReducer from "./StudentSlice";

const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    student: studentReducer,
  },
});

export default store;
