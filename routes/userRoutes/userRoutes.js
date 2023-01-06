"use strict";

const {
  ItemController,
} = require("../../src/controllers/itemController/itemController");

const { baseRouteUrl } = require("../globalVariables");
const UserRoutes = (app, auth) => {

  app.post(`${baseRouteUrl}/holiday/list/`, ItemController.createHolidays);
  
};

module.exports = UserRoutes;