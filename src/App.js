import "./App.css";
import Form from "./Form";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Register from "./Register";
function App() {
  const [deg, setdeg] = useState("");
  const [deg2, setdeg2] = useState("");
  const degeral = (event) => {
    setdeg(event);
  };
  const degeral2 = (event) => {
    setdeg2(event);
  };

  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route
            path="/form"
            element={<Form degeral={degeral} degeral2={degeral2} />}
          />
          <Route path="/register" element={<Register/>}/>
        </Routes>
  
    </div>
  );
}

export default App;
