let { getContainersFile } = require('./../utils');

module.exports = class BaseExecutor {
  getContainers() {
    return getContainersFile().get('containers') || [];
  }
  getStore() {
    return getContainersFile();
  }
}