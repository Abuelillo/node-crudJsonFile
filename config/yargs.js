const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};


const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer - to do', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente de la tarea'
        }
    }).command('borrar', 'borra un elemento por hacer - to do', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}