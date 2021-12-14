/* Fichier de configuration de "Multer" pour les images */
const multer = require('multer')

const MIME_TYPES = {
    'images/jpg': 'jpg',
    'images/jpeg': 'jpeg',
    'images/png': 'png',
}

const 

/* Fonction permettant de definir le lieux de stockage et le nom des images uploader dans la BDD 
Le nom des images est composé du nom d'origine (les ' ' remplacés par des '_') + de la date
via 'Date.now()'*/
const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, '/statics/images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_') /* remplace les " " pas des "_" dans le nom du fichier image */
        callback(null, name + Date.now() + '.') /* Ajoute le timestamp a la fin du nom de fichier */
    }
})

/* exportation des fonctions */
module.exports = multer({storage: storage}).single('image')