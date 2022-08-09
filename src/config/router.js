const express = require('express')
const routes = express.Router()


let db = [
{
id:{
    '1':{Nome:'Fulano Beltrano de Oliveira da Silva',Email:'fulanobos@gmail.com',   Nascimento:'13/10/1995',Telefone:'(31) 9 9666-1111'},
    '2': {Nome:'',Email:' ',Nascimento:' ',Telefone:' '},
    '3':{Nome:' ',Email:' ',Nascimento:' ',Telefone:' '},
    '4':{Nome:' ',Email:' ',Nascimento:' ',Telefone:' '}
}
}
]

routes.get('/',(req,res)=>{
    return res.json(db)

})

routes.put('/:id',(req,res)=>{
    const id = req.params.id;
    let newDB  = db.filter(item =>{
        if(item['id'][id])
         console.log(item.id[id]);
         item.id[id].Nome = 'João';
            return item.id[id]
    })
    db = newDB
    return res.send(newDB)
})
//inserindo dados
routes.post('/add',(req,res)=>{
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)
})



module.exports = routes