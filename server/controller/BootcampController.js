const Curriculum = require("../models").curriculum;

module.exports.Bootcamp = async (req, res) => {
  try {
    const result = await Curriculum.findAll();
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

module.exports.Regular = async (req, res) => {
  try {
    const result = await Curriculum.findAll({
      where: { curr_type_payment: (req.params.curr_type_payment = "Regular") },
    });
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

module.exports.Berbayar = async (req, res) => {
  try {
    const result = await Curriculum.findAll({
      where: { curr_type_payment: (req.params.curr_type_payment = "Berbayar") },
    });
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).send("no data found");
  }
};
