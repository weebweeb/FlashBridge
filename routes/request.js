var express = require('express');
var router = express.Router();
var app = express()
const fs = require('fs');
const ytdl = require('ytdl-core');

router.get('/', function (req, res, next) { // GET 'http://www.example.com/admin/new?sort=desc'
  res.render('request', { title: 'FlashBridge' });
 console.dir(req.originalUrl) // '/admin/new?sort=desc'
  console.dir(req.baseUrl) // '/admin'
  console.dir(req.path) // '/new'
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

ytdl("https://www.youtube.com/watch?v="+parms.vidurl)
  .pipe(fs.createWriteStream(parms.vidurl+'.mp4'));
  
  next()
})

module.exports = router;