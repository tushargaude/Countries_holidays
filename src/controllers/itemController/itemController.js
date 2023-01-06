"use strict";
const { itemAction } = require("../../actions/itemActions");
const { BaseController } = require("../baseController");

class ItemController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }
  //Items
  async createHolidays() {
    try {
      const payload = await itemAction.createHolidays(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }
  
}

module.exports.ItemController = {
  createHolidays: async (req, res) => {
    return new ItemController(req, res).createHolidays();
  },
};
