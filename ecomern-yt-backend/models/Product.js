const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true ,"Can't be blank"]
    },
    description:{
        type:String,
        require:[true ,"Can't be blank"]
    },
    price:{
        type:String,
        require:[true ,"Can't be blank"]
    },
    category:{
        type:String,
        require:[true ,"Can't be blank"]
    },
    pictures:{
        type:Array,
        require:true ,
    },

},{minimize:false}
);

const Product = mongoose.model('Product',ProductSchema)

module.exports=Product;