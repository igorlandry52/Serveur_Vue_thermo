const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let tempConfig = [];
let logTemp = {};
let id = 0;
let AtUseTime = null;
const option = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

app.post("/", (req, res) => {
  if(req.body[0] === "get_temp") {
    res.send(tempConfig);
  } else if( req.body[0] === "set_temp") {
    const [, ...user] = req.body;
    if(user[1] > -1) {
      Object.assign(tempConfig[user[1]], user[0])
      res.send(["température modifié", {
        statut: 1
      }]);
    } else {
      tempConfig.push(user[0]);
      res.send(["température enregistré", {
        statut: 0
      }]);
    }
    
  } else if( req.body[0] === "del_temp") {
    const [, ...user] = req.body;
    tempConfig.splice(user[0], 1)
    res.send(["température supprimé", {
      statut: 2
    }]);
  } else if( req.body[0] === "start") {
    const [, ...userTemp] = req.body;
    let obj = {};
    obj['name'] = userTemp[0];
    obj['date'] = (new Date()).toLocaleDateString("fr-FR", option);
    obj['durée'] = userTemp[1];
    obj['etat'] = "Terminé.";
    logTemp[id++] = obj;
    console.log(logTemp);
    res.send(["log bien enregistré", {
      statut: 3
    }]);

  }  else if( req.body[0] === "get_temp_log") {
    res.send(logTemp);
  } else  if( req.body[0] === "del_temp_log") {
    delete logTemp[req.body[1]];
    id--;
    let i = 0;
    let copyLog = {};
    for (const key in logTemp) {
      if (logTemp.hasOwnProperty(key)) copyLog[i] = logTemp[key];
      i++;
    }
    logTemp = copyLog;
    console.log(logTemp);
    res.send(["log bien supprimé", {
      statut: 4
    }]);
  }
});

app.listen(3000);