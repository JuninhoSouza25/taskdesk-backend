const router = require("express").Router();
const { User: UserModel } = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router
  .route("/login")
  .post( async (req,res) => {
    
    try {
      const login = {
        email: req.body.email,
        password: req.body.password
      }
  
      if (!login.email){
        return res.status(401).json({msg: "Email é obrigatório!"})
      }
  
      if (!login.password){
        return res.status(401).json({msg: "Password é obrigatório!"})
      }

      const user = await UserModel.findOne({email: login.email})

      if(!user) {
        return res.status(401).json({msg: `Email ${login.email} não encontrado`})
      }
      
      const checkPassword = await bcrypt.compare(login.password, user.password)

      if(!checkPassword) {
        return res.status(401).json({msg: `Senha inválida`})
      }
      
      try {
        
        const secret = process.env.SECRET

        const token = jwt.sign(
          {
            user: user,
          },
          secret
        )

        res.status(200).json({msg: "Autenticação realizada com sucesso! ",user, token})

      } catch (error) {
        console.log(error)
      }

    } catch (error) {
      console.log(error)
    }
     
  });



module.exports = router;