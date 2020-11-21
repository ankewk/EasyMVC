const http = require('http');
const conf = require('./config/config');

const data = '';
const server = http.createServer( (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const urlArr = req.url.split('/');
    try {
        const controller = './app/controller/' + urlArr[1];
        const opController = require(controller);
        const op = new opController(urlArr[2], data);
        res.statusCode = 200;
        res.end(op.return);
    } catch(err) {
        res.statusCode = 404
        res.end('Not Found\n')
    }
});

server.listen(conf.port, ()=>{
    console.log('serveice is start!');
});
