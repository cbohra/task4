import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <nav className="bar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li className="loginbotton">
            <a>Login</a>
          </li>
        </ul>
      </nav>
      <div className="maincontainer">
        <aside className="sidebar">
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Work experience</a>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <h1>Hello!!!</h1>
          <p>About me: Chirag Bohra. </p>
          <p>Education: </p>
          <p>Unoversity: </p>
          <p>DOB: </p>
          <p>Current Location: </p>
          <p>Projects: </p>
          <p>Expriences: </p>
          <p>More About........ </p>
          <img
            src="https://ultmeche.com/wp-content/uploads/2023/12/LinkedIn-Banner-1.png"
            alt="LinkedIn Banner"
          />
        </main>
      </div>
    </div>
  );
};

export default App;
