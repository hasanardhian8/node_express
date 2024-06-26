module.exports = (sequelize, DataTypes) => {
  const Cure = sequelize.define(
    "curriculum_reviews",
    {
      cure_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cure_review: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      cure_rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cure_curr_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "curriculum",
          key: "curr_id",
        },
      },
      curr_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      cure_photo: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "curriculum_reviews",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "cure_id_pk",
          unique: true,
          fields: [{ name: "cure_id" }],
        },
      ],
    }
  );
  return Cure;
};
