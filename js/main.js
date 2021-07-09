const personas = [

    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')

];

function mostrarPersonas(){

    let texto = '';
    for( let persona of personas ){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    
    document.getElementById('personas').innerHTML = texto;

}

function agregarPersona(){

    const form = document.getElementById('form');
    const nombre = form['name'];
    const apellido = form['last-name'];
    if( nombre.value != "" && apellido.value != ""){
    
        const persona = new Persona(nombre.value, apellido.value);
        personas.push( persona );
        mostrarPersonas();
        nombre.value = "";
        apellido.value = "";

    }else{
        alert('No hay información que agregar');
    }
}