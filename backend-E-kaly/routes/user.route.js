const express = require('express');
const app = express();

const userRoute = express.Router();
let user = require('../model/User');


//inscrition
userRoute.route('/inscription').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
          } else {
            res.json(data)
          }
    })
});

module.exports = userRoute;
