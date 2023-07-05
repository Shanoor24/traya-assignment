const userModel = require("../models/users")

const register = async(request, response) => {
    console.log("request", request.body)
    try {
        let {name, email, password, lastOrder} = request.body;
        let user = await userModel.findOne({email});

        if(user){
            return response.status(409).json({status: 409, msg: "already registered, please login!"})
        }

        user = await userModel.create({name, email, password, lastOrder});

        response.json({status: 201, user})
    } catch (error) {
        response.status(500).json({status: 500, msg: "something went wrong", error: error.message})
    }
    // response.status(200).json({msg: "User registered sucessfuly!"})
}

const login = async(request, response) => {
    try {
        let {email, password} = request.body;
        let user = await userModel.findOne({email});

        if(!user) {
            return response.status(404).json({msg: "user not found!", status: 404})
        }

        if(user.password !== password) {
            return response.status(400).json({msg: "incorrect password!", status: 400});
        }

        response.json({user, status: 200});
    } catch (error) {
        response.status(500).json({status: 500, msg: "something went wrong", error: error.message});
    }
    // response.status(200).json({msg: "User logged in sucessfuly!"})
};

const addAndEditReview = async(request, response) => {
    try {
        let { email } = request.params;
        let { lastOrder } = request.body;

        if(lastOrder.review === "" || lastOrder.review === "empty") {
            return response.status(400).json({msg: "review field can't be empty", status: 400});
        }

        let user = await userModel.findOne({email});

        user = {
            ...user._doc,
            lastOrder
        };

        user = await userModel.findOneAndUpdate({email}, user);
        const updatedUser = await userModel.findOne({email});

        response.json({updatedUser, status: 200})
    } catch (error) {
        response.status(500).json({status: 500, msg: "something went wrong", err: error.message});
    }
}

module.exports = {register, login, addAndEditReview}