function $2(x){
    if(typeof x == "string"){
        let  targets = window.document.getElementsByTagName(x)
        if(targets.length>0){
            let array = targets;
            for (let index = 0;index<array.length;index++){
                const element = array[index];
                element.style.backgroundColor="red"
            }
        }
    }
}
$2("div")

//如何去遍历这个数组
var lichees = [
    () => {
        return function () { console.log("this is number 1")()
        }
        },
        +function(){console.log("this is number 2")}(),
    ]

    //6
    function watermelon (name,price,number){ 
        this.name = name,
        this.price = price,
        this.number = number
        }
        watermelon.prototype.getSum = function (){ 
            console.log(this.price*this.number)
        }
        let watermelon2 = new watermelon("apple",4,6);
        console.log(watermelon2.getSum());


//4

+function $(){
    -function(){
    console.log("this is pear") 
    void function(){
    console.log("this is nut")
    console.log($.name)
    }()
    }()
    this.name="my name is $"
    }()
    
        
    var lichees = [
        () => {
        return function () { console.log("this is number 1")()
        }
        },
        +function(){console.log("this is number 2")}(),
        {
            name:"this is lichee 3"
            }, 2000,
            "this is lichee 4", null,
            new Object({}),
            Object.create({}), Object.prototype,
            new Object({}). proto , new Date(),
            function licheeNut(){ return {
            printNut:()=>{
            console.log("thisis printNut")
            }
            }
            },
            Object.prototype.tag = "this is tag", Object.tag
            ]

Object.tag1= 100
Object.prototype.tag=200
console.log(Object.tag)
//--------------------------------------
var obj1 = new Object();
obj1.tag1 = 100;
Object.prototype.__proto_ = obj2;

var obj2 = new Object({
    tag:200
});

Object.prototype.tag=300
console.log(tag)


//如何通过	 proto 获得getPrice的调用

function orange(){ console.log("this is orange")
}
orange.prototype= function (){ this.name = " 张 三 ", this.price= 20
getPrice=function (){return 2000}()
console.log("this is function" + getPrice)
//this.getPrice= function (){return this.price}()
}



                    