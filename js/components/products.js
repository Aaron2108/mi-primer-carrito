function products(products){
    const db = [...products]

    function printProducts(){
        const productsDOM = document.querySelector('.products__container');
        let htmlProduct = ''
        for(let product of db){
            htmlProduct += `<article class="product">
            <div class="product__image">
                <img src="${product.image}" alt="${product.name}">
            </div>
                <div class="product__content">
                    <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                        <i class='bx bxs-cart-add'></i>
                    </button>
                    <span class="product__price">$${product.price}</span>
                    <span class="product__stock">Disponibles: ${product.quantity}</span>
                    <h3 class="product__title">${product.name}</h3>
                    <a href="#" class="mdal" >Ver mas!</a>
                    <section class="modal">
                    <div class="modal__container">
            <img src="${product.image}" alt="${product.name}">
            <h2 class="modal__title">Bienvenido</h2>
            <p class="modal__p">${product.name}</p>
            <a href="#" class="modal__close">Cerrar</a>
        </div>
            </section>
            </div>
            </article>
            `
        }
        productsDOM.innerHTML = htmlProduct
        
        
    }
    
    printProducts()
    return {
        db,
        printProducts
    }

    
}
export default products;