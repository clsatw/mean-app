"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 The createRandomObject() function will create a product with a random type and
 price. The product type will be either 'Electronics', 'Book', 'Clothing' or
 'Food'. The product price will be between 0 and 500.
 */
function createRandomProduct() {
    var item = {};
    var typeArray = ['Electronics', 'Book', 'Clothing', 'Food'];
    item.price = (Math.random() * 500).toFixed(2);
    item.type = typeArray[Math.floor(Math.random() * 4)];
    item.name = 'test';
    return item;
}
/*
The createRandomCatalog() function will return an array containing a specified
 number of randomized products. Each product will have an id, price, and type
 attribute.
*/
function createRandomCatalog(num) {
    var catalog = [];
    for (var i = 0; i < num; i++) {
        var obj = createRandomProduct();
        catalog.push({
            id: i,
            type: obj.type,
            name: obj.name,
            price: obj.price,
            imgUrl: 'http://lorempixel.com/400/200'
        });
    }
    return catalog;
}
exports.createRandomCatalog = createRandomCatalog;
//# sourceMappingURL=mock-data.js.map