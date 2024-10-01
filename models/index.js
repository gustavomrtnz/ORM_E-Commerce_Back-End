// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id' // 'category_id' is the foreign key in the ProductTag table
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag, // ProductTag model
  },
  as: 'tags' // 'tags' is the alias for the association in the Product model
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { // ProductTag model is used here to create a many-to-many relationship
  through: {
    model: ProductTag, // ProductTag model
    unique: false // unique: false allows duplicate entries in the ProductTag table
  },
  as: 'products' // 'products' is the alias for the association in the Tag model
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
