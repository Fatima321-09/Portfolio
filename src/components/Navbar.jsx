export default function Navbar() {
  const openAdmin = () => {
    // Logic for opening admin panel
    console.log("Admin panel opened");
  };

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        &lt;<span>developer</span>/&gt;
      </a>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="nav-admin-btn" onClick={openAdmin}>
        Admin
      </button>
    </nav>
  );
}
