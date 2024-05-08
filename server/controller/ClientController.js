const Client = require("../models").client;

module.exports.list = async (req, res) => {
  try {
    const clients = await Client.findAll();
    return res.send(clients);
  } catch (error) {
    console.error("Error in list:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.findClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const client = await Client.findOne({
      where: { id: clientId },
    });
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    return res.send(client);
  } catch (error) {
    console.error("Error in findClient:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
