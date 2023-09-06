const config = require('../config/config.json');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(config.development);

const UserModel = require("./user")(sequelize, DataTypes);
const ProductsModel = require('./products')(sequelize, DataTypes);
const ReviewModel = require("./review")(sequelize, DataTypes);

const db = {};

db.User = UserModel;
db.Products = ProductsModel;
db.Review = ReviewModel;


// UserModel.hasMany(ProductsModel);
// UserModel.hasMany(ReviewModel);

// ProductsModel.belongsTo(UserModel);
// ProductsModel.hasMany(ReviewModel);

// ReviewModel.belongsTo(UserModel);
// ReviewModel.belongsTo(ProductsModel);

sequelize.sync()
  .then(() => {
    console.log('Database synced.');
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

module.exports = db;