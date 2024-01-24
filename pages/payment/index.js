import React from "react";
import {Button} from 'antd'


export default function Payment() {
  const makePayment = async () => {
    //console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    //console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Vilage Panchayat",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Pradeep Das",
        email: "pradeephellofriend@gmail.com",
        contact: "8249396180",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }

  return (
    <>
      <div className='container pb-20 pt-20'>
        <div className='row'>
          <div className='col-lg-12 '>
            <Button size="large" onClick={makePayment}>Payment Now</Button>
            <br/>
            <span>Testing Payment UPI ID : success@razorpay</span>
          </div>
        </div>
      </div>
    </>
    
  );
}
