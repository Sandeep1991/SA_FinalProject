var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();
var fs = require('fs');
var junk = require('junk');
var myArr=[]
var allConc=fs.readdirSync('./concerns/');
console.log(allConc.filter(junk.not));
//Initialize the dictionary to empty values
var allF=allConc.filter(junk.not);
var myDict={}
allF.forEach(function(value){
myDict[value]=[];
});
console.log(myDict);

for (var key in myDict)
{
	var myArr=[];
	var path='./concerns/'+key+'/';
	var files=fs.readdirSync(path);
	var allF=files.filter(junk.not);
	allF.forEach(function(value){
    	var cnt= fs.readFileSync(path+value).toString();
		var tr=cnt.replace(/\r?\n|\r/g,'');
		myArr.push(tr);
	});
	myDict[key]=myArr;
}
for (var key in myDict)
{
classifier.addDocuments(myDict[key], key);
}
classifier.train();

//console.log(classifier.classify(myDict['gui']));
//console.log(classifier.getClassifications(myDict['gui']));
var allComp=fs.readdirSync('./test/');
var compFil=allComp.filter(junk.not);
var cnt=0;
compFil.forEach(function(value){
	cnt += 1;
	console.log('File ' + cnt.toString()+': '+value);
	console.log(classifier.getClassifications(value));
});

		
