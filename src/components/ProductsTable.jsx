import { deleteProduct } from "../features/formSlice.js";
import ProductsInTable from "./ProductsInTable.jsx";
import { useDispatch, useSelector } from "react-redux";

function ProductsTable() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.infoForm);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID producto</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductsInTable
              key={index}
              productId={product.productId}
              description={product.description}
              unitValue={product.unitValue}
              quantity={product.quantity}
              ondelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsTable;
