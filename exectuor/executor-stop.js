let inquirer = require('inquirer');
let { executeOnDockerCompose } = require('./../utils');
let BaseExecutor = require('./base-executor');

module.exports = class ExecutorStop extends BaseExecutor {
  async execute(data) {
    let myContainers = this.getContainers();
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
  }
}