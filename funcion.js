
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.contenedorBoton')
        .classList.add('show');
    }else{
        document.querySelector('.contenedorBoton')
        .classList.remove('show');
    }
}

document.querySelector('.contenedorBoton').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
