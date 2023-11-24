import Header from "./components/Header";
import Matching from "./components/Matching";
import Me from "./components/Me";
import MyFriends from "./components/MyFriends";
import "./availibilityFunction.css";
import { Route, Routes } from "react-router-dom";

const AvailibilityFunction = () => {
  return (
    <div className="availibility-function-container">
      <h3 className="h3-header">AVAILIBILITY FUNCTION</h3>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/friends" element={<MyFriends />} />
          <Route path="/matching" element={<Matching />} />
        </Routes>
      </div>
    </div>
  );
};

export default AvailibilityFunction;
