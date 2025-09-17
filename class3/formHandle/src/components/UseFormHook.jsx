import React from 'react'
import { useForm } from "react-hook-form";

function UseFormHook() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function SubmitFun(data) {
        console.log(data)
    }
    return (
        <div>
            <h1> Form using useForm hook</h1>
            <form onSubmit={handleSubmit(SubmitFun)}>
                <div>
                    <label > user name :</label>
                    <input type="text"
                        {...register("username",
                            { required: true, maxLength: 10, minLength: 3 })
                        } />
                    {errors.username && <p> fill the field  </p>}
                </div>
                <div>
                    <label > last name :</label>
                    <input type="text" {...register("lastname", { required: true, maxLength: 10, minLength: 3 })}
                    />
                     {errors.lastname && <p> fill the field </p>}
                </div>
                <button> Submit </button>
            </form>
    
        </div>
    )
}

export default UseFormHook