const Users =  require('../model/users');

module.exports.userData = async function(req,res){
    
        const userExist = await Users.findOne({email:req.body.email})
        if(userExist){
            return res.status(422).json({error:'email already registered'})
        }
        const users = new Users({
            fname: req.body.fname,
            date: req.body.date,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        })
     
    await users.save();
    //const data = await Users.find({'name': 'Anuj Sahu'});
    //console.log(data);

   // await Users.deleteOne({'_id':'6493fcce8ddc2e1a805a7ec1'});
   //await Users.updateOne({'_id':'6493fd8fc3186e4fca0ca4ce', 'name':'Anuj'})
    
    // const users = new Users({
    //     name: "Anuj Sahu",
    //     email: "anuj@gmail.com"
    // })
    
    return res.send('Hello word') 
}