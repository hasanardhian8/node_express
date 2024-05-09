module.exports = (sequelize, DataTypes) => {
  const Usro = sequelize.define(
    "user_roles",
    {
      usro_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      usro_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      usro_role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "roles",
          key: "role_id",
        },
      },
    },
    {
      sequelize,
      tableName: "user_roles",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "usro_id_pk",
          unique: true,
          fields: [{ name: "usro_id" }],
        },
      ],
    }
  );
  return Usro;
};
