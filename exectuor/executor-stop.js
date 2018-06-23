let inquirer = require('inquirer');
let { getContainersFile, executeOnDockerCompose } = require('./../utils');
let BaseExecutor = require('./base-executor');

module.exports = class ExecutorStop extends BaseExecutor {
  async execute(data) {
    try {
      await this.getSavedContainers();
      let myContainers = getContainersFile();
      const { path } = await inquirer.prompt([
        {
          type: 'list',
          name: 'path',
          message: 'Select project',
          choices: myContainers.map((container) => ({
            name: container.name,
            value: container.path
          }))
        }
      ]);
      executeOnDockerCompose(path, [ 'down' ]);
    } catch(err) {
      console.log('There is no any container added');
    }
  }
}