const { Schema, model } = require('../connection');

const myschema= new Schema({

    email:{ type:String, require:true},
    name: String,
    password: String,
    avatar:{type:String, default: 'avatar_placeholder.png'},
    createdAt: Date
});
module.exports=model('expert', myschema);