const { join } = require('path');
const { existsSync } = require('fs');
const root = process.cwd();

module.exports = function(config) {
    return (req, res, next) => {
        let path = req.path;
        let pathArr = path.split('/').slice(1);
        if (pathArr[2] === 'mock') {
            let restPath = pathArr.slice(3, -1).join('/');
            let methodName = pathArr.pop();
            let filePath = join(root, `mock/${restPath}.js`);
            debugger;
            console.log(filePath);

            if (!existsSync(filePath)) {
                res.statusCode = 404;
                res.end('Mock file is not found');
            }
            if (require.cache[filePath]) {
                delete require.cache[filePath];
            }

            let methods = require(filePath);

            let api;

            if ((api = methods[methodName])) {
                res.setHeader('Content-Type', 'application/json');
                res.send(api(req.query, req.body));
                res.end();
            } else {
                res.statusCode = 404;
                res.end('Mock Method is not found');
            }
        } else {
            next();
        }
    };
};
