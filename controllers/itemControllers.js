const Item = require('../models/item');

exports.createItem = async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const newItem = new Item({
            name,
            description,
            price,
            user: req.user.id,
        });

        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('user', ['username', 'email']);
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ msg: 'Item not found' });
        }

        await item.remove();
        res.json({ msg: 'Item removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
