class GenericController{
    /**
     * @param { import('sequelize').ModelType } entity
     */
    constructor(entity){
        this.entity = entity;

        this.index = this.index.bind(this)
        this.store = this.store.bind(this)
        this.show = this.show.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)

    }
    /**
     * 
     * @param { import('express').Request } req 
     * @param { import('express').Response } res 
     */
    async index(req,res) {
        const entities = await this.entity.findAll();
        return res.json(entities)
    }

    /**
     * 
     * @param { import('express').Request } req 
     * @param { import('express').Response } res 
     */
    async store(req,res){
        const payload = req.body
        
        const entity = await this.entity.create(payload)

        return res.json(entity)
    }

    /**
     * 
     * @param { import('express').Request } req 
     * @param { import('express').Response } res 
     */
    async show(req, res){
        const { id } = request.params
        
        const entity = await this.entity.findOne({ where: { id }})

        if (!entity) {
            return res.status(404).json({
                message: `${this.entity.name} not found with id ${id}`
            })
        }
        return res.json(entity)
    }

    /**
     * 
     * @param { import('express').Request } req 
     * @param { import('express').Response } res 
     */
    async update(req, res) {
        const payload = req.body
        const { id } = req.params
        
        const entity = await this.entity.findOne({ where: { id }})

        if (!entity) {
            return res.status(404).json({
                message: `${this.entity.name} not found with id ${id}`
            })
        }

        await user.update(payload)
        return res.json(entity)
    }

    /**
     * 
     * @param { import('express').Request } req 
     * @param { import('express').Response } res 
     */
    async delete(req, res) {
        const { id } = req.params
        
        const entity = await this.entity.findOne({ where: { id }})

        if (!entity) {
            return res.status(404).json({
                message: `${this.entity.name} not found with id ${id}`
            })
        }

        await entity.destroy()
        return res.send()
    }
}

module.exports = GenericController;