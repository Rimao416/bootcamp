Dans cette partie, nous sommes exactement dans la vidéo 8.014,
C'est vraiment une initiation aux filtrages

Nous allons décortiquer le code afin de mieux comprendre

 ```const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log(req.query, excludedFields);
    const query = Tour.find(queryObj);
    const tours = await query;
    // const tours=await Tour.find().where('duration').equals(5).where('difficulty').equals('easy')
    ```
    
   Au niveau de la ligne 7, nous mettons les valeurs de filtrage dans un tableau.
   Et lorsque nous faisons notre requête de Type QUERY STRING, nous recommandons ainsi à MongoDB de prendre en considération notre paramètre passé en Array
