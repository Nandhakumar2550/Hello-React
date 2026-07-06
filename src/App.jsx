import "./App.css";
import logo from "./assets/logo.png";

function App() {

    const title = "Hello from BridgeLabz";

    return (

        <div className="App">

            <h1>{title}</h1>

            <img
                src={logo}
                alt="BridgeLabz Logo"
                width="250"
            />

        </div>

    );

}

export default App;