const dotenv=require('dotenv');
const mongoose=require('mongoose')
dotenv.config();
const url= "mongodb+srv://Rasheeq_123:987654321@cluster0.7jaya56.mongodb.net/majorprojectdatabase?retryWrites=true&w=majority";

// console.log(process.env. DB_URL)

mongoose.connect(process.env.DB_URL)
.then((result) => {
console.log('database connected')    

}).catch((err) => {
   console.log(err); 
});
console.log('another statement'); 

module.exports = mongoose;