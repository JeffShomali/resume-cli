#!/usr/bin/env node

'use strict';
var program = require('commander');
const chalk = require('chalk');
var figlet = require('figlet');

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


//  Data
var profile = {
  name: "Jeff Shomali",
  contacts: {
    website: 'Jeffshomali.com',
    github: 'github.com/JeffShomali ',
    email: 'info@jeffshomali.com',
    phone: '(415) 504-1135',
    location: 'San Francisco, Bay Area',
    twitter: '@jeffshomali',
    linkedin: 'in/jeffshomali',
    skype: 'jeffshomali'
  },
  objectiveAndSummary: {
    objective: "Software Engineer | Full Stack Developer | Mobile Developer",
    summary: "\tA recent graduated Software Engineer and Full Stack Developer with 5 years hands on experience in Front End, Back End, Web and Mobile Development.\n\tProficient in web technologies and specialize in MERN and LAMP stack, mobile development with React Native.\n\tFamiliar with most recent JavaScript frameworks and libraries.\n\tSeeking an opportunity in the following fields: ",
    fields: [
      'Front End Web Development',
      'UI Development',
      'Back End Web Development',
      'JavaScript Development',
      'Mobile Development (iOS, Android)',
      'DevOps Engineer'
    ]
  },
  skills: {
    languages: 'PHP, Node, React, React Native, Redux, JavaScript, jQuery, HTML5, CSS3, Python, Ruby, C++ and Java',
    databases: 'SQL, MySQL, MongoDB, SQLite, Nginx, Apache, Heroku, Digital Ocean',
    frameworks: 'Meteor, Express, Ruby on Rails, Django, Laravel, Bootstrap, SemanticUI',
    cms: 'WordPress, Magento, WooCommerce, Drupal',
    others: 'NPM, Yarn, Yeoman, Webpack, Git & GitHub, Babel',
    editors: 'Sublime, Atom, Visual Studio Code, PHPStorm, WebStorm'
  },
  experience: {
    1: 'Senior Software Engenier \t\t\t\t\t\t\t\t\t Nortek Security Control - 2018 - Present',
    2: 'Web Analytics Implementation Specialist \t\t\t\t\t\t\t Robert Half Technology 2018 - 2018 ',
    3: 'Full Stack Web Developer \t\t\t\t\t\t\t\t\t TUTYO 2016 – 2018',
    4: 'Full Stack Web Developer \t\t\t\t\t\t\t\t\t Purrivacy (Intern) 2015– 2016',
    5: 'Freelance Web Developer  \t\t\t\t\t\t\t\t\t 2013 – Forever'
  },
  projects: {
    1: 'iOS Cryptocurrency App: iOS Cryptocurrency app to watch all coin’s market data and news. Built in React NaJve, Reseul API.',
    2: 'San Francisco Bart ApplicaNon: iOS applicaJon for Bay Area Rapid Transit (BART), built in React NaJve and Flux router.',
    3: 'Lifo: It Is a Cryptocurrency website for collecJon all news about the blockchain and crypto currency.',
    4: 'Visual Studio Code Snippet Generator: Web applicaJon to generate snippet code for VSCode. Built in React and NodeJS.'
  },
  education: {
    1: 'Bachelor of Science in Computer Science. Trident University \t- Honor Student, GPA 3.6, Cypress, CA, April 2018',
    2: 'Associate of Science in Computer Science. Diablo Valley College \t- Honor Student, GPA 3.8, Pleasant Hill, CA, May 2016',
    3: 'Certified Advanced Java Programming, Program Design and Computer Architecture \t- Diablo Valley Colledge 2016.',
    4: 'Certified Front-End Web Developer Nanodegree, \t- Udacity, June 2016'
  },
  others: {
    1: 'US Citizen',
    2: 'Twitter: @jeffshomali',
    3: 'Skype: jeffshomali',
    4: 'Schedule a call: calendly.com/jeffshomali'
  }
}



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
  .option('-o, --objective', 'Dsiplay Objective and Summary')
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