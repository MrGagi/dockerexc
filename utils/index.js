let { spawnSync } = require('child_process');
let { TYPES } = require('./../constants');
const Store = require('data-store');

function getContainersFile() {
  return new Store({
    name: 'dockerexc-containers'
  });
}

function executeOnDockerCompose(path, flags) {
  spawnSync('docker-compose', [
    '-f',
    path,
    ...flags
  ], { stdio: 'inherit' });
}

function getType(arguments) {
  if (arguments.start) return TYPES.START;
  if (arguments.stop) return TYPES.STOP;
  if (arguments.name) return TYPES.ADD;
  return TYPES.EXEC;
}

module.exports.getContainersFile = getContainersFile;
module.exports.executeOnDockerCompose = executeOnDockerCompose;
module.exports.getType = getType;