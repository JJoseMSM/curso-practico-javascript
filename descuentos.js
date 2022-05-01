//const precioOriginal = 100;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        "Descuento_10",
        "Descuento_15",
        "Descuento_20"
    ];

    let descuento;

    switch(couponValue) {
        case coupons[0]: //"Descuento_10"
            descuento = 10;
        break;
        case coupons[1]: //"Descuento_15"
            descuento = 15;
        break;
        case coupons[2]: //"Descuento_20"
            descuento = 20;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son : $" + precioConDescuento;
}



//console.log({
    
//});