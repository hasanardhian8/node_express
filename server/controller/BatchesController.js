const Batch = require("../models").batch;
const Talent = require("../models").talent;
const Talent_Batch = require("../models").talent_batch;
const Instructor = require("../models").instructor;
const Curriculum = require("../models").curriculum;

module.exports.findAllRows = async (req, res, next) => {
  try {
    const talent = await Talent.findAll({
      where: { tale_status: "Candidate" },
    });
    const instructor = await Instructor.findAll();
    const curriculum = await Curriculum.findAll();
    const result = { talent, instructor, curriculum };

    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

module.exports.findTalentBatch = async (req, res, next) => {
  try {
    const talent = await Talent_Batch.findAll();
    return res.send(talent);
  } catch (error) {
    return res.send(error);
  }
};

module.exports.findBatch = async (req, res, next) => {
  try {
    const talent = await Batch.findAll();
    return res.send(talent);
  } catch (error) {
    return res.send(error);
  }
};

module.exports.createBatch = async (req, res, next) => {
  const { batch_name, batch_technology, batch_inst_id, batch_start_date, batch_end_date, batch_type, diffDay } = req.body;
  try {
    const result = await Batch.create({
      batch_name: batch_name,
      batch_technology: batch_technology,
      batch_start_date: batch_start_date,
      batch_end_date: batch_end_date,
      batch_duration: parseInt(diffDay),
      batch_status: "new",
      batch_type: batch_type,
      batch_inst_id: parseInt(batch_inst_id),
    });
    req.batch_id = result.dataValues;
    next();
    return res.send("success");
  } catch (error) {
    return res.send("error");
  }
};

module.exports.updateCurriculumData = async (req, res, next) => {
  const { batch_technology, totalTalent, diffDay } = req.body;
  try {
    const result = await Curriculum.findOne({
      where: { curr_name: batch_technology },
    });

    const { curr_id, curr_name, curr_title, curr_description, curr_duration, curr_total_talents, curr_total_batch } = result.dataValues;

    const result1 = await Curriculum.update(
      {
        curr_duration: parseInt(diffDay),
        curr_total_talents: parseInt(curr_total_talents) + parseInt(totalTalent),
        curr_total_batch: parseInt(curr_total_batch) + parseInt(1),
      },
      {
        returning: true,
        where: { curr_name: batch_technology },
      }
    );
    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.updateTalent = async (req, res, next) => {
  const { batch_name, batch_technology, batch_inst_id, batch_start_date, batch_end_date, talentCheck } = req.body;
  try {
    for (let j = 0; j < talentCheck.length; j++) {
      await Talent.update(
        {
          tale_bootcamp: batch_technology,
          tale_status: "Talent",
        },
        {
          where: { tale_id: talentCheck[j].tale_id },
        }
      );
    }
    next();
  } catch (error) {
    return res.status(404).json({
      messagecreateTalentBatch: error.message,
    });
  }
};

module.exports.createTalentBatch = async (req, res, next) => {
  const { batch_id } = req.batch_id;
  const { batch_name, batch_technology, batch_inst_id, batch_start_date, batch_end_date, talentCheck } = req.body;
  const result = {
    batch_name,
    batch_technology,
    batch_inst_id,
    batch_start_date,
    batch_end_date,
    talentCheck,
  };
  try {
    for (let j = 0; j < talentCheck.length; j++) {
      await Talent_Batch.create({
        taba_drop: "false",
        taba_tale_id: parseInt(talentCheck[j].tale_id),
        taba_batch_id: parseInt(batch_id),
      });
    }
    // return res.send(result);
  } catch (error) {
    return res.status(404).json({
      messagecreateTalentBatch: error.message,
    });
  }
};
