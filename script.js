function actualizarReloj(){
    const ahora = new Date();
    const horas = ahora.getHours().toString(). padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    const tiempoString = `${horas}: ${minutos}: ${segundos}`
    document.getElementById('reloj').textContent = tiempoString;
        }

        setInterval(actualizarReloj, 1000);
        actualizarReloj(); 
