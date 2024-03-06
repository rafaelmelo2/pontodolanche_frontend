import logo from './logo.svg';
import './App.css';
import routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {routes}

    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

    <script
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>

    <script
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>
    </>
    


  );
}

export default App;
