const mongoose = require('mongoose');

// const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.email = req.body.email;
    user.mdp = req.body.mdp;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Cet email est déjà utilisé']);
            else
                return next(err);
        }

    });
}