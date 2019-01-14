const argv = require('yargs')
        .command('crear','crear una tarea nueva',{
            descripcion:{
                alias: 'd'
            }
            
        })
        .command('actualizar','actualiza el estado de la tarea',{
            descripcion :{
                alias: 'd'
            },
            completado:{
                alias: 'c',
                default : true
            }
        })
        .command('listar','Mostrar las tareas pendientes',{
        })
    .help()
    .argv

module.exports = {
    argv
}
