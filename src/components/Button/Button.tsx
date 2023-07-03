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
  console.log(props);
  return (
    <>
      {props.value === "#contact" ? (
        <a href={props.value} className="button">
          {props.children}
        </a>
      ) : (
        <a download="" href={props.value} target="_blank" className="button">
          {props.children}
        </a>
      )}
    </>
  );
};

export default Button;
