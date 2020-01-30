const enUS = require('./lang/en-US.json');
const esES = require('./lang/es-ES.json');
const ptBR = require('./lang/pt-BR.json');

module.exports.translateText = (key, lang) => {
  if (lang === "en-US") { return enUS[key]; }
  else if (lang === "es-ES") { return esES[key]; }
  else if (lang === "pt-BR") { return ptBR[key]; }
  else { return '?'; }
}