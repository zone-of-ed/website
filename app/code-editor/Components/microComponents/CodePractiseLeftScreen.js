export default function CodePractiseLeftScreen() {
  return <div className="code-practise-left">
    <div className="code-practise-left-header">
      <button className="background-white">Description</button>
      <button>Solution</button>
      <div>
        <button className="btn "> &lt; Prev</button>
        <button className="btn"> Next &gt;</button>
      </div>
    </div>
    <div className="code-practise-left-content">
      <div className="code-practise-left-content-question">
        <h4>1.Two Sum</h4>
        <div className="question"
             dangerouslySetInnerHTML={{ __html: 'Given an array of integers nums and a integer target, return indices of the two numbers such they add up to target.' }} />
      </div>
      <div className="code-practise-left-content-example">
        <h5>Example 1:</h5>
        <div className="example" dangerouslySetInnerHTML={{
          __html: 'Input:  nums = [2, 7, 11, 15]\nOutput:  [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return[0,1]',
        }} />
      </div>
    </div>
  </div>;
}