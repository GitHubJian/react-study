const { pathConfig } = require('./../config');
const { resolve } = require('path');

const IndexBundle = require(resolve(pathConfig.dist, 'index/main.js'));
const React = require('react');
const ReactDOMServer = require('react-dom/server');
let { renderToString } = ReactDOMServer;
let initialData = { todoList: ['11', '22', '33'] };
let instance = React.createElement(IndexBundle.default, initialData); //.defalut不能少

let str = renderToString(instance);

console.log(str);
