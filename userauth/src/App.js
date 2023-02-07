import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Dummy from "./components/pages/Dummy";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="dummy" element={<Dummy/>}></Route>


      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
