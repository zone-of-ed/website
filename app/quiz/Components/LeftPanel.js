export default function LeftPanel(props) {
  return <div className="quiz-left-panel">
    <div className="language-container">
      <label>Language:</label>
      <select>
        <option>Python</option>
        <option>React</option>
      </select>
    </div>
    <h3>Topics</h3>
    <ul>
      <li className="active">
        <button>Variables</button>
      </li>
      <li>
        <button>Strings</button>
      </li>
    </ul>
  </div>;
}