import { Outlet } from "react-router-dom";
import Navigation from "./shared/navigation/navigation";
import ThemeContext from "./utilities/ThemeContext";

export default function App() {
  return (
    <ThemeContext>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </ThemeContext>
  );
}
