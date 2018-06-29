// require mongoose
const mongoose = require('mongoose')
// connect
mongoose.connect('mongodb://localhost/myDatabase')
//tao Schema
const userSchema = new mongoose.Schema({
    name:String,
    age: Number
})
// tao model
const user = mongoose.model('user', userSchema)
// CRUD
//tao mot user
// user.create({
//     name:"ty",
//     age:23
// })

//tao nhieu user
// user.create(
//     [{
//         name: "khuong",
//         age: 23
//     },
//     {
//         name: "hung",
//         age:14
//     },
//     {
//         name: "huyen",
//         age:15
//     }]);

//tim kiem va in ket qua cac user
// user.find().exec((err, users)=>{
//     console.log(users)
// })

//update mot user
// user.update({name:"hung"},{name:"dau da"})
//     .exec((err,result)=>{
//         console.log(result)
//     })

//remove user
// user.remove({name:"dauda"})
//     .exec((err,result)=>{
//         console.log(result)
//     })
