// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Footer from './components/Footer';
import Countries from './components/Countries';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Alert alert={alert} />
      {/* <Nav title="Library" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Intro1 mode={mode} showAlert={showAlert} /> */}
      {/* <Countries /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav title="Library" mode={mode} toggleMode={toggleMode} />} >
            {/* <Route path="/" element={<Alert alert={alert} />} /> */}
            <Route path="intro1" element={<Intro1 mode={mode} showAlert={showAlert} />} />
            <Route path="countries" element={<Countries />} />
            {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
