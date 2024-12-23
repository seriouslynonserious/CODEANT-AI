import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import codeantLogo from "./assets/codeant-ai-icon.png";
import codeantLogos from "./assets/codeant-ai-icon (2).png";
import {
  faGithub,
  faBitbucket,
  faGitlab,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import RepositoriesPage from "./RepositoriesPage";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("SAAS");

  return (
    <div className="app">
      {/* Left Half */}
      <div className="half left-half">
        <div className="box">
          <div className="header2">
            <img src={codeantLogo} alt="Logo" className="logo" />
            <h2>AI to Detect & Autofix Bad Code </h2>
          </div>
          <div className="divider"></div>
          <ul>
            <li>
              <span>30+</span>
              Language Support
            </li>
            <li>
              <span>10K+</span>
              Developers
            </li>
            <li>
              <span>100K+</span>
              Hours Saved
            </li>
          </ul>
        </div>

        <div className="box">
          <p style={{ marginLeft: "140px", color: "green" }}>
            ↑ 14%
            <br /> This week
          </p>
          <p style={{ marginRight: "140px", marginTop: "33px", fontSize: "12px" }}>
            Issues Fixed
          </p>
          <h1 style={{ marginRight: "110px", marginTop: "7px" }}>500K+</h1>
        </div>
      </div>

      {/* Right Half */}
      <div className="half right-half">
        <div>
          <div className="box1">
            <div className="header">
              <img src={codeantLogos} alt="Logo" className="logo2" />
              
            </div>
            <h1>Welcome to CodeAnt AI</h1>
            <button
              className={selectedTab === "SAAS" ? "active" : ""}
              onClick={() => setSelectedTab("SAAS")}
            >
              SAAS
            </button>
            <button
              className={selectedTab === "Self Hosted" ? "active" : ""}
              onClick={() => setSelectedTab("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>

          <div className="box2">
            {selectedTab === "SAAS" && (
              <div className="options">
                <Link to="/repositories">
                  <button>
                    <FontAwesomeIcon icon={faGithub} /> Sign in with GitHub
                  </button>
                </Link>
                <br />
                <button>
                  <FontAwesomeIcon icon={faBitbucket} /> Sign in with Bitbucket
                </button>
                <br />
                <button>
                  <FontAwesomeIcon icon={faMicrosoft} /> Sign in with Azure DevOps
                </button>
                <br />
                <button>
                  <FontAwesomeIcon icon={faGitlab} /> Sign in with GitLab
                </button>
              </div>
            )}
            {selectedTab === "Self Hosted" && (
              <div className="options">
                <button>
                  <FontAwesomeIcon icon={faGitlab} /> Self Hosted GitLab
                </button>
                <br />
                <button>
                  <FontAwesomeIcon icon={faKey} /> Sign in with SSO
                </button>
              </div>
            )}
          </div>
          <p>
            By signing up you agree to the <a href="#" style={{ color: "black" }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repositories" element={<RepositoriesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
