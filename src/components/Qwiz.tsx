import { useState } from 'react'
import { questions } from '../qwiz'
import Option from './Option'
import styles from './Qwiz.module.css'

const lengthQuestions: number = questions.length

export default function Qwiz() {
	const [step, setStep] = useState(0)
	const [answerTrue, setAnswerTrue] = useState(0)
	const [result, setReslut] = useState(false)

	if (result) {
		return (
			<div key={questions[step].id} className={styles.qwiz}>
				<div className={styles.qwiz__header}>Вы прошли квиз!</div>
				<div className={styles.qwiz__info}>Правильных ответов: {answerTrue} из {lengthQuestions}</div>
				<button onClick={restartQwiz} className={styles.button}>Начать заново</button>
			</div>
		)
	}

	function restartQwiz() {
		setStep(0)
		setAnswerTrue(0)
		setReslut(false)
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
				<div className={styles.qwiz__header}>Вопрос {questions[step].id}</div>
				<div className={styles.qwiz__info}>{questions[step].question}</div>
				<ul>
					{questions[step].options.map((option) => (
						<Option key={option} nextQuestion={nextQuestion} option={option} />
					))}
				</ul>
			</div>
		</>
	)
}

