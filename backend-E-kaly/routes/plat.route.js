const express = require('express');
const app = express();

const platRoute = express.Router();
let Plat = require('../model/Plat');

// Get all Plat
platRoute.route('/').get((req, res) => {
    Plat.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Add Plat
platRoute.route('/add-plat').post((req, res, next) => {
    Plat.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Get Plat
platRoute.route('/read-plat/:id').get((req, res) => {
    Plat.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Update Plat
platRoute.route('/update-plat/:id').put((req, res, next) => {
    Plat.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('Plat updated successfully!')
    }
  });
});

// Delete Plat
platRoute.route('/delete-plat/:id').delete((req, res, next) => {
    Plat.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
      msg: data
      })
    }
  });
});

module.exports = platRoute;