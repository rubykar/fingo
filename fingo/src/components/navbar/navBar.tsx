import Capsule from "../capsule/capsule";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <a href="/" className="navBar-item">
        <Capsule text="Home" variant="small" />
      </a>
      <a href="/about" className="navBar-item">
        <Capsule text="About" variant="small" />
      </a>
      <a href="/contact" className="navBar-item">
        <Capsule text="Services" variant="small" />
      </a>
      <a href="/about" className="navBar-item">
        <Capsule text="Advisors" variant="small" />
      </a>
      <a href="/contact" className="navBar-item">
        <Capsule text="Contact" variant="small" />
      </a>
    </nav>
  );
}
