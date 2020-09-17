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
import { getUser } from './api/githubApi';
class App extends Component {
  componentWillMount() {
    getUser('adrijshikhar');
  }
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
