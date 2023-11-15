import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="green navbar d-flex justify-content-center background-color-blue  p-3">
      <div>
      <Link to={"/"}>
      <h1 className="mx-5">Pakkard Watches</h1>
        </Link>
      </div>
        <div>
        <Link to={"/"}>
        <button className="btn btn-warning rounded-4 mx-3">Home</button>
        </Link>
        <Link to={"/category/diver"}>
        <button className="btn btn-warning rounded-4 mx-3">Diver Watches</button>
        </Link>
        <Link to={"/category/dress"}>
        <button className="btn btn-warning  rounded-4 mx-3">Dress Watches</button>
        </Link>
        <Link to={"/category/chrono"}>
        <button className="btn btn-warning rounded-4 mx-3">Chrono Watches</button>
        </Link>
        <Link to={"/category/chronoracer"}>
        <button className="btn btn-warning rounded-4 mx-3">Chronoracer Watches</button>
        </Link>
        <Link to={"/category/chronofly"}>
        <button className="btn btn-warning rounded-4 mx-3">Chronofly Watches</button>
        </Link>
        </div>
        <div className="mx-5 d-flex">
            <CartWidget />
            <p className="mt-2"></p>
        </div>
    </nav>
    
  )
}
