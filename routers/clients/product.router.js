const express = require("express")
const router = express.Router()

router.get("/",(rep,res)=>{
    res.render("client/pages/products/index.pug")
})

module.exports = router