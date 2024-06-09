import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../features/formSlice";
import { firstForm } from "../schemas/firstForm";

function BillForm() {
  const [productId, setProductId] = useState("");
  const [description, setDescription] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();
  const { dataForm } = useSelector((store) => store.infoForm);

  const handleSubmit = () => {
    dispatch(addProducts({ productId, description, unitValue, quantity }));
    setProductId("");
    setDescription("");
    setUnitValue("");
    setQuantity("");
  };

  return (
    <div className="factura">
      <h1>Factura</h1>
      <Formik
        initialValues={dataForm}
        onSubmit={handleSubmit}
        validationSchema={firstForm}
      >
        <Form autoComplete="off">
          <div className="factura__cliente factura__position">
            <div>
              <label htmlFor="billId">Número de Factura:</label>
              <Field
                type="text"
                name="billId"
                id="billId"
                autoComplete="off"
                required
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="clientName">Nombres del cliente</label>
              <Field
                type="text"
                name="clientName"
                id="clientName"
                autoComplete="off"
                required
              />
              <ErrorMessage name="clientName" component="p" />
            </div>
            <div>
              <label htmlFor="cedula">Cédula:</label>
              <Field
                type="number"
                name="cedula"
                id="cedula"
                autoComplete="off"
                required
              />
              <ErrorMessage name="cedula" component="p" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Teléfono:</label>
              <Field
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="off"
                required
              />
              <ErrorMessage name="phoneNumber" component="p" />
            </div>
          </div>
          <div className="factura__correo">
            <label htmlFor="email">Correo:</label>
            <Field
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
            <ErrorMessage name="email" component="p" />
          </div>
          <div className="factura__producto factura__position">
            <div>
              <Field
                type="number"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                name="productId"
                id="productId"
                placeholder="ID Producto"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <Field
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                placeholder="Descripción"
                autoComplete="off"
                required
              />
            </div>
            
              <Field
                type="number"
                value={unitValue}
                onChange={(e) => setUnitValue(e.target.value)}
                name="uValue"
                id="uValue"
                placeholder="Valor Unitario"
                autoComplete="off"
                required
              />
            
            
              <Field
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                name="quantity"
                id="quantity"
                placeholder="Cantidad"
                autoComplete="off"
                required
              />
            
          </div>

          <button type="submit" value="Agregar Producto">
            Agregar producto
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default BillForm;
