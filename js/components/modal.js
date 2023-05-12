function modelopen() {
    // const open = document.querySelectorAll('.mdal');
    // const modals = document.querySelectorAll('.modal');
    // const close = document.querySelectorAll('.modal__close');
    const productsDOM = document.querySelector('.products__container')


    
productsDOM.addEventListener('click', (e) => {
    if (e.target.classList.contains('mdal')) {
        e.target.nextElementSibling.classList.add('modal--show')
    }

    if (e.target.classList.contains('modal__close')) {
        e.target.parentElement.parentElement.classList.remove('modal--show')
    }
})

    // modal.classList.remove('modal--show')
    // open.forEach(function(element) {
    //     element.addEventListener('click', function(e) {
    //         modals.forEach(function(modal) {
    //             modal.classList.add('modal--show');
    //         });
    //     });
    // });
    
    // close.forEach(function(element) {
    //     element.addEventListener('click', function(e) {
    //         modals.forEach(function(modal) {
    //             modal.classList.remove('modal--show');
    //         });
    //     });
    // });
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