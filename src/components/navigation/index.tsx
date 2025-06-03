"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Nav1 from "./navbar/Nav1";
import Side1 from "./sidebar/Side1";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
      <>
           {/* <Side1 isOpen={isOpen} toggle={toggle} />
          <Nav1 toggle={toggle} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} /> 
    </>
  );
};

export default Navigation;