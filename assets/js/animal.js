export class Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentario = comentario;
        this._sonido = sonido;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    set comentario(nuevo_comentario) {
        this._comentario = nuevo_comentario;
    }

    set sonido(nuevo_sonido) {
        this._sonido = nuevo_sonido;
    }
}

export class Leon extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
    }
    
    rugir() {
        return this._sonido;
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
    }
    
    grunir() {
        return this._sonido;
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
    }
    
    sisear() {
        return this._sonido;
    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
    }
    
    chillar() {
        return this._sonido;
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
    }
    
    aullar() {
        return this._sonido;
    }
}