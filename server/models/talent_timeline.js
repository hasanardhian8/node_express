module.exports = (sequelize, DataTypes) => {
  const Tati = sequelize.define(
    "talent_timeline",
    {
      tati_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tati_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      tati_tale_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "talent",
          key: "tale_id",
        },
      },
      tati_timeline_name: {
        type: DataTypes.STRING(25),
        allowNull: true,
        references: {
          model: "time_line",
          key: "timeline_name",
        },
      },
    },
    {
      sequelize,
      tableName: "talent_timeline",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "tati_id_pk",
          unique: true,
          fields: [{ name: "tati_id" }],
        },
      ],
    }
  );
  return Tati;
};
