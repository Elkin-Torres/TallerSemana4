import { useEffect } from 'react';
import BillForm from './BillForm.jsx';
import ProductsTable from './ProductsTable.jsx';
import Values from './Values.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from '../features/formSlice.js';



function App() {

  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.infoForm);

  useEffect(() => {

dispatch(calculate());

  }, [products]);

  return (
    <>
      <BillForm/>
      <ProductsTable />
      <Values/>
    </>
  )
}

export default App;
