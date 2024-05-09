module.exports = (sequelize, DataTypes) => {
  const Timeline = sequelize.define(
    "time_line",
    {
      timeline_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true,
      },
      timeline_order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "time_line",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "timeline_name_pk",
          unique: true,
          fields: [{ name: "timeline_name" }],
        },
      ],
    }
  );
  return Timeline;
};
