const express = require('express')

const app = express()
const port = process.env.PORT || 8000

app.get('/' , (req, res)=>{
    return res.json({message:'Hey I am node in a docker container'})
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})