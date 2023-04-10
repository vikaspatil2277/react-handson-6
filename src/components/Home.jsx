import React from "react";
import NavBar from "./NavBar";

export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <h1 style={{ textAlign: "center", color: "red" }}>
        Welcome to Prepbytes
      </h1>
      <h3 style={{ textAlign: "center" }}>Click on student to see the students list.</h3>
    </div>
  );
};
export default Home;