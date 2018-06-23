let path = require('path');
let { spawnSync } = require('child_process');
let { TYPES } = require('./../constants');

function getContainersFilePath() {
  return path.resolve(__dirname, '../containers.json');
}

function getContainersFile() {
  return require(getContainersFilePath());
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

module.exports.getContainersFilePath = getContainersFilePath;
module.exports.getContainersFile = getContainersFile;
module.exports.executeOnDockerCompose = executeOnDockerCompose;
module.exports.getType = getType;