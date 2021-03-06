import { Create, Browse, Home, Battle, ErrorPage } from "./pages";
import { Router, Route, Switch } from "react-router-dom";
import history from "./helpers/history";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router history={history}>
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
        <Route
          exact
          path={`${ROUTES.BROWSE}/:battleID`}
          children={<Battle />}
        ></Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
