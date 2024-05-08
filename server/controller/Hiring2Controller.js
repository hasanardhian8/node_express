const Job = require("../models").jobs;
module.exports.findOne = async (req, res) => {
  try {
    const result = await Job.findAll({
      where: { jobs_city: req.params.id },
    });

    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};
