import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../resources/img/credly.png';
import UTrackerImg from '../resources/img/popcorn.png';
import GreenCtgImg from '../resources/img/picture.png';
import CoinTrackerImg from '../resources/img/picture_old.png';
import CavinImg from '../resources/img/picture__OLD.png';

import cryto from "../resources/img/project-icons/cryptocurrency.png";
import blockchain from "../resources/img/project-icons/blockchain.png";
import sun from "../resources/img/project-icons/sun.png";
import manga from "../resources/img/project-icons/manga.png";
import taco from "../resources/img/project-icons/taco.png";


const showcases = [
  {
    id: uuidv4(),
    name: 'Crypto Watcher',
    desc:
      '💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is using https://www.coingecko.com/en/api to get Crypto datas',
    img: cryto,
  },
  {
    id: uuidv4(),
    name: 'DeFi DApp Token Farm',
    desc:
      '👨🏽‍🌾🪙 DeFi App - reproducing a Digital bank where we can earn interest for depositing cryptocurrency',
    img: blockchain,
  },
  {
    id: uuidv4(),
    name: 'Weather Checker',
    desc:
      '🌤 🌦 Responsive web application to check to detailed weather. Built-in React + SCSS and using OpenWeatherMap API (https://openweathermap.org/)',
    img: sun,
  },
  {
    id: uuidv4(),
    name: 'Anime Library',
    desc:
      '⛩ 🏮 Simple Web application to display your favorite animes - manga.. information using the Unofficial MYANIMELIST API (https://jikan.moe/)',
    img: manga,
  },
  {
    id: uuidv4(),
    name: 'MTL Mex API',
    desc:
      '🇲🇽 🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠',
    img: taco,
  },
];

export default showcases;