const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


let tea = {
    'oolong':{
        'teaType' : 'black' ,
        'origin': 'africa',
        'waterTemp': 200,
        'steepTimeSeconds':180, 
        'caffine': true,
        'flavor': 'delicious' ,
        
    },

    
    'matcha':{
        'teaType' : 'green' ,
        'origin': 'china',
        'waterTemp': 200,
        'steepTimeSeconds':180, 
        'caffine': false,
        'flavor': 'delicious' ,
        
    },

    'unknown':{
        'teaType' : 'unknown' ,
        'origin': 'unknown',
        'waterTemp':'unknown',
        'steepTimeSeconds':'unknown', 
        'caffine': false,
        'flavor': 'unknown' ,
        
    }
   
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])

    }
   
    
} )

app.listen(process.env.PORT || PORT, () =>{
    console.log(`catch me if you can on ${PORT}`)
});


