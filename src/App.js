import './App.css';
import { InputBox } from './component/inputField/InputBox.js';
import { Header } from './component/Header';

function App() {
  return (
    <article className="App">
      <Header/>
      <main>
        <div className="input-field">
          <InputBox className="city-input"/> 
        </div>
      </main>
      <footer></footer>
    </article>
  );
}

export default App;
