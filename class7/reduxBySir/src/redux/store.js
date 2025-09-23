import { configureStore } from '@reduxjs/toolkit'
import studentSlice from './slices/studentSlice'
import teacherSlice from './slices/teacherSlice'
export default configureStore({
    reducer: {
        studentSlice: studentSlice,
        teacherSlice: teacherSlice
    },
})