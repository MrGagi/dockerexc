#!/usr/bin/env node

let inquirer = require('inquirer');
let Docker = require('docker-cli-js').Docker;
let { spawnSync } = require('child_process');

function formatContainers(dockerResponse) {
  if (dockerResponse.containerList.length === 0) {
    console.log('\x1b[31m', 'Oh snap! It looks like you don\'t have any container running');
    process.exit();
  }

  return dockerResponse.containerList.map((container) => {
    return `${container['container id']} - ${container['image']}`;
  });
}

function showPromptDialog(containers) {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'container',
      message: 'Select container',
      choices: containers
    }
  ]);
}

function runDockerContainer({ container }) {
  const containerId = container.split(' - ')[0];

  let dockerProc = spawnSync('docker', [
    'exec',
    '-it',
    containerId,
    '/bin/bash'
  ], { stdio: 'inherit' });
}


new Docker().command('ps')
.then(formatContainers)
.then(showPromptDialog)
.then(runDockerContainer);
