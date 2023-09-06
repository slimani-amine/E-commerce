module.exports = (sequelize, DataTypes) => {
  const Review= sequelize.define("Review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductsID: {
      type: DataTypes.INTEGER,
      references: { model: "Products", key: "id" },
    },
    UserID: { 
      type: DataTypes.INTEGER,
      references: { model: "Users", key: "id" },
      allowNull: false, 
    },
  });

  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      onDelete: "cascade",
    });
    Review.belongsTo(models.Products, {
      onDelete: "cascade",
    });
  };

  return Review;
};