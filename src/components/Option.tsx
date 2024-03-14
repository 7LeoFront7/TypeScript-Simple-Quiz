import styles from './Option.module.css'

export default function Option({ option, nextQuestion }: any) {
	return (
		<li className={styles.item}>
			<button id={option} onClick={nextQuestion} className={styles.button}>{option}</button>
		</li>
	)
}