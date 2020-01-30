const Number = require('../model/number');

exports.spellIt = (req, res, next) => {
  let value = req.params.number;
  let lang = req.params.hasOwnProperty('language') ?req.params.language : 'pt-BR';
  try {
    let number = new Number(value);
    res.status(200).json({extenso: number.toWords(lang)});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}