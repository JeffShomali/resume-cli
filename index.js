#!/usr/bin/env node

'use strict';
var program = require('commander');


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
    summary: "A recent graduated Software Engineer and Full Stack Developer with 5 years hands on experience in Front End, Back End, Web and Mobile Development. Proficient in web technologies and specialize in MERN and LAMP stack, mobile development with React Native. Familiar with most recent JavaScript frameworks and libraries. Seeking an opportunity in the following fields: ",
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
    1: 'Full Stack Web Developer \t\t\t\t\t\t\t\t\t\t\t\t TUTYO 2016 – present',
    2: 'Full Stack Web Developer \t\t\t\t\t\t\t\t\t\t\t\t Purrivacy (Intern) 2015– 2016',
    3: 'Freelance Web Developer  \t\t\t\t\t\t\t\t\t\t\t\t 2013 – Present'
  },
  projects: {
    1: 'iOS Cryptocurrency App: iOS Cryptocurrency app to watch all coin’s market data and news. Built in React NaJve, Reseul API.',
    2: 'San Francisco Bart ApplicaNon: iOS applicaJon for Bay Area Rapid Transit (BART), built in React NaJve and Flux router.',
    3: 'Lifo: It Is a Cryptocurrency website for collecJon all news about the blockchain and crypto currency.',
    4: 'Visual Studio Code Snippet Generator: Web applicaJon to generate snippet code for VSCode. Built in React and NodeJS.'
  },
  education: {
    1: 'Bachelor of Science in Computer Science. Trident University - Honor Student, GPA 3.6, Cypress, CA, April 2018',
    2: 'Associate of Science in Computer Science. Diablo Valley College - Honor Student, GPA 3.8, Pleasant Hill, CA,',
    3: 'CerJfied Advanced Java Programming, Program Design and Computer Architecture from DVC.',
    4: 'CerJfied Front-End Web Developer Nanodegree, Udacity'
  },
  others: {
    1: 'US CiJzen',
    2: 'Twitter: @jeffshomali',
    3: 'Skype: jeffshomali',
    4: 'Schedule a call: calendly.com/jeffshomali'
  }
}



function resume() {

}

function contacts() {
  console.log(`
  Name: ${profile.name} \t
  Website: ${profile.contacts.website} \t
  Github: ${profile.contacts.github} \t
  Email: ${profile.contacts.email}  \t
  Phone: ${profile.contacts.phone}  \t
  Location: ${profile.contacts.location} \t
  Twitter: ${profile.contacts.twitter} \t
  LinkedIn: ${profile.contacts.linkedin} \t
  Skype: ${profile.contacts.skype}
  `)
}

function summary() {
  console.log(`\nObjective: ${profile.objectiveAndSummary.objective} \n\nSummary: ${profile.objectiveAndSummary.summary}`)
  profile.objectiveAndSummary.fields.map(el => {
    console.log(`${el}\t`)
  })

}

function skills(obj = profile.skills) {
  Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    console.log(`${key}: ${value}`);
  });
}

function experience() {
  Object.entries(profile.experience).forEach(entry => {
    const [key, value] = entry;
    console.log(`${value}`);
  })
}

function projects() {
  Object.entries(profile.projects).forEach(entry => {
    const [key, value] = entry;
    console.log(`${value}`);
  })
}

function education() {
  Object.entries(profile.education).forEach(entry => {
    const [key, value] = entry;
    console.log(`${value}`);
  })
}

function others() {
  Object.entries(profile.others).forEach(entry => {
    const [key, value] = entry;
    console.log(`${value}`);
  })
}


// Functions
function jeffshomali(options) {
  if (options === 'contacts') {
    contacts()
  } else if (options === 'summary') {
    summary()
  } else if (options === 'skills') {
    skills()
  } else if (options === 'experience') {
    experience()
  } else if (options === 'projects') {
    projects()
  } else if (options === 'education') {
    education()
  } else if (options === 'others') {
    others()
  } else {
    resume()
  }
}

// Commands
program
  .command('jeffshomali [optional]')
  .description('jeffshomali description')
  .action(jeffshomali);

program.parse(process.argv);

if (program.args.length === 0) program.help();