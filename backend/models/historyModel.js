const { Schema, model } = require('../connection');

const myschema= new Schema({

    category:String,
    model: String,
    image:{},
    result: String,
    Recommendation: String,

    

    email:{ type:String, require:true},
    name: String,
    password: String,
    avatar:{type:String, default: 'avatar_placeholder.png'},
    createdAt: Date
});
module.exports=model('history', myschema);