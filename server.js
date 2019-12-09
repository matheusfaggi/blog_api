const App = require('./app/index')

const { PORT } = process.env

App.listen(PORT,()=>{
    console.log(`Server http://localhost:${PORT}`)
})