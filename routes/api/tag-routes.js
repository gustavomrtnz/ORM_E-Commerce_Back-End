const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ //fin all Tags by using findAll() to get all Tag instances
      include: [{ model: Product, thorugh: ProductTag, as: 'products'}] // include Product model in the results  and join it with ProductTag through Product using the 'products' alias
    });
    res.status(200).json(tagData);
  }catch(err) {
    res.status(500).json(err)
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // using async/await for database operations
    const tagData = await Tag.findByPk(req.params.id, { //findByPk() returns a Tag instance by primary key
      include: [{ model: Product, thorugh: ProductTag, as: 'products'}] // include Product model in the results  and join it with ProductTag through Product using the 'products' alias
    });
    if(!tagData){
      res.status(400).json({ message: 'No Product found with this id' });
      return;
    }
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    // using async/await for database operations
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{ const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  if(!tagData){
    res.status(404).json('Category with specified id not found')
  } 
  res.status(200).json(tagDataData)
}catch(err){
  res.status(400).json(err)
}});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!tagData) {
      res.status(404).json({message: 'No Cateogory found with that ID'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
