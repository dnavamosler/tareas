const descripcion = {
    alias: 'd',
    demand : true
}

const status = {
    alias: 's',
    default : true
}

const argv = require('yargs')
        .command('crear','crear una tarea nueva', {descripcion})
        .command('actualizar','actualiza el estado de la tarea',{descripcion, status})
        .command('listar','Mostrar las tareas por hacer')
        .command('delete','Elimina una tarea de la lista',{descripcion})
    .help()
    .argv

module.exports = {
    argv
}
