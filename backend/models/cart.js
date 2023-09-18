module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
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
      allowNull: true,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,  // assuming you always want a userId attached
      references: { model: "Users", key: "id" }
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { onDelete: "cascade" });
  };

  return Cart;
};
