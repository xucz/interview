import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    useHistory,
    Switch,
    Route
} from '../MyRouter/react-router-dom/index.jsx'

function Home() {
    let history = useHistory()
    console.log(history)
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path='home'><Home></Home></Route>
                <Route path='about'><About></About></Route>
                <Route path='user'><Users></Users></Route>
            </Switch>
        </Router>
    )
}

let root = document.getElementById('root');
ReactDOM.render(<App></App>, root);
