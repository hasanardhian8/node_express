const Talent_Timeline = require("../models").talent_timeline;

module.exports.List = async (req, res) => {
  try {
    const result = await Talent_Timeline.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports.createTale = async (req, res) => {
  try {
    const { files, fields } = req.fileAttrb;
    const { tati_tale_id, tati_date, tati_timeline_name } = req.body;
    const result = await Talent_Timeline.create({
      tati_date: fields[9].value,
      tati_tale_id: parseInt(fields[10].value),
      tati_timeline_name: fields[11].value,
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports.findTime = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Talent_Timeline.findAll({
      where: { tati_tale_id: id },
    });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
