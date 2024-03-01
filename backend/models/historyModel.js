const { Schema, model, Types } = require('../connection');

const myschema= new Schema({

    user: {type : Types.ObjectId, ref: 'user'},
    category:String,
    model: String,
    image:String,
    result: Object,
    
    // email:{ type:String, require:true},
    // name: String,
    predictedAt: Date,

});
module.exports=model('history', myschema);