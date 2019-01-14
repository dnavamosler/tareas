const fs = require('fs')
const ARCHIVO = `./BD/bd.json`


let Tareas = [];

let crear = (descripcion) => {

    let tarea = {
        descripcion,
        status : false
    }

    cargarBD()
    Tareas.push(tarea)

    guardarBD(Tareas)

    return tarea
}

let guardarBD = () => {
    let data = JSON.stringify(Tareas)
    fs.writeFile(ARCHIVO, data, (err) => {
        if(err) throw Error('No se puedo escribir la informacion correctamente')
    })
}

let cargarBD = () =>{

    try {
        Tareas = require('./BD/bd.json')
    } catch (error) {
        Tareas = []
    }


}

let listar = () =>{
    cargarBD()
    return Tareas
}

let actualizar = (descripcion,status) => {

    cargarBD()

    for(let tarea of Tareas){
        if(tarea.descripcion === descripcion){
            tarea.status = status
            guardarBD()
            return true
        }
    }   

}

let borrar = (descripcion) => {
    
   cargarBD()

   NuevasTareas =  Tareas.filter( tarea => tarea.descripcion != descripcion)

   if(NuevasTareas.lenght === Tareas.length){
       return false
   } 
   else{
       Tareas = NuevasTareas
     guardarBD()
       return true
       
   }

   
   
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}

