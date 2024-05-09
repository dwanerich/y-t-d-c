import './nav.css';

const Navbar = () => {
  return (
    <div className="div">
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          {/* <li>
            <a href="/press">press</a>
          </li> */}
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
