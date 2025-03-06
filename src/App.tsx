import "./App.css";
import { IoMdSettings } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";

function App() {
  return (
    <div>
      <div className="tabrow">
        <img
          src="../src/assets/icon.png"
          alt="logo not found"
          className="shoplogo"
        />
        <div className="icondiv">
          <a href="">
            <FaCartShopping className="icon" />
          </a>
          <a>
            <IoPersonCircleSharp className="icon" />
          </a>
          <a href="">
            <IoMdSettings className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
