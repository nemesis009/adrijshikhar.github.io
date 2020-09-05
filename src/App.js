import { Component } from 'inferno';
import {
  SideNavigationBar,
  Home,
  About,
  Education,
  Skills,
  Experience,
  Projects,
  Interests,
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
          <hr class="m-0" />
          <Interests />
        </Home>
      </div>
    );
  }
}

export default App;
