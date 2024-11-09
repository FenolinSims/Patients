import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PatientInfo from "./Pages/PatientInfo";
// import PatientInfo from './Pages/PatientInfo'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={() => <Home />} />
          <Route path="patient-info" Component={() => <PatientInfo />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
