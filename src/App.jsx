import "./App.css";
import logo from "./assets/logo.png";

function App() {

    const title = "Hello from BridgeLabz";

    const bridgeLabzURL = "https://www.bridgelabz.com";

    function openBridgeLabzWebsite() {

        window.open(bridgeLabzURL, "_blank");

    }

    return (

        <div className="App">

            <h1>{title}</h1>

            <img
                src={logo}
                alt="BridgeLabz Logo"
                width="250"
                onClick={openBridgeLabzWebsite}
            />

        </div>

    );

}

export default App;