import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataForm: {
    billId: "",
    clientName: "",
    cedula: "",
    phoneNumber: "",
    email: "",
    productId: "",
    description: "",
    unitValue: "",
    quantity: "",
  },
  products: [],
  subtotal:"",
  iva:"",
  total:""
};

const formSlice = createSlice({
  name: "infoForm",
  initialState,
  reducers: {
    //agregar productos
    addProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    deleteProduct:(state, action) =>{
        state.products = state.products.filter(product => product.productId !== action.payload);
    },
    calculate:(state) =>{
        const newSubtotal =  state.products.reduce((acc, product) => acc + product.unitValue * product.quantity, 0 );
        const newIva = newSubtotal * 0.16;
        const newTotal = newSubtotal + newIva;

        state.subtotal = newSubtotal;
        state.iva = newIva;
        state.total = newTotal;
    }
  },
});

export const{addProducts, deleteProduct, calculate} = formSlice.actions;
export default formSlice.reducer;
