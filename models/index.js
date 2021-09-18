// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
   foreignKey:'Category_id',
  });

// Categories have many Products (find a category that has product id from ca table)
Category.hasMany(Product,{
  foreignKey: {
    name: 'Category_id',
    allowNull: false
  }

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Tags'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Tag_Products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
