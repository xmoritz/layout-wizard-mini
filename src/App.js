import React from 'react';
import { useState } from 'react';
import wizardLogo from './wizard.png';
import './App.scss';
import './components.scss';

// import {LayoutCard} from './components.js'
import {ColorMixes} from './components.js'
import {Layouts} from './components.js'
import {Menu} from './components.js'
import {Taglines} from './components.js'
import {Result} from './components.js'

function App() {
  const [layoutStatus, setLayoutStatus] = useState("no layout chosen")
  const [colorsStatus, setColorsStatus] = useState("no colors chosen")
  const [taglineStatus, setTaglineStatus] = useState("no tagline chosen")
  const [menuStatus, setMenuStatus] = useState('layout')

  return (
    <div className="App">
      <header className="App-header">
        <img src={wizardLogo} className="App-logo" alt="logo" />
        <div
          className="App-title"
        >
          LAYOUT WIZARD MINI
        </div>
      </header>
      <div className="App-status">CURRENT STATUS - Layout: <span className="App-status-layout">{layoutStatus}</span> Colors: <span className="App-status-colors">{colorsStatus}</span> Tagline: <span className="App-status-tagline">{taglineStatus}</span></div>
      <main className="App-main">
       <div className="App-container">
          <div className="App-menu">
            MENU:<br /><br /><br />
            <Menu setMenuStatus={setMenuStatus} />
          </div>
          <div className="App-options">OPTIONS:<br /><br />
            { menuStatus === 'layout' ? <Layouts setLayoutStatus={setLayoutStatus} />
            : menuStatus === 'colors' ? <ColorMixes setColorsStatus={setColorsStatus} />
            : menuStatus === 'tagline' ? <Taglines setTaglineStatus={setTaglineStatus} />
            : <Layouts setLayoutStatus={setLayoutStatus} />}
            {/* <Layouts setLayoutStatus={setLayoutStatus} />
            <br /><br />
            <ColorMixes setColorsStatus={setColorsStatus} />
            <br /><br />
            <Taglines setTaglineStatus={setTaglineStatus} /> */}
          </div>
          <div className="App-result">RESULT:<br /><br /><br />
            <Result layoutVariation={layoutStatus} colorsVariation={colorsStatus} taglineVariation={taglineStatus} />
          </div>
       </div>
      </main>
    </div>
  );
}

export default App;
