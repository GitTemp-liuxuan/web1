//C语言
//int a =123
//js中var 的范围更广一点，不局限于某一种

var a=123

var a= "123"

let e = 456

//声明一个函数
function lemon(){
    console.log("lemon")
}
//调用了一个函数
lemon()

//把函数赋值为一个变量
let le = function banana(){
    console.log("banana le1")
}

le()


//只定义没有执行
let le2 = function banana(){
    console.log("banana le2")
}

le2()

function apple2(){
    let name= "apple2";
    //能不能把名字打印出来？
    function apple2son(){
        console.log("apple2son")
    }
    apple2son()
    //调用appleson2，做一个返回值
    return{
            apple2son: apple2son
    }
}
apple2()
