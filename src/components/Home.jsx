import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

function Home() {

    const [userName, setUserName] = useState("");

    const [error, setError] = useState("");

    const bridgeLabzURL = "https://www.bridgelabz.com";

    function openBridgeLabzWebsite() {

        window.open(bridgeLabzURL, "_blank");

    }

    function handleNameChange(event) {

        const value = event.target.value;

        setUserName(value);

        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

        if (value === "") {

            setError("");

        }

        else if (!nameRegex.test(value)) {

            setError("Name should start with a Capital Letter and contain at least 3 characters.");

        }

        else {

            setError("");

        }

    }

    return (

        <div className="container">

            <nav className="navbar">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/contact">Contact</Link>

            </nav>

            <h1>

                Hello {userName} from BridgeLabz

            </h1>

            <img
                src={logo}
                alt="BridgeLabz Logo"
                className="logo"
                onClick={openBridgeLabzWebsite}
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Enter Your Name"
                value={userName}
                onChange={handleNameChange}
            />

            <br />
            <br />

            <span className="error">

                {error}

            </span>

        </div>

    );

}

export default Home;