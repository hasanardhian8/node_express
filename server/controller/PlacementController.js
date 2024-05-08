const Placement = require("../models").placement;
const Client = require("../models").client;
const Talent_Placement = require("../models").talent_placement;
const Talent = require("../models").talent;
module.exports.List = async (req, res) => {
  try {
    const result = await Placement.findAll({
      include: [
        {
          model: Client,
          as: "place_client",
        },
        {
          model: Talent_Placement,
          as: "talent_placements",
          include: [
            {
              model: Talent,
              as: "tapl_tale",
            },
          ],
        },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Placement.findOne({
      where: { place_id: id },
      include: [
        {
          model: Client,
          as: "place_client",
        },
        {
          model: Talent_Placement,
          as: "talent_placements",
          include: [
            {
              model: Talent,
              as: "tapl_tale",
            },
          ],
        },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

module.exports.hapusPlace = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Placement.destroy({
      where: {
        place_id: parseInt(id),
      },
    });
    return res.status(200).send("delete" + result + "rows.");
  } catch (error) {
    return res.status(404).send("data not found");
  }
};
