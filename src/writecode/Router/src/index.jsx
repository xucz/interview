import React from 'react'
import ReactDOM from 'react-dom'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function About2() {
    return <h2>About2</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Demo() {
    let history = useHistory()
    console.log(history)
    function gotoAbout() {
        debugger
        history.push("/about");
    }
    return (
        <li onClick={gotoAbout}>点我</li>
    )
}
function App() {
    
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <Demo></Demo>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About2</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/about">
                        <About2 />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

let root = document.getElementById('root')
console.log(root)
ReactDOM.render(<App></App>, root)
