const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: Product
        });
        res.json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: Product
        });
        res.json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new category
router.post('/', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const rowsUpdated = await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(rowsUpdated);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const rowsDeleted = await Category.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(rowsDeleted);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
