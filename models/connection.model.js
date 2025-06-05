const { default: mongoose } = require('mongoose');

const Schema = require('mongoose').Schema;
const employeeSchema = new Schema({
    Name:{
        type: String,
        
    },
    Email:{
        type: String,
        
    },
    Phone:{
        type: String,
        
    },
    City:{
        type: String,
        
    }
})

module.exports= mongoose.model('Employee', employeeSchema);