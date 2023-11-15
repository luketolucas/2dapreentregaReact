import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if(category) {
        const productsFilter = resp.filter(product => product.category === category);
        setProducts(productsFilter);
        setIsLoading(false);
        
        } else {
          setProducts(resp);
        setIsLoading(false);
          
        }
 
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <>
      <div> {greeting} </div>
      { isLoading ? <h2>Renderizango los productos en Stock</h2> : <ItemList products={products} /> }
    </>
  );
};