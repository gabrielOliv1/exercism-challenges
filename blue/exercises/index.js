const prompt = require('prompt-sync')();

const idade = {
    anos: Number,
    meses: Number,
    dias: Number
}

const anosDeVida = +prompt('Informe quantos anos você tem: ', idade.anos);
const mesesDeVida = +prompt('Meses de vida: ', idade.meses);
const diasDeVida = +prompt('Dias de vida:', idade.dias)

const diasVividos = (anosDeVida * 365) + (mesesDeVida * 30) + diasDeVida;


console.log(`Com ${anosDeVida} anos, ${mesesDeVida} meses e ${diasDeVida} dias, você tem
o total de ${diasVividos} dias vividos!`);