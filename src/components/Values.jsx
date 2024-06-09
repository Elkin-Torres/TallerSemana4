import { useSelector } from "react-redux";

function Values() {

  const { subtotal, iva, total  } = useSelector((store) => store.infoForm);

  return (
    <div className="resultados">
      <p>Subtotal: ${subtotal}</p>
      <p>IVA (16%): ${iva}</p>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Values;
