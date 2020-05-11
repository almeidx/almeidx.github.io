import React from 'react';
import logo from '../../assets/logo.gif';
import './style.css';

const [discord, github, steam, youtube] = [
  'https://discordapp.com/users/385132696135008259',
  'https://github.com/Almeeida',
  'https://steamcommunity.com/id/almeidaa01',
  'https://www.youtube.com/channel/UC9hiS7zuW1DdvyEmY7wsJKg',
];

/**
 * The main page
 * @returns {HTMLDivElement} The form.
 */
function Main() {
  return (
    <div className="main">
      <img src={logo} className="hvr-bounce-in" alt="Almeida" /><br /><br />
      <h1 className="hvr-buzz-out">Almeida</h1><br /><br />
      <a href={discord} className="ico hvr-grow"><i className="fab fa-discord"></i></a>
      <a href={github} className="ico hvr-grow"><i className="fab fa-github"></i></a>
      <a href={youtube} className="ico hvr-grow"><i className="fab fa-youtube"></i></a>
      <a href={steam} className="ico hvr-grow"><i className="fab fa-steam"></i></a>
    </div>
  );
}

export default Main;
