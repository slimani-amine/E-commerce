module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: { model: "Users", key : "id"}
      },
    });
  
    Contact.associate = (models) => {
      Contact.belongsTo(models.User, {
        onDelete: "cascade",
      });
    };
  
    return Contact;
  };