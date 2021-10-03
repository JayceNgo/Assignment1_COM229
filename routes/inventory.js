/* Filename: inventory.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 2nd Oct 2021 */

var express = require('express');
var router = express.Router();
let mongoose = require ('mongoose');
/* GET users listing. */
//conntect to your model
let Inventory = require ('../models/inventory')
router.get('/', function(req, res, next) {

    Inventory.find(
        (err,inventoryList)=> {
        console.log(inventoryList);
         }
    )
        
});

module.exports = router;
