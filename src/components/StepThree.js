import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import "./App.css";
export default function StepThree() {
  const [phone, setPhone] = useState(null);
  return (
    <div className="container">
      <div className="div1">
        <h2>Please enter your mobile</h2>
      </div>
      <div className="sub-container">
        <div className="div2">
          <PhoneInput country={"in"} value={phone} onChange={setPhone} />
        </div>
        <Link to="/step4">
          <button style={{ marginTop: "277px" }}>Continue</button>
        </Link>
      </div>
    </div>
  );
}
