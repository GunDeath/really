module.exports = function newProductCart(title, price, group, id) {
    this.title = title;
    this.price = price;
    this.groupName = group;
    this.ID = id;

    this.removeItem = function(id) {
        delete this.title[id];
        delete this.price[id];
        delete this.groupName[id];
        delete this.ID[id];
    }
};