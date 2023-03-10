import { Link } from "react-router-dom";
import "./Nav.css"

function Nav(props) {
    const { loggedIn, setLoggedIn } = props

    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }

    return (
        <nav>
            <div id="logo">
                <img src="../src/assets/images/logo_Istudy.png" alt="logo_Istudy" />
            </div>
            <div id="nav-right">
                {!loggedIn && <Link to="/login" className="btn">Log In</Link>}
                {loggedIn && /*<p>Welcome, {user.username}!</p> &&*/ <button onClick={handleClick} className="btn login-btn">Log Out</button>}
                <div id="nav-controls">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/donate" className="nav-link" >Donate</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
