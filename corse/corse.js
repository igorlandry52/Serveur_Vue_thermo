// const mymodule = function () {
//   return {
//     name: "module1"
//   };
// };

// const mymodule = {
//   name: "module1"
// };

// // module.exports = mymodule;

// // const module1 = require("./module1")();
// // module1.name = "hello";

// // const module2 = require("./module1")();
// // console.log(module2.name);

// //la différence est que la copie d'un objet se fait par reférence

// // const module1 = require("./module1");
// // module1.name = "hello";

// // const module2 = require("./module1");
// // console.log(module2.name);

// // const util = require('util');
// // const date = new Date();
// // console.log(util.types.isDate(123));
// // console.log(util.types.isDate(date));

















// const color = require("colors");
// console.log("bonjour".rainbow);

// class Emitter {
//   constructor() {
//     this.events = {};
//   }

//   on(type, eventHandler) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(eventHandler);
//   }

//   emit(type) {
//     if(this.events[type]) this.events[type].forEach(element => element());
//   }

// }
// const Emitter = require("events");
// const emitter = new Emitter();

// emitter.on('file_read', (filename) => {
//   console.log(filename ," : fichier lu");
// });

// emitter.on('file_read', () => {
//   console.log("bonne journée et à bientôt!");
// });

// emitter.emit('file_read', 'filename');


// fs.open('./fichier.txt', "a+", (err, fd) => {
//   if (err) throw err;
//   console.log(fd);
//   const buffer = new Buffer.from(new ArrayBuffer(9), 'utf-8');
//   let content = '';
//   // fs.write(fd, "bonjour et bonsoir", (err, written, str) => {
//   //   if(err) throw err;
//   //   console.log({err, written, str});
//   //   fs.close(fd, () => {
//   //     console.log('Done');
//   //   });
//   // });

//   fs.read(fd, buffer, 0, 9, 0, (err, bytesRead, buffer) => {
//     content += buffer.toString();
//     console.log({ err, bytesRead, buffer, content });
//     fs.read(fd, buffer, 0, 9, 9, (err, bytesRead, buffer) => {
//       content += buffer.toString();
//       console.log({ err, bytesRead, buffer, content });
//       fs.close(fd, () => {
//         console.log('Done');
//       });
//     });
//   });
// });

// const fs = require('fs');
// fs.appendFile('./fichier.txt', 'My new data', err => { console.log(err)});
// fs.readFile('./fichier.txt', (err, data) => {
//   if(err) throw err;
//   console.log(data.toString());
// });
// fs.unlink('./fichier.txt', err => {});

// fs.mkdir('/tmp/parent/mon-dossier', { recursive: true }, err => {
//   if (err) throw err;
// });

// fs.mkdir('./mon-dossier', { recursive: true }, err => {
//   if (err) throw err;
//   console.log('Le dossier mon-dossier a été créé !')
//   fs.readdir('./', {withFileTypes: true}, (err, files) => console.log(files));
// });

// setTimeout(() => {
//   fs.rmdir('./mon-dossier', err => {
//     if(err) throw err;
//     console.log('Dossier supprimé !');
//   });
// }, 3000);

// const fs = require('fs');
// const { COPYFILE_EXCL } = fs.constants;

// fs.copyFile('source.txt', 'destination.txt', COPYFILE_EXCL, callback);

// fs.stat('./test.txt', (err, stat) => console.log(stat.isFile()));

// const http = require('http');
// const server = http.createServer();
// const fs = require('fs');


// //
// server.on('request', (req, res) => {
//   // const obj = {
//   //   key1: 'value1',
//   //   key2: 'value2'
//   // }
//   // res.end(JSON.stringify(obj));

//   const url = req.url;
//   let fileContent;
//   if(url === '/home'){
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     });
//     fileContent = fs.readFileSync('./index.html', 'utf-8');
//   } else if(url === '/info') {
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     });
//     fileContent = fs.readFileSync('./info.html', 'utf-8');
//   } else {
//     res.writeHead(404, {
//       'Content-Type': 'text/html'
//     });
//     fileContent = fs.readFileSync('./not_found.html', 'utf-8');
//   }
//   // const template = fileContent.replace('{{ name }}', "mentorJs");
//   // res.end(template);
//   res.end(fileContent)
// });

// // const http = require('http');

// // http.createServer((request, response) => {
// //   const { headers, method, url } = request;
// //   let body = [];
// //   request.on('error', (err) => {
// //     console.error(err);
// //   }).on('data', (chunk) => {
// //     body.push(chunk);
// //   }).on('end', () => {
// //     body = Buffer.concat(body).toString();
// //   });
// // }).listen(8080);

// server.listen(8000);






// const path = require('path');

// const test = path.dirname('./node_modules/express/index.js');
// const test = path.extname('./node_modules/express/index.js');
// const test = path.isAbsolute('./node_modules/express/index.js');
// const test = path.join(__dirname, 'node_modules', 'express');
// const test = path.parse(path.join(__dirname, 'node_modules', 'express', 'index.js'));
// console.log(test);

// const express = require("express");
// const app = express();
// const path = require('path');

// app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//   // res.writeHead(200, {
//   //   'Content-Type': 'application/json'
//   // });
  
//   // res.json({ key1: "value1", key2: "value2"});
//   // res.set('Content-Type', 'text/plain');

//   res.set({
//     'Content-Type': 'text/plain',
//     'Content-Length': '123',
//   });
//   res.sendFile(path.join(__dirname, "/index.html"), {
//     Headers: {
//       'Content-Type': 'text/html'
//     }
//   }, err => {
//     if(err) res.statusCode(500);
//     else console.log("envoyé !!!")
//   })
// })

// app.listen(3000);




// const express = require("express");
// const app = express();
// const path = require('path');
// const fs = require('fs');

// app.set("views", path.join(__dirname, "views"));
// // app.set("view engine", "pug");
// app.set("view engine", "ejs");


// app.engine('toto', (file, options, callback) => {
//   fs.readFile(file, (err, content) => {
//     if (err) return callback(new Error(err));
//     const rendered = content.toString().replace('%name', options.name)
//     return callback(null, rendered);
//   });
// });

// app.set('views', './views'); // par défaut, mais soyons explicite
// app.set('view engine', 'toto'); // définir l'extension par défaut utilisée par notre engine

// app.get('/', (req, res) => {
//   res.render('index', { 
//     title: "node_JS",
//     name: 'Jean-Paul', 
//     authentificated: true,
//     friends: 5,
//     products: [
//       { 
//         title: "title1",
//         product: "product1"
//       }, 
//       { 
//         title: "title2",
//         product: "product2"
//       }, 
//       { 
//         title: "title3",
//         product: "product3"
//       }
//     ]
//   });
// });

// app.listen(3000);
let tab = [];
const fetch = require("node-fetch");

    // const res = fetch("http://localhost:3000/", {
    //   method: "POST",
    //   body: JSON.stringify(["get_temp"]),
    //   headers : {
    //     "Content-Type": "application/json"
    //   }
    // }).then(res => res.json()
    // ).then(d => {
    //   console.log(d);
    //   this.tab = d;
    // });
      
      const affiche = (string) => {
        console.log(string);
      }
      const response = fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(["get_temp"]),
        headers : {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
      .then(data => {
        affiche(data);
      });
