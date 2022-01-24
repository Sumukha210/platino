import React from "react";

interface btnType {
  name: string;
}

const Button: React.FC<btnType> = ({ name }) => {
  return <button>{name}</button>;
};

export default Button;
