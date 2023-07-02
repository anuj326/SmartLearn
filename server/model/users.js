const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userDataSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
},{
    timestamps:true
}
)

//hash password
// userDataSchema.pre('save', async function(next){
//     console.log('inside Hash password')
//     if(this.isModified('password')){
//         password = bcrypt.hash(this.password, 12).then(password => {
//             //console.log('Hash ', hash)
//           })
//         this.cpassword = bcrypt.hash(this.cpassword, 12).then(cpassword => {
//            // console.log('Hash ', cpassword)
//            this.cpassword = cpassword
//           })
//     }
//     next();
// })

module.exports =mongoose.model('Users', userDataSchema)

