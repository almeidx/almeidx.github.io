import React from 'react';

import logo from '../assets/logo.png';
import './Main.css';

const [discord, github, steam, youtube, twitch] = [
  'https://discordapp.com/users/385132696135008259',
  'https://github.com/almeidx',
  'https://steamcommunity.com/id/almeidx_',
  'https://www.youtube.com/channel/UC9hiS7zuW1DdvyEmY7wsJKg',
  'https://www.twitch.tv/almeidx_',
];

/**
 * The main page
 * @returns {HTMLDivElement} The form.
 */
function Main() {
  return (
    <div className="main">
      <img src={logo} className="hvr-bounce-in" alt="Almeida" /><br/><br/>
      <h1 className="hvr-buzz-out">Almeida</h1><br/><br/>
      <a href={youtube} className="ico hvr-grow"><i className="fab fa-youtube"></i></a>
      <a href={twitch} className="ico hvr-grow"><i className="fab fa-twitch"></i></a>
      <a href={github} className="ico hvr-grow"><i className="fab fa-github"></i></a>
      <a href={discord} className="ico hvr-grow"><i className="fab fa-discord"></i></a>
      <a href={steam} className="ico hvr-grow"><i className="fab fa-steam"></i></a>
    </div>
  );
}

export default Main;
