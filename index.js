#!/usr/bin/env node
let arguments = require('minimist')(process.argv.slice(2));
let ExecutorFactory = require('./exectuor/executor.factory');
let { getType } = require('./utils');

ExecutorFactory
.make(getType(arguments))
.execute(arguments);