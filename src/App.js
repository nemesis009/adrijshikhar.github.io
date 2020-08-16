import { version, Component } from 'inferno';
import SideNavigationBar from './components/side-nav-bar/SideNavigationBar';
class App extends Component {
  render() {
    return (
      <div id="page-top">
       <SideNavigationBar />
      </div>
    );
  }
}

export default App;
