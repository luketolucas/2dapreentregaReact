import { Item } from "../Item/Item";


export const ItemList = ({ products }) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-wrap">
        {products.map((product) => (
          
          <Item key={product.id} {...product} /> ))}
      </div>
    </>
  );
};
