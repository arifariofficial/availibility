import "./css/availibilityFuntion.css";
import Me from "./components2/Me";
import { Route, Routes } from "react-router-dom";
import MyFriends from "./components2/MyFriends";
import Matching from "./components2/Matching";
import Header from "./components2/Header";

const AvailibilityFuntion = () => {
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

export default AvailibilityFuntion;
