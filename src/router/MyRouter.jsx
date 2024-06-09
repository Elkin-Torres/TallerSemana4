import { Route, Routes } from "react-router-dom";
import Welcome from "../components/Welcome";
import App from "../components/App";
import Error from "../components/Error";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/bill" element={<App />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MyRouter;
