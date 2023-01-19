Cette partie de la vidéo, nous lisons un fichier Json, nous sommes dans la partie 2.011, mais nous avons fait un push car dans la vidéo
qui suit, nous allons changer des méthodes de lecture dans un fichier.
La méthode actuel est donc

```fs.readFile(`${__dirname}/dev-data/data.json`,"utf-8", (err, data) => {
      if (err) throw err;
      let jsonData=JSON.parse(data)
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(jsonData));
      ```
