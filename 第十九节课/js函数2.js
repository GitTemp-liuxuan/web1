// var a1=123
// //语法糖
// var a2={}
// console.log(typeof a1)
// console.log(typeof a2)

// var a3 = Object.create(null);
//————————————————————————————————
//es6
//箭头函数
// var a5 = (x,y)=>{
//     console.log(x+y)
// }
// a5(5,4)
// console.log(typeof a5)
//————————————————————————————————
// var a5 = function apple5(){
//     console.log('apple5')
//     return 100;
// }()//加小括号就可立即调用
// //外部调用执行
// console.log(a5)
//—————————————————————————————————
//闭包
(function(x,y){
    console.log("江西软件大学")
    console.log(x+y)
})(3,6)

//原型
//
var a7 = function Furit(){
    console.log("this is a furit")
}

Furit.prototype.apple = function apple(){
    console.log("this is an apple");
}
var a88 = new Furit();
console.log(a88.apple())