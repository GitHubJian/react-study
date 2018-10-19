const router = require('express').Router();
const { routerConfig } = require('./../../config');
const mock = require('./mock');
const render = require('../render');

// router.get('/mock/student/{id}', (req, res, next) => {
//     let student = { name: { last: 'ws', first: 'xiao' }, age: 28 };
//     res.setHeader('Content-Type', 'application/json');
//     res.send({ status: 0, data: { student } });
//     res.end();
// });

// router.get('/api/student/:id', function(req, res, next) {
//     let id = req.params.id;
//     let student = { id: id, name: { last: 'ws', first: 'xiao' }, age: 28 };
//     res.status(200);
//     res.json({ data: { student }, code: 0, msg: '成功' });
//     res.end();
// });

// router.all('*', (req, res, next) => {
//     req;
// });

router.get('*', render);

module.exports = router;
