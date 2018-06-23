let fs = require('fs');
let { getContainersFile } = require('./../utils');
let BaseExecutor = require('./base-executor');

module.exports = class ExecutorStop extends BaseExecutor {
  async execute(data) {
    let myContainers;
    try {
      await this.getSavedContainers();
      myContainers = getContainersFile();
    } catch(e) {
      myContainers = [];
    }
    myContainers.push({
      name: data.name,
      path: data.path
    })
    fs.writeFile('containers.json', JSON.stringify(myContainers), 'utf8', () => {
      console.log('Project added');
    });
  }
}