const router = require('express').Router();
const { routerConfig } = require('./../../config');
const mock = require('./mock');

router.get('/mock/student/{id}', (req, res, next) => {
    let student = { name: { last: 'ws', first: 'xiao' }, age: 28 };
    res.setHeader('Content-Type', 'application/json');
    res.send({ status: 0, data: { student } });
    res.end();
});

router.all('*', (req, res, next) => {
    console.log(req.url);
});

module.exports = router;
