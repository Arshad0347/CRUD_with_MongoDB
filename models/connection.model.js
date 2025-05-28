const { default: mongoose } = require('mongoose');

const Schema = require('mongoose').Schema;
const employeeSchema = new Schema({
    fullName:{
        type: String,
        
    },
    email:{
        type: String,
        
    },
    phone:{
        type: String,
        
    },
    city:{
        type: String,
        
    }
})

module.exports= mongoose.model('Employee', employeeSchema);