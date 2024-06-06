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
import {randomSuperhero} from 'superheroes';


console.log(`My superhero name is ${randomSuperhero()}`);