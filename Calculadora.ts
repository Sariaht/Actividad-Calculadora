function suma() {
    let num1Input = document.getElementById('num1') as HTMLInputElement;
    let num2Input = document.getElementById('num2') as HTMLInputElement;
    let n1 = parseInt(num1Input.value);
    let n2 = parseInt(num2Input.value);
    let resultado = document.getElementById('resultado') as HTMLInputElement;
    resultado.value = (n1 + n2).toString();

}

function resta() {
    let num1Input = document.getElementById('num1') as HTMLInputElement;
    let num2Input = document.getElementById('num2') as HTMLInputElement;
    let n1 = parseInt(num1Input.value);
    let n2 = parseInt(num2Input.value);
    let resultado = document.getElementById('resultado') as HTMLInputElement;
    resultado.value = (n1 - n2).toString();

}
function multiplica() {
    let num1Input = document.getElementById('num1') as HTMLInputElement;
    let num2Input = document.getElementById('num2') as HTMLInputElement;
    let n1 = parseInt(num1Input.value);
    let n2 = parseInt(num2Input.value);
    let resultado = document.getElementById('resultado') as HTMLInputElement;
    resultado.value = (n1 * n2).toString();

}
function divide() {
    let num1Input = document.getElementById('num1') as HTMLInputElement;
    let num2Input = document.getElementById('num2') as HTMLInputElement;
    let n1 = parseInt(num1Input.value);
    let n2 = parseInt(num2Input.value);
    let resultado = document.getElementById('resultado') as HTMLInputElement;
    resultado.value = (n1 / n2).toString();

}

