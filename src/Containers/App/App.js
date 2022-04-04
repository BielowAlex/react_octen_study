import logo from '../../logo.svg';
import './App.css';
import User from "../Users/components/User";
import Users from "../Users/Users";
import Posts from "../Posts/Posts";
import Comments from "../Comments/Comments";

function App() {
    return (
        <div className="App">
            <div className="wrap">
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;
