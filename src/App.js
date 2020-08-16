import { version, Component } from 'inferno';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{`Welcome to Inferno ${version}`}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
