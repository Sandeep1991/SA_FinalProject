var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();
 
var positiveDocuments = [
  'I love tacos.',
  'Dude, that burrito was epic!',
  'Holy cow, these nachos are so good and tasty.',
  'I am drooling over the awesome bean and cheese quesadillas.'
];
var neutral = [
'This is a thing',
'What should I say?',
'Neutral can be confusing.']
 
var negativeDocuments = [
  'Gross, worst taco ever.',
  'The buritos gave me horrible diarrhea.',
  'I\'m going to puke if I eat another bad nacho.',
  'I\'d rather die than eat those nasty enchiladas.'
];
 
classifier.addDocuments(positiveDocuments, 'positive');
classifier.addDocuments(negativeDocuments, 'negative');
classifier.addDocuments(neutral, 'neutral');
 
classifier.train();
 
console.log(classifier.classify('I heard the mexican restaurant is great!')); // "positive" 
console.log(classifier.classify('I don\'t want to eat there again.')); // "negative" 
console.log(classifier.classify('The torta is epicly bad.')); // "negative" 
console.log(classifier.classify('The torta is horribly awesome.')); // "positive" 
 
console.log(classifier.getClassifications('Burritos are the meaning of life.'));
