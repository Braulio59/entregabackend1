import inquirer from "inquirer";
import { read, write } from "./readWrite.js";

const questions = [
    {
        type: 'input',
        name: 'motivo_gasto',
        message: 'Cual fue tu gasto?',
    },

    {
        type: 'number',
        name: 'cantidad_gasto',
        message: 'Cuanto gastaste?',
    }
];  

inquirer.prompt(questions).then((response) => {
    const gastos = read('gastos.json')
    gastos.push(response);
    write('gastos.json', gastos)
}).catch((error) => console.error(error));

