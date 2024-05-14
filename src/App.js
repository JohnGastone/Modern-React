import logo from './logo.svg';
import './App.css';


function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className='App-link'
          href='https://johngastone.my.canva.site'
          target='blank'
          rel='noopener noreferrer'
        >
          Visit this site if you need Canva designer
        </a>
      </header>
      <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
    </div>
  );
}

export default App;
