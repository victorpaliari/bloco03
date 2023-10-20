const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const arrayCombinado = [...array01, ...array02];
// spread operador = acessa arrays sem a pd tenha que reescrever os valores da array
//console.log(arrayCombinado);

function somarNumeros(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(somarNumeros());
console.log(somarNumeros(10, 20));
console.log(somarNumeros(10, 20, 30));