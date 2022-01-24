import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleVersion = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    }
    if (window.innerWidth > 800) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVersion);

    return function cleanListeners() {
      window.removeEventListener("resize", handleVersion);
    };
  }, []);

  useEffect(() => {
    handleVersion();
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">ANSWERLY</span>
        </div>
        {!isMobile && (
          <div className="nav-search">
            <div className="nav-search-icon">
              <BsSearch />
            </div>
            <form className="nav-search-form">
              <input
                className="nav-search-input"
                placeholder="Search for questions"
                type="textarea"
              ></input>
            </form>
          </div>
        )}

        {!isMobile && (
          <div className="nav-menu">
            <ul>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
