import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Landing from "./components/landing/landing";

class App extends React.Component {
  installEvent = null;

  setBeforeInstallListener() {
    console.log("Listening for Install prompt");
    window.addEventListener("beforeinstallprompt", e => {
      // For older browsers
      e.preventDefault();
      console.log("Install Prompt fired");
      this.installPrompt = e;
      // See if the app is already installed, in that case, do nothing
      if (
        (window.matchMedia &&
          window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
      ) {
        return false;
      }
      // Set the state variable to make button visible
      this.setState({
        installButton: true
      });
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <section>
          <Landing />
          {/* <Home/> */}
        </section>
      </div>
    );
  }
}

export default App;
