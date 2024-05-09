module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "roles",
    {
      role_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      role_name: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "roles",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "role_id_pk",
          unique: true,
          fields: [{ name: "role_id" }],
        },
      ],
    }
  );
  return Role;
};
