// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Form from "./components/Form";
import HomeScreen from './components/HomeScreen';


function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/second-page" element={<HomeScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
