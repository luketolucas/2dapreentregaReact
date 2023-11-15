import { ItemCount } from "../ItemCount/ItemCount.jsx"

export const ItemDetail = ( {descripcion, precio, stock, nombre, img} ) => {

  const onAdd = (items) => { 
    alert(`Se agregaron ${items} al carrito`)
 }

  return (
    <div className="border border-warning m-2">
        <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{nombre}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {descripcion} </p>
          <p>Precio: {precio} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}