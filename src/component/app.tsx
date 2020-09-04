import * as React from "react";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import Todolist from "./todolist/todolist/todolist";

// https://reactrouter.com/web/example/basic
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <p>Study List</p>
                <ul>
                    <li>
                        <Link to="/todolist">Todolist</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/todolist">
                    <Todolist />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
