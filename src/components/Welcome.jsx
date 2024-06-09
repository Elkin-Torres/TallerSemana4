import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <div>
      <div>Welcome</div>
      <Link to={"/factura"} >
      <button>Registrar factura</button>
      </Link>

    </div> 
  )
}

export default Welcome;