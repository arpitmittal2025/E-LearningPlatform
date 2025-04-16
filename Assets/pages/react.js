import React, { useEffect } from "react";
import "./about.css";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const animationElements = document.querySelectorAll(".hiddenright, .hiddenleft");
    animationElements.forEach((el) => observer.observe(el));

    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        el.style.backgroundColor = "white";
      });
      el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = "";
      });
    });

    const logUser = localStorage.getItem("loggedInUser");
    const courses = document.getElementById("courses");
    const loginContainer = document.getElementById("logincontainer");
    const logoutBtn = document.getElementById("logout");

    if (logUser) {
      if (courses) courses.style.display = "block";
      if (loginContainer) loginContainer.classList.add("notvisible");
      if (logoutBtn) logoutBtn.classList.remove("notvisible");
    } else {
      if (courses) courses.style.display = "none";
      if (logoutBtn) logoutBtn.classList.add("notvisible");
    }

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
      });
    }
  }, []);

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <svg
              id="menuIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0,0,256,256"
            >
              <g
                fill="#fffefe"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z" />
                </g>
              </g>
            </svg>
            <span className="linktext">MENU</span>
          </li>
          <li id="courses" className="nav-item">
            <a href="./courses.html" className="navlink">
              <img src="../img/Courses.png" alt="Courses" />
              <span className="linktext">Courses</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="./contact.html" className="navlink">
              <img src="../img/Contact.png" alt="Contact" />
              <span className="linktext">Contact us</span>
            </a>
          </li>
          <li className="nav-item" id="logincontainer">
            <a href="./form.html" className="navlink">
              <img src="../svg/profilePicMale.svg" id="login" alt="Login" />
              <span className="linktext">Login/Signup</span>
            </a>
          </li>
          <li className="nav-item hidden" id="logout">
            <a className="navlink">
              <img src="../img/logout.png" alt="Logout" />
              <span className="linktext">LogOut</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="main">
        <div id="heading" className="hiddenleft">
          <h1>About<br />EdVernture.</h1>
        </div>

        <div id="us" className="hiddenright">
          <div className="question">
            <img src="../svg/questions.svg" alt="Who are we?" />
          </div>
          <section className="textcontainer">
            <p className="who"><b>Who are we?</b></p>
            <p className="weare">
              Edvernture is a leading online platform that offers premium
              courses across various domains. Our mission is to make quality
              education accessible to everyone and empower individuals to
              achieve their career goals.
            </p>
          </section>
        </div>

        <div id="mission" className="hiddenleft">
          <div className="textContainer">
            <p className="missionHeading">Our Mission</p>
            <p className="missionTxt">
              Our mission is to bridge the skill gap by providing world-class
              educational content and empowering learners with practical skills
              to succeed in the real world.
            </p>
          </div>
          <img src="../svg/mission.svg" alt="Our Mission" />
        </div>

        <div className="hiddenright" id="team">
          <div className="team-container">
            <div className="team-member">
              <h3>Ayush Saraf</h3>
              <p>Founder</p>
            </div>
            <div className="team-member">
              <h3>Shlok Ghadekar</h3>
              <p>CEO</p>
            </div>
          </div>
          <h2 className="team">Our Team</h2>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 EdVernture. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
