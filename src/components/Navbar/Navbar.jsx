import { CartWidget } from "../CartWidget/CartWidget"


export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center background-color-blue p-3">
      <div>
        <h1 className="mx-5">Pakkard Watches</h1>
      </div>
        <div>
        <button className="btn btn-warning mx-3">Home</button>
        <button className="btn btn-warning mx-3">Nosotros</button>
        <button className="btn btn-warning mx-3">Tienda</button>
        <button className="btn btn-warning mx-3">Configuracion</button>
        </div>
        <div className="mx-5 d-flex">
            <CartWidget />
            <p className="mt-2">2</p>
        </div>
    </nav>
    
  )
}
