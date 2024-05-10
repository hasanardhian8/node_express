const Instructor = require("../models").instructor;

module.exports.findAll = async (req, res) => {
  try {
    const result = await Instructor.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

module.exports.findOne = async (req, res) => {
  try {
    const result = await Instructor.findOne({
      where: { inst_id: req.params.id },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("not found");
  }
};

// module.exports.updateInst = async (req, res) => {
//   const { files, fields } = req.fileAttrb;
//   try {
//     const result = await Instructor.update(
//       {
//         inst_photo: files[0].file.newFilename,
//       },
//       { returning: true, where: { inst_id: req.params.id } }
//     );
//     return res.send(result);
//   } catch (error) {
//     return res.status(404).json({
//       status: "failed",
//       message: "",
//       error: error,
//     });
//   }
// };
