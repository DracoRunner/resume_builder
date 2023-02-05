import "./app.scss";
import HomePage from "./modules/homepage/homepage";
import Navigation from "./shared/naviagtion/navigation";
import ThemeContext from "./utilities/ThemeContext";

export default function App() {
  return (
    <ThemeContext>
      <Navigation></Navigation>
      <HomePage></HomePage>
    </ThemeContext>
  );
}
