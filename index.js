const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
mongoose.connect("mongodb+srv://"+username+":"+password+"@cluster0.uessgmm.mongodb.net/registrationFormDB")

const registrationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Registration = mongoose.model("Registrations", registrationSchema)

app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {res.sendFile(__dirname + "/pages/index.html")})
app.use('/public', express.static(__dirname + '/public'));

app.post("/register", async (req, res) => {
    try{
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        
        const existingUser = await Registration.findOne({email: email});

        if (!existingUser) {
            const registrationData = new Registration({
                firstName,
                lastName,
                email,
                password
            });
            await registrationData.save()
            res.redirect("/success")
        } else {
            res.redirect("/error")
        }

    } catch (error) {
        console.log(error)
        res.redirect("/error")
    }
})

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/pages/success.html")
})

app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html")
})

app.listen(port, () => {
    console.log("server is running on port " + port);
})