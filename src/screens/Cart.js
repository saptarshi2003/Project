import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
  
    if (!userEmail) {
      console.error("User email is not available.");
      alert("Please log in before checking out.");
      return;
    }
  
    try {
      let response = await fetch("http://localhost:5000/api/OrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });
  
      const responseBody = await response.json();
      console.log("Order Response:", responseBody);
  
      if (response.status === 200) {
        dispatch({ type: "DROP" }); // Empty the user cart after checkout
        //alert("Order placed successfully!");
      } else {
        console.error("Error:", responseBody.error);
        alert("Order failed. Please try again.");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  


  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => { dispatch({ type: "REMOVE", index: index }); }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
