const Users =  require('../model/users');

module.exports.login = async function(req, res){
    const {email , password} = req.body;
    const userLogin = await Users.findOne({email: email, password:password});
    if(!userLogin){
        console.log('Something went wrong');
        res.status(400).json('Something went wrong')
    }else{
        console.log('logged in successfully');
        res.status(200).json({message:"logged in successfully"})
        
    }

    


}