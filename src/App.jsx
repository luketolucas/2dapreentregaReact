import { Navbar , ItemListContainer , CartWidget , ItemList, ItemDetailContainer } from "./components/"
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Tienda de relojes de lujo"} />} />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Tienda de relojes de lujo"} />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />  
      </Routes>
    </BrowserRouter>
    </>
  )
}
