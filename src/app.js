import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <h1>ACME Contact Directory</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
