import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {

  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState()


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
      <QuestionCard/>
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
