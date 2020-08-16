import { Component } from 'inferno';
import SideNavigationBar from './components/side-nav-bar/SideNavigationBar';
import Home from './components/home/Home';
import About from './components/about/About';
class App extends Component {
  render() {
    return (
      <div id="page-top">
        <SideNavigationBar />
        <Home>
          <About />
          <hr class="m-0" />
        </Home>
      </div>
    );
  }
}

export default App;
