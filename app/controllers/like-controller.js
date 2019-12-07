const { Like } = require('../models')
const GenericController = require('../utils/generic-controller')


class LikeController extends GenericController {
    constructor(){
        super(Like)
    }
    /**
     * 
     * @param { import('express').Request } req 
     * @param { import('express').Response } res 
     */
    async index(req,res) {
        const entities = await this.entity.findAll({
            attributes: ['id', 'likable'],
            include: [
                { association: 'post' },
                { association: 'user' },
                { association: 'owner', attributes: ['name','email']}
            ]
        });
        return res.json(entities)
    }
}

module.exports = new LikeController;
