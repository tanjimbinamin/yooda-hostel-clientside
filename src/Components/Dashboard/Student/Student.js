import React,{useEffect, useState} from  'react';
import { Table } from 'react-bootstrap';

const Student = () => {

    const [allStudents,setAllStudents]=useState([])
   
    
    
    const [control,setControl]=useState(false)

            useEffect(()=>{
                fetch('http://localhost:5000/students')
                .then(res=>res.json())
                .then(data=>setAllStudents(data))
            },[control])
            
      
            

            const handleDelete1=(id)=>{
                const sure=window.confirm("sure about to delete?");
                if (sure){
                    fetch( `http://localhost:5000/deleteStudents/${id}`,{
                        method:"DELETE",
                        headers:{"content-type":"application/json"}
                    })
                    .then((res) => res.json())
                    .then((data) => {
                    if (data.deletedCount) {
                      setControl(!control);
                    } else {
                      setControl(false);
                    }
                    });
                }
                
            }


    return (
         <div>
            <h1 className="text-center mt-4  pt-4">
                     Manage Orders
            </h1>
            <h1 style={{borderBottom:"5px dotted black ",width:"30%", margin:"auto", marginBottom:"20px"}}></h1>
           <div>
                <Table xs={1} striped bordered hover variant="dark">
                        <thead>
                        <tr xs={1}>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Roll</th>
                            <th>Age</th>
                            <th>Class</th>
                            <th>Hall Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allStudents.map((order,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td>{order.title}</td>
                            <td>{order.roll}</td>
                            <td>{order.age}</td>
                            <td>{order.class}</td>
                            <td>{order.hallName}</td>
                            <td>{order.status}</td>
                            <td><button onClick={()=>handleDelete1(order._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                            )
                        }
                        </tbody>  
                    </Table>
           </div>
           
       </div>
    );
};

export default Student;