const Number = require('../model/number');

exports.spellIt = (req, res, next) => {
  let value = req.params.number;
  try {
    let number = new Number(value);
    res.status(200).json({extenso: number.toWords()});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}