import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    useHistory,
    Switch,
    Route,
    Link
} from '../MyRouter/react-router-dom/index.jsx'

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
function Push() {
    let {history} = useHistory()
    function push() {
        history.push('/home')
    }
    return (
        <div onClick={push}>push</div>
    )
}
function App() {
    return (
        <Router>
            <Push></Push>
            <div>
                <div>
                    <Link to='/home'>home</Link>
                </div>
                <div>
                    <Link to='/about'>about</Link>
                </div>
                <div>
                    <Link to='/user'>user</Link>
                </div>
            </div>
            <Switch>
                <Route path='/home'><Home></Home></Route>
                <Route path='/about'><About></About></Route>
                <Route path='/user'><Users></Users></Route>
            </Switch>
        </Router>
    )
}

let root = document.getElementById('root');
ReactDOM.render(<App></App>, root);
