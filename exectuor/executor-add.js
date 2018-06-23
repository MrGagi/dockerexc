let fs = require('fs');
let { getContainersFile } = require('./../utils');
let BaseExecutor = require('./base-executor');


module.exports = class ExecutorStop extends BaseExecutor {
  async execute(data) {
    let myContainers = this.getContainers();
    myContainers.push({
      name: data.name,
      path: data.path
    });
    const store = this.getStore();
    store.set({ containers: myContainers });
    console.log('Project added');
  }
}