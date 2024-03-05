const admin = require("firebase-admin");

const serviceAccount = require("../config/firebase-key.json")

const BUCKET = "taskdesk-ad403.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const firebaseImage = (req, res, next) => {
  if(!req.file) return next();

  const image = req.file;

  const imageName = Date.now() + "." + image.originalname.split(".").pop();

  const file = bucket.file(imageName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    }
  })

  stream.on("error", (error) => {
    res.status(500).json({msg: "Erro ao salvar a imagem!"})
      console.log(error)
  })

  stream.on("finish", async () =>{

    await file.makePublic();

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${imageName}`

    next()

  })

  stream.end(image.buffer)

}

module.exports = firebaseImage