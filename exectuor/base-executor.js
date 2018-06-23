let { getContainersFilePath } = require('./../utils');
let fs = require('fs');

module.exports = class BaseExecutor {
  getSavedContainers() {
    return new Promise((resolve, reject) => {
      const containerFile = getContainersFilePath();
      fs.stat(containerFile, (err, stat) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}