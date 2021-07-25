import css1 from "../resources/img/popcorn.png";
import css2 from "../resources/img/popcorn.png";
import react1 from "../resources/img/popcorn.png";
import img2 from "../resources/img/popcorn.png";
import img3 from "../resources/img/popcorn.png";

const portfolios = [
  {
    id: 1,
    category: "React",
    image: css1,
    link1: "https://github.com/cuitlazotlac/crypto-watcher",
    link2: "https://cryptowatcher1.herokuapp.com/",
    title: "Crypto Watcher",
    text: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is using https://www.coingecko.com/en/api to get Crypto datas",
    tech: "react, styled-components, react-bootstrap, bootstrap4, axios",
  },
  {
    id: 2,
    category: "React",
    image: img3,
    link1: "https://github.com/cuitlazotlac/WeatherChecker",
    link2: "https://weatherchecker1.herokuapp.com/",
    title: "Weather Checker",
    text: "🌤 🌦 Responsive web application to check to detailed weather. Built-in React + SCSS and using OpenWeatherMap API (https://openweathermap.org/)",
    tech: "react, scss, openweathermap-api",
  },
  {
    id: 3,
    category: "API",
    image: img3,
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    title: "MTL Mex API",
    text: "🇲🇽🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠",
    tech: "javascript, heroku, jsondb",
  },
  {
    id: 4,
    category: "React",
    image: img2,
    link1: "https://github.com/cuitlazotlac/anime-library",
    link2: "https://anime-library1.herokuapp.com/",
    title: "Anime Library",
    text: "⛩ 🏮 Simple Web application to display your favorite animes - manga.. information using the Unofficial MYANIMELIST API (https://jikan.moe/)",
    tech: "react, api, scss",
  },
  {
    id: 5,
    category: "Vue",
    image: img2,
    link1: "https://github.com/cuitlazotlac/what-movie",
    link2: "https://what-movies.herokuapp.com/",
    title: "What Movie ?",
    text: "🎥 🍿 A very simple web application displaying movies information using the OMDB API (https://www.omdbapi.com/)",
    tech: "vuejs, api, javascript",
  },
  {
    id: 6,
    category: "React",
    image: react1,
    link1: "https://github.com/cuitlazotlac/covid-tracker-dashboard",
    link2: "https://www.google.com",
    title: "Covid Tracker Dashboard",
    text: "covid dashboard using https://covidtracking.com/data api",
    tech: "react, api",
  },
  {
    id: 7,
    category: "Open Source Project",
    image: css2,
    link1: "https://github.com/climate-stuff/carbon-calculator",
    link2: "https://www.google.com",
    title: "Carb One Caculator",
    text: "🪴👨🏽‍💻👨🏻‍💻 This is the story of two guys interested in environmental topics, building a carbon footprint calculator",
    tech: "react, javascript",
  },
  {
    id: 8,
    category: "Python",
    image: css2,
    link1: "https://github.com/cuitlazotlac/pygamon",
    link2: "https://www.google.com",
    title: "PyGamon",
    text: "👾 🎮 16-bit inspired 2-D Adventure RPG Python game",
    tech: "python, pygame, tiled",
  },
];

export default portfolios;
