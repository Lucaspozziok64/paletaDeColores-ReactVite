import { useState } from "react";
import Swal from "sweetalert2";

const FormularioColor = ({ agregarColor }) => {
  const [colorInput, setColorInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!colorInput.trim()) {
      Swal.fire({
        title: "Debes elegir un color, haciendo click en el recuadro del input",
        text: "Asi no funciona!😉",
        icon: "warning",
      });
      return;
    }
    agregarColor(colorInput);
    setColorInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="w-100 text-center">
        <h2 className="w-100 text-light">Paleta de colores🎨</h2>
        <div className="d-flex justify-content-center align-items-center">
          <label className="form-label">
            <strong>Selecciona un Color:</strong>
          </label>
          <input
            type="color"
            className="mx-3 mb-1"
            onChange={(e) => setColorInput(e.target.value)}
            value={colorInput}
          />
          <button type="submit" className="btn btn-success botonAgregar">
            <i className="bi bi-plus-circle mx-1 text-white"></i>Agregar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioColor;
