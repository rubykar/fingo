import Capsule from "../capsule/capsule";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <a href="/" className="navBar-item">
        <Capsule text="Home" />
      </a>
      <a href="/about" className="navBar-item">
        <Capsule text="About" />
      </a>
      <a href="/contact" className="navBar-item">
        <Capsule text="Services" />
      </a>
      <a href="/about" className="navBar-item">
        <Capsule text="Advisors" />
      </a>
      <a href="/contact" className="navBar-item">
        <Capsule text="Contact" />
      </a>
    </nav>
  );
}
