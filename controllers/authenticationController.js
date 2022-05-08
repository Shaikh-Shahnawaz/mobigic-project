
const authentication = require("../models/authenticationModel")
const { createJwt } = require("../utils/auth")


/// to show all users


exports.showUsers = async(req,res)=>{

}


/// register users

exports.registerUser = async (req,res)=>{

try {
    const data = await authentication.create(req.body)

    if(data){

        res.json({message:"Register Successful"})
    }else{
        res.json({message:"Error Occured"})
    }
} catch (error) {
    console.log('Register Error',error)
}
    


}


/// login user


exports.loginUser = async(req,res)=>{

    try {
        const data = await authentication.findOne({ username: req.body.username });
    if (!data) throw new Error("Username not found");

    // we have to run some checks that password matches or not
    const pass = await data.correctPassword(req.body.password, data.password);
    if (!pass) throw new Error("Incorrect Password");

    // we have to return jwt
    // yeh jo data hai woh mongoose ka object hai to usko convert krna hoga normal object m
    
    const token = createJwt(JSON.parse(JSON.stringify(data)));

    res.json({ message: "Login SuccessFully !!", token: token });
        
    } catch (error) {
        
    }
    
}