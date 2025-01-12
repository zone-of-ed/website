export default function Explanation() {
  return <div className="explanation-container">
    <p className="correct-answer">Correct Answer: a</p>
    <h4 className="explanation-text">Explanation:</h4>
    <p className="explanation-content">Expression 1 is evaluated as 2**9, which is equal to 512. Expression 2 is
      evaluated as 8**2, which is equal to
      64. The last expression is evaluated as 2**(3**2). This is because the associativity of ** operator is from right
      to left. Hence the result of the third expression is 512.</p>
    <p className="topic-text">Topic: Precedence and Associativity</p>
  </div>;
}