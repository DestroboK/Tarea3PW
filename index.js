function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(resultados){
        return resultados.json();
    }).then(function(resultados){
        let html ='';
        resultados.forEach(function(contacto){
            html += `
                <center>
                <p>${contacto.nombre} ${contacto.apellido}
                <br>Telefono = ${contacto.telefono}</p>
                </center>
            `;
            
        });
        document.getElementById('Cuerpo').innerHTML = html;
    })}

    const name = document.getElementById('TxtNombre')
    const apellido = document.getElementById('TxtApellido')
    const number = document.getElementById('TxtTelefono')
    document.getElementById('btn_enviar').addEventListener('click', PostearContacto)


    async function PostearContacto() {
        const apiUrl = 'http://www.raydelto.org/agenda.php'
        await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({
                apellido: TxtApellido.value,
                telefono: Number(TxtTelefono.value),
                nombre: TxtNombre.value
            })
        });
        alert('Mensaje enviado correctamente');
        cargarContactos();
        clear()
    }