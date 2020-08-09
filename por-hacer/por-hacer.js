let listadoPorHacer = [];

const fs = require('fs');

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo guardar');

    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    try {
        //let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

        let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

        if (listadoPorHacer.length === nuevoListado.length) {
            return false;
        } else {
            listadoPorHacer = nuevoListado;
            guardarDB();
            return true;
        }

        //listadoPorHacer.pop(index);
        //guardarDB();
        //return true;
    } catch (error) {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}