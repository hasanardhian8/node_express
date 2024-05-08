const Curriculum_Reviews = require("../models").curriculum_reviews;

module.exports.findAll = async (req, res) => {
  try {
    const result = await Curriculum_Reviews.findAll({
      include: [
        {
          all: true,
        },
      ],
    });

    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

module.exports.findOne = async (req, res) => {
  try {
    const result = await Curriculum_Reviews.findOne({
      where: { cure_id: req.params.id },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("not found");
  }
};

module.exports.updateCure = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  try {
    const result = await Curriculum_Reviews.update(
      {
        cure_photo: files[0].file.newFilename,
      },
      { returning: true, where: { cure_id: req.params.id } }
    );
    return res.send(result);
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: "",
      error: error,
    });
  }
};
