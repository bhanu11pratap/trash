import React, { useState } from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import "./App.css";
export default function StepOne() {
  const [amount, setAmount] = useState(40000);
  const [estimate, setEstimate] = useState(2);
  const [price, setprice] = useState(20000);
  const [totalFee, setTotalFee] = useState(500);

  return (
    <div className="container">
      <div className="div1">
        <h2>Buy to Crypto to your wallet</h2>
      </div>
      <div className="sub-container">
        <div className="div2">
          <label>You pay</label>
          <br></br>
          <input
            type="number"
            placeholder="Amount.."
            required
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsDate)}
          />
        </div>
        <div className="div3">
          {" "}
          <label>Using payment method</label>
          <br></br>
          <input type="radio" value="UPI" />
          <label>UPI</label>
          <input type="radio" value="IMPS" />
          <label>IMPS</label>
        </div>

        <div className="div4">
          <label>You recieve (estimate)</label>
          <br></br>
          <input
            type="number"
            value={estimate}
            required
            onChange={(e) => setEstimate(e.target.value)}
          />
        </div>
        <div className="div5">
          <label>Per ETH price</label>
          <span> ₹ {price}</span>
        </div>
        <div className="div6">
          <label>Total fee</label>
          <span> ₹ {totalFee}</span>
        </div>
        <div className="div7">
          <label>Processing Time :</label>
          <Timer />
        </div>
        <div className="button">
          <Link to="/step2">
            <button style={{ marginTop: "100px" }}>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
