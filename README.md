```const getAllUsers=(req,res)=>{
  res.status(500).json({
    status:"Error",
    message:"Cette route n'est pas encore définie"
  })
}
const getUser=(req,res)=>{
  res.status(500).json({
    status:"Error",
    message:"Cette route n'est pas encore définie"
  })
}
const createUser=(req,res)=>{
  res.status(500).json({
    status:"Error",
    message:"Cette route n'est pas encore définie"
  })
}
const updateUser=(req,res)=>{
  res.status(500).json({
    status:"Error",
    message:"Cette route n'est pas encore définie"
  })
}```
Dans cette partie, nous venons de créer notre ressource. Nous sommes dans la vidéo 6.016
une méthode de type ressource est une méthode d'une classe de 
contrôleur qui gère les requêtes HTTP pour une ressource spécifique. 
Ces méthodes peuvent inclure des actions telles que l'affichage, la création, la mise à jour et la suppression d'une ressource. 
Les méthodes de type ressource sont souvent nommées en suivant une convention de nommage standard, comme index(), new(), edit() et delete(). 
Ces méthodes sont généralement déclenchées en réponse à des requêtes HTTP correspondantes, telles que GET, POST, PUT et DELETE.```
```app.route("/api/v1/users").get(getAllUsers).post(createUser);
app
  .route("/api/v1/users/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);```
