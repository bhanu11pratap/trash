import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
export default function StepTwo() {
  const [address] = useState(null);
  const [eth] = useState(10000);
  const [instaFee] = useState(10000);
  const [networkFee] = useState(10);
  const [totalAmount] = useState(11000);

  return (
    <div className="container">
      <div className="div1">
        <h2>Buy ETH to you wallet</h2>
      </div>
      <div className="sub-container">
        <div className="div2">
          <label>ETH wallet address</label>
          <input
            type="number"
            value={address}
            required
            placeholder="Enter wallet address"
          />
        </div>
        <h3>ORDER DETAILS</h3>
        <div className="subdiv">
          <label>ETH</label>
          <span> ₹ {eth}</span>
        </div>
        <div className="subdiv">
          <label>InstaEther fee</label>
          <span> ₹ {instaFee}</span>
        </div>
        <div className="subdiv">
          <label>Network fee</label>
          <span> ₹ {networkFee}</span>
        </div>
        <div className="subdiv">
          <label>Total Amount</label>
          <span> ₹ {totalAmount}</span>
        </div>
        <Link to="/step3">
          <button style={{ marginTop: "162px" }}>Buy ETH</button>
        </Link>
      </div>
    </div>
  );
}
