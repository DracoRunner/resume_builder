import "./header.scss";
export default function Header() {
  return (
    <section className="nav-lg">
      <div className="nav-brand">
        <a>Brand</a>
      </div>
      <ul>
        <li>Resume Builder</li>
        <li>Resume Examples</li>
        <li>Resume Templates</li>
        <li>Cover Letter Examples</li>
      </ul>
    </section>
  );
}
