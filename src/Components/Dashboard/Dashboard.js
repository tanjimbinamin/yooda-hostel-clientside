import React, { useState } from 'react';
import AddFood from './AddFood/AddFood';
import AddStudent from './AddStudent/AddStudent';
import FoodItem from './FoodItem/FoodItem';
import Student from './Student/Student';


const Dashboard = () => {
    const [control, setControl] = useState("allOrders");

    console.log("contrssdol");
    return (
      <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3" style={{backgroundColor:"#18222d"}}>
                <div className="admin-area p-1 text-center ms-3 pt-5 pb-5">
                  <h6 style={{fontFamily: 'Pacifico',fontSize:"3rem",marginTop:"3rem" , color:" violet"}}>Admin Dashboard</h6>
                  <div className="all-menu mt-5 pt-5 pb-5">
                    <li
                      onClick={() => setControl("allOrders")}
                      className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                    >
                     Add Food
                    </li>
                    <li
                      onClick={() => setControl("addOrders")}
                      className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                    >
                      Food Items
                    </li>
                    <li
                      onClick={() => setControl("myOrders")}
                      className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                    >
                      Add Student
                    </li>
                    <li
                      onClick={() => setControl("allService")}
                      className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                    >
                      Student info
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center  text-center">
                {control === "allOrders" && <AddFood></AddFood>}
                {control === "myOrders" && <AddStudent></AddStudent> }
                {control === "addOrders" && <FoodItem></FoodItem>}
                {control === "allService" && <Student></Student>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;