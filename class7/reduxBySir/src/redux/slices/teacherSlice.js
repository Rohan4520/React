import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    Name: "John Doe",
    Qualification: "M.Ed, B.Sc",
    Email: "john.doe@example.com",
    Subject: "Mathematics",
    Salary: "₹50,000"
};
export const teacherSlice = createSlice({
    name: 'teacherSlice',
    initialState,
    reducers: {
        changeTeacherData: (state, action) => {


            console.log(action)
            state.Name = action.payload.Name;
            state.Qualification = action.payload.Qualification;
            state.Subject = action.payload.Subject;
            state.Email = action.payload.Email;
            state.Salary = action.payload.Salary;
        },
        defaultTeacherData: () => {
            return initialState

        }

    }
})


export const { changeTeacherData, defaultTeacherData } = teacherSlice.actions

export default teacherSlice.reducer