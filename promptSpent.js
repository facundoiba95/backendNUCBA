import inquirer from 'inquirer';

const choices = [
	{
		type: 'list',
		name: 'opciones',
		message: 'Elige una opcion',
		choices: ['Agregar gasto', 'Ver gastos','Salir'],
	},
];

const questions = [
	{
		type: 'input',
		name: 'gasto',
		message: 'Ingresar nombre del gasto',
	},
	{
		type: 'input',
		name: 'monto',
		message: 'Ingresar monto del gasto',
	},
];

export const promptGastos = async () => {
	return await inquirer.prompt(choices).then(async (answers) => {
		if (answers.opciones === 'Agregar gasto') {
			return await inquirer.prompt(questions)
			.then(answers => answers);
		} else if (answers.opciones === 'Salir') return process.exit();
	});
};
