const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const FormModel = require('../model/form');

const router = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  res.json({ 
    message : 'Signup successful',
    user : req.user 
  });
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {     
    try {
      if(err || !user){
        const errorMessage = (info && info.message) || 'An Error occured';
        const error = new Error(errorMessage)
        return next(error);
      }
      req.login(user, { session : false }, async (error) => {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id : user._id, email : user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body },'top_secret');
        //Send back the token to the user
        return res.json({ 
          token,
          email: user.email,
        });
      });     
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post('/form', async (req, res, next) => {
  try {
    //Find the user associated with the email provided by the user
    const { firstname, lastname, email, telephone, address, city, state, zip, comments } = req.body;
    
    const form = await FormModel.create({firstname, lastname, email, telephone, address, city, state, zip, comments});

    res.json({ 
      message : 'Form submitted successfully',
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;