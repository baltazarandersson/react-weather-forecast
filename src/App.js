import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Nav params={{ keyword: "buenos aires" }} />
        <Body params={{ keyword: "buenos aires" }} />
      </Route>

      <Route path="/location/:keyword" component={Nav} />
      <Route path="/location/:keyword" component={Body} />
    </div>
  );
}

export default App;
