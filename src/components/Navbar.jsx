import { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  // Theme toggling
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Dropdown Toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Fetch results from the backend
      axios
        .get(`https://backend-eq2w.onrender.com/Movie?search=${query}`)
        .then((response) => {
          setSearchResults(response.data); // Update the search results state
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]); // Clear search results if the query is empty
    }
  };

  const navItems = (
    <>
      <li>
        <Link to="/" onClick={() => setIsDropdownOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/Movie" onClick={() => setIsDropdownOpen(false)}>
          Movies
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setIsDropdownOpen(false)}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setIsDropdownOpen(false)}>
          About
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`container mx-auto md:px-20 px-4 dark:text-white fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          sticky
            ? "glass-dark shadow-2xl border-b border-secondary-500/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Dropdown for Mobile */}
            <div className="lg:hidden">
              <button
                className="btn btn-ghost"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="menu menu-compact absolute top-12 left-0 w-52 shadow bg-base-100 rounded-box z-50">
                  {navItems}
                </ul>
              )}
            </div>
            {/* Logo */}
            <Link
              className="text-2xl md:text-3xl font-bold cursor-pointer font-shadow bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-glow"
              to="/"
            >
              FilmFlixNow
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              <li className="hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-primary-500/20 rounded-lg transition-all duration-300">
                <Link to="/" className="font-medium text-white/90 hover:text-white">Home</Link>
              </li>
              <li className="hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-primary-500/20 rounded-lg transition-all duration-300">
                <Link to="/Movie" className="font-medium text-white/90 hover:text-white">Movies</Link>
              </li>
              <li className="hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-primary-500/20 rounded-lg transition-all duration-300">
                <Link to="/contact" className="font-medium text-white/90 hover:text-white">Contact</Link>
              </li>
              <li className="hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-primary-500/20 rounded-lg transition-all duration-300">
                <Link to="/about" className="font-medium text-white/90 hover:text-white">About</Link>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end space-x-3">
            {/* Search Bar */}
            <div className="hidden md:block lg:block relative">
              <label className="glass-dark px-4 py-2 rounded-xl flex items-center gap-3 border border-white/10 hover:border-secondary-400/50 transition-all duration-300 group">
                <input
                  type="text"
                  className="grow outline-none bg-transparent text-white placeholder-white/60 font-medium"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-5 text-white/70 group-hover:text-secondary-400 transition-colors duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              {searchResults.length > 0 && (
                <ul className="absolute z-10 glass-dark border border-white/10 shadow-2xl rounded-xl mt-2 w-full max-h-60 overflow-y-auto animate-fadeIn">
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      className="px-4 py-3 hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-primary-500/20 transition-all duration-300 first:rounded-t-xl last:rounded-b-xl"
                    >
                      <Link to={`/Movie/${result.id}`} className="text-white/90 hover:text-white font-medium">
                        {result.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate glass-dark p-3 rounded-xl border border-white/10 hover:border-secondary-400/50 transition-all duration-300 cursor-pointer group">
              <input
                type="checkbox"
                className="theme-controller hidden"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              {/* Sun Icon */}
              <svg
                className="swap-off fill-current w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* Moon Icon */}
              <svg
                className="swap-on fill-current w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* Authentication */}
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  className="glass-dark px-6 py-3 rounded-xl border border-white/10 hover:border-secondary-400/50 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-glow transform hover:scale-105"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
