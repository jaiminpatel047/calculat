import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Layout";
import Pageone from "./pages/Pageone";
import Pagetwo from "./pages/Pagetwo";
import Pagethree from "./pages/Pagethree";
import Pagefour from "./pages/Pagefour";
import Pagefive from "./pages/Pagefive";
import Pagesix from "./pages/Pagesix";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState('dark') 

   const toggleMode = () => { 
    if( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#111827"
    }else{
      setMode('light')
      document.body.style.backgroundColor = "#dfdfdf"
    }
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar mode={mode} toggleMode={toggleMode}/>}>
          <Route index element={<Pageone />} />
          <Route path="Pagetwo" element={<Pagetwo />} />
          <Route path="Pagethree" element={<Pagethree />} />
          <Route path="Pagefour" element={<Pagefour />} />
          <Route path="Pagefive" element={<Pagefive />} />
          <Route path="Pagesix" element={<Pagesix />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
