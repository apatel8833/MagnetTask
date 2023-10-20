// import Counter from "./pages/Counter";

// libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// pages
import Home from "./pages/Home";
// import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App  h-screen">
        {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
