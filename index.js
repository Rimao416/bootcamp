const fs = require("fs");
const http = require("http");
const url = require("url");
const util = require("util");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Ceci est un overview");
  } else if (pathName === "/product") {
    res.end("Ceci est le produit");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`,"utf-8", (err, data) => {
      if (err) throw err;
      let jsonData=JSON.parse(data)
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(jsonData));
   
    });
  } else {
    res.writeHead(404, {
      "Context-type": "text/html",
    }); //On ajoute un status au niveau du retour de message.
    //Dans ce cas, il y'aura une entête qui sera crée. Qui aura comme statut 404
    //On définit aussi une entete dans l'erreur, qui est une pièce de reponse qqu'on envoie.
    res.end("<h1>Page Not Found</h1>");
  }

  // console.log(req.url); //Cette méthode retourne l'Url qu'on passe en paramètre
  // res.end("Hello World from server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Le serveur est lancé");
});
