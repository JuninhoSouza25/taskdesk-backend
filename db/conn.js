const mongoose = require("mongoose");

async function main(){
    try {
        
        await mongoose.connect(
            `mongodb+srv://juninhosouza:YP9RP06GiCjRqpFf@cluster0.aozjs9e.mongodb.net/?retryWrites=true&w=majority`
        );

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;