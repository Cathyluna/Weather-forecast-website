import logo from './logo.svg';
import './App.css';
import { InputBox } from './component/inputField/InputBox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather Forecast Website</h1>
      </header>
        <InputBox />    
    </div>
  );
}

export default App;
