import { print } from './auxiliar.js';

const numeroSecreto = numeroAleatorio();
function numeroAleatorio() {
	return Math.floor(Math.random() * 100);
}

print(numeroSecreto);
