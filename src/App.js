import React from "react";
import StepOne from "./components/StepOne";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/step2" element={<StepTwo />} />
        <Route path="/step3" element={<StepThree />} />
        <Route path="/step4" element={<StepFour />} />
      </Routes>
    </BrowserRouter>
  );
}
