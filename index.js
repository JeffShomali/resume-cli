#!/usr/bin/env node

'use strict';
var program = require('commander');
const chalk = require('chalk');
var figlet = require('figlet');
const terminalLink = require('terminal-link');
var data =  require('./manifest')

// Display Ascii
function displayAscii() {
  figlet('Jeff  Shomali', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.yellow(data))
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
  console.log(chalk.green("Personal Information: "))
  console.log(`Name: ${profile.name} \t Website: ${profile.contacts.website} \t Github: ${profile.contacts.github} \t Email: ${profile.contacts.email}  \t Phone: ${profile.contacts.phone}  \nLocation: ${profile.contacts.location} \t Twitter: ${profile.contacts.twitter} \t LinkedIn: ${profile.contacts.linkedin} \t Skype: ${profile.contacts.skype}`)
}

function summary() {
  console.log(chalk.green(`\nOBJECTIVE && SUMMARY: `))
  console.log(`\t${profile.objectiveAndSummary.objective} \n\n${profile.objectiveAndSummary.summary}`)
  profile.objectiveAndSummary.fields.map(el => {
    console.log(`\t\t${el}`)
  })
}

function skills(obj = profile.skills) {
  console.log(chalk.green(`\nSKILLS: `))
  Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${key}: ${value}`);
  });
}

function experience() {
  console.log(chalk.green("\nEXPERIENCE: "))
  Object.entries(profile.experience).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  })
}

function projects() {
  console.log(chalk.green("\nPROJECTS: "))
  Object.entries(profile.projects).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  })
}

function education() {
  console.log(chalk.green("\nEDUCATION: "))
  Object.entries(profile.education).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  })
}

function others() {
  console.log(chalk.green("\nOTHERS INFORMATION: "))
  Object.entries(profile.others).forEach(entry => {
    const [key, value] = entry;
    console.log(`\t${value}`);
  })
}


// Command
program
  .version('0.0.1', '-v, --version')
  .option('-a, --all', 'Display All Sections')
  .option('-o, --objective', 'Display Objective and Summary')
  .option('-s, --skills', 'Display Skills')
  .option('-e, --experience', 'Display Experience')
  .option('-p, --projects', 'Display Projects')
  .option('-e, --education', 'Display Education')
  .option('-o, --others', 'Display Others')
  .parse(process.argv);


// if (program.args.length == 0) program.help();

if (program.all) {
  resume()
}else if (program.objective){
  summary()
}else if(program.skills){
  skills()
}else if(program.experience){
  experience()
}else if(program.projects) {
  projects()
}else if(program.education){
  education()
}else if(program.others){
  others()
}else {
  program.help()
}