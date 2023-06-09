const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.findAll({
            include: {
                model: Product,
                through: {
                    attributes: []
                }
            }
        });
        res.json(tags)
    } catch (err) {
        res.status(500).json(err);
    }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByPk(req.params.id, {
            include: {
                model: Product,
                through: {
                    attributes: []
                }
            }
        });
        if (!tag) {
            return res.status(404).json(null);
        }
        res.json(tag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new tag
router.post('/', async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const rowsUpdated = await Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(rowsUpdated);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const rowsDeleted = await Tag.destroy({
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
