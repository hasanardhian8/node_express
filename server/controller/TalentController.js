const Talent = require("../models").talent;
const Talent_Batch = require("../models").talent_batch;
const Batch = require("../models").batch;
const Instructor = require("../models").instructor;
const Placement = require("../models").placement;
const Talent_Placement = require("../models").talent_placement;

module.exports.findAll = async (req, res) => {
  try {
    const result = await Talent.findAll({
      include: [
        {
          model: await Talent_Batch,
          as: "talent_batches",
          include: [
            {
              model: await Batch,
              as: "taba_batch",
              include: [
                {
                  model: await Instructor,
                  as: "batch_inst",
                },
              ],
            },
          ],
        },
        {
          model: Talent_Placement,
          as: "talent_placements",
          include: [
            {
              model: Placement,
              as: "tapl_place",
            },
          ],
        },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

module.exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Talent.findOne({
      where: { tale_id: id },
      include: [
        {
          model: await Talent_Batch,
          as: "talent_batches",
          include: [
            {
              model: await Batch,
              as: "taba_batch",
              include: [
                {
                  model: await Instructor,
                  as: "batch_inst",
                },
              ],
            },
          ],
        },
        {
          model: Talent_Placement,
          as: "talent_placements",
          include: [
            {
              model: Placement,
              as: "tapl_place",
            },
          ],
        },
      ],
    });

    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

module.exports.createEmp = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  console.log();
  try {
    const result = await Talent.create({
      tale_fullname: fields[0].value,
      tale_birthdate: new Date(),
      tale_education: fields[1].value,
      tale_school_name: fields[2].value,
      tale_major: fields[3].value,
      tale_handphone: fields[4].value,
      tale_status: fields[5].value,
      tale_resume: files[0].file.newFilename,
      tale_photo: files[1].file.newFilename,
    });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: "",
      error: error.message,
    });
  }
};

module.exports.detail = async (req, res) => {
  try {
    const result = await Talent.findAll({
      include: [
        {
          all: true,
          include: [
            {
              all: true,
            },
          ],
        },
      ],
    });
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).send("no data found");
  }
};
