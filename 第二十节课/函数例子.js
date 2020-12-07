//第一种
var pi = function pitaya(){
    console.log("我是火龙果！")
}

//第二种


let peal = 'return' + '`我是一粒${name}`';//模板字符串，利用了反引号``
let peanunt5 = new Function('name',peal);//注意这里是大写字母
console.log(peanunt5("花生"))
console.log(peanunt5("花生米"))

//作用效果：
var peanut6 = function(name){
    return "我是一粒" + name;
}()



