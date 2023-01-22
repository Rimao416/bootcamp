Dans cette partie, nous avons commencé avec le Middleware, nous sommes exactement dans la vidéo 6.014
C'est une partie très important car nous avons crée un middleware et nous l'avons mis dans une requête
Cette partie nous aidera à comprendre comment faire pour faire un système d'autorisation ou autre chose.

```app.use((req,res,next)=>{
  req.requestTime=new Date();
  next()
})```

Nous venons de créer notre middleware, et nous faisons en sorte que le contenu de ce Middleware, s'affiche
lorsque nous faisons appel à notre methode GET 

```
const getAllTours = (req, res) => {
  console.log(req.requestTime)
  res.status(200).json({
    statuts: "success",
    requestAt:req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};```
