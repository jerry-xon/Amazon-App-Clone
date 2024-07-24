 const mongoose = require('mongoose');

 const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    products:[{

        name:{
            type:String,
            require:true,
        },
        quantity:{
            type:Number,
            require:true,
        },
        price:{
            type:Number,
            require:true,
        },
        image:{
            type:String,
            require:true,
        },
    }
    ],
    totalprice:{
        type:Number,
        require:true
    },
    shippingaddress:{
        name:{
            type:String,
            require:true
        },
        mobileNo:{
            type:String,
            require:true
        },
        houseNo:{
            type:String,
            require:true
        },
        Street:{
            type:String,
            require:true
        },
        landmark:{
            type:String,
            require:true
        },
        Postalcode:{
            type:String,
            require:true
        },
    },
    PaymentMethod:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

 })
 
 const Order = mongoose.model("Order",orderSchema)

 module.exports = Order;