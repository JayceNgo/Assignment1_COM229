let mongoose = require ('mongoose');

//create a model class

let inventoryModel = mongoose.Schema(

    {
        item: String,
        qty: Number,
        tags: []
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model( 'Inventory', inventoryModel);