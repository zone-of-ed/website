export default function LeftPanel(props) {
  return <aside className="interview-questions-left-panel">
    <h3>Topics</h3>
    <ul>
      <li className="active">
        <button><img src="/images/python.png" /> <span>Python</span></button>
      </li>
      <li>
        <button><img src="/images/react.png" /> <span>React</span></button>
      </li>
    </ul>
  </aside>;
}