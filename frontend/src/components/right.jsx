
export default function right({onTopClick, showRight}) {

    return (
        <div className="right">
          <div className="top" onClick={onTopClick}>{showRight ? "After Workshop ❌" : "After Workshop"}</div>
          <div className="bottom">
            <ul>
              <li>Understood how Git actually tracks versions and changes.</li>
              <li>Learned about branches, merging, and pull requests.</li>
              <li>Now I can collaborate with others without conflicts.</li>
              <li>Confident in using Git commands and connecting projects to GitHub.</li>
            </ul>
          </div>
        </div>
    )
}