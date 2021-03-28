export  function  createProductList(count) {
    let products = [];
    for(let i = 0 ; i<count ; i++){
        products.push(`duck` + i)
    }
    return products
}