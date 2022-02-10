import React from 'react';
import { useForm } from 'react-hook-form';

const AddFood = () => {
    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        fetch("http://localhost:5000/addFood", {
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
                Add Food
              </h1>
              <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                  <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        {...register("title",{required:true})}
                        placeholder="Food Name"
                        className="p-2 m-2"
                      />
                      <br />
        
                      <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="p-2 m-2"
                      />
                      <br />
                      {/* <input
                        {...register("image", { required: true })}
                        placeholder="image link"
                        className="p-2 m-2"
                      />
                      <br />
                      <input
                        {...register("price", { required: true })}
                        placeholder="price"
                        className="p-2 m-2"
                      />
                      <br /> */}
                      
        
                      <input type="submit" className="btn btn-info w-50" />
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
    );
};

export default AddFood;