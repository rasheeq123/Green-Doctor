const express = require('express');
const Model = require('../models/historyModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);

            res.json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        });
});
router.get('/getbyemail/:email', (req, res) => {   // "/: url parameter"
    console.log(req.params.email);
    module.findOne({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        });

})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result);
        })
       
        .catch((err) => {
            res.json(err);
        })
   
});


router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) // (new:true updates data dikhaega) , req,params.id islie taaki hum id se data access kr ske
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});





module.exports = router;