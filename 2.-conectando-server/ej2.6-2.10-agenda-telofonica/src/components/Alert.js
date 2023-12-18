import React from "react";


const Alert = ({ mensaje }) => {
  if (mensaje === null) {
    return null;
  }

  return (
    <div className="exito">
      {mensaje}
    </div>
  );
};

export default Alert;
