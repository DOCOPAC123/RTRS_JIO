import * as React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// tslint:disable-next-line:ordered-imports
import Articles from "./components/Articles";
import EnrollMe from "./components/EnrollMe";
interface IProps {
  history?: any;
}
interface IState {
  temp: number;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      temp: 4
    };
  }
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={MainScreen} />
        <Route path="/articles" component={Articles} />
        <Route path="/enroll-me" component={EnrollMe} />
      </Switch>
    );
  }
}
export default App;
