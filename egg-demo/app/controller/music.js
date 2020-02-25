'use strict';

const Controller = require('egg').Controller;

class MusicController extends Controller {
  async index() {
    this.ctx.body = "音乐";
  }
  async detail(){
    this.ctx.body="musci-detail"
  }
}

module.exports = MusicController;
