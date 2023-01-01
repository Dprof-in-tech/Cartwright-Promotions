import logo from './Cartwright_Promotions_logo.png';
import logo1 from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <a
          className="App-link"
          href="Https://www.facebook.com/cartwrightpromotions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cartwright Promotions
        </a>
        <br/>
        <img src={logo1} className= "App-logo" alt="preloader" />
      </header>
    </div>
  );
}

export default App;
