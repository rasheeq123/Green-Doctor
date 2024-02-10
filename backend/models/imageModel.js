const { Schema, model, Types } = require('../connection');

const myschema= new Schema({

    user:{ type: Types.ObjectId, ref:"users"},
    image: String,
    result:Array,
    createdAt: Date
});
module.exports=model('image', myschema);