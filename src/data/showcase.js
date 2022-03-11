import { v4 as uuidv4 } from "uuid";

import dapp_farmer from "../resources/img/project-icons/dapp_farmer.svg";
import crypto_watcher from "../resources/img/project-icons/crypto_watcher.svg";
import sun from "../resources/img/project-icons/weather_tracker.svg";
import manga from "../resources/img/project-icons/anime_library.svg";
import taco from "../resources/img/project-icons/mex_mtl.svg";

const showcases = [
  {
    id: uuidv4(),
    name: "Crypto Watcher",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is using https://www.coingecko.com/en/api to get Crypto datas",
    img: crypto_watcher,
  },
  {
    id: uuidv4(),
    name: "DeFi DApp Token Farm",
    desc: "👨🏽‍🌾🪙 DeFi App - quick smart contract project, reproducing a Digital bank where we can earn interest for depositing cryptocurrency",
    img: dapp_farmer,
  },
  {
    id: uuidv4(),
    name: "Weather Checker",
    desc: "🌤 🌦 Responsive web application to check to detailed weather. Built-in React + SCSS and using OpenWeatherMap API (https://openweathermap.org/)",
    img: sun,
  },
  {
    id: uuidv4(),
    name: "Anime Library",
    desc: "⛩ 🏮 Simple Web application to display your favorite animes - manga.. information using the Unofficial MYANIMELIST API (https://jikan.moe/)",
    img: manga,
  },
  {
    id: uuidv4(),
    name: "MTL Mex API",
    desc: "🇲🇽 🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠",
    img: taco,
  },
];

export default showcases;
