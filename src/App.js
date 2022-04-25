import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BankList from './pages/BankList';
import BankDetail from './pages/BankDetail';
import "./App.css"
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/all-banks" element={<BankList/>} />
        <Route  path="/bankdet/:id" element={<BankDetail/>} />
        <Route  path="/favourites" element={<Favourites/>} />
        <Route  path="" element={<Navigate to="/all-banks"/>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2002}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </Router>
  );
}

export default App;
