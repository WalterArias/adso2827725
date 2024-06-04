
function btnLimpiar(){
    alert('dio click en limpiar')
}

function btnEnviar(){
let email = "waroson@gmail.com"    
let password = "123"
txtEmail = document.getElementById('txtEmail').value 
txtPassword = document.getElementById('txtPassword').value  

if(txtEmail===email && txtPassword ===password){
    Swal.fire({
        title: "Ingreso Exitoso",
        text: txtEmail,
        icon: "success"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location ="inicio.html"
        }})

    
}else{
    Swal.fire({
        title: "Error en los datos de ingreso",
        text: txtEmail,
        icon: "error"
      });

}
}
