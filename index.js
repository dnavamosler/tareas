const argv = require('./config/yargs').argv
const { crearTarea, leerArchivo, editarTarea } = require('./tasks')

switch (argv._[0]) {
    case 'crear':
        crearTarea(argv.descripcion)
            .catch(err => console.log(err))
    break;

    case 'listar':
        leerArchivo()
    break

    case 'editar':
        editarTarea(argv.edit)
    break
}

