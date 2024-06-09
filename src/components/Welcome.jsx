import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div>Welcome</div>
      <Link to={"/bill"}>
        <button>Registrar factura</button>
      </Link>
    </div>
  );
};

export default Welcome;
