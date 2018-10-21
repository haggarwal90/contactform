const express = require('express');

const FormModel = require('../model/form');

const router = express.Router();

// Lets say the route below is very sensitive and we want only authorized users to have access

// Displays information tailored according to the logged in user
router.get('/profile', (req, res, next) => {
  //We'll just send back the user details and the token
  res.json({
    message : 'You made it to the secure route',
    user : req.user,
  })
});

// Find all forms
router.get('/forms', async (req, res, next) => {
  //We'll send back array of forms

  try {
    //Find the forms
    const forms = await FormModel.find();

    res.json({
      forms,
    })

  } catch (error) {
    next(error);
  }
});

module.exports = router;