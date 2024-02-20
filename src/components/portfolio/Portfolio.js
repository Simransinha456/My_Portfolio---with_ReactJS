import "./portfolio.css";

import IMG1 from "../../assests/MERN Recipe-Hub.png";
import IMG2 from "../../assests/Todo-list.png";
import IMG3 from "../../assests/Recipe-catalog.png";
import IMG4 from "../../assests/Weather-App.png";
import IMG5 from "../../assests/Starbucks.png";
import IMG6 from "../../assests/Digital clock.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "MERN Recipe-Hub with React.js, Node.js and MongoDB",
      img: IMG1,
      description:
      "This is a full-stack application where Users can register and log in securely using authentication.It ensures a dynamic and responsive user interface, allowing users to view, add, edit, and delete recipes.",
      technologies: "Html | CSS | Javascript | React Js | Node Js | MongoDB",
      link: "https://mern-recipe-frontend-pearl.vercel.app/",
      github: "https://github.com/Simransinha456/MERN_Recipe_Frontend",
    },
    {
      id: 2,
      title: "Weather-Application",
      img: IMG4,
      description:
        "Implemented a simple Weather Application that displays the current weather based on geolocation or search. It pulls data from the OpenWeatherMap API to allow users to search for and also view the forecast in cities worldwide.",
      technologies: "HTML | CSS | Javascript | React Js | Material UI",
      link: "https://weather-app-six-roan.vercel.app/",
      github: "https://github.com/Simransinha456/Weather_app",
    },
    {
      id: 3,
      title: "Todo-List with Tailwind CSS",
      img: IMG2,
      description: "This Todo List app is a simple and intuitive task management tool built using React and styled with the Tailwind CSS framework. Its purpose is to help users organize their tasks by providing a user-friendly interface for adding, removing, and viewing todo items.",
      technologies: "HTML | CSS | Javascript | React Js | Tailwind CSS",
      link: "https://todo-react-and-tailwind-css.vercel.app/",
      github: "https://github.com/Simransinha456/Todo_React_and_TailwindCSS",
    },
    {
      id: 4,
      title: "Recipe-Catalog",
      img: IMG3,
      description:
        "I have developed a Recipe application using React JS that allows users to search for recipes by their names. When users initiate a search, the application fetches a range of diverse recipes from the themealdb.com API.",
      technologies: "Html | CSS | JavaScript | React JS",
      link: "https://recipe-api-topaz.vercel.app/",
      github: "https://github.com/Simransinha456/Recipe_API",
    },
    {
      id: 5,
      title: "Starbucks Landing Page",
      img: IMG5,
      description:
        "Whatever your mood, Starbucks is always there to enjoy! Unleash Your Potential: Where Passion Meets Purpose Every Step of the Way!",
      technologies: "Html | CSS | Javasript",
      link: "https://simransinha456.github.io/-Starbucks/",
      github: "https://github.com/Simransinha456/-Starbucks",
    },
    {
      id: 6,
      title: "Digital-Clock",
      img: IMG6,
      description:
        "Created a digital clock in this JavaScript mini-project that will show the time in hours, minutes, and seconds. The time is shown on this clock in local time zone. Created using HTML and CSS to give the design , and JavaScript Date Object used to update the time.",
      technologies: "Html | Scss | Javascript",
      link: "https://digital-clock-nu-ebon.vercel.app/",
      github: "https://github.com/Simransinha456/Digital_Clock",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
