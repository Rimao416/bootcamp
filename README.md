Dans la vidéo 6.022 Nous avons exploité les variables d'environnements, qui sont très importantes au sein de notre code.
Nous avons modifié le port, qui provient actuellement depuis le fichier config.js QUE Nous avons eu à créer

Nous avons aussi mis la possibilité de switcher entre le mode DEV et le MODE PROD
 `"scripts": {
    "start:dev": "nodemon server.js",
    "start:prod": "SET NODE_ENV=production&&nodemon server.js",
    "debug": "ndb server.js"
  },`
