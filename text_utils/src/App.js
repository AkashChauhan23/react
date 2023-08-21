// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Footer from './components/Footer';
import Countries from './components/Countries';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, Switch,
//   Route,
//   Switch,
//   Link
// } from "react-router-dom";

// import {
//   createBrowserRouter as Switch,
//   RouterProvider as Routes,
//   Route,
//   // Link,
// } from "react-router-dom";

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
    // <Router>
    <>
      <Nav title="Library" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Router> */}
        {/* <Router path="/"> */}

          <Intro1 mode={mode} showAlert={showAlert} />
        
        {/* </Router> */}
        
        {/* <Router path="/" element={<Countries />} /> */}

        {/* <Router path="/countries"> */}
        
          <Countries />
        
        {/* </Router> */}
      {/* </Router> */}

      <Footer />
    {/* </Router> */}
    </>
  );
}

export default App;
