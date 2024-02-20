const mongoose = require("mongoose");
require('dotenv/config');

async function main(){

    const dbURI = process.env.MONGODB_URI

    try {
        
        await mongoose.connect(
            dbURI
        );

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;