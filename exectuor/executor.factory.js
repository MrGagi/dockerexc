let ExecutorStart = require('./executor-start');
let ExecutorStop = require('./executor-stop');
let ExecutorExec = require('./executor-exec');
let ExecutorAdd = require('./executor-add');
let { TYPES } = require('./../constants');

module.exports = {
  make(type) {
    switch(type) {
      case TYPES.START: 
        return new ExecutorStart();
        case TYPES.STOP: 
          return new ExecutorStop();
        case TYPES.ADD: 
          return new ExecutorAdd();
        case TYPES.EXEC: 
          return new ExecutorExec();
    }
  }
}
