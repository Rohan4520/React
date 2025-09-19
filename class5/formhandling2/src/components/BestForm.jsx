import React, { useState } from 'react'
import "./BestForm.css"   // css file import
import { useNavigate } from 'react-router';

function BestForm() {
    const [formData, setFormData] = useState({
        fName: "",
        email: "",
        password: "",
        Dob: "",
        gender: "female",
        education: "",
        resume: "",
        course: "BA",
    })

    const [familyMember, setFamilyMember] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((formData) => {
            return { ...formData, [name]: value }
        })
    }

    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault();
        formData.familyMember = familyMember;
        console.log(formData)
        navigate("/profileData" , {state :  formData});

    }

    function handleFamilyMember(event) {
        const { value, checked } = event.target;
        if (checked) {
            setFamilyMember((prev) => [...prev, value])
        } else {
            setFamilyMember((prev) => prev.filter((member) => member !== value))
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-box">
                <h2 className="form-title">Registration Form</h2>

                <div className="form-group">
                    <label htmlFor="fName">First name</label>
                    <input type="text" name='fName' id='fName'
                        value={formData.fName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email'
                        value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'
                        value={formData.password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="Dob">Date of Birth</label>
                    <input type="date" name='Dob'
                        value={formData.Dob} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <h4>Choose your gender</h4>
                    <label><input type="radio" value="male" name="gender" onChange={handleChange} /> Male</label>
                    <label><input type="radio" value="female" name="gender" checked={formData.gender === "female"} onChange={handleChange} /> Female</label>
                    <label><input type="radio" value="other" name="gender" onChange={handleChange} /> Other</label>
                </div>

                <div className="form-group">
                    <label htmlFor="education">Education</label>
                    <textarea id="education" name="education" placeholder="Enter your thoughts"
                        value={formData.education} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="resume">Upload Resume</label>
                    <input type="file" id='resume' onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="course">Select Course</label>
                    <select name="course" id="course" value={formData.course} onChange={handleChange}>
                        <option value="B.Tech">B.Tech</option>
                        <option value="Bsc">Bsc</option>
                        <option value="BA">BA</option>
                        <option value="MCA">MCA</option>
                    </select>
                </div>

                <div className="form-group">
                    <h4>Tick your family members</h4>
                    <label><input type="checkbox" value="father" onChange={handleFamilyMember} /> Father</label>
                    <label><input type="checkbox" value="mother" onChange={handleFamilyMember} /> Mother</label>
                    <label><input type="checkbox" value="sister" onChange={handleFamilyMember} /> Sister</label>
                    <label><input type="checkbox" value="brother" onChange={handleFamilyMember} /> Brother</label>
                </div>

                <div className="form-actions">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BestForm
