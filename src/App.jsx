import "./App.css";
import { Link } from "react-router-dom";
import Image from "./components/Image";

function App() {
  return (
    <>
      <div>
        <h1>Hello from the main page of the app.</h1>
        <p>Here are some links to the other pages.</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
          </ul>
        </nav>
        <Image />
      </div>
    </>
  );
}

export default App;
