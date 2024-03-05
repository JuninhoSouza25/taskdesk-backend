const { Image: ImageModel} = require("../models/Image");
const path = require("path");

const fs = require("fs")

const imageController = {
  create: async(req, res) => {
    try {
     
   
      const file = {
        name: req.file.originalname,
        src: req.file.firebaseUrl
      }

      const response = await ImageModel.create({
        name: file.name,
        src: file.src
      });

      console.log(file)

      res.status(201).json({response, msg:"Imagem salva com sucesso!", file})

    } catch (error) {
      res.status(500).json({msg: "Erro ao salvar a imagem!"})
      console.log(error)
    }
  },
  getAll: async(req,res) => {
    try {

      const images = await ImageModel.find();

      res.json(images)
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagens!"})
      console.log(error)
    }
  },
  get: async(req,res) => {
    try {

      const id = req.params.id
      const image = await ImageModel.findById(id);

      if(!image) {
        res.status(404).json({msg: "Imagem não encontrada!"})
        return;
      }

      res.json(image);
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagem!"})
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const image = await ImageModel.findById(id);

      if(!image) {
        res.status(404).json({msg: "Imagem não encontrada!"})
        return;
      }

      await ImageModel.findByIdAndDelete(id)

      res.status(200).json({msg: "Imagem excluída com sucesso!"})
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagem!"})
      console.log(error)
    }
  }
}

module.exports = imageController;