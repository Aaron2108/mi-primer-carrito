function modelopen() {
    const open = document.querySelectorAll('.mdal');
    const modals = document.querySelectorAll('.modal');
    const close = document.querySelectorAll('.modal__close');
    
    open.forEach(function(element) {
        element.addEventListener('click', function(e) {
            modals.forEach(function(modal) {
                modal.classList.add('modal--show');
            });
        });
    });
    
    close.forEach(function(element) {
        element.addEventListener('click', function(e) {
            modals.forEach(function(modal) {
                modal.classList.remove('modal--show');
            });
        });
    });
}



/*function modelopen() {
    const open = document.querySelector('.mdal');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.modal__close');
    
        open.addEventListener('click',function(e){
            modal.classList.add('modal--show')
        });
    
    close.addEventListener('click',function(e){
        
        modal.classList.remove('modal--show')
    });
}*/



export default modelopen