import React, { useState } from "react";
import "./RepositoriesPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faCloud,
  faHome,
  faCog,
  faSignOutAlt,
  faSync,
  faPhone,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import codeantLogos from "./assets/codeant-ai-icon (2).png";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  // State to manage the toggle of the sidebar
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="logo-menu">
          <img src={codeantLogos} alt="CodeAnt Logo" className="logo1" />
          <div className="hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

        <div className={`toggleup ${isToggled ? "visible" : "hidden"}`}>
          <form className="select-form">
            <select name="randomName" id="randomNameSelect" aria-label="User Selector">
              <option value="option1">John Doe</option>
              <option value="option2">Jane Smith</option>
              <option value="option3">Michael Brown</option>
              <option value="option4">Emily Davis</option>
            </select>
          </form>
          <ul>
            <li className="active">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>Repositories</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" />
              <span>AI Code Review</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCloud} className="icon" />
              <span>Cloud Security</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} className="icon" />
              <span>How to Use</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCog} className="icon" />
              <span>Settings</span>
            </li>
          </ul>
          <div className="support-logout">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              Support
            </li>
            <Link to="/" aria-label="Logout">
              <li style={{ color: "black" }}>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                Logout
              </li>
            </Link>
          </ul>
        </div>
        </div>
       
      </div>
    </nav>
  );
};

const Header = ({ refreshHandler }) => (
  <header className="header">
    <h2>Repositories<span><br/>33 total repositories</span> </h2>
    
    <div className="header-buttons">
      <button className="refresh-repositories" onClick={refreshHandler} aria-label="Refresh Repositories">
        <FontAwesomeIcon icon={faSync} className="icon" /> Refresh All
      </button>
      <button className="add-repository" aria-label="Add Repository">+ Add Repository</button>
    </div>
  </header>
);

const RepositoriesPage = () => {

  const refreshRepositories = () => {
    console.log("Repositories refreshed!");
  };

  const repositories = [
    { name: "design-system", type: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
    { name: "codeant-ci-app", type: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
    { name: "analytics-dashboard", type: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
    { name: "mobile-app", type: "Private", language: "Swift", size: "3096 KB", updated: "3 days ago" },
    { name: "e-commerce-platform", type: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
    { name: "blog-website", type: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
    { name: "social-network", type: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
  ];

  return (
    <>
    <Sidebar />
    <div className="repositories-page">
      
      <main className="main-content">
        <Header refreshHandler={refreshRepositories} />
        <div className="search-bar-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            className=" search-bar"
            type="text"
            placeholder="Search Repositories"
            aria-label="Search Repositories"
          />
        </div>
        <ul className="repository-list">
          {repositories.map((repo, index) => (
            <li key={index} className="repository-item">
              <h3>
                {repo.name} <span className="repo-type">{repo.type}</span>
              </h3>
              <p>
                {repo.language} · {repo.size} · Updated {repo.updated}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
    </>
  );
};

export default RepositoriesPage;
