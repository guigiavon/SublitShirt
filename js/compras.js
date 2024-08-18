var cantidad = 0;
const addToShoppingCartButtons = document.querySelectorAll('.addToCard');
addToShoppingCartButtons.forEach(addToCarButton => {
    addToCarButton.addEventListener('click', addToCarClicked)
    addToCarButton.addEventListener('click', sumarCantidad)
});

function sumarCantidad(event){
    cantidad = cantidad + 1;        
    var cantidad1 = cantidad;
    var mostrarcantidad = document.getElementById('mostrarCantidadCompra');   
    mostrarcantidad.innerHTML = cantidad1; 

 }

function addToCarClicked(event){
   const button=  event.target;
   const producto= button.closest('.card');   
   console.log( 'addToCarClicked -> producto', producto);

   const cardtitle = producto.querySelector('.card-text').textContent;
   const imagen = producto.querySelector('.card-img-top').src;
   var number = 543513865048;
   
   var url = "https://api.whatsapp.com/send?text="+"Te queria consultar sobre "+encodeURIComponent(cardtitle)+ "&phone="+encodeURIComponent(number);
   //var url = "whatsapp://send?text="+encodeURIComponent(cardtitle)+"&phone="+encodeURIComponent(number)
   window.open(url);
}

function addItemAlCarro(cardtitle, imagen){
    const listaDeCompra = document.createElement('div');

}





//console.log('addToShoppingCartButtons', addToShoppingCartButtons);

