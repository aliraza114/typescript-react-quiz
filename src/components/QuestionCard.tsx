import React from 'react'

type Props = {
    question: string
    answers: string[]
    callback: any
    userAnswer: string
    questionNo: number
    totalQuestion: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNo, totalQuestion }) => {
    return (
        (<div>
            <p className="number"> Question: {questionNo} / {totalQuestion} </p>
        </div>)
    )
}

export default QuestionCard
