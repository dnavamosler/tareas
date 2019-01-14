const fs = require('fs')

const nombreArchivo = `./tasks/task.txt`

let crearArchivo = async (data) => {

    await fs.writeFile(nombreArchivo,data,(err) => {
         if(err) throw Error('No se puedo escribir la informacion correctamente')
     })       
     return nombreArchivo
}


let crearTarea = async (tarea) => {
       

     fs.readFile(nombreArchivo,'utf8', (err,data) =>{
            if(err) throw new Error(`No se encontro el archivo especificado.`)
        
            let Tareas = data
            Tareas += `#......................${tarea}\n`
            crearArchivo(Tareas)
        })
}

let leerArchivo = () =>{
    fs.readFile(nombreArchivo, 'utf8',(err,data) =>{
        if(err) throw new Error(`No se encontro el archivo especificado.`)

        console.log(data)
    })
}

let editarTarea = (tarea) =>{

    fs.readFile(nombreArchivo, 'utf8',(err,data) =>{
        if(err) throw new Error(`No se encontro el archivo especificado.`)
        
        let tareas = data.split('\n')
        tareas.splice(tarea, 1)
        console.log(tareas)
       
    })
}

module.exports = {
    crearTarea,
    leerArchivo,
    editarTarea
}

