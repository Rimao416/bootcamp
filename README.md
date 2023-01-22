Vidéo 6.020, Ce sont des fichiers qui sont dans notre système que l’on peut pas accéder via nos routes. 
Par exemple nous avons un fichier overview.html qu’on ne peut pas accéder via nos routes ou notre navigateur.

Tout ce qu’il faut faire, c’est ajouter ce bout de code

app.use(express.static(`${__dirname}/public`))

Ainsi nous sommes en mesure de charger nos images, vidéos…
