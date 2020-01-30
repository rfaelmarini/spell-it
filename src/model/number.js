const utils = require('../utils');

module.exports = class Number {
  constructor(value) {
    if (isValidNumber(value)) {
      this.value = value;
    } else {
      throw new Error("Inform a integer number between -99999 and 99999");
    }
  }

  toWords(lang) {
    if (['pt-BR', 'en-US', 'es-ES'].indexOf(lang) == -1) {
      throw new Error("Only support 'pt-BR', 'en-US' or 'es-ES' languages");
    }

    const unity = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const hundread = [
      'cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos',
      'oitocentos', 'novecentos'
    ];
    const thousand = ['mil'];

    let words = '';
    let isNegative = false;
    let number = this.value.toString();
    if (number.charAt(0) == '-') {
      number = number.slice(1);
      isNegative = true;
    }

    const isThousand = (number.length >= 4 && number.length <= 5 && (number != '00000' || number != '0000'));
    if (isThousand) {
      if (number.length == 5) {
        words += getTen(number.substring(0,2), lang);
        if (number.charAt(0) == 1 || number.charAt(1) == 0) {
          number = number.slice(1);
        }
        number = number.slice(1);
      }

      if (number.length == 4) {
        words += ' ' + utils.translateText('e', lang) + ' ' + utils.translateText(unity[number.charAt(0)], lang);
        number = number.slice(1);
      }

      words += ' ' + utils.translateText(thousand[0], lang);
    }

    const isHundread = (number.length == 3 && (number != '000'));
    if (isHundread) {
      if (words.length) {
        words += ' ' + utils.translateText('e', lang) + ' ';
      }

      if ((number/100) == 1) {
        words += utils.translateText(hundread[0], lang);
      } else {
        words += utils.translateText(hundread[number.charAt(0)], lang);
      }

      number = number.slice(1);
    }

    const isTen = (number.length == 2  && (number != '00'));
    if (isTen) {
      if (words.length) {
        words += ' ' + utils.translateText('e', lang) + ' ';
      }

      words += getTen(number.substring(0,2), lang);
      if (number.charAt(0) == 1 || number.charAt(1) == 0) {
        number = number.slice(1);
      }
      number = number.slice(1);
    }

    const isUnity = (number.length == 1);
    if (isUnity) {
      if (words.length) {
        words += ' ' + utils.translateText('e', lang) + ' ';
      }

      words += utils.translateText(unity[number.charAt(0)], lang);
      number = number.slice(1);
    }

    if (!words.length) {
      words = utils.translateText(unity[0], lang);
    } else if (isNegative) {
      words = utils.translateText('menos', lang) + ' ' + words;
    }

    return words;
  }
}

function isValidNumber(value) {
  const regex = new RegExp('^[0-9]{1,5}$|^-[0-9]{1,6}|^[0]+$|^-[0]+$', 'mg');
  return regex.test(value);
}

function getTen(value, lang) {
  if (value.length != 2) {
    return false;
  }

  const ten = [
    'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove',
    'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'
  ];
  let words = '';
  if ((value/10) == 1) {
    words += utils.translateText(ten[0], lang);
  } else if ((value/10) < 2) {
    words += utils.translateText(ten[value.charAt(1)], lang);
  } else {
    words += utils.translateText(ten[value.charAt(0) -2 + 10], lang);
  }

  return words;
}