//forma é um parâmetro opcional. Sendo assim, ele não
//precisa ser informado na chamada da função. Caso
//tenha sido omitido, assumirá o valor 'R'.
function areaForma(base,altura,forma = 'R'){
    let area
    switch (forma) {
        case 'R'://Retangulo
            area = base * altura
            break;
        case 'T': //Triâgulo
            area = base * altura/2
            break;
        case 'E'://Elipse
            area = (base/2)*(altura/2)*Math.PI
    }
    return area
}

console.log(`Retângulo 45x15: ${areaForma(45,15,'R')}`)
console.log(`Triângulo 13x8: ${areaForma(13,8,'T')}`)
console.log(`Elipse 45x15: ${areaForma(12,16,'E')}`)
console.log(`Quadrado 5x5: ${areaForma(5,5)}`)
console.log(`Retângulo 25x25: ${areaForma(25,25)}`)