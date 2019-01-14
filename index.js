const argv = require('./config/yargs').argv
const Tareas = require('./tasks')
const colors = require('colors')

switch (argv._[0]) {
    case 'crear':
        console.log(Tareas.crear(argv.descripcion))
    break;

    case 'listar':
       let ListaTareas = Tareas.listar()

       console.log(`======== Tareas =======`.green)
       for(let tarea of ListaTareas){
           console.log(`Tarea : ${tarea.descripcion} ******* Completado : ${tarea.status}`)
           console.log(`***********************`.yellow)
       }
       console.log(`=======================`.green)
    break

    case 'delete':
    
       Tareas.borrar(argv.descripcion)
    break

    case 'actualizar':
        Tareas.actualizar(argv.descripcion,argv.status)
    break
}

