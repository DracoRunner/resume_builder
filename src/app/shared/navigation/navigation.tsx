import React from "react";
import { Button, Dropdown, Navbar } from "react-daisyui";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../utilities/ThemeContext";
import "./navigation.scss";
const DEFAULT_THEMES = ["light", "dark", "retro", "aqua"];

const Navigation = () => {
  const { setTheme } = React.useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <Navbar className="flex w-full items-center justify-center gap-2 bg-base-300">
      <Navbar.Start>
        <Button className="btn btn-ghost text-2xl	 capitalize" color="ghost">
          Resume.Craft
        </Button>
      </Navbar.Start>
      <Navbar.End>
        <Button onClick={() => navigate("/home")} color="ghost">
          Resume
        </Button>
        <Button color="ghost">Cover Letter</Button>
        <Button color="ghost">
          <FaUserCircle size={30} />
        </Button>
        <Dropdown>
          <Dropdown.Toggle color="ghost">
            <Button />
          </Dropdown.Toggle>
          <Dropdown.Menu color="ghost" className="flex gap-3 flex-col">
            {DEFAULT_THEMES.map((theme) => {
              return (
                <Button dataTheme={theme} onClick={() => setTheme(theme)} />
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.End>
    </Navbar>
  );
};
export default Navigation;