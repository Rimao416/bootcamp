Nous sommes dans la vidéo 8.023, nous avons étudié les virtuals properties...
Concept très interessant

Les propriétés virtuelles en Mongoose sont des propriétés de modèle qui ne sont pas enregistrées 
en base de données, mais qui peuvent être définies et utilisées dans les opérations du modèle. Elles sont utiles pour définir des valeurs dérivées à partir d'autres propriétés du modèle, sans avoir à les enregistrer en base de données.

Voici un exemple :

Supposons que nous avons un modèle "Person" avec les propriétés "firstName" et "lastName". Nous pouvons définir une propriété virtuelle 
"fullName" qui retourne le nom complet de la personne, en concaténant les propriétés "firstName" et "lastName" :

`const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: String,
  lastName: String
});

personSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

const Person = mongoose.model('Person', personSchema);`

