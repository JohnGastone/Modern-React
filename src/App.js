import logo from './logo.svg';
import './App.css';


function MyButton() {
  return (
    <button
      className='Button'
      target='_blank'
      href='https://johngastone.my.canva.site'
    >John's portfolio</button>
  );
}

function MyTextField() {
  return (
    <div>
      <h3>Use the text field below to fill in your information</h3>
      <input type="text" />
      <div>

      </div>
    </div>
  )
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
      <h1>Welcome to my app, click the link below to visit my portfolio</h1>
        <MyButton />
        <MyTextField/>
    </div>
    </div>
  );
}

export default App;
