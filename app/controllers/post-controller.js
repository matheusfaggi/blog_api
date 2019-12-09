const { Post } = require("../models");
const GenericController = require("../utils/generic-controller");

class PostController extends GenericController {
  constructor() {
    super(Post);
    this.like = this.like.bind(this);
    this.likes = this.likes.bind(this);
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

  /**
   *
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   */

  async likes(req, res) {
    const { id } = req.params;
    const user = await this.entity.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        message: `${this.entity.name} not found with id ${id}`
      });
    }
    const likes = await user.getLikes();
    return res.json(likes);
  }
}

module.exports = new PostController();
