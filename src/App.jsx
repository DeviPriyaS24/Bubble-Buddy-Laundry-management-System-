import "./App.css";
import "../bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister = {true} />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
