// Obtener la lista de usuarios  
fetch('https://api.escuelajs.co/api/v1/users') 
.then(response => response.json()) //Conversion a JSON
.then(data => {
let cards = ''; 
    for (let user of data) {  

        let avatar = `https://i.pravatar.cc/150?img=${user.id}`; // Generar un avatar basado en el id del usuario  
        
        cards += `<div class="col-md-2 mb-2">  
                    <div class="card">  
                        <img src="${avatar}" class="card-img-top" alt="Avatar">  
                        <div class="card-body">  
                            <h5 class="card-title">${user.name}</h5>  
                            <p class="card-text"><strong>Email:</strong> ${user.email}</p>  
                             <p class="card-text"><strong>Contraseña:</strong> ${user.password}</p> 
                        </div>  
                    </div>  
                  </div>`;  
    }  

    // Renderizar las tarjetas a HTML  
    document.getElementById("cardsList").innerHTML = cards;  
})  


