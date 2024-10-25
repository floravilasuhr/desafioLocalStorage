// Obtener el dato del localStorage con la clave 'dato'
const storedData = localStorage.getItem('dato');

// Mostrar el dato en el elemento con id 'data'
document.getElementById('data').textContent = storedData ? storedData : 'No hay datos guardados.';