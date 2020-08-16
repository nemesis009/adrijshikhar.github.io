import { Component } from 'inferno';
import { SideNavigationBar, Home, About, Education } from './components';
class App extends Component {
  render() {
    return (
      <div id="page-top">
        <SideNavigationBar />
        <Home>
          <About />
          <hr class="m-0" />
          <Education />
        </Home>
      </div>
    );
  }
}

export default App;
