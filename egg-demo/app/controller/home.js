'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "hello world";
  }
  async detail(){
    this.ctx.body="detail"
  }
}

module.exports = HomeController;
