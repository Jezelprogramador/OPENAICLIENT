async function enviarMensaje() {
    const inputMensaje = document.getElementById("prompt").value;
    const respuestaElemento = document.getElementById("respuesta");

    if (inputMensaje.trim() === "") {
        respuestaElemento.textContent = "Por favor, escribe un mensaje.";
        return;
    }

    const url = "http://3.91.173.32/api-gpt-php/endpoints/chat.php";  // Reemplaza con la URL real de tu API
    const datos = { message: inputMensaje };

    try {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (resultado.status === 200) {
            respuestaElemento.textContent = resultado.data.reply;
        } else {
            respuestaElemento.textContent = "Error en la respuesta de la API.";
        }
    } catch (error) {
        respuestaElemento.textContent = "Error en la conexión con la API.";
        console.error("Error:", error);
    }
}
