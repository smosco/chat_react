import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="navbar">
      <span className="logo">Ore Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="avatar" />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
            console.log("signOut successfully");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}
