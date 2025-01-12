import QuizSelectOption from './QuizSelectOption';
import Explanation from '@/app/quiz/Components/Explanation';

export default function Quiz(props) {
  return <div className="quiz-panel">
    <h2>1.Question</h2>
    <div className="question"
         dangerouslySetInnerHTML={{
           __html: 'What are the values of the following Python expressions? 2**(3**2) (2**3)**2 2**3**2?',
         }} />
    <ul className="quiz-options">
      <QuizSelectOption />
      <QuizSelectOption />
      <QuizSelectOption />
      <QuizSelectOption />
    </ul>
    <Explanation />
  </div>;
}