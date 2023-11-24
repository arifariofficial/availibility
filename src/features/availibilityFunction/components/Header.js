import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [meColor, setMeColor] = useState(true);
  const [friendsColor, setFriendsColor] = useState(false);
  const [matchingColor, setMatchingColor] = useState(false);

  const handleHeaderColor = (id) => {
    if (id === "me") {
      setMeColor(true);
      setFriendsColor(false);
      setMatchingColor(false);
    } else if (id === "friends") {
      setMeColor(false);
      setFriendsColor(true);
      setMatchingColor(false);
    } else if (id === "matching") {
      setMeColor(false);
      setFriendsColor(false);
      setMatchingColor(true);
    }
  };

  return (
    <div className="availibility-function-header-container">
      <Link to="/">
        <button
          className={meColor ? "me header-button" : "header-button"}
          onClick={() => handleHeaderColor("me")}
        >
          Me
        </button>
      </Link>
      <Link to="friends">
        <button
          className={friendsColor ? "friends header-button" : "header-button"}
          onClick={() => handleHeaderColor("friends")}
        >
          Friends
        </button>
      </Link>
      <Link to="matching">
        <button
          className={matchingColor ? "matching header-button" : "header-button"}
          onClick={() => handleHeaderColor("matching")}
        >
          Matches
        </button>
      </Link>
    </div>
  );
};

export default Header;
