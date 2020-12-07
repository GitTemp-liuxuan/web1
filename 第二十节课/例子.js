let li=function lichee(){
    console.log("this is lichee")
}()
// li()
// lichee()

void function haw(){
    console.log("this is haw")
}()
//加上 ！ 就发生转译成了 Boolean 值
let h2 = !function test(){
    console.log("this is h2")
    return 0;
}()
console.log(h2)

let h2 = void function test(){
    console.log("this is h2")
    return 1;
}()
console.log(h2)

//数组，将数组元素换成函数操作，js灵活