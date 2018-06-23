let inquirer = require('inquirer');
let Docker = require('docker-cli-js').Docker;
let { spawnSync } = require('child_process');

module.exports = class ExecutorExec {
  async execute(data) {
    const dockerResponse = await new Docker().command('ps')
    const containers = this.formatContainers(dockerResponse)
    const { container } = await this.showPromptDialog(containers);
    this.runDockerContainer(container)
  }

  formatContainers(dockerResponse) {
    if (dockerResponse.containerList.length === 0) {
      console.log('\x1b[31m', 'Oh snap! It looks like you don\'t have any container running');
      process.exit();
    }
  
    return dockerResponse.containerList;
  }
  
  showPromptDialog(containers) {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'container',
        message: 'Select container',
        choices: containers.map((container) => ({
          name: `${container['container id']} - ${container['image']}`,
          value: container['container id']
        }))
      }
    ]);
  }
  
  runDockerContainer(containerId) {
    spawnSync('docker', [
      'exec',
      '-it',
      containerId,
      '/bin/bash'
    ], { stdio: 'inherit' });
  }
}