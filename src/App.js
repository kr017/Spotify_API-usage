import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

import { Login } from "./component/Login/Login";
import { Dashboard } from "./component/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={Dashboard} exact /> */}
        <Route path="/signin" component={Login} exact />

        <PrivateRoutes path="/" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
