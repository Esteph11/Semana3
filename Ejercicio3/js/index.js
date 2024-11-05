function convertir() {  

    // Obtenemos los valores de los inputs  
    let km = parseFloat(document.getElementById('km').value);  
    let m = parseFloat(document.getElementById('m').value);  
    let ft = parseFloat(document.getElementById('ft').value);  
    let yd = parseFloat(document.getElementById('yd').value);  

    // Validación de entradas  
    if (isNaN(km) && isNaN(m) && isNaN(ft) && isNaN(yd)) {  
        alert('Por favor, ingresar al menos un valor para convertir.');  
        return;  
    }  


    // Conversiones  
    // Conversión de kilómetros a metros  
    if (!isNaN(km)) {  
        let meters = km * 1000;  
        document.getElementById('ms').value = meters;  
    }  
    
    // Conversión de metros a centímetros  
    if (!isNaN(m)) {  
        let centimeters = m * 100;  
        document.getElementById('cm').value = centimeters; 
    }  

    // Conversión de pies a pulgadas  
    if (!isNaN(ft)) {  
        let inches = ft * 12;  
        document.getElementById('pulg').value = inches;  
    }  

    // Conversión de yardas a pulgadas  
    if (!isNaN(yd)) {  
        let inchesFromYard = yd * 36;  
        document.getElementById('pulgs').value = inchesFromYard;   
    }  

    // Mostrar resultado en el div  
    document.getElementById("result").innerHTML = resultText;  

}
   
function limpiar() {
    document.getElementById("km").value = ""
    document.getElementById("m").value = ""
    document.getElementById("ft").value = ""
    document.getElementById("yd").value = ""
    document.getElementById("ms").value = ""; // Limpiar resultado de metros  
    document.getElementById("cm").value = ""; // Limpiar resultado de centímetros  
    document.getElementById("pulg").value = ""; // Limpiar resultado de pulgadas  
    document.getElementById("pulgs").value = ""; // Limpiar resultado de pulgadas 
    
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje
    })
}