import React from 'react'
export default function left({onTopClick, showLeft}) {

    return (
        <div className="left">
          <div className="top" onClick={onTopClick}>{showLeft ? "Workshop ❌" : "Workshop"}</div>
          <div className="bottom">
            <ul>
              <li>I only knew Git was used for saving code versions.</li>
              <li>I used GitHub just to upload my projects.</li>
              <li>I wasn’t sure how teams worked on the same project together.</li>
              <li>Commands like <code>git add</code> and <code>git commit</code> were confusing.</li>
            </ul>
          </div>
        </div>
    )
}