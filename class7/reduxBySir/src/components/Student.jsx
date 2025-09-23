import { useDispatch, useSelector } from 'react-redux';
import './Student.css';
import { changeStudentData, defaultStudentData } from '../redux/slices/studentSlice.js';
function Student() {
    const { Name, Class, Age, Email, Marks } = useSelector((state) => state.studentSlice)
    const dispatch = useDispatch()
    const studentInfo = {
        Name: "abc",
        Age: "19",
        Email: "abc@gmail.com",
        Class: "12th Grade",
        Marks: 96

    }
    function handleStudentData() {
        console.log("hey")
        dispatch(changeStudentData(studentInfo))
    }

    function handleResetStudentData() {
        console.log("hey")
        dispatch(defaultStudentData())
    }
    return (
        <div className="student-card">
            <h2 className="student-title">Student Profile</h2>
            <p><strong>Name:</strong> {Name}</p>
            <p><strong>Class:</strong> {Class}</p>
            <p><strong>Age:</strong> {Age}</p>
            <p><strong>Email:</strong> {Email}</p>
            <p><strong>Marks:</strong> {Marks}</p>

            <div className="button-group">
                <button className="primary-btn" onClick={() => {
                    handleStudentData()
                }}>Change Teacher Data</button>
                <button className="secondary-btn" onClick={handleResetStudentData}>Default Teacher Data</button>
            </div>
        </div>

    );
}



export default Student;