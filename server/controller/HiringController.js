const Job = require("../models").jobs;

module.exports.findAll = async (req, res) => {
  try {
    const result = await Job.findAll();

    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

module.exports.findOne = async (req, res) => {
  try {
    const result = await Job.findOne({
      where: { jobs_id: req.params.id },
    });

    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};
