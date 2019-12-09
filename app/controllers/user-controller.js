const { User } = require("../models");
const GenericController = require("../utils/generic-controller");

class UserController extends GenericController {
  constructor() {
    super(User);
    this.posts = this.posts.bind(this);
    this.like = this.like.bind(this);
  }
  /**
   *
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   */

  async posts(req, res) {
    const { id } = req.params;
    const user = await this.entity.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        message: `${this.entity.name} not found with id ${id}`
      });
    }
    const posts = await user.getPosts();
    return res.json(posts);
  }

  /**
   *
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   */
  async like(req, res) {
    const { id } = req.params;
    const { owner_id } = req.body;
    const post = await this.entity.findOne({ where: { id } });

    if (!post) {
      return res.status(404).json({
        message: `${this.entity.name} not found with id: ${id}`
      });
    }
    const like = await post.createLike({ owner_id });
    return res.json(like);
  }
}

module.exports = new UserController();
