import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {MyNavbar} from "./components/MyNavbar";
import MyAlert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <MyNavbar/>
                    <div className="container">
                        <MyAlert/>
                        <Switch>
                            <Route path={'/'} exact component={Home}/>
                            <Route path={'/about'} component={About}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    );
}
export default App;
