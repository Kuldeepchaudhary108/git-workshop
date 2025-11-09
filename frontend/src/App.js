import './App.css';

function App() {
  return (
    <>
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
        <div className="left">
          <div className="top">Before Workshop</div>
          <div className="bottom">
            <ul>
              <li>I only knew Git was used for saving code versions.</li>
              <li>I used GitHub just to upload my projects.</li>
              <li>I wasn’t sure how teams worked on the same project together.</li>
              <li>Commands like <code>git add</code> and <code>git commit</code> were confusing.</li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="top">After Workshop</div>
          <div className="bottom">
            <ul>
              <li>Understood how Git actually tracks versions and changes.</li>
              <li>Learned about branches, merging, and pull requests.</li>
              <li>Now I can collaborate with others without conflicts.</li>
              <li>Confident in using Git commands and connecting projects to GitHub.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
