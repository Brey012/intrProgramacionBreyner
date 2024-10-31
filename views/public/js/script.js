function Persona(nombre, edad, estatura, color) {
  this.nombre = nombre;
  this.edad = edad;
  this.estatura = estatura;
  this.color = color;
  this.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`)}
}

const Persona1 =  new Persona('Breyner', 21, 1.77, 'Canela pasion')

Persona1.saludar();