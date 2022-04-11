const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var User = new Schema({
    nom: {
        type: String,
        required: 'Le champ est obligatoire'
    },
    prenom: {
        type: String,
        required: 'Le champ est obligatoire'
    },
    email: {
        type: String,
        required: "L'email est obligatoire",
        unique: true
    },
    mdp: {
        type: String,
        required: 'Le mot de passe est obligatoire',
        minlength : [4,'Le mot de passe doit avoir plus de 4 caractères']
    },
    secret:  String,
    }, {collection: 'user'}
);

//validation email
User.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
User.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.mdp, salt, (err, hash) => {
            this.mdp = hash;
            this.secret = salt;
            next();
        });
    });
});

module.exports = mongoose.model('User', User);