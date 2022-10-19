export class person {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo: String;
    hobbie: String;

    constructor(nombre: String, apellido: String, img: String, titulo: String, hobbie: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.hobbie = hobbie;
    }

}

