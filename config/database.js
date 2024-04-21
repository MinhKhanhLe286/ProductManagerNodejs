const mongoose = require("mongoose");

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log("connect success")
    } catch (error) {
        console.log("Disconection database")
    }
}

module.exports = {connect}