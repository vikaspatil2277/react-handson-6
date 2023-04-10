import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import ContactUs from "../ContactUs";
import Student from "../Student";

import AddNewStudent from "../AddNewStudent";
import { useState } from "react";
import Data from "../DataContext";
import EditPg from "../Editpg";


const RouterFile = () => {
  const [data, setData] = useState([
    {
      Name: "VIKAS PATIL",
      Age: 24,
      Course: "MERN",
      Batch: "OCTOBER",
    },
    {
      Name: "ASH YADAV",
      Age: 25,
      Course: "MERN",
      Batch: "NOVEMBER",
    },
    {
      Name: "ADITYA YADAV",
      Age: 23,
      Course: "MERN",
      Batch: "OCTOBER",
    },
    {
      Name: "TARUN SHARMA",
      Age: 25,
      Course: "MERN",
      Batch: "DECEMBER",
    },
    {
      Name: "ADII KUMAR",
      Age: 22,
      Course: "MERN",
      Batch: "NOVEMBER",
    },
    {
      Name: "ROHIT PATIL",
      Age: 24,
      Course: "MERN",
      Batch: "DECEMBER",
    },


  ]);
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/student"
        element={
          <Data.Provider value={{ entries: data, updateFunction: setData }}>
            <Student />
          </Data.Provider>
        }
      />
      <Route path="/Contactus" element={<ContactUs />} />
      <Route
        path="/edit"
        element={
          <Data.Provider value={{ entries: data, updateFunction: setData }}>
            <EditPg/>
          </Data.Provider>
        }
      />
      <Route
        path="/addnewstudent"
        element={
          <Data.Provider value={{ entries: data, updateFunction: setData }}>
            <AddNewStudent />
          </Data.Provider>
        }
      />
    </Routes>
  );
};

export default RouterFile;