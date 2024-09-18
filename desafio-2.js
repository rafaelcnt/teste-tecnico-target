let str = "Aqui vai uma frase qualquer digitada para testar o código."; // definir a string a ser verificada

let occurrences = countA(str);

if (occurrences > 0){
    console.log(`A letra "A" aparece, de forma maiúscula ou minúscula ${occurrences} vezes na frase digitada.`); 
    // importante notar que o número de As que será apresentado não leva em consideração as letras A acentuadas como Á, Ã e Â, já que não foi pedido no enunciado
} else {
    console.log(`A letra "A" não aparece em nenhuma forma na frase digitada.`);
}

function countA(string) {
    let stringLowerCase = string.toLowerCase();
    let occurrences = 0;
    
    for (let i = 0; i < stringLowerCase.length; i++) {
        if (stringLowerCase[i] === 'a') {
            occurrences++;
        }
    }

    return occurrences
}
