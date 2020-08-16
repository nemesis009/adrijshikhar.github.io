import { version, Component } from 'inferno';

class SideNavigationBar extends Component {
  render() {
    return (
      <div className="SideNavigationBar">
        <header className="SideNavigationBar-header">
          <p>{`Welcome to Inferno ${version}`}</p>
          <p>
            Edit <code>src/SideNavigationBar.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default SideNavigationBar;
