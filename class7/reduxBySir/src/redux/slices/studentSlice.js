import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    Name: "Alice Sharma",
    Class: "9th Grade",
    Age: 14,
    Email: "alice.sharma@example.com",
    Marks: "92"
}
export const studentSlice = createSlice({
    name: 'studentSlice',
    initialState,
    reducers: {
        changeStudentData: (state, action) => {
            state.Name = action.payload.Name;
            state.Age = action.payload.Age;
            state.Class = action.payload.Class;
            state.Email = action.payload.Email;
            state.Marks = action.payload.Marks;
           
        },
        defaultStudentData: () => {
           return initialState;
        }

    }
})


export const { changeStudentData, defaultStudentData } = studentSlice.actions

export default studentSlice.reducer