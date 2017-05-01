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

var fs = require('fs');
fs.readdir('/Users/svadiraj/Downloads/softarchproject/concerns/concurrency/',function(err,files){
    if(err) throw err;
    files.forEach(function(file){
        console.log(file);// do something with each file HERE!
    });
 });                        
