// console.log("Hello from nodeJs");
// const fs = require("fs");
// fs.writeFile("message.txt", "Hello i am created by nodeJs" , (err)=>{
//     if (err) throw err;
//     console.log(err)
// })
// fs.readFile("message.txt", "utf8",(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// var generateName = require("sillyname");
// setInterval(() => {
//     var sillyname = generateName();
//     console.log(`My name is ${sillyname}`);
// }, 1000);
// import generateName from "sillyname"
// var sillyname = generateName();
// console.log(sillyname);
// import {randomSuperhero} from 'superheroes';


// console.log(`My superhero name is ${randomSuperhero()}`);
//  Generate Qr code  using inquirer npm 
// 1. use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
// var qr = require('qr-image');
inquirer
  .prompt([
    {message: "Type in your URL",
        name : "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img1.png'));
    fs.writeFile("URL.txt", url, (err)=>{
        if(err) throw err;
        console.log("File saved Successfully");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });