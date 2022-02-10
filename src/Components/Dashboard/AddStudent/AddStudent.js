import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudent = () => {
    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
        
        fetch("http://localhost:5000/addStudent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
            
         
     };
    return (
        <div>
      <h1 className="mt-5 text-center">
        Add Student Information
      </h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
            
              <input
                {...register("title", { required: true })}
                placeholder="full Name"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("roll", { required: true })}
                placeholder="roll"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("age", { required: true })}
                placeholder="age"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("class", { required: true })}
                placeholder="class"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("hall", { required: true })}
                placeholder="hall Name"
                className="p-2 m-2"
              />
              <br />
              <div className='mx-3 mb-3'>
                  <h5>Status</h5>
                <select {...register("status")}>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    
                </select>
              </div>

              <input type="submit" className="btn btn-info w-50" />
            </form>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddStudent;