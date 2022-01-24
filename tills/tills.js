const answersInOtherLanguages = [
  {
    lang: "fr",
    output: "Réponses",
  },
  {
    lang: "pl",
    output: "Odpowiedzi",
  },
  {
    lang: "de",
    output: "Antworten",
  },
  {
    lang: "it",
    output: "Risposte",
  },
  {
    lang: "es",
    output: "Respuestas",
  },
];

const getAnswersString = (lang) => {
  return answersInOtherLanguages.filter((el) => lang == el.lang)[0].output;
};

module.exports = { getAnswersString };
