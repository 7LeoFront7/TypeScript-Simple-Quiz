import { useState } from 'react'
import { questions } from '../qwiz'
import styles from './Qwiz.module.css'

const lengthQuestions = questions.length

export default function Qwiz() {
	const [step, setStep] = useState(0)
	const [answerTrue, setAnswerTrue] = useState(0)
	const [result, setReslut] = useState(false)

	if (result) {
		return (
			<div key={questions[step].id} className={styles.qwiz}>
				<div className={styles.qwiz__header}>Вы прошли квиз!</div>
				<div>Правильных ответов: {answerTrue} из {lengthQuestions}</div>
			</div>
		)
	}

	function nextQuestion(event: any) {
		if (event.target.id === questions[step].answer) {
			setAnswerTrue((prev) => prev + 1)
		}
		if (lengthQuestions === step + 1) {
			setReslut(true)
			return
		}
		setStep((prev) => prev + 1)
	}

	return (
		<>
			<div key={questions[step].id} className={styles.qwiz}>
				<div className={styles.qwiz__header}>Вопрос {questions[step].id}: {questions[step].question}</div>
				<ul>
					{questions[step].options.map((option) => (
						<li key={option} className={styles.item}>
							<button id={option} onClick={nextQuestion} className={styles.button}>{option}</button>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

