module.exports = (sequelize, DataTypes) => {
    const WishList = sequelize.define("WishList", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      colours: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },   
      size: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: { model: "Users", key : "id"}
      },
    });
  
    WishList.associate = (models) => {
      WishList.hasMany(models.Review, {
        onDelete: "cascade",
      });
      WishList.belongsTo(models.User, {
        onDelete: "cascade",
      });
    };
  
    return WishList;
  };