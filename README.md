Cette partie est l'une des plus importantes.
Nouos apprenons quelque chose de vraiment mereveilleux
Nous sommes dans la vidéo 8.014
Dans cette partie, nous avons un fichier JSON qui contient des FAKERS
Et nous aimerions Communiquer avec la database via ce fichier.

Par communication, nous sous-entendons deux actions : Insérer des donées ou les supprimer

Mais aussi, comment devons nous faire pour nous y prendre ?

1)	Indiquer à node où se trouve notre fichier de test : `node ..arborescence (node dev-data/data/import-dev-data.js)`
2)	Créer nos différentes méthodes :
2.1. Pour la méthode d’importation par exemple, on peut faire `node dev-data/data/import-dev-data.js --import` 

Avec ça par exemple, nous venons de créer une sorte de méthode qui va s’exécuter grâce à cette commange
3)	Affecter la commande créée à une méthode :


`// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};


if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}`
