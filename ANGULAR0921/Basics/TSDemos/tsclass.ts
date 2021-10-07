class Product
{
  ProdId:number; // properties
  Title:string;
  Price:number;

  SetProduct(id:number,title:string,price:number)
  {
      this.ProdId=id;
      this.Title=title;
      this.Price=price;
  }

  ShowProduct()
  {
      alert(this.Title);
      alert(this.Price);
  }
}
function f1(){
    let product=new Product();
    product.SetProduct(101,"Laptop",10000);
    product.ShowProduct();
}