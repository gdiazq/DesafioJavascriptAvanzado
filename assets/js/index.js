import { Animal, Leon, Serpiente, Aguila, Lobo, Oso } from './animal.js';

async function cargarInformacion () {
    try {
        const respuesta = await fetch('./../../animal.json');
        if (!respuesta.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener los posts:', error);
    }
}

cargarInformacion();
