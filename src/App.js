import { Create, Browse, Home, Battle } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.CREATE}>
          <Create />
        </Route>
        <Route path={`${ROUTES.BROWSE}/:battle`}>
          <Battle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
