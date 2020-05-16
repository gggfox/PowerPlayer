let mongoose = require( 'mongoose' );

const userCollectionSchema = mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isManager:{
        type:Boolean,
        required:true
    },
    account_birthday:{
        type:Date,
        required:false
    },
    transactions:{
        type:Array,
        required:false
    },
    cart_wishlist:{
        type:[Products],
        required:false
    }
});

const Users = {

};
//missing createing the database on mongodb
//delete user by username
//get all users
//get user by id
//update user password
//create a user
//change permissions
//module.exports = {}