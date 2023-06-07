import { saveGastos, mostrarGastoTotal } from './methods.js';
import inquirer from 'inquirer';
import { promptGastos } from './promptSpent.js';

const run = async () => {
	const Gasto = await promptGastos();

	const nuevoGasto = [ ... await mostrarGastoTotal('./gastos.json'), Gasto];

	const promptCorriendo = true;
	
	while(promptCorriendo){
        const opciones = await inquirer.prompt([
            {
				type: 'list',
				name: 'opciones',
				message: 'Elige una opcion',
				choices: ['Agregar gasto', 'Ver gastos','Salir'],
			}
          ])
    
        switch(opciones.choices){
            case 'Agregar gasto':
                await saveGastos('./gastos.json', nuevoGasto);
                break
            case 'Ver gastos':
                await mostrarGastoTotal('./gastos.json')
                break
            case 'Salir':
                process.exit();
			default:
				break;
        }
    }
};



run();
