type questionType = {
	id: number,
	question: string,
	options: string[],
	answer: string
}

export const questions: questionType[] = [
	{
		id: 1,
		question: 'Как меня зовут?',
		options: ['Максим', 'Дмитрий', 'Александр'],
		answer: 'Максим'
	},
	{
		id: 2,
		question: 'Моя основная библиотека - ...',
		options: ['Vue', 'Angular', 'React'],
		answer: 'React'
	},
	{
		id: 3,
		question: 'Какое у меня образование ?',
		options: ['Среднее', 'Средне специальное', 'Высшее'],
		answer: 'Высшее'
	},
]

