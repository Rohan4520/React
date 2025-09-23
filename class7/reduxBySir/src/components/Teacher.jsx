import { changeTeacherData, defaultTeacherData } from '../redux/slices/teacherSlice';
import './Teacher.css';
import { useDispatch, useSelector } from 'react-redux';
function Teacher() {

  const { Name, Qualification, Subject, Email, Salary } = useSelector((state) => state.teacherSlice);
  const dispatch = useDispatch()
  const teacherInfo = {
    Name: "Jagmohan",
    Qualification: "M.Tech",
    Subject: "DSA",
    Email: "jagmohan@gmail.com",
    Salary: 59589

  }
  function handleTeacherData() {
    console.log("hey")
    dispatch(changeTeacherData(teacherInfo))
  }

  function handleResetTeacherData() {
    console.log("hey")
    dispatch(defaultTeacherData(teacherInfo))
  }
  return (
    <div className="teacher-card">
      <h2 className="teacher-title">Teacher Profile</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>Qualification:</strong> {Qualification}</p>
      <p><strong>Subject:</strong> {Subject}</p>
      <p><strong>Email:</strong> {Email}</p>
      <p><strong>Salary:</strong> {Salary}</p>

      <div className="button-group">
        <button className="primary-btn" onClick={() => {
          handleTeacherData()
        }}>Change Teacher Data</button>
        <button className="secondary-btn" onClick={handleResetTeacherData}>Default Teacher Data</button>
      </div>
    </div>

  );
}


export default Teacher;