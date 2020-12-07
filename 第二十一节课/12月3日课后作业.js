//1、
function City(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName=cityName;
    this.cityArea=cityArea;
    this.cityPostcode=cityPostcode;
    this.cityRegions=cityRegions;
}
let City={
    cityName="南昌市",
    cityArea=123,
    cityPostcode="123456",
    cityRegions="新建区"
}
let arr=["东湖区","西湖区","青山湖","新建区","湾里区"]

// 函数原型对象
City1.prototype = {
	
       print:function(){
        let i=0;
        do{
            console.log(i);
        }while(i<=arr.length)
       }
    

}
var c=new City1();

//————————————————————————————————————
//2
let City2 = new Function('alert("this is NanChang")')
City2();


