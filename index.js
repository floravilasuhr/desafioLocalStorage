document.getElementById('buttonText').addEventListener('click', function () {
    // Obtener el valor ingresado
    const inputText = document.getElementById('inputText').value;
    
    // Guardar en localStorage con la clave 'dato'
    localStorage.setItem('dato', inputText);
    
    // Limpiar el campo de entrada
    document.getElementById('inputText').value = '';
});