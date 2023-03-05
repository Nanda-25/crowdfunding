import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
// Form styling globally

function PledgeForm() {
    const authToken = window.localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useOutletContext();

    const [pledges, setPledges] = useState({
        "project": null,
        "amount": null,
        "comment": "",
        "anonymous": false,
    })

    //Hooks
    const navigate = useNavigate();

    const { id } = useParams();

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;

        setPledges((prevPledges) => ({
            ...prevPledges,
            [id]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            const { token } = await postData();
            if (token != undefined) {
                window.localStorage.setItem("token", token);
                setLoggedIn(true);
                navigate("/");
            } else {
                setLoggedIn(false);
            }
        }
    };

    return (
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        placeholder="Enter username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <label htmlFor="project">Choose a project:</label>
                    <select id="project" name="project">
                    </select>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        onChange={handleChange}
                        placeholder="Enter whole dollar amount"
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <input
                        type="text"
                        id="comment"
                        onChange={handleChange}
                        placeholder="Would like to leave a message?"
                    />
                </div>
                <div>
                    <label htmlFor="anonymous">Check if you wish to remain anonymous:</label>
                    <input
                        type="checkbox"
                        id="anonymous"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn">
                Are you ready?
                </button>
            </form>
        </div>
        : (<p><span> <a href="/login">Login to</a></span> donate</p>)
        </>
    );
}

export default PledgeForm;