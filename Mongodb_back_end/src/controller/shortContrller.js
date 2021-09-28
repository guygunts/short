const e = require('express');
const shortService = require('../service/shortService');

class ShortController {

  async shortlist(req, res) {
    const ret = await shortService.listshort(req.params);
    res.json(ret);
  }
  async shortinsert(req, res) {
    const ret = await shortService.addshort(req.body);
    res.json(ret);
  }
}
const shortController = new ShortController();
module.exports = shortController;