var express = require('express');
var router = express.Router();
var app = express()
var path = require('path')
const fs = require('fs');
const ytdl = require('ytdl-core');

router.get('/', function (req, res, next) { // GET 'http://www.example.com/admin/new?sort=desc'

 var lurl = "localhost"
 var newurl = lurl+req.originalUrl
  
  function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var parms = parseURLParams(newurl)
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

async function processproperly(){

var file = fs.createWriteStream("data/"+parms.vidurl+'.mp4')

await ytdl("https://www.youtube.com/watch?v="+parms.vidurl)
  .pipe(file);
  
 

var express = require('express');
var router = express.Router();
var app = express()
var path = require('path')
const fs = require('fs');
const ytdl = require('ytdl-core');

router.get('/', function (req, res, next) { // GET 'http://www.example.com/admin/new?sort=desc'

 var lurl = "localhost"
 var newurl = lurl+req.originalUrl
 
  
  function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var parms = parseURLParams(newurl)

function fileExist(filePath) {
 return new Promise((resolve, reject) => {
   fs.access(filePath, fs.F_OK, (err) => {
     if (err) {
       console.error(err)
       return reject(err);
    }
     //file exists
     resolve();
   })
 });
}

//moves the $file to $dir2
var moveFile = (file, dir2)=>{
  //include the fs, path modules
  var fs = require('fs');
  var path = require('path');

  //gets file name and adds it to dir2
  var f = path.basename(file);
  //var f = file;
  var dest = path.resolve(dir2, f);

  fs.rename(file, dest, (err)=>{
    if(err) throw err;
    else console.log('Successfully moved');
  });
};

//move file1.htm from 'test/' to 'test/dir_1/'
//moveFile('./test/file1.htm', './test/dir_1/');
  
  
 res.render('request', { title: 'FlashBridge'});
  
async function processproperly(){
let exists = null
let processed = null
try {
exists = await fileExist("temp/"+parms.vidurl+'.mp4')
processed = await fileExist("data/"+parms.vidurl+'.mp4')
} catch(err){console.log(err)}

if (!exists && !processed) {
var filee = fs.createWriteStream("temp/"+parms.vidurl+'.mp4')
  

var Stream = ytdl("https://www.youtube.com/watch?v="+parms.vidurl, {range:{start: 0, end: 800000000},quality: 'highest', filter: format => format.container === 'mp4'})

Stream.pipe(filee)
  
  

    
  
async function timedremoval()
{
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("data/"+parms.vidurl+'.mp4'), 20000)
  
  });
  
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("temp/"+parms.vidurl+'.mp4'), 20000)
  
  });

  let result = await promise
  let result2 = await promise1

  
    //res.writeHead(206, headers);
function erro(e) {
  console.log(e)
}

fs.unlink(result2, erro)
fs.unlink(result, erro)



  
}

Stream.on('end', () => {
  moveFile("temp/"+parms.vidurl+'.mp4', 'data/');
  timedremoval()
  
})




}
}
processproperly()
next() 
})

module.exports = router;

 res.sendFile(path.join(__dirname, '../data', parms.vidurl+'.mp4'))
 
res.render('request', { title: 'FlashBridge', filee:"data/"+parms.vidurl+'.mp4' });
}
processproperly()
  next()
})

module.exports = router;
