const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

// app.post('/connect/', function(req, res) {
//     let apikey = req.body.apikey;

//     if (apikey == undefined) {
//         res.send({code: 400, error: "Wrong API-Key"});
//         return;
//     }
//     res.send({code: 200, profileid: generateGUID()});
// });

// app.post('/event/', function(req, res) {
//     res.send({code: 200});
// });

app.listen(2222, function () {
  console.log('[FalconEye] The example server is now running on http://localhost:2222/ !')
});

function generateGUID() {
    const uid = (new Date()).getTime().toString(16) + Math.random().toString(16).substring(2) + "0".repeat(16);

    return uid.substr(0,8) + '-' + uid.substr(8,4) + '-4000-8' + uid.substr(12,3) + '-' + uid.substr(15,12);
}