const Talent = require("../models").talent;
const Talent_Batch = require("../models").talent_batch;
const Batch = require("../models").batch;
const Instructor = require("../models").instructor;
const Placement = require("../models").placement;
const Talent_Placement = require("../models").talent_placement;
module.exports.getTalent = async (req, res, next) => {
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

module.exports.create = async (req, res) => {
  const {
    tale_fullname,
    tale_email,
    tale_education,
    tale_major,
    tale_city,
    tale_bootcamp,
    tale_birthdate,
    tale_handphone,
    tale_school_name,
    tale_year_graduate,
    tale_gpa,
    tale_province,
    tale_tag_skill,
    tale_address,
    tale_resume,
    tale_cover_letter,
    tale_photo,
  } = req.body;
  try {
    const result = await Talent.create({
      tale_fullname,
      tale_email,
      tale_education,
      tale_major,
      tale_city,
      tale_bootcamp,
      tale_birthdate,
      tale_handphone,
      tale_school_name,
      tale_year_graduate,
      tale_gpa,
      tale_province,
      tale_tag_skill,
      tale_address,
      tale_resume,
      tale_cover_letter,
      tale_photo,
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports.update = async (req, res) => {
  const {
    tale_fullname,
    tale_education,
    tale_major,
    tale_city,
    tale_bootcamp,
    tale_birthdate,
    tale_handphone,
    tale_school_name,
    tale_year_graduate,
    tale_gpa,
    tale_province,
    tale_tag_skill,
    tale_address,
    tale_resume,
    tale_cover_letter,
    tale_photo,
  } = req.body;
  try {
    const result = await Talent.update(
      {
        tale_fullname,
        tale_email,
        tale_education,
        tale_major,
        tale_city,
        tale_bootcamp,
        tale_birthdate,
        tale_handphone,
        tale_school_name,
        tale_year_graduate,
        tale_gpa,
        tale_province,
        tale_tag_skill,
        tale_address,
        tale_resume,
        tale_cover_letter,
        tale_photo,
      },
      { returning: true, where: { tale_id: req.params.id } }
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports.updateSettings = async (req, res) => {
  const { files, fields } = req.fileAttrb;

  if (files.length === 2 && files[0].fieldName === "tale_resume" && files[1].fieldName === "tale_cover_letter") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_resume: files[0].file.newFilename,
          tale_cover_letter: files[1].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_resume" && files[1].fieldName === "tale_cover_letter" && files[2].fieldName === "tale_photo") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_resume: files[0].file.newFilename,
          tale_cover_letter: files[1].file.newFilename,
          tale_photo: files[2].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files.length === 2 && files[0].fieldName === "tale_resume" && files[1].fieldName === "tale_photo") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_resume: files[0].file.newFilename,
          tale_photo: files[1].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files.length === 2 && files[0].fieldName === "tale_cover_letter" && files[1].fieldName === "tale_photo") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_cover_letter: files[0].file.newFilename,
          tale_photo: files[1].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_resume") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_resume: files[0].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_cover_letter") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_cover_letter: files[0].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_photo") {
    try {
      const result = await Talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_email: fields[12].value,
          tale_photo: files[0].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports.updateSettingsNoFile = async (req, res) => {
  const { tale_fullname, tale_birthdate, tale_education, tale_major, tale_school_name, tale_handphone, tale_bootcamp, tale_year_graduate, tale_gpa, tale_city, tale_province, tale_tag_skill, tale_email, tale__user_id } = req.body;
  console.log(req.body);
  const result = await Talent.update(
    {
      tale_fullname: tale_fullname,
      tale_birthdate: tale_birthdate,
      tale_education: tale_education,
      tale_major: tale_major,
      tale_school_name: tale_school_name,
      tale_handphone: tale_handphone,
      tale_bootcamp: tale_bootcamp,
      tale_year_graduate: tale_year_graduate,
      tale_gpa: tale_gpa,
      tale_city: tale_city,
      tale_province: tale_province,
      tale_tag_skill: tale_tag_skill,
      tale_email: tale_email,
    },
    {
      returning: true,
      where: { tale_user_id: req.params.id },
    }
  );
  return res.send(result);
};
