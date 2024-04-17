import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Pages />
    </Router>
  );
}

export default App;
