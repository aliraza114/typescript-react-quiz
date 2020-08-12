import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTION = 10

const App = () => {

  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  const apiCall = async () => {

  }

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={apiCall}> Start </button>
      <p className="score"> Score: </p>
      <p>Loading Questions ... </p>
      <QuestionCard
        questionNo = {number + 1}
        totalQuestion = {TOTAL_QUESTION}
        question = {question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswers}
      />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
