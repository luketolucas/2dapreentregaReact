import { ItemListContainer } from "./components/ItemListContainer/itemListContainer"
import { Navbar } from "./components/Navbar/Navbar"

export const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting={"Hola estoy probando React holaholahola"} />
    </>
  )
}
