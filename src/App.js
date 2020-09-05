import { Component } from 'inferno';
import {
  SideNavigationBar,
  Home,
  About,
  Education,
  Skills,
  Experience,
  Projects,
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
          <hr class="m-0" />
          <Experience />
          <hr class="m-0" />
          <Projects />
        </Home>
      </div>
    );
  }
}

export default App;
