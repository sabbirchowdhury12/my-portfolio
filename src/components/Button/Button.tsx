import React from "react";
import "./Button.css";

const Button = (props: {
  value: string | undefined;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <a download="" href={props.value} className="button">
      {props.children}
    </a>
  );
};

export default Button;
