import React, { useState, useEffect } from "react";
import Popup from "../Components/Popup";
import ProjectPopUp from "./ProjectPopUpPage";
import { Link } from "react-scroll";

import Subitt from "../assets/Subitt.png";

const ProjectPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  const [projects, setProjects] = useState([
    // { title: "" },
    { id: 1, title: "Raft" },
    { id: 2, title: "Subitt" },
    { id: 3, title: "Twitter Bots" },
    { id: 4, title: "Portfolio" },
    { id: 5, title: "PLMS" },
    { id: 6, title: "" },
  ]);

  return (
    <div id="projects" className="b-projects">
      <div className="b-projects__cardList">
        <h1 className="b-projects__cardList__title">Projects:</h1>
        <li
          className="card"
          onClick={() => {
            isPopupOpen ? handlePopupClose() : handlePopupOpen();
          }}
        >
          <div className="card__bg"></div>
          <h3 className="card__title">Subitt</h3>
          <p className="card__description">Subscribe how you want to!</p>
          <p className="card__date">3/24 - Present</p>
          <button
            className="card__button"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            See More:
          </button>
        </li>
        <li
          className="card"
          onClick={() => {
            isPopupOpen ? handlePopupClose() : handlePopupOpen();
          }}
        >
          <h3 className="card__title">RAFT</h3>
          <p className="card__description">
            I had *every* user on the app following me
          </p>
          <p className="card__date">3/24</p>
          <button
            className="card__button"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            See More:
          </button>
          <div className="card__bg"></div>
        </li>
        <li
          className="card"
          onClick={() => {
            isPopupOpen ? handlePopupClose() : handlePopupOpen();
          }}
        >
          <div className="card__bg"></div>
          <h3 className="card__title">PLMS</h3>
          <p className="card__description">
            Personal Learning Modules, or Plums for short
          </p>
          <p className="card__date">2/24</p>
          <button
            className="card__button"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            See More:
          </button>
        </li>
        <li className="card empty"></li>

        <li className="card empty"></li>
        <li
          className="card project5"
          onClick={() => {
            isPopupOpen ? handlePopupClose() : handlePopupOpen();
          }}
        >
          <div className="card__bg"></div>
          <h3 className="card__title">Twitter Bots</h3>
          <p className="card__description">
            Twitter bots from before Twitter wasn't Twitter
          </p>
          <p className="card__date">10/23</p>
          <button
            className="card__button"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            See More:
          </button>
        </li>
        <li
          className="card project4"
          onClick={() => {
            isPopupOpen ? handlePopupClose() : handlePopupOpen();
          }}
        >
          <div className="card__bg"></div>
          <h3 className="card__title">Portfolio</h3>
          <p className="card__description">
            The website you're looking at right now
          </p>
          <p className="card__date">Always a work in progress...</p>
          <button
            className="card__button"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            See More:
          </button>
        </li>

        <div className="b-projects__bottom">
          <p>Hover over us, don't miss out! </p>
          <p>0.0.0</p>
        </div>
      </div>

      <div className="b-projects__svg">
        <svg
          className="svgsquare"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="squarepath"
            d="M0 1350 V150 A100 100 0 0 1 100 0 H900 A100 100 0 0 1 1000 150 V1350 A100 100 0 0 1 900 1500 H100 A100 100 0 0 1 0 1350 Z"
            fill="none"
            stroke="transparent"
          />

          <text textAnchor="start">
            <textPath className="my-text" href="#squarepath" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="-400%"
                to="100%"
                begin="0s"
                dur="600s"
                repeatCount="indefinite"
              ></animate>
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
            </textPath>
          </text>
        </svg>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        component={ProjectPopUp}
      />
    </div>
  );
};

export default ProjectPage;

{
  /* <ul className="--1">
<li
  className="card"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">Subitt</h3>
  <p className="card__description">Subscribe how you want to!</p>
  <p className="card__date">3/24 - Present</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
<li
  className="card project2"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <h3 className="card__title">RAFT</h3>
  <p className="card__description">
    I had *every* user on the app following me
  </p>
  <p className="card__date">5/2024</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
  <div className="card__bg"></div>
</li>
</ul>
<ul className="--2">
<li
  className="card project3"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">PLMS</h3>
  <p className="card__description">
    Personal Learning Modules, or Plums for short
  </p>
  <p className="card__date">2/2024</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
<li className="card empty"></li>
<li
  className="card project4"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">Portfolio</h3>
  <p className="card__description">
    The website you're looking at right now
  </p>
  <p className="card__date">Always a work in progress...</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
</ul>
<ul className="--3">
<li className="card empty"></li>
<li
  className="card project5"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">Twitter Bots</h3>
  <p className="card__description">
    Twitter bots from before Twitter wasn't Twitter
  </p>
  <p className="card__date">10/23</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
</ul> */
}
