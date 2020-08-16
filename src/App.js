import { Component } from 'inferno';
import {
  SideNavigationBar,
  Home,
  About,
  Education,
  Skills,
} from './components';
class App extends Component {
  render() {
    return (
      <div id="page-top">
        <SideNavigationBar />
        <Home>
          <About />
          <hr class="m-0" />
          <Education />
          <hr class="m-0" />
          <Skills />
        </Home>
      </div>
    );
  }
}

export default App;
