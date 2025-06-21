const FormularioColor = () => {
  return (
    <form className="d-flex justify-content-center align-items-center">
      <div className="w-100 text-center">
        <h2 className="w-100 text-light">Paleta de colores🎨</h2>
      <div className="d-flex justify-content-center align-items-center">
        <label className="form-label">Selecciona un Color:</label>
        <input type="color" className="mx-3 mb-1" />
        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </div>
      </div>
    </form>
  );
};

export default FormularioColor;
