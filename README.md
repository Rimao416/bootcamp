Nous sommes dans la vidéo 9.003, et nous voyons la gestion d'erreur.
Imaginons que nous entrions une route qui n’est pas configuré. Par exemple localhost :3000/v1/api/tourskfshdkjfshdfkj
Normalement, nous devons implémenter une solution dans notre application qui doit nous renvoyer une erreur 404

`app.use("/api/v1/tours", tourRouter); 
app.use("/api/v1/users", userRouter);
app.all('*',(req,res,next)=>{
  res.status(404).json({
    status:'fail',
    message:`Can't find ${req.originalUrl} on this server`
  })
})`


Voilà à quoi ça ressemble. Nous remarquons que le middleware qui vérifié si la route existe ou pas a été mis en dernier position.
Pourquoi ? Nous devons savoir que les middlewares s’exécutent de manière séquentielle.

Alors lorsque nous entrons une route en paramètre, laquelle route relative à notre contrôleur tour, la route ira voir si elle existe dans les routes réservées à la tour.
Si elle ne trouve pas, elle va exécuter la route qui renvoie l’erreur 404.

Donc si on mettait la route qui renvoie l’erreur 404 au-dessus, cela n’exécuterait également plus les routes valides car l’application va commencer par l’exécuter elle en premier.

