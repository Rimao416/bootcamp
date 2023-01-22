Dans cette partie de la vidéo, 6.19, nous apprenons comment enchainer avec plusieurs middleware, cette partie est très importante car elle sera très plus tard.
A quoi sert le chainage, imaginons que nous ayons une application, qui a nécessairement besoin du nom comme input. Il faut donc qu’il y’ait validation avant insertion. Ainsi nous allons créer un Middleware qui avant l’insertion fait la validation. Et en cas d’échec, retourne une erreur.

C’est le cas pour notre application. Avant la création d’une tour, on vérifie si le nom et le prix sont correctement insérées

TourController.js

exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'Fail',
            message:'Missing Name or price'
        })
    }
    next()
}```

TourRoutes.js

```router.route("/").get(tourController.getAllTours).post(tourController.checkBody,tourController.createTour);```


