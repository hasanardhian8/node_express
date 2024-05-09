module.exports = (sequelize, DataTypes) => {
  const Uscl = sequelize.define(
    "users_client",
    {
      uscl_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      uscl_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      uscl_client_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "client",
          key: "client_id",
        },
      },
    },
    {
      sequelize,
      tableName: "users_client",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "uscl_id_pk",
          unique: true,
          fields: [{ name: "uscl_id" }],
        },
      ],
    }
  );
  return Uscl;
};
