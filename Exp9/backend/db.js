const mongoose = require('mongoose');
const username = "sumitsawant1029";
const password = "fNVFbHewvH1VSR2Z"; // Encode "@" as "%40"
const clusterName = "cluster0";
const dbName = "EccommerceWebsite"; // Replace with your actual database name

const mongoURI = "mongodb+srv://sumitsawant1029:fNVFbHewvH1VSR2Z@cluster0.tvpxqpi.mongodb.net/EGWR?retryWrites=true&w=majority&appName=AtlasApp";

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToMongo;
