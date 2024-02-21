const { Task: taskModel } = require("../models/Task");

const taskController = {
  create: async(req, res) => {
    try {
      
      const task = {
        title: req.body.title, 
        description: req.body.description,
        expiry: req.body.expiry,
        status: req.body.status
      }

      const response = await taskModel.create(task);

      res.status(201).json({ response, msg:"Tarefa criada com sucesso!"})
      console.log({ response, msg:"Tarefa criada com sucesso!"})

    } catch (error) {
      console.log("Erro ao criar tarefa: ", error)
    }
  },
  getAll: async (req, res) => {

    try {

      const task = await taskModel.find();

      res.json(task)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const task = await taskModel.findById(id);

      if(!task) {
        res.status(404).json({msg: "Tarefa não encontrada!"})
        return;
      }

      res.json(task);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const task = await taskModel.findById(id);

      if(!task) {
        res.status(404).json({msg: "Tarefa não encontrada!"})
        return;
      }

      const deletedTask = await taskModel.findByIdAndDelete(id)

      res.status(200).json({deletedTask, msg: "Tarefa excluída com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const task = {
        title: req.body.title, 
        description: req.body.description,
        expiry: req.body.expiry,
        status: req.body.status
    }

    
    const updatedTask = await taskModel.findByIdAndUpdate(id, task);

    if(!updatedTask) {
      res.status(404).json({msg: "Tarefa não encontrada!"})
      return;
    }

    res.status(200).json({ task, msg:"Tarefa atualizada com sucesso!"})
    console.log({ task, msg:"Tarefa atualizada com sucesso!"})
  }

}

module.exports = taskController;