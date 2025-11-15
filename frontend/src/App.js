import { useState } from 'react';
import './App.css';
import Left from './components/left.jsx';
import Right from './components/right.jsx'

function App() {
  const[showLeft, setShowLeft] = useState(false);
  const[showRight, setShowRight] = useState(false);
  const[theme, setTheme] = useState(false);

  document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");

  return (
    <>
    <div className="themeBox" onClick={() => setTheme(!theme)}>Theme
      <div className="theme"></div>
    </div>
    {showLeft && (
      <div className="special">
        <Left showLeft={showLeft} onTopClick={()=>setShowLeft(!showLeft)}/>
      </div>
    )}
    {showRight && (
      <div className="special">
        <Right showRight={showRight} onTopClick={()=>setShowRight(!showRight)} />
      </div>
    )}
      <div className="intro">
        <div className="heading">Hello there!</div>
        <p>
          I have worked on Git and GitHub earlier for my personal projects,
          and since now we are going to be working as a team for EDC E-Summit
          'Renaissance-26', it's time we upskill ourselves. For that, we recently
          attended a workshop by our Tech Lead — Kuldeep Sir. <br />
          Here is my experience on that 😊
        </p>
      </div>

      <div className="box">
        <Left onTopClick={()=>setShowLeft(!showLeft)} />
        <Right onTopClick={()=>setShowRight(!showRight)} />
      </div>
    </>
  );
}

export default App;
