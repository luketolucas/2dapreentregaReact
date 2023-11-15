import { Link } from "react-router-dom";

export const Item = ({ id, nombre, img, descripcion, precio }) => {
  return (
    <div className="border border-1 border-warning rounded-4 m-2">
      <div className="card-img-top">
        <div className="card-body ">
          <h5 className="card-title m-4">{nombre}</h5>
          <img src={img} alt="" />
          <p className="card-text m-4"> {descripcion} </p>
          <p className="card-text m-4"> $ {precio} USD </p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-warning rounded-4 m-4">Ver Mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};