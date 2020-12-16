function orange(){ console.log("this is orange")
}
orange.prototype= function (){ this.name = " 张 三 ", this.price= 20
getPrice=function (){return 2000}()
console.log("this is function" + getPrice)
//this.getPrice= function (){return this.price}()
}