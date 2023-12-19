import React from "react";


const Alert = ({ mensaje}) => {
  if (mensaje === null) {
    return null;
  }

  if (mensaje.includes('ERROR')){
    return (
      <div className="error">
        {mensaje}
      </div>
    )
  } else {
    return (
      <div className="exito">
        {mensaje}
      </div>
    )
  }
};

export default Alert;
