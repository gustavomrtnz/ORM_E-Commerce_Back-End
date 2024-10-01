const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {

    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });

    const categories = categoryData.map(category => category.get({plain: true}))

    res.status(200).json(categories)
  } catch (err) {

    res.status(500).json(err);

  }
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    // using async/await for database operations
    const categoryData = await Category.findByPk(req.params.id, { //findByPk() returns a Category instance by primary key
      include: [{ model: Product }] // include the Product model in the results 
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this ID' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    // using async/await for database operations
    const categoryData = await Category.create(req.body); // using create() to create a new Category instance
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  });

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
   try{
    // using async/await for database operations
     const categoryData = await Category.update(req.body, { //update() returns the number of rows updated
      where: { // update only the fields specified in req.body
        id: req.params.id
      }
    })
    if(!categoryData){ // if category not found 
      res.status(404).json('Category with specified id not found') // then return a 404 error
    } 
    res.status(200).json(categoryData) // otherwise return the updated category data
  }catch(err){
    res.status(400).json(err)
  }});

router.delete('/:id', async (req, res) => { // delete endpoint for categories
  // delete a category by its `id` value
try {
  // using async/await for database operations
  const categoryData = await Category.destroy({
    where: { // delete only the fields specified in req.params
      id: req.params.id
    }
  })
  if(!categoryData){
    res.status(404).json('Category with specified id not found')
  } 
  res.status(200).json(categoryData)
}catch(err){
  res.status(400).json(err)
}});


module.exports = router;
