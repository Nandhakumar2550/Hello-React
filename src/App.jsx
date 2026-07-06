import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {

    const [userName, setUserName] = useState("");

    const bridgeLabzURL = "https://www.bridgelabz.com";

    function openBridgeLabzWebsite() {

        window.open(bridgeLabzURL, "_blank");

    }

    function handleNameChange(event) {

        setUserName(event.target.value);

    }

    return (

        <div className="App">

            <h1>Hello {userName} from BridgeLabz</h1>

            <img
                src={logo}
                alt="BridgeLabz Logo"
                width="250"
                onClick={openBridgeLabzWebsite}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Your Name"
                value={userName}
                onChange={handleNameChange}
            />

        </div>

    );

}

export default App;