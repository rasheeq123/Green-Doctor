const { Schema, model } = require('../connection');

const myschema= new Schema({

    email:{ type:String, require:true},
    name: { type:String, require:true},
    password: { type:String, require:true},
    avatar:{type:String, default:"avatar_placeholder.png"},
    createdAt: Date
});
module.exports=model('user', myschema);