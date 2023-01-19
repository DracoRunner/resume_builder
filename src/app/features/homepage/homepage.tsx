import Footer from "./footer/footer";
import Header from "./header/header";
import "./homepage.scss";
import Main from "./main/main";
import SideBar from "./side-bar/side-bar";

export default function HomePage() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <aside>
        <SideBar />
      </aside>
      <main>
        <Main></Main>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
