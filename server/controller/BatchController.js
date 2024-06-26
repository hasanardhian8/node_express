const Batch = require("../models").batch;
const Talent = require("../models").talent;
const Talent_Batch = require("../models").talent_batch;
const Instructor = require("../models").instructor;
const Curriculum = require("../models").curriculum;

module.exports.findBatch = async (req, res) => {
  try {
    const result = await Batch.findAll({
      attributes: ["batch_id", "batch_name", "batch_technology", "batch_start_date", "batch_end_date", "batch_status"],
      include: [
        {
          model: Talent_Batch,
          as: "talent_batches",
          attributes: ["taba_tale_id"],
          where: {
            taba_drop: false,
          },
          required: false,
          include: {
            model: Talent,
            as: "taba_tale",
            attributes: ["tale_photo"],
            required: false,
          },
        },
        {
          model: Instructor,
          as: "batch_inst",
          attributes: ["inst_id", "inst_name"],
          required: false,
          include: {
            model: Curriculum,
            as: "curriculums",
            required: false,
          },
        },
      ],
    });
    return res.send(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.findBatchById = async (req, res) => {
  try {
    const result = await Batch.findAll({
      attributes: ["batch_id", "batch_name", "batch_technology", "batch_start_date", "batch_end_date", "batch_status"],
      where: { batch_id: req.params.id },
      include: [
        {
          model: Talent_Batch,
          as: "talent_batches",
          attributes: ["taba_tale_id"],
          where: {
            taba_drop: false,
          },
          required: false,
          include: {
            model: Talent,
            as: "taba_tale",
            attributes: ["tale_photo"],
            required: false,
          },
        },
        {
          model: Instructor,
          as: "batch_inst",
          attributes: ["inst_id", "inst_name"],
          required: false,
        },
      ],
    });
    return res.send(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.UpdateBatchStatus = async (req, res) => {
  const { batch_status } = req.body;
  try {
    const result = await Batch.update(
      {
        batch_status: batch_status,
      },
      {
        returning: true,
        where: { batch_id: req.params.id },
      }
    );
    return res.send(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.deleteBatch = async (req, res) => {
  const id = req.params.id;
  try {
    const result_taba = await Talent_Batch.destroy({
      where: { taba_batch_id: parseInt(id) },
    });
    const result = await Batch.destroy({
      where: { batch_id: parseInt(id) },
    });
    return res.send("delete " + result + " rows.");
  } catch (error) {
    return res.sendStatus(404).send("Data not found.");
  }
};

module.exports.UpdateBatch = async (req, res, next) => {
  const { batch_name, batch_technology, batch_start_date, batch_end_date, batch_inst_id } = req.body;
  try {
    const result = await Batch.update(
      {
        batch_name: batch_name,
        batch_technology: batch_technology,
        batch_start_date: batch_start_date,
        batch_end_date: batch_end_date,
        batch_inst_id: batch_inst_id,
      },
      {
        returning: true,
        where: { batch_id: parseInt(req.params.id) },
      }
    );
    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.AddMembers = async (req, res) => {
  const { talent_batches } = req.body;
  const batch = req.params.id;
  try {
    const batchTabaList = await Talent_Batch.findAll({
      attributes: ["taba_tale_id"],
      where: { taba_batch_id: parseInt(batch) },
    }).map((el) => el.dataValues.taba_tale_id);

    await Talent_Batch.update(
      {
        taba_drop: true,
        taba_drop_date: new Date(),
      },
      {
        returning: true,
        where: {
          taba_batch_id: parseInt(batch),
        },
      }
    );

    await talent_batches.map((el) => {
      if (batchTabaList.includes(el.tale_id)) {
        Talent_Batch.update(
          {
            taba_drop: false,
            taba_drop_date: null,
          },
          {
            returning: true,
            where: {
              taba_batch_id: parseInt(batch),
              taba_tale_id: parseInt(el.tale_id),
            },
          }
        );
      } else {
        Talent_Batch.create({
          taba_drop: false,
          taba_tale_id: el.tale_id,
          taba_batch_id: parseInt(batch),
        });
      }
    });
    return res.send("Update Batch Succeed");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
