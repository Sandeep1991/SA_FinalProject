'use strict';
//http://www.daveeddy.com/2013/03/26/synchronous-file-io-in-nodejs/
var fs = require('fs');
var concerns=[];
//fs.readFile('/Users/svadiraj/Downloads/softarchproject/concerns/concurrency/con2.js', 'utf-8', function(err, data){
//var str=data.toString('ascii', 0, data.length);

var contents = fs.readFileSync('/Users/svadiraj/Downloads/softarchproject/concerns/concurrency/con2.js').toString();
var tr=contents.replace(/\r?\n|\r/g,'');
console.log('result read: '+ tr);
concerns.push(tr);
//})
console.log('Concerns '+concerns[0].trim());

var str ='      hello    \n world'.trim()
console.log(str)

var dict_Conc={}; //dictionary of concerns
var fs = require('fs');
fs.readdir('/Users/svadiraj/Downloads/softarchproject/concerns/concurrency/',function(err,files){
    if(err) throw err;
    files.forEach(function(file){
        console.log(file);// do something with each file HERE!
    });
 });
var fs = require('fs');
var junk = require('junk');

var myArr=[];
var conc_files=fs.readdirSync('/Users/svadiraj/Downloads/softarchproject/concerns/concurrency/');
    console.log(conc_files.filter(junk.not));
    var allF=conc_files.filter(junk.not);
    allF.forEach(function(value){
    	var cnt= fs.readFileSync('/Users/svadiraj/Downloads/softarchproject/concerns/concurrency/'+value).toString();
		var tr=cnt.replace(/\r?\n|\r/g,'');
		myArr.push(tr);
	});
	//console.log(myArr);
	dict_Conc['concurrency']=myArr;
	
	//console.log("The dictionary is here!: " + dict_Conc['concurrency']);


//var files=fs.readFileSync   
//Graphics files
var myArr=[]
var graphics_files=fs.readdirSync('/Users/svadiraj/Downloads/softarchproject/concerns/graphics/');
    console.log(conc_files.filter(junk.not));
    var allF=graphics_files.filter(junk.not);
    allF.forEach(function(value){
    	var cnt= fs.readFileSync('/Users/svadiraj/Downloads/softarchproject/concerns/graphics/'+value).toString();
		var tr=cnt.replace(/\r?\n|\r/g,'');
		myArr.push(tr);
	});
	console.log(myArr);
	dict_Conc['graphics']=myArr;
/*
var myArr=[]
var graphics_files=fs.readdirSync('/Users/svadiraj/Downloads/softarchproject/concerns/graphics/');
    console.log(conc_files.filter(junk.not));
    var allF=graphics_files.filter(junk.not);
    allF.forEach(function(value){
    	var cnt= fs.readFileSync('/Users/svadiraj/Downloads/softarchproject/concerns/graphics/'+value).toString();
		var tr=cnt.replace(/\r?\n|\r/g,'');
		myArr.push(tr);
	});
	console.log(myArr);
	dict_Conc['graphics']=myArr;

*/

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
console.log(myDict['gui']);

