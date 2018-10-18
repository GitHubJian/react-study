#!/usr/bin/env node
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('./server/app.js')();
