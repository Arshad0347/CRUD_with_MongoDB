const express = require('express');
const router = express.Router();
const Employee = require('../models/connection.model');

router.get('/add-emp', (req, res) => {
    res.render('addEmp'); 
});

router.post('/save-emp', async (req, res) => {
    try {
        const emp = new Employee({
            Name: req.body.name,
            Email: req.body.email,
            Phone: req.body.mobile,
            City: req.body.city
        });
        
        await emp.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error saving employee:', err);
        res.status(500).send('Error saving employee data');
    }
});

// Uncomment and implement if needed
// router.get('/show-all-emp', (req, res) => {
//     res.render('showAllEmp');
// });

module.exports = router;