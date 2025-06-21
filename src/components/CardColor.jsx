const CardColor = ({ color }) => {
  return (
    <div className="col">
      <div className="card d-flex justify-content-center">
        <div className="card-body p-1">
          <p className="cajaColor" style={{backgroundColor: color.nombre }}></p>
          <div className="card-footer d-flex justify-content-between">
            <p>{color.nombre}</p>
            <button className="btn btn-danger rounded-2">Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardColor;
