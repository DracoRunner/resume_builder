import React from "react";
import "./header.scss";
export default function Header() {
  const [isToggle, setToggle] = React.useState(false);

  return (
    <section className="nav">
      <div className="nav-brand">
        <a>Brand</a>
      </div>
      <div className="nav-btn" onClick={() => setToggle(!isToggle)}>
        <a id="navbar-toggle" className={isToggle ? "active" : ""}>
          <span></span>
        </a>
      </div>
      <ul className={isToggle ? "active" : ""}>
        <li>Resume Builder</li>
        <li>Resume Examples</li>
        <li>Resume Templates</li>
        <li>Cover Letter Examples</li>
      </ul>
    </section>
  );
}
