import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C9D6DF;
    padding: 50px;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
