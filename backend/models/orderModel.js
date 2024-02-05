const { Schema, model, Types } = require('../connection');

const myschema= new Schema({

    user:{type:Types.ObjectId, ref:"users"},
    product:Object,
    price:Number,
    createdAt:Date
    
});
module.exports=model('order', myschema);