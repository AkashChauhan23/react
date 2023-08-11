// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Footer from './components/Footer';
import Countries from './components/Countries';

function App() {
  return (
    <>
      <Nav />
      <Intro1 />
      <Countries />
      <Footer />
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
