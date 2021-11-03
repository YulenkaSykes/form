import React from "react";
import "./App.scss";
import Button from "react-bootstrap/Button";

import Header from "./Components/Header";
import Link from "./Components/Link";
import Select from "./Components/Select";
import Inputs from "./Components/Inputs";

function App() {
  return (
    <div className="App centered">
      <Header />
      <div className="col centered buttons">
        <Button className="btn" variant="success">
          <strong>Sing up</strong>
        </Button>

        <Link />

        <Inputs />

        <Select />
      </div>
    </div>
  );
}

export default App;
