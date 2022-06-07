const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {



    'hova' :  {
        'age': '53',
        'birthName': 'shawn carter',
        'birthLocation':' NYC '
        },
    'kanye' : {
        'age' : '50',
        'birthName': 'kanye west',
        'birthLocaton' : 'Chicago'
    },
    'unknown': {
        'age': '0',
        'birthName': 'none',
        'birthLocation': 'unknown'
    }    

}
app.get('/', (require, response)=>{
     response.sendFile(__dirname +'/index.html')
})
app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    if(rappers[rapperName]){
        response.json(rappers)
    }
    
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(` server is online`)
})