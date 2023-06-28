import { useState, useRef } from "react";
import { InputColor } from "./inputColor";

export const App = () => {
  const defaultMessage = useRef("Color no ingresado");
  const [Color, setColor] = useState(defaultMessage.current);

  const handleOnChange = (e) => {
    const valor = e.target.value;
    setColor(valor);
  };

  const ColorIs = {
    backgroundColor: Color,
  };

  return (
    <div>
      <div
        className="contenedor border border-3 border-black mt-5 mb-5 pt-5"
        style={ColorIs}
      >
        <h5 className="text-center mt-5">
          {Color.trim() === "" ? defaultMessage.current : Color}
        </h5>
      </div>
      <InputColor onChange={handleOnChange}/>
    </div>
  );
};
