import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Expensesreport({search,setSearch}){

    const [payaments,setpayment] = useState([]);


     const[value , setValue] = useState('');
     const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


/*  const [payment, setstaffde] = useState([
    {
        fristname:"",
        lastname:"",
        email:"",
        nationality:"",
        phone:"",
        tnds:""
    },
  ]);
*/
  useEffect(() => {

    function getpayment()
    {
       
  
      axios.get("http://localhost:8070/Payment/").then((res) => {
  
  
         setpayment(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getpayment();
    },[]); 

 /* const renderClass = (Payment, id) => {
    return (
      <tr key={id}>
       
        <td>{Payment.fristname}</td>
        <td>{Payment.lastname}</td>
        <td>{Payment.email}</td> 
        <td>{Payment.nationality}</td>
        <td>{Payment.phone}</td>
        <td>{Payment.tnds}</td>
      </tr>
    );
  };*/

  return (
    <div className="newstaff">
    <div className="marginaling">
    <button onClick={handlePrint}>Download PDF</button>
    </div>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   
  <div ref={componentRef}>
        <h2 className="aling topic-report">Annual Report</h2>

        <table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Frist Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Nationality</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Total Number of Days</th>
                      <th scope="col">Price</th>
                      <th scope="col">Pname</th>
                      
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((Payment,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{Payment.fristname}</td>
                          <td>{Payment.lastname}</td>
                          <td>{Payment.email}</td>
                          <td>{Payment.nationality}</td>
                          <td>{Payment.phone}</td>
                          <td>{Payment.tnds}</td>
                          <td>${Payment.price}</td>
                          <td>{Payment.pname}</td>
                          
                          
                      </tr>
                  ))
                :
                payaments.map((Payment,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{Payment.fristname}</td>
                      <td>{Payment.lastname}</td>
                      <td>{Payment.email}</td>
                      <td>{Payment.nationality}</td>
                      <td>{Payment.phone}</td>
                      <td>{Payment.tnds}</td>
                      <td>${Payment.price}</td>
                      <td>{Payment.pname}</td>
                      
                     
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

  )
};

