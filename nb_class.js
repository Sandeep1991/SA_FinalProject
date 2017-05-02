var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();
var fs = require('fs');
var junk = require('junk');
var myArr=[]
var allConc=fs.readdirSync('./concerns/');
//console.log(allConc.filter(junk.not));
//Initialize the dictionary to empty values
var allF=allConc.filter(junk.not);
var myDict={}
allF.forEach(function(value){
myDict[value]=[];
});
//console.log(myDict);

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
var merge = require('merge'), original, cloned;

var dict_nb={};
var obj=classifier.getClassifications(myDict['gui']);
var th_val=-1;
obj.forEach(function(value)
{
 	dict_nb[value['label']]=value['value'];
 	if(th_val<value['value'])
 		th_val=value['value'];
 });
//console.log(dict_nb);
var allComp=fs.readdirSync('./test/');
var compFil=allComp.filter(junk.not);
var cnt=0;
compFil.forEach(function(value){
	cnt += 1;
	console.log('File ' + cnt.toString()+': '+value);
	console.log(classifier.getClassifications(value));
});
//Algorithm
var SPFSmells={};
//var concernCounts=0;
compFil.forEach(function(cFile){
	classifier.getClassifications(cFile)
	var dict_nb={};
	var obj=classifier.getClassifications(cFile);
	var th_val=-1;
	obj.forEach(function(value)
	{
 		//obj3=merge(obj3,value);
 		dict_nb[value['label']]=value['value'];
 		if(th_val<value['value'])
 			th_val=value['value'];
 	});
 	for(var key in dict_nb){
 		if(th_val===dict_nb[key] && !(key in SPFSmells))
 		{	
 		 	SPFSmells[key]=[];
 		 	SPFSmells[key].push(cFile);
 		 }
 		else if(th_val===dict_nb[key] && (key in SPFSmells))
 			SPFSmells[key].push(cFile);
 		}
 });
 console.log(SPFSmells);
 
		
