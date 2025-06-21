const FormularioColor = () => {
  return (
    <form className="d-flex justify-content-center align-items-center">
      <div className="w-100 text-center">
        <h2 className="w-100 text-light">Paleta de colores🎨</h2>
      <div className="d-flex justify-content-center align-items-center">
        <label className="form-label"><strong>Selecciona un Color:</strong></label>
        <input type="color" className="mx-3 mb-1" />
        <button type="submit" className="btn btn-success">
          <i className="bi bi-plus-circle mx-1 text-white"></i>Agregar
        </button>
      </div>
      </div>
    </form>
  );
};

export default FormularioColor;
