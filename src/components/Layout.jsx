import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/roman", label: "Task 1: Roman" },
    { to: "/age", label: "Task 2: Age" },
    { to: "/birthday", label: "Task 3: Birthday" },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/roman" className="header-title-link">
            <h1 className="header-title">Diagonal Internship Tasks</h1>
          </Link>
          <nav className="header-nav">
            {navLinks.map(({ to, label }) => {
              const isActive =
                pathname === to || (to === "/roman" && pathname === "/");
              return (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="main">{children}</main>
    </div>
  );
}
