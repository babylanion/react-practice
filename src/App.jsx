
import * as React from 'react';
import Hello from "./pages/Hello";
import Hooks from "./pages/Hooks";
import HooksReducer from "./pages/Hooks/Extra/Reducer";
import Refs from "./pages/Refs";
import "./styles.css";


const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routerMap = {
  Hooks: Hooks,
  hooksReducer: HooksReducer,
  refs: Refs,
};

class App extends React.PureComponent {
  handeLinkClick = (key) => {
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routerMap[currentPage] || Hello;

    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routerMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handeLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

export default App;
