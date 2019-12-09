const express = require('express')
const router = require('./router')
const { User } = require('./models')



class App {
    constructor(){
        this.app = express()

        this.middlewares()
        this.routes()
    }

    routes(){
        this.app.use(router)
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }
}

module.exports = new App().app;