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
    Review.belongsToMany(models.User, {
      through: "UserReview", 
      onDelete: "cascade",
    });
    Review.belongsToMany(models.Products, {
      through: "ProductReview", 
      onDelete: "cascade",
    });

    Review.belongsToMany(models.WishList, {
      through: "WishListReview", 
      onDelete: "cascade",
    });
  };


  return Review;
};