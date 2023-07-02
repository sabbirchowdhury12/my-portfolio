import React from "react";
import { Link } from "react-scroll";
import "./Button.css";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link to="contact" className="button">
      <span> Say Hello</span>
      {children}
    </Link>
  );
};

export default Button;
