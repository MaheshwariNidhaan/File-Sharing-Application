import File from "../models/file.js";

const BASE_URL = process.env.BASE_URL;

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `${BASE_URL}/file/${file._id}` }); //file._id is coming from MongoDB(database )
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(req);
};

export const getImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    file.downloadCount++; // locally increasing count
    await file.save(); // saves count in database

    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: error.message });
  }
};
