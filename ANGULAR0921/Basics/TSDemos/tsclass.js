var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.SetProduct = function (id, title, price) {
        this.ProdId = id;
        this.Title = title;
        this.Price = price;
    };
    Product.prototype.ShowProduct = function () {
        alert(this.Title);
        alert(this.Price);
    };
    return Product;
}());
function f1() {
    var product = new Product();
    product.SetProduct(101, "Laptop", 10000);
    product.ShowProduct();
}
