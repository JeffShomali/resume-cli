#!/usr/bin/env node

var program = require('commander');


//  Data
var profile = {
  name: "Jeff Shomali",
  contacts: {
    website: 'Jeffshomali.com',
    github: 'github.com/JeffShomali ',
    email: 'info@jeffshomali.com',
    phone: '415 504-1135',
    location: 'San Francisco, Bay Area',
    twitter: '@jeffshomali',
    linkedin: 'in/jeffshomali',
    skype: 'jeffshomali'
  },
  objectiveAndSummary: {
    objective: "Software Engineer | Full Stack Developer | Mobile Developer",
    summary:"A recent graduated Software Engineer and Full Stack Developer with 5 years hands on experience in Front End, Back End, Web and Mobile Development. Proficient in web technologies and specialize in MERN and LAMP stack, mobile development with React Native. Familiar with most recent JavaScript frameworks and libraries. Seeking an opportunity in the following fields",
    fields: [
      'Front End Web Development',
      'UI Development',
      'Back End Web Development',
      'JavaScript Development',
      'Mobile Development (iOS, Android)',
      'DevOps Engineer'
    ]
  }

}



// Functions
function jeffShomali() {
  console.log(profile)
};

program
.option('-c, --contacts', 'Display contacts information')
.option('-s, --summary', 'Dsiplay Objective and summary')
.action(jeffShomali)
.parse(process.argv);

if (program.args.length === 0) program.help();

