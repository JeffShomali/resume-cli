#!/usr/bin/env node

'use strict';
const { Command } = require('commander');
const program = new Command();
let chalk;
import('chalk').then((mod) => { chalk = mod.default; });
var figlet = require('figlet');
const terminalLink = require('terminal-link');
var data =  require('./manifest')

// Display Ascii
async function displayAscii() {
  figlet('Jeff  Shomali', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    if (chalk) {
      console.log(chalk.yellow(data));
    } else {
      console.log(data);
    }
  });
}


const profile = data.profile


function resume() {
  displayAscii()
  contacts()
  summary()
  skills()
  experience()
  projects()
  education()
  others()
}

function contacts() {
  if (chalk) {
    console.log(chalk.green("Personal Information: "));
  } else {
    console.log("Personal Information: ");
  }
  console.log(`Name: ${profile.name} \t Website: ${profile.contacts.website} \t Github: ${profile.contacts.github} \t Email: ${profile.contacts.email}  \t Phone: ${profile.contacts.phone}  \nLocation: ${profile.contacts.location} \t Twitter: ${profile.contacts.twitter} \t LinkedIn: ${profile.contacts.linkedin} \t Skype: ${profile.contacts.skype}`);
}

function summary() {
  if (chalk) {
    console.log(chalk.green(`\nOBJECTIVE && SUMMARY: `));
  } else {
    console.log(`\nOBJECTIVE && SUMMARY: `);
  }
  console.log(`\t${profile.objectiveAndSummary.objective} \n\n${profile.objectiveAndSummary.summary}`);
  profile.objectiveAndSummary.fields.map(el => {
    console.log(`\t\t${el}`);
  });
}

function skills(obj = profile.skills) {
  if (chalk) {
    console.log(chalk.green(`\nSKILLS: `));
  } else {
    console.log(`\nSKILLS: `);
  }
  Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${key}: ${value}`);
  });
}

function experience() {
  if (chalk) {
    console.log(chalk.green("\nEXPERIENCE: "));
  } else {
    console.log("\nEXPERIENCE: ");
  }
  Object.entries(profile.experience).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  });
}

function projects() {
  if (chalk) {
    console.log(chalk.green("\nPROJECTS: "));
  } else {
    console.log("\nPROJECTS: ");
  }
  Object.entries(profile.projects).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  });
}

function education() {
  if (chalk) {
    console.log(chalk.green("\nEDUCATION: "));
  } else {
    console.log("\nEDUCATION: ");
  }
  Object.entries(profile.education).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  });
}

function others() {
  if (chalk) {
    console.log(chalk.green("\nOTHERS INFORMATION: "));
  } else {
    console.log("\nOTHERS INFORMATION: ");
  }
  Object.entries(profile.others).forEach(entry => {
    const [key, value] = entry;
    console.log(`${key}: ${value}`);   
  });
}


// Command
program
  .version('0.0.1')
  .option('-a, --all', 'Display All Sections')
  .option('-o, --objective', 'Display Objective and Summary')
  .option('-s, --skills', 'Display Skills')
  .option('-x, --experience', 'Display Experience')
  .option('-p, --projects', 'Display Projects')
  .option('-d, --education', 'Display Education')
  .option('-r, --others', 'Display Others');
program.parse(process.argv);
const options = program.opts();


// if (program.args.length == 0) program.help();

if (options.all) {
  resume();
} else if (options.objective) {
  summary();
} else if (options.skills) {
  skills();
} else if (options.experience) {
  experience();
} else if (options.projects) {
  projects();
} else if (options.education) {
  education();
} else if (options.others) {
  others();
} else {
  program.help();
}