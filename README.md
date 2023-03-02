Nous sommes dans la vidéo 11.024 ET Nous voyons quelque chose de très fatale.
Comme nous le savons, un utilisateur ne peut donner qu’un seul avis sur une tour. 
Alors pour faire cette restriction
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });
Juste ce petit code

Ce code utilise une méthode de Mongoose (une bibliothèque ODM pour MongoDB en JavaScript) pour définir un index sur un modèle de schéma de données appelé "reviewSchema".

L'index est créé sur deux champs du schéma: "tour" et "user". Le paramètre {unique: true} spécifie que les paires de valeurs de ces champs doivent être uniques dans la collection. Cela signifie que chaque utilisateur ne peut donner qu'une seule critique pour une visite donnée.

En d'autres termes, cet index empêche les utilisateurs de donner plusieurs critiques pour une même visite et garantit que chaque utilisateur ne donne qu'une seule critique pour une visite donnée.
