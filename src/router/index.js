const createItemsController = require('../controllers/items');
const scrappers = require('../scrappers')
const express = require('express')
const db = require('../db');

const router = express.Router()
const itemsController = createItemsController({ db, scrappers });

router.get('/items', async (req, res) => {
  try {
    const name = req.query.name;

    const items = await itemsController.findItemsByName(name);

    res.json(items);
  } catch (e) {
    console.log(e);
    res.status(500).end()
  }
})

router.post('/items', async  (req, res) => {
  try {
    const url = req.body.url;

    if (!url) throw Error('No url passed');

    await itemsController.addItem(url);

    res.status(201).end()
  } catch (e) {
    console.log(e);
    res.status(500).end()
  }
})

module.exports = router;
